import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Summarizer from '../components/Summarizer';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy-loaded below-the-fold content
const Features = dynamic(() => import('../components/Features'), {
  loading: () => <div style={{ height: '300px' }} />,
  ssr: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Free AI Text Summarizer – Summarize Any Text Instantly"
        description="Summarize articles, PDFs, and documents in seconds with AI. Choose short, detailed, or bullet-point summaries. Free, fast, and accurate text summarization tool."
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          title: 'Free AI Text Summarizer',
          description: 'Summarize any text instantly with AI. PDF, DOCX, and plain text supported.',
        }}
      />

      {/* Hero */}
      <section className="hero-gradient" style={{ padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px',
              background: 'rgba(232,168,56,0.15)',
              border: '1px solid rgba(232,168,56,0.3)',
              borderRadius: '100px',
              fontSize: '12px', fontWeight: 600,
              color: 'var(--color-amber-dark)',
              marginBottom: '20px',
              letterSpacing: '0.04em',
            }}
          >
            ✦ AI-POWERED SUMMARIZATION
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '16px',
              color: 'var(--color-ink)',
            }}
          >
            Summarize any text
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-sage)' }}>instantly with AI</em>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: '#756f62',
            maxWidth: '540px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            Paste text, upload a PDF or DOCX, and get a concise summary in seconds.
            Short, detailed, or bullet-point — your choice.
          </p>
        </div>
      </section>

      {/* Summarizer tool */}
      <section
        id="summarizer"
        aria-label="Text Summarization Tool"
        style={{ padding: '40px 24px 60px', maxWidth: '1100px', margin: '0 auto' }}
      >
        <Summarizer />
      </section>

      {/* Stats band */}
      <section style={{
        background: 'var(--color-ink)',
        color: 'var(--color-cream)',
        padding: '40px 24px',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '24px', textAlign: 'center',
        }}>
          {[
            { value: '10K+', label: 'Summaries Generated' },
            { value: '3', label: 'Summary Modes' },
            { value: 'PDF & DOCX', label: 'File Formats' },
            { value: '< 5s', label: 'Average Speed' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px', fontWeight: 700,
                color: 'var(--color-amber)', marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#928c7e' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lazy-loaded features */}
      <Features />

      {/* SEO blog links */}
      <section style={{ padding: '60px 24px', background: 'var(--color-paper)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 4vw, 32px)',
            textAlign: 'center',
            marginBottom: '8px',
          }}>
            Learn about Text Summarization
          </h2>
          <p style={{ textAlign: 'center', color: '#756f62', marginBottom: '40px', fontSize: '15px' }}>
            Guides and resources to help you summarize smarter.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              {
                href: '/blog/what-is-text-summarization',
                title: 'What is Text Summarization?',
                desc: 'Learn how AI distills large documents into concise, accurate summaries.',
                icon: '📚',
              },
              {
                href: '/blog/best-ai-tools-summarizing-text',
                title: 'Best AI Tools for Summarizing Text',
                desc: 'A curated comparison of the top AI summarization tools available today.',
                icon: '🛠️',
              },
              {
                href: '/blog/how-to-summarize-articles-quickly',
                title: 'How to Summarize Articles Quickly',
                desc: 'Practical strategies for extracting key information from long articles.',
                icon: '⚡',
              },
            ].map(post => (
              <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
                <article className="card" style={{ padding: '24px', height: '100%' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{post.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px', fontWeight: 600,
                    color: 'var(--color-ink)', marginBottom: '8px',
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#756f62', lineHeight: 1.6 }}>
                    {post.desc}
                  </p>
                  <div style={{
                    marginTop: '14px', fontSize: '12px',
                    color: 'var(--color-amber-dark)', fontWeight: 600,
                  }}>
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section style={{ padding: '60px 24px', maxWidth: '760px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 4vw, 30px)',
          textAlign: 'center', marginBottom: '40px',
        }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: 'What is a text summarizer?',
            a: 'A text summarizer uses AI to condense long documents, articles, or text into shorter, more manageable summaries while preserving the key information.',
          },
          {
            q: 'Can I summarize PDF files?',
            a: 'Yes! Upload any PDF or DOCX file and our AI will extract and summarize the text automatically. Files up to 10MB are supported.',
          },
          {
            q: 'What summary modes are available?',
            a: 'We offer three modes: Short (2–3 sentences), Detailed (3–5 paragraphs), and Bullet Points (key insights as a list).',
          },
          {
            q: 'Is the text summarizer free to use?',
            a: 'Yes, TextSummarizer AI is free to use. Simply paste your text or upload your file and get an instant summary.',
          },
        ].map((faq, i) => (
          <div key={i} style={{
            marginBottom: '20px',
            padding: '20px 24px',
            background: 'white',
            border: '1px solid var(--color-border)',
            borderRadius: '10px',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px', fontWeight: 600,
              marginBottom: '8px',
            }}>
              {faq.q}
            </h3>
            <p style={{ fontSize: '14px', color: '#5e5950', lineHeight: 1.7 }}>{faq.a}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
