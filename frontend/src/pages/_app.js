import { DefaultSeo } from 'next-seo';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

const defaultSEO = {
  titleTemplate: '%s | TextSummarizer AI',
  defaultTitle: 'TextSummarizer AI – Instant AI-Powered Text Summarization',
  description:
    'Summarize any text, PDF, or DOCX instantly with AI. Choose short, detailed, or bullet-point summaries. Free, fast, and accurate.',
  canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai',
    siteName: 'TextSummarizer AI',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'TextSummarizer AI',
      },
    ],
  },
  twitter: {
    handle: '@textsummarizerai',
    site: '@textsummarizerai',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0f0e0d' },
    { name: 'keywords', content: 'text summarizer, ai summarization, summarize article, pdf summarizer, document summary, bullet point summary' },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <div className="grain">
        <Component {...pageProps} />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            background: '#0f0e0d',
            color: '#faf8f4',
            borderRadius: '8px',
          },
          success: { iconTheme: { primary: '#e8a838', secondary: '#0f0e0d' } },
        }}
      />
    </>
  );
}
