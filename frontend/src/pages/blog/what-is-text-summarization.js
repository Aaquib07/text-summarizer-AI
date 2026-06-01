import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

export default function WhatIsTextSummarization() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is Text Summarization?',
    description: 'A comprehensive guide to AI text summarization — how it works, types, and real-world applications.',
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    author: { '@type': 'Organization', name: 'TextSummarizer AI' },
    publisher: { '@type': 'Organization', name: 'TextSummarizer AI', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/what-is-text-summarization` },
  };

  return (
    <Layout>
      <NextSeo
        title="What is Text Summarization? A Complete Guide"
        description="Learn what text summarization is, how AI summarization works, the different types (extractive vs abstractive), and real-world use cases."
        canonical={`${SITE_URL}/blog/what-is-text-summarization`}
        openGraph={{
          type: 'article',
          article: { publishedTime: '2024-01-15', authors: ['TextSummarizer AI'] },
          title: 'What is Text Summarization? A Complete Guide',
          description: 'Learn how AI distills large documents into concise summaries.',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: 'text summarization, what is text summarization, AI summarization, extractive summarization, abstractive summarization' }
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '13px', color: '#928c7e', marginBottom: '32px' }}>
          <Link href="/" style={{ color: '#928c7e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/blog" style={{ color: '#928c7e', textDecoration: 'none' }}>Blog</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>What is Text Summarization?</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '12px', color: '#928c7e', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            📚 Guide · 5 min read · Jan 15, 2024
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.15, marginBottom: '16px' }}>
            What is Text Summarization?
          </h1>
          <p style={{ fontSize: '18px', color: '#5e5950', lineHeight: 1.7 }}>
            A complete guide to understanding how AI condenses large volumes of text into clear, concise summaries — and why it's changing how we process information.
          </p>
        </header>

        {/* Article body */}
        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333028' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            Definition
          </h2>
          <p>
            <strong>Text summarization</strong> is the process of reducing a long piece of text into a shorter version that retains the most important information and meaning. It can be done manually or, increasingly, by artificial intelligence systems that analyze language structure and semantics.
          </p>
          <p style={{ marginTop: '16px' }}>
            Think of it as the difference between reading an entire research paper and reading its abstract — you get the essential points without the full time investment.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            Types of Text Summarization
          </h2>
          <p>There are two primary approaches to automatic text summarization:</p>

          <div style={{ background: 'var(--color-paper)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '20px 24px', margin: '20px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px' }}>🔍 Extractive Summarization</h3>
            <p style={{ fontSize: '15px', color: '#5e5950' }}>
              Selects and copies the most important sentences from the original text verbatim. The summary is composed entirely of sentences that already exist in the source document.
            </p>
          </div>

          <div style={{ background: 'var(--color-paper)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '20px 24px', margin: '20px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px' }}>✍️ Abstractive Summarization</h3>
            <p style={{ fontSize: '15px', color: '#5e5950' }}>
              Generates new sentences that paraphrase and condense the original content — much like how a human would write a summary. Modern AI tools like TextSummarizer AI use this approach.
            </p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            How AI Text Summarization Works
          </h2>
          <p>
            Modern AI summarizers use large language models (LLMs) trained on vast amounts of text data. These models understand context, sentence relationships, and semantic meaning. When you feed them a document, they:
          </p>
          <ol style={{ paddingLeft: '24px', marginTop: '12px' }}>
            {[
              'Parse and tokenize the input text into structured representations',
              'Identify the most semantically significant sentences and concepts',
              'Generate a coherent, fluent summary using the model\'s language generation capabilities',
              'Adjust the output length and style based on your selected mode (short, detailed, bullets)',
            ].map((step, i) => (
              <li key={i} style={{ marginBottom: '10px', paddingLeft: '8px' }}>{step}</li>
            ))}
          </ol>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            Real-World Use Cases
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '16px 0' }}>
            {[
              { icon: '🎓', title: 'Students', desc: 'Condense lecture notes, papers, and textbook chapters' },
              { icon: '📰', title: 'Journalists', desc: 'Quickly review press releases and research papers' },
              { icon: '⚖️', title: 'Legal', desc: 'Summarize lengthy contracts and case documents' },
              { icon: '🔬', title: 'Researchers', desc: 'Get the gist of papers before deep-reading' },
            ].map(u => (
              <div key={u.title} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{u.icon}</div>
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{u.title}</div>
                <div style={{ fontSize: '12px', color: '#756f62' }}>{u.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '40px', marginBottom: '12px' }}>
            Try It Now
          </h2>
          <p>
            TextSummarizer AI uses state-of-the-art language models to generate high-quality summaries from any text, PDF, or DOCX file in seconds.
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', background: 'var(--color-ink)', color: 'var(--color-cream)',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
            }}>
              ✦ Try the Free Summarizer
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#928c7e', marginBottom: '16px' }}>
            Related Articles
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/blog/best-ai-tools-summarizing-text" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
              → Best AI Tools for Summarizing Text in 2024
            </Link>
            <Link href="/blog/how-to-summarize-articles-quickly" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
              → How to Summarize Articles Quickly
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
