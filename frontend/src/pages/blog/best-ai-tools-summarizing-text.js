import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

const TOOLS = [
  {
    rank: 1,
    name: 'TextSummarizer AI',
    badge: '⭐ Best Overall',
    pros: ['Multiple summary modes (short, detailed, bullets)', 'PDF & DOCX file upload', 'History dashboard', 'Free to use', 'Fast (<5s)'],
    cons: ['No team collaboration (yet)'],
    bestFor: 'Students, researchers, everyday use',
    score: '9.5/10',
  },
  {
    rank: 2,
    name: 'ChatGPT (OpenAI)',
    badge: '🤖 Most Versatile',
    pros: ['Extremely flexible prompting', 'High accuracy', 'Conversational follow-ups'],
    cons: ['Requires account/subscription for best results', 'No dedicated summarize UI', 'No file upload in free tier'],
    bestFor: 'Power users and developers',
    score: '8.5/10',
  },
  {
    rank: 3,
    name: 'Notion AI',
    badge: '📝 Best for Notes',
    pros: ['Integrated into Notion workspace', 'Good for long-form notes', 'Action items extraction'],
    cons: ['Requires Notion subscription', 'Not standalone', 'Limited file import'],
    bestFor: 'Teams already using Notion',
    score: '7.8/10',
  },
  {
    rank: 4,
    name: 'QuillBot Summarizer',
    badge: '✒️ Good for Students',
    pros: ['Clean interface', 'Key sentence highlighting', 'Free tier available'],
    cons: ['Word limit on free plan', 'Less accurate for technical content'],
    bestFor: 'Academic writing and essays',
    score: '7.2/10',
  },
];

export default function BestAIToolsSummarizingText() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Tools for Summarizing Text in 2024',
    description: 'A curated comparison of the top AI text summarization tools, their features, pros, and cons.',
    datePublished: '2024-01-20',
    dateModified: '2024-01-20',
    author: { '@type': 'Organization', name: 'TextSummarizer AI' },
    publisher: { '@type': 'Organization', name: 'TextSummarizer AI', url: SITE_URL },
  };

  return (
    <Layout>
      <NextSeo
        title="Best AI Tools for Summarizing Text in 2024 (Compared)"
        description="We compared the top AI text summarization tools. Here's our ranked breakdown of features, accuracy, pricing, and best use cases."
        canonical={`${SITE_URL}/blog/best-ai-tools-summarizing-text`}
        openGraph={{
          type: 'article',
          article: { publishedTime: '2024-01-20' },
          title: 'Best AI Tools for Summarizing Text in 2024',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: 'best AI summarization tools, text summarizer comparison, AI tools for summarizing, best summarizer 2024' }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '13px', color: '#928c7e', marginBottom: '32px' }}>
          <Link href="/" style={{ color: '#928c7e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/blog" style={{ color: '#928c7e', textDecoration: 'none' }}>Blog</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Best AI Tools</span>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '12px', color: '#928c7e', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            🛠️ Comparison · 8 min read · Jan 20, 2024
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.15, marginBottom: '16px' }}>
            Best AI Tools for Summarizing Text in 2024
          </h1>
          <p style={{ fontSize: '18px', color: '#5e5950', lineHeight: 1.7 }}>
            We tested the leading AI summarization tools so you don't have to. Here's a ranked breakdown with honest pros, cons, and who each tool is best for.
          </p>
        </header>

        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333028' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>
            How We Evaluated
          </h2>
          <p>We assessed each tool on five criteria: <strong>accuracy</strong> (does it preserve meaning?), <strong>speed</strong>, <strong>file support</strong>, <strong>summary modes</strong>, and <strong>ease of use</strong>. We tested with academic papers, news articles, and corporate reports.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '20px' }}>
            Top AI Summarization Tools Ranked
          </h2>

          {TOOLS.map(tool => (
            <div key={tool.name} style={{
              background: tool.rank === 1 ? '#fef9ee' : 'white',
              border: `1px solid ${tool.rank === 1 ? 'var(--color-amber)' : 'var(--color-border)'}`,
              borderRadius: '12px', padding: '24px',
              marginBottom: '20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px',
                    background: tool.rank === 1 ? 'var(--color-amber)' : 'var(--color-paper)',
                    color: tool.rank === 1 ? 'var(--color-ink)' : '#756f62',
                    borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '8px',
                  }}>
                    {tool.badge}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', margin: 0 }}>
                    #{tool.rank} {tool.name}
                  </h3>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--color-sage)' }}>
                  {tool.score}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: '#5a7a6b' }}>✓ Pros</div>
                  {tool.pros.map(p => <div key={p} style={{ marginBottom: '4px', color: '#5e5950' }}>• {p}</div>)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: '#a05050' }}>✗ Cons</div>
                  {tool.cons.map(c => <div key={c} style={{ marginBottom: '4px', color: '#5e5950' }}>• {c}</div>)}
                </div>
              </div>

              <div style={{ marginTop: '12px', fontSize: '13px', color: '#756f62', paddingTop: '12px', borderTop: '1px solid var(--color-border)' }}>
                <strong>Best for:</strong> {tool.bestFor}
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            Our Verdict
          </h2>
          <p>
            For most users who need a fast, free, dedicated summarization tool with file upload and multiple summary modes, <strong>TextSummarizer AI</strong> is the best choice. For complex multi-turn summarization tasks, ChatGPT remains unmatched in flexibility.
          </p>

          <div style={{ marginTop: '24px' }}>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', background: 'var(--color-ink)', color: 'var(--color-cream)',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
            }}>
              ✦ Try TextSummarizer AI Free
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#928c7e', marginBottom: '16px' }}>
            Related Articles
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/blog/what-is-text-summarization" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>→ What is Text Summarization?</Link>
            <Link href="/blog/how-to-summarize-articles-quickly" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>→ How to Summarize Articles Quickly</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
