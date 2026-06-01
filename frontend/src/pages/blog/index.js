import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Link from 'next/link';

const POSTS = [
  {
    slug: 'what-is-text-summarization',
    title: 'What is Text Summarization?',
    desc: 'Learn how AI distills large documents into concise, accurate summaries and why it matters for productivity.',
    date: '2024-01-15',
    readTime: '5 min read',
    icon: '📚',
  },
  {
    slug: 'best-ai-tools-summarizing-text',
    title: 'Best AI Tools for Summarizing Text in 2024',
    desc: 'A curated comparison of the top AI summarization tools, including pros, cons, and use cases.',
    date: '2024-01-20',
    readTime: '8 min read',
    icon: '🛠️',
  },
  {
    slug: 'how-to-summarize-articles-quickly',
    title: 'How to Summarize Articles Quickly',
    desc: 'Practical strategies and AI-powered techniques for extracting key information from long articles fast.',
    date: '2024-01-25',
    readTime: '6 min read',
    icon: '⚡',
  },
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

export default function BlogIndex() {
  return (
    <Layout>
      <NextSeo
        title="Blog – Text Summarization Guides & Resources"
        description="Learn everything about AI text summarization. Guides, tool comparisons, and strategies for faster reading."
        canonical={`${SITE_URL}/blog`}
      />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,44px)', marginBottom: '12px' }}>
            Learn about Text Summarization
          </h1>
          <p style={{ color: '#756f62', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Guides, comparisons, and strategies to help you read smarter and summarize faster.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card" style={{ padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '36px', flexShrink: 0 }}>{post.icon}</div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-ink)' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '14px', color: '#756f62', lineHeight: 1.6, marginBottom: '12px' }}>
                    {post.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#928c7e' }}>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span style={{ color: 'var(--color-amber-dark)', fontWeight: 600 }}>Read article →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
