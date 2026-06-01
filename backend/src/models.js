import mongoose from "mongoose";

// Summary Schema
const summarySchema = new mongoose.Schema({
  originalText: { type: String, required: true },
  summary: { type: String, required: true },
  mode: { type: String, enum: ['short', 'detailed', 'bullets'], default: 'short' },
  sourceType: { type: String, enum: ['text', 'pdf', 'docx'], default: 'text' },
  fileName: { type: String },
  wordCountOriginal: { type: Number },
  wordCountSummary: { type: Number },
  sessionId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Keyword Schema (for SEO analytics)
const keywordSchema = new mongoose.Schema({
  keyword: { type: String, required: true, unique: true },
  count: { type: Number, default: 1 },
  lastUsed: { type: Date, default: Date.now }
});

// Analytics Schema
const analyticsSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // YYYY-MM-DD
  totalSummaries: { type: Number, default: 0 },
  byMode: {
    short: { type: Number, default: 0 },
    detailed: { type: Number, default: 0 },
    bullets: { type: Number, default: 0 }
  },
  bySource: {
    text: { type: Number, default: 0 },
    pdf: { type: Number, default: 0 },
    docx: { type: Number, default: 0 }
  },
  avgOriginalWords: { type: Number, default: 0 },
  avgSummaryWords: { type: Number, default: 0 }
});

const Summary = mongoose.model('Summary', summarySchema);
const Keyword = mongoose.model('Keyword', keywordSchema);
const Analytics = mongoose.model('Analytics', analyticsSchema);

export { Summary, Keyword, Analytics };
