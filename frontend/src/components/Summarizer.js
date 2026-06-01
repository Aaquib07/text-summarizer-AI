import { useState, useRef, useCallback } from 'react';
import toast from 'react-hot-toast';
import { summarizeText, summarizeFile } from '../lib/api';
import { getSessionId } from '../lib/session';

const MODES = [
  { id: 'short', label: '⚡ Short', desc: '2–3 sentences' },
  { id: 'detailed', label: '📖 Detailed', desc: '3–5 paragraphs' },
  { id: 'bullets', label: '• Bullets', desc: 'Key points list' },
];

export default function Summarizer() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('short');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('text'); // 'text' | 'file'
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef();

  const handleSummarize = async () => {
    if (tab === 'text' && text.trim().length < 50) {
      toast.error('Please enter at least 50 characters of text.');
      return;
    }
    if (tab === 'file' && !uploadedFile) {
      toast.error('Please upload a PDF or DOCX file.');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const sessionId = getSessionId();
      let data;

      if (tab === 'file') {
        data = await summarizeFile({ file: uploadedFile, mode, sessionId });
      } else {
        data = await summarizeText({ text, mode, sessionId });
      }

      setResult(data);
      toast.success('Summary generated!');
    } catch (err) {
      const msg = err.response?.data?.error || 'Failed to generate summary. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result?.summary) return;
    await navigator.clipboard.writeText(result.summary);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!result?.summary) return;
    const blob = new Blob([result.summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `summary-${mode}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded!');
  };

  const handleFileDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer?.files[0] || e.target?.files[0];
    if (!file) return;
    const allowed = ['application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      toast.error('Only PDF and DOCX files are supported.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File must be under 10MB.');
      return;
    }
    setUploadedFile(file);
    toast.success(`${file.name} ready to summarize`);
  }, []);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
      {/* Mode selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {MODES.map(m => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`mode-btn ${mode === m.id ? 'active' : ''}`}
            title={m.desc}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Input tabs */}
      <div style={{
        background: 'white',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '16px',
      }}>
        {/* Tab bar */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-paper)',
        }}>
          {[
            { id: 'text', label: '✍️ Paste Text' },
            { id: 'file', label: '📎 Upload File' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: '12px 20px',
                border: 'none',
                background: tab === t.id ? 'white' : 'transparent',
                borderBottom: tab === t.id ? '2px solid var(--color-ink)' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: tab === t.id ? 600 : 400,
                color: tab === t.id ? 'var(--color-ink)' : '#928c7e',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Text input */}
        {tab === 'text' && (
          <div style={{ padding: '16px' }}>
            <textarea
              className="summarize-textarea"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste any article, essay, report, or document here… minimum 50 characters."
              aria-label="Text to summarize"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <span style={{ fontSize: '12px', color: '#928c7e' }}>
                {wordCount} words
              </span>
              {text && (
                <button
                  onClick={() => setText('')}
                  style={{ fontSize: '12px', color: '#928c7e', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* File upload */}
        {tab === 'file' && (
          <div style={{ padding: '16px' }}>
            <div
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleFileDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `2px dashed ${dragOver ? 'var(--color-amber)' : 'var(--color-border)'}`,
                borderRadius: '10px',
                padding: '40px 24px',
                textAlign: 'center',
                cursor: 'pointer',
                background: dragOver ? '#fef9ee' : 'var(--color-paper)',
                transition: 'all 0.15s',
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileDrop}
                style={{ display: 'none' }}
                aria-label="Upload PDF or DOCX file"
              />
              {uploadedFile ? (
                <div>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>📄</div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>{uploadedFile.name}</div>
                  <div style={{ fontSize: '12px', color: '#928c7e' }}>
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); setUploadedFile(null); }}
                    style={{ marginTop: '12px', fontSize: '12px', color: '#928c7e', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Remove file
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>☁️</div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                    Drop your PDF or DOCX here
                  </div>
                  <div style={{ fontSize: '13px', color: '#928c7e' }}>
                    or click to browse · max 10MB
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Summarize button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <button
          className="btn-primary"
          onClick={handleSummarize}
          disabled={loading}
          style={{ minWidth: '200px', justifyContent: 'center' }}
        >
          {loading ? (
            <>
              <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
              Summarizing…
            </>
          ) : (
            <>✦ Summarize</>
          )}
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div style={{
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
        }}>
          {[100, 85, 65, 90, 70].map((w, i) => (
            <div key={i} className="shimmer" style={{
              height: '14px', borderRadius: '6px',
              marginBottom: '12px', width: `${w}%`,
            }} />
          ))}
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div
          style={{
            background: 'white',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: 'var(--shadow-md)',
            animation: 'fadeUp 0.4s ease forwards',
          }}
        >
          {/* Result header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600 }}>
                Summary
              </div>
              <div style={{ fontSize: '12px', color: '#928c7e', marginTop: '2px' }}>
                {result.wordCountOriginal} words → {result.wordCountSummary} words
                {' '}({Math.round((1 - result.wordCountSummary / result.wordCountOriginal) * 100)}% reduction)
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-secondary" onClick={handleCopy}>
                {copied ? '✓ Copied' : '⎘ Copy'}
              </button>
              <button className="btn-secondary" onClick={handleDownload}>
                ↓ Download
              </button>
            </div>
          </div>

          {/* Summary text */}
          <div style={{
            fontSize: '15px',
            lineHeight: '1.75',
            color: '#333028',
            whiteSpace: 'pre-line',
          }}>
            {result.summary}
          </div>

          {/* Keywords */}
          {result.keywords && result.keywords.length > 0 && (
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#928c7e', marginBottom: '8px' }}>
                Key Topics
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {result.keywords.map(kw => (
                  <span key={kw} style={{
                    padding: '3px 10px',
                    background: 'var(--color-paper)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    color: '#5e5950',
                  }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
