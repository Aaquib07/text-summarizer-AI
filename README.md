# TextSummarizer AI

A full-stack AI-powered text summarization app with Next.js, Express, and MongoDB.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React 18, Tailwind CSS |
| Backend | Express.js, Node.js |
| Database | MongoDB + Mongoose |
| AI | Anthropic Claude (claude-sonnet-4) |
| File Parsing | pdf-parse, mammoth (DOCX) |
| SEO | next-seo, structured data, sitemap |

---

## Features

- ✦ **3 Summary Modes** — Short (2–3 sentences), Detailed (3–5 paragraphs), Bullet Points
- 📎 **File Upload** — PDF and DOCX support up to 10MB
- ⎘ **Copy & Download** — Clipboard copy and .txt download
- 📊 **History Dashboard** — Browse and re-read all past summaries per session
- 🔍 **Keyword Extraction** — Auto-extracted key topics from each summary
- 📈 **Analytics Dashboard** — Daily activity, mode distribution, source breakdown, popular SEO keywords
- 🚀 **SEO Optimized** — Sitemap, robots.txt, OpenGraph, schema.org structured data, Lighthouse >90
- ⚡ **Performance** — Lazy loading, image compression (sharp/webp/avif), CDN-ready, compression middleware

---

## Project Structure

```
text-summarizer/
├── backend/
│   ├── src/
│   │   ├── index.js          # Express app entry
│   │   ├── routes.js         # API routes
│   │   └── models.js         # Mongoose models
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.js              # Homepage (Summarizer + hero + FAQ)
│   │   │   ├── history.js            # History dashboard
│   │   │   ├── analytics.js          # Analytics dashboard
│   │   │   ├── sitemap.xml.js        # Dynamic sitemap
│   │   │   ├── robots.txt.js         # robots.txt
│   │   │   ├── 404.js                # Custom 404
│   │   │   └── blog/
│   │   │       ├── index.js
│   │   │       ├── what-is-text-summarization.js
│   │   │       ├── best-ai-tools-summarizing-text.js
│   │   │       └── how-to-summarize-articles-quickly.js
│   │   ├── components/
│   │   │   ├── Layout.js             # Nav + footer wrapper
│   │   │   ├── Summarizer.js         # Main tool component
│   │   │   └── Features.js           # Lazy-loaded features section
│   │   ├── lib/
│   │   │   ├── api.js                # Axios API calls
│   │   │   └── session.js            # Session ID management
│   │   └── styles/
│   │       └── globals.css
│   ├── Dockerfile
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
└── docker-compose.yml
```

---

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Anthropic API key

### 1. Clone & Install

```bash
# Backend
cd backend
cp .env.example .env
# Fill in ANTHROPIC_API_KEY and MONGODB_URI
npm install
npm run dev

# Frontend (new terminal)
cd frontend
cp .env.example .env
npm install
npm run dev
```

### 2. Docker (Full Stack)

```bash
cp .env.example .env
# Add ANTHROPIC_API_KEY to .env
docker-compose up --build
```

App runs at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/summarize` | Summarize plain text |
| POST | `/api/summarize/file` | Upload & summarize PDF/DOCX |
| GET | `/api/history` | List summaries by sessionId |
| GET | `/api/history/:id` | Get full summary by ID |
| DELETE | `/api/history/:id` | Delete a summary |
| GET | `/api/analytics` | Usage stats + keyword data |
| GET | `/health` | Health check |

### POST /api/summarize

```json
{
  "text": "Your long text here...",
  "mode": "short" | "detailed" | "bullets",
  "sessionId": "uuid-string"
}
```

### POST /api/summarize/file

```
Content-Type: multipart/form-data
Fields: file (PDF/DOCX), mode, sessionId
```

---

## SEO Checklist

- [x] `next-seo` with OpenGraph + Twitter cards on all pages
- [x] Schema.org `WebApplication` structured data in `_document.js`
- [x] Schema.org `Article` + `HowTo` structured data on blog posts
- [x] Dynamic `sitemap.xml` at `/sitemap.xml`
- [x] `robots.txt` at `/robots.txt`
- [x] Canonical URLs on every page
- [x] Descriptive meta keywords per page
- [x] Semantic HTML (article, header, nav, section)
- [x] FAQ section with rich structured content
- [x] Internal linking between blog posts
- [x] CDN-ready via `assetPrefix` in `next.config.js`
- [x] Image formats: webp + avif via `next/image`
- [x] HTTP caching headers for static assets
- [x] Lazy loading for below-the-fold components (`dynamic` import)
- [x] Gzip compression via Express `compression` middleware

---

## CDN Setup (Production)

In `next.config.js`, uncomment and set:
```js
assetPrefix: process.env.CDN_URL, // e.g. https://cdn.yourdomain.com
```

Then point your CDN (Cloudflare, CloudFront, etc.) to pull from your Next.js origin. Static assets in `/_next/static/` are set with `Cache-Control: immutable` for 1 year.

---

## Performance Tips

- Images use `next/image` with `avif`/`webp` formats and responsive `srcSet`
- `Features` section is lazy-loaded with `dynamic(() => import(...), { ssr: false })`
- Express serves `compression()` middleware for gzip on all API responses
- MongoDB queries use `.select()` to avoid fetching large `originalText` fields in list views
- Rate limiting prevents abuse (100 req/15min global, 10 req/min on summarize)

---

## License

MIT
