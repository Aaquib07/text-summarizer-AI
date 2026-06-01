const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://textsummarizer.ai';

function Robots() {}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /
Allow: /blog/
Disallow: /history
Disallow: /analytics
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();
  return { props: {} };
}

export default Robots;
