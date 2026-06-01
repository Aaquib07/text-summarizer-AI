const FEATURES = [
  { icon: '⚡', title: 'Instant Summaries', desc: 'Get accurate summaries in under 5 seconds using advanced AI language models.' },
  { icon: '📄', title: 'PDF & DOCX Support', desc: 'Upload files directly — no copy-pasting needed. Supports PDF and Word documents.' },
  { icon: '🎛️', title: '3 Summary Modes', desc: 'Choose short, detailed, or bullet-point format depending on your needs.' },
  { icon: '⎘', title: 'Copy & Download', desc: 'Copy to clipboard instantly or download as a text file for offline use.' },
  { icon: '📊', title: 'History Dashboard', desc: 'All your summaries are saved. Browse, search, and re-read past summaries anytime.' },
  { icon: '🔍', title: 'Keyword Extraction', desc: 'See the key topics automatically extracted from your text for quick scanning.' },
];

export default function Features() {
  return (
    <section style={{ padding: '60px 24px', background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 4vw, 32px)',
          textAlign: 'center', marginBottom: '8px',
        }}>
          Everything you need to summarize faster
        </h2>
        <p style={{ textAlign: 'center', color: '#756f62', marginBottom: '48px', fontSize: '15px' }}>
          Powerful features built for researchers, students, and busy professionals.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {FEATURES.map(f => (
            <div key={f.title} className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px', fontWeight: 600,
                marginBottom: '8px', color: 'var(--color-ink)',
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#756f62', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
