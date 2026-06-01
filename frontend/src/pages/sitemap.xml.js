const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

function generateSiteMap() {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog/what-is-text-summarization', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog/best-ai-tools-summarizing-text', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog/how-to-summarize-articles-quickly', priority: '0.9', changefreq: 'monthly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default SiteMap;
