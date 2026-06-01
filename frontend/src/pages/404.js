import Layout from '../components/Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <Layout>
      <NextSeo title="404 – Page Not Found" noindex={true} />
      <div style={{
        minHeight: '60vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '80px', lineHeight: 1, marginBottom: '16px', color: 'var(--color-amber)' }}>
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '12px' }}>
          Page not found
        </h1>
        <p style={{ color: '#756f62', marginBottom: '28px', maxWidth: '400px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 22px', background: 'var(--color-ink)', color: 'var(--color-cream)',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
          }}>
            ✦ Go to Summarizer
          </Link>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 22px', border: '1.5px solid var(--color-border)',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px', color: 'var(--color-ink)',
          }}>
            Read the Blog
          </Link>
        </div>
      </div>
    </Layout>
  );
}
