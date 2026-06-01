import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { getHistory, deleteSummary, getSummaryById } from '../lib/api';
import { getSessionId } from '../lib/session';
import toast from 'react-hot-toast';

const MODE_LABELS = { short: '⚡ Short', detailed: '📖 Detailed', bullets: '• Bullets' };
const SOURCE_ICONS = { text: '✍️', pdf: '📕', docx: '📘' };

export default function HistoryPage() {
  const [summaries, setSummaries] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const fetchHistory = async (p = 1) => {
    setLoading(true);
    try {
      const sessionId = getSessionId();
      const data = await getHistory({ sessionId, page: p, limit: 10 });
      setSummaries(data.summaries);
      setTotal(data.total);
      setPages(data.pages);
      setPage(p);
    } catch {
      toast.error('Failed to load history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchHistory(1); }, []);

  const handleSelect = async (item) => {
    setDetailLoading(true);
    try {
      const full = await getSummaryById(item._id);
      setSelected(full);
    } catch {
      toast.error('Failed to load summary.');
    } finally {
      setDetailLoading(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!confirm('Delete this summary?')) return;
    try {
      await deleteSummary(id);
      toast.success('Deleted.');
      setSummaries(prev => prev.filter(s => s._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch {
      toast.error('Failed to delete.');
    }
  };

  const handleCopy = async () => {
    if (!selected?.summary) return;
    await navigator.clipboard.writeText(selected.summary);
    toast.success('Copied!');
  };

  const handleDownload = () => {
    if (!selected?.summary) return;
    const blob = new Blob([selected.summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `summary-${selected.mode}-${selected._id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <NextSeo
        title="Summary History"
        description="Browse and manage all your past AI-generated text summaries."
        noindex={true}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,36px)', marginBottom: '8px' }}>
            Summary History
          </h1>
          <p style={{ color: '#756f62', fontSize: '15px' }}>
            {total} summar{total === 1 ? 'y' : 'ies'} saved in this session.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: '24px' }}>
          {/* List */}
          <div>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="shimmer" style={{ height: '80px', borderRadius: '10px', marginBottom: '12px' }} />
              ))
            ) : summaries.length === 0 ? (
              <div style={{
                textAlign: 'center', padding: '60px 24px',
                background: 'white', border: '1px solid var(--color-border)', borderRadius: '12px',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>📭</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px' }}>No summaries yet</div>
                <p style={{ color: '#928c7e', fontSize: '14px' }}>Generate your first summary on the home page.</p>
              </div>
            ) : (
              <>
                {summaries.map(s => (
                  <div
                    key={s._id}
                    onClick={() => handleSelect(s)}
                    className="card"
                    style={{
                      padding: '16px 20px', marginBottom: '10px', cursor: 'pointer',
                      borderColor: selected?._id === s._id ? 'var(--color-amber)' : 'var(--color-border)',
                      boxShadow: selected?._id === s._id ? '0 0 0 2px rgba(232,168,56,0.2)' : 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '11px', background: 'var(--color-paper)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '2px 8px' }}>
                            {MODE_LABELS[s.mode] || s.mode}
                          </span>
                          <span style={{ fontSize: '11px', color: '#928c7e' }}>
                            {SOURCE_ICONS[s.sourceType]} {s.sourceType}
                          </span>
                          {s.fileName && (
                            <span style={{ fontSize: '11px', color: '#928c7e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '120px' }}>
                              {s.fileName}
                            </span>
                          )}
                        </div>
                        <p style={{
                          fontSize: '13px', color: '#5e5950', lineHeight: 1.5,
                          overflow: 'hidden', display: '-webkit-box',
                          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                        }}>
                          {s.summary}
                        </p>
                        <div style={{ fontSize: '11px', color: '#b5b0a4', marginTop: '6px' }}>
                          {new Date(s.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          {s.wordCountOriginal && ` · ${s.wordCountOriginal} → ${s.wordCountSummary} words`}
                        </div>
                      </div>
                      <button
                        onClick={e => handleDelete(s._id, e)}
                        style={{
                          marginLeft: '12px', background: 'none', border: 'none', cursor: 'pointer',
                          fontSize: '16px', color: '#b5b0a4', flexShrink: 0, padding: '4px',
                        }}
                        title="Delete"
                        aria-label="Delete summary"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                {pages > 1 && (
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
                    <button className="btn-secondary" onClick={() => fetchHistory(page - 1)} disabled={page === 1}>
                      ← Prev
                    </button>
                    <span style={{ padding: '8px 12px', fontSize: '13px', color: '#756f62' }}>
                      {page} / {pages}
                    </span>
                    <button className="btn-secondary" onClick={() => fetchHistory(page + 1)} disabled={page === pages}>
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Detail panel */}
          {selected && (
            <div style={{
              background: 'white', border: '1px solid var(--color-border)',
              borderRadius: '12px', padding: '24px',
              height: 'fit-content', position: 'sticky', top: '80px',
              animation: 'fadeIn 0.3s ease',
            }}>
              {detailLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="shimmer" style={{ height: '12px', borderRadius: '4px', marginBottom: '10px', width: `${[100, 80, 90, 70, 60][i]}%` }} />
                ))
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600 }}>Full Summary</div>
                      <div style={{ fontSize: '11px', color: '#928c7e', marginTop: '2px' }}>
                        {MODE_LABELS[selected.mode]} · {selected.wordCountOriginal}→{selected.wordCountSummary} words
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#928c7e' }}>✕</button>
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: 1.75, color: '#333028', whiteSpace: 'pre-line', marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                    {selected.summary}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn-secondary" onClick={handleCopy}>⎘ Copy</button>
                    <button className="btn-secondary" onClick={handleDownload}>↓ Download</button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
