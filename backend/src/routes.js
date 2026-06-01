import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import Groq from "groq-sdk";
import { Summary, Keyword, Analytics } from "./models.js";

const router = express.Router();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
// const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3.2:latest'; // Groq: llama3-8b-8192 | llama3-70b-8192
// const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';


// Unified LLM call — works with Groq or Ollama
async function callLlama(prompt) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    // const res = await fetch(`${OLLAMA_URL}/api/chat`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   signal: controller.signal,
    //   body: JSON.stringify({
    //     model: OLLAMA_MODEL,
    //     stream: false,
    //     options: {
    //       temperature: 0.2,
    //       top_p: 0.9,
    //       num_predict: 150,
    //       num_ctx: 2048,
    //     },
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'Summarize accurately. No extra text.'
    //       },
    //       {
    //         role: 'user',
    //         content: prompt.slice(0, 3000)
    //       }
    //     ]
    //   })
    // });

    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      temperature: 0.2,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: "Summarize accurately. No extra text."
        },
        {
          role: "user",
          content: prompt.slice(0, 6000)
        }
      ]
    });

    clearTimeout(timeout);

    // if (!res.ok) {
    //   const errorText = await res.text();
    //   throw new Error(`Ollama API returned ${res.status}: ${errorText}`);
    // }

    // const data = await res.json();
    // return data.message?.content?.trim() || '';
    return completion.choices?.[0]?.message?.content?.trim() || "";
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('LLM request timed out');
    }
    throw error;    
  }
}

// Multer config for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and DOCX files are allowed'));
    }
  }
});

// Extract text from file
async function extractTextFromFile(file) {
  if (file.mimetype === 'application/pdf') {
    const data = await pdfParse(file.buffer);
    return { text: data.text, sourceType: 'pdf' };
  } else {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return { text: result.value, sourceType: 'docx' };
  }
}

// Extract keywords from text
function extractKeywords(text) {
  const stopWords = new Set(['the','a','an','and','or','but','in','on','at','to','for',
    'of','with','by','from','is','was','are','were','be','been','being','have','has',
    'had','do','does','did','will','would','could','should','may','might','shall',
    'this','that','these','those','i','you','he','she','it','we','they','what','which']);
  const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
  const freq = {};
  words.forEach(w => {
    if (!stopWords.has(w)) freq[w] = (freq[w] || 0) + 1;
  });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
}

// Update analytics
async function updateAnalytics(mode, sourceType, originalWords, summaryWords) {
  const today = new Date().toISOString().split('T')[0];
  await Analytics.findOneAndUpdate(
    { date: today },
    {
      $inc: {
        totalSummaries: 1,
        [`byMode.${mode}`]: 1,
        [`bySource.${sourceType}`]: 1
      },
      $set: { avgOriginalWords: originalWords, avgSummaryWords: summaryWords }
    },
    { upsert: true, new: true }
  );
}

// Build prompt by mode
function buildPrompt(text, mode) {
  const baseInstruction = `
    You are a highly accurate AI assistant.

    STRICT RULES:
    - Use ONLY the information provided in the context.
    - DO NOT add external knowledge.
    - If information is insufficient, say: "I don't have enough information."
    - Do NOT include any introduction or explanation.

    `;

  const prompts = {
    short: `
      ${baseInstruction}
      Summarize the context in 2-3 concise sentences.

      CONTEXT:
      """
      ${text}
      """

      OUTPUT:
      `,

    detailed: `
      ${baseInstruction}
      Provide a comprehensive summary covering all key points.

      CONTEXT:
      """
      ${text}
      """

      OUTPUT:
      `,

    bullets: `
      ${baseInstruction}
      Summarize into bullet points.
      - Each point must be a key idea
      - Start each bullet with "•"

      CONTEXT:
      """
      ${text}
      """

      OUTPUT:
      `
  };

  return prompts[mode] || prompts.short;
}

// POST /api/summarize (text input)
router.post('/summarize', async (req, res) => {
  try {
    const { text, mode = 'short', sessionId } = req.body;
    if (!text || text.trim().length < 50) {
      return res.status(400).json({ error: 'Text must be at least 50 characters long.' });
    }

    const truncated = text.split(' ').slice(0, 1000).join(' ');
    const prompt = buildPrompt(truncated, mode);
    const summary = await callLlama(prompt);
    const wordCountOriginal = text.split(/\s+/).length;
    const wordCountSummary = summary.split(/\s+/).length;

    // Save to DB
    const saved = await Summary.create({
      originalText: text.substring(0, 5000),
      summary, mode, sourceType: 'text',
      wordCountOriginal, wordCountSummary, sessionId
    });

    const keywords = extractKeywords(text);

    res.json({
      summary, mode, wordCountOriginal, wordCountSummary,
      summaryId: saved._id, keywords
    });

    (async () => {
      try {
        // Update keywords & analytics
        const keywords = extractKeywords(text);
        for (const kw of keywords) {
          await Keyword.findOneAndUpdate(
            { keyword: kw },
            { $inc: { count: 1 }, $set: { lastUsed: new Date() } },
            { upsert: true }
          );
        }
        await updateAnalytics(mode, 'text', wordCountOriginal, wordCountSummary);
      } catch (error) {
        console.error("Post-processing error:", error);
      }
    })();
  } catch (err) {
    console.error(err);
    // res.status(500).json({ error: 'Failed to generate summary. Please try again.' });
    res.status(500).json({ error: err.message });
  }
});

// POST /api/summarize/file (file upload)
router.post('/summarize/file', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
    const mode = req.body.mode || 'short';
    const sessionId = req.body.sessionId;

    const { text, sourceType } = await extractTextFromFile(req.file);
    if (!text || text.trim().length < 50) {
      return res.status(400).json({ error: 'Could not extract sufficient text from file.' });
    }

    const truncated = text.split(' ').slice(0, 1000).join(' ');
    const prompt = buildPrompt(truncated, mode);
    const summary = await callLlama(prompt);
    const wordCountOriginal = text.split(/\s+/).length;
    const wordCountSummary = summary.split(/\s+/).length;

    const saved = await Summary.create({
      originalText: text.substring(0, 5000),
      summary, mode, sourceType,
      fileName: req.file.originalname,
      wordCountOriginal, wordCountSummary, sessionId
    });

    await updateAnalytics(mode, sourceType, wordCountOriginal, wordCountSummary);

    res.json({
      summary, mode, sourceType, wordCountOriginal, wordCountSummary,
      summaryId: saved._id, fileName: req.file.originalname
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Failed to process file.' });
  }
});

// GET /api/history?sessionId=xxx
router.get('/history', async (req, res) => {
  try {
    const { sessionId, page = 1, limit = 10 } = req.query;
    const filter = sessionId ? { sessionId } : {};
    const summaries = await Summary.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-originalText');
    const total = await Summary.countDocuments(filter);
    res.json({ summaries, total, page: parseInt(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history.' });
  }
});

// GET /api/history/:id
router.get('/history/:id', async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    if (!summary) return res.status(404).json({ error: 'Not found.' });
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch summary.' });
  }
});

// DELETE /api/history/:id
router.delete('/history/:id', async (req, res) => {
  try {
    await Summary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete.' });
  }
});

// GET /api/analytics
router.get('/analytics', async (req, res) => {
  try {
    const analytics = await Analytics.find().sort({ date: -1 }).limit(30);
    const keywords = await Keyword.find().sort({ count: -1 }).limit(20);
    const totalSummaries = await Summary.countDocuments();
    res.json({ analytics, keywords, totalSummaries });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch analytics.' });
  }
});

export default router;