import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TextSummarizer AI',
              description: 'AI-powered text summarization tool. Summarize text, PDFs, and DOCX files instantly.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai',
              applicationCategory: 'ProductivityApplication',
              operatingSystem: 'All',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              featureList: ['Text Summarization', 'PDF Summarization', 'DOCX Summarization', 'Bullet Point Summary', 'Download Summary'],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
