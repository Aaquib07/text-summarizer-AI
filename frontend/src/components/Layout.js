import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Summarizer' },
  { href: '/history', label: 'History' },
  { href: '/blog/what-is-text-summarization', label: 'Learn' },
  { href: '/analytics', label: 'Analytics' },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(250,248,244,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <nav style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: '0 24px', height: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: 32, height: 32,
                background: 'var(--color-ink)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'var(--color-amber)', fontSize: '16px' }}>✦</span>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px', fontWeight: 600,
                color: 'var(--color-ink)',
              }}>
                TextSummarizer<span style={{ color: 'var(--color-amber)' }}>AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '4px' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                padding: '6px 14px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: router.pathname === link.href ? 'var(--color-ink)' : '#756f62',
                background: router.pathname === link.href ? 'var(--color-paper)' : 'transparent',
                transition: 'all 0.15s',
              }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', fontSize: '22px', color: 'var(--color-ink)',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            background: 'var(--color-cream)',
            borderBottom: '1px solid var(--color-border)',
            padding: '12px 24px 16px',
          }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '10px 0',
                  textDecoration: 'none', fontSize: '15px',
                  fontWeight: 500, color: 'var(--color-ink)',
                  borderBottom: '1px solid var(--color-border)',
                }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-ink)',
        color: 'var(--color-cream)',
        padding: '40px 24px',
        marginTop: 'auto',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px' }}>
                TextSummarizer<span style={{ color: 'var(--color-amber)' }}>AI</span>
              </div>
              <p style={{ fontSize: '13px', color: '#928c7e', lineHeight: 1.6 }}>
                AI-powered text summarization for researchers, students, and professionals.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#928c7e', marginBottom: '12px' }}>
                Learn
              </div>
              {[
                { href: '/blog/what-is-text-summarization', label: 'What is Text Summarization?' },
                { href: '/blog/best-ai-tools-summarizing-text', label: 'Best AI Summarization Tools' },
                { href: '/blog/how-to-summarize-articles-quickly', label: 'How to Summarize Articles' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{
                  display: 'block', fontSize: '13px', color: '#b5b0a4',
                  textDecoration: 'none', marginBottom: '8px',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#928c7e', marginBottom: '12px' }}>
                App
              </div>
              {[
                { href: '/', label: 'Summarizer' },
                { href: '/history', label: 'History' },
                { href: '/analytics', label: 'Analytics Dashboard' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{
                  display: 'block', fontSize: '13px', color: '#b5b0a4',
                  textDecoration: 'none', marginBottom: '8px',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid #333028', paddingTop: '20px', fontSize: '12px', color: '#756f62' }}>
            © {new Date().getFullYear()} TextSummarizer AI. Built for readers, researchers, and the curious.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
