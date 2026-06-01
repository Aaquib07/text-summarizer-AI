import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { getAnalytics } from '../lib/api';

export default function AnalyticsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnalytics()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const Skeleton = ({ w = '100%', h = 20 }) => (
    <div className="shimmer" style={{ width: w, height: h, borderRadius: '6px', marginBottom: '10px' }} />
  );

  // Aggregate totals from analytics records
  const totals = data?.analytics?.reduce(
    (acc, d) => ({
      short: acc.short + (d.byMode?.short || 0),
      detailed: acc.detailed + (d.byMode?.detailed || 0),
      bullets: acc.bullets + (d.byMode?.bullets || 0),
      text: acc.text + (d.bySource?.text || 0),
      pdf: acc.pdf + (d.bySource?.pdf || 0),
      docx: acc.docx + (d.bySource?.docx || 0),
    }),
    { short: 0, detailed: 0, bullets: 0, text: 0, pdf: 0, docx: 0 }
  ) || {};

  return (
    <Layout>
      <NextSeo
        title="Analytics Dashboard"
        description="SEO insights, usage analytics, and popular keywords for TextSummarizer AI."
        noindex={true}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,36px)', marginBottom: '8px' }}>
            Analytics Dashboard
          </h1>
          <p style={{ color: '#756f62' }}>Usage insights and SEO keyword data.</p>
        </div>

        {/* Top stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {loading ? Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px' }}>
              <Skeleton w="60%" h={14} /><Skeleton w="40%" h={28} />
            </div>
          )) : [
            { label: 'Total Summaries', value: data?.totalSummaries || 0, icon: '✦' },
            { label: 'Short Summaries', value: totals.short, icon: '⚡' },
            { label: 'Detailed Summaries', value: totals.detailed, icon: '📖' },
            { label: 'Bullet Point', value: totals.bullets, icon: '•' },
          ].map(stat => (
            <div key={stat.label} className="card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)' }}>
                {stat.value.toLocaleString()}
              </div>
              <div style={{ fontSize: '12px', color: '#928c7e', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Source breakdown */}
          <div className="card" style={{ padding: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '20px' }}>
              Input Source Breakdown
            </h2>
            {loading ? <><Skeleton /><Skeleton w="80%" /><Skeleton w="60%" /></> : (
              [
                { label: 'Plain Text', value: totals.text, icon: '✍️', color: '#e8a838' },
                { label: 'PDF Files', value: totals.pdf, icon: '📕', color: '#5a7a6b' },
                { label: 'DOCX Files', value: totals.docx, icon: '📘', color: '#8a7a6b' },
              ].map(src => {
                const total = totals.text + totals.pdf + totals.docx || 1;
                const pct = Math.round((src.value / total) * 100);
                return (
                  <div key={src.label} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                      <span>{src.icon} {src.label}</span>
                      <span style={{ fontWeight: 600 }}>{src.value} ({pct}%)</span>
                    </div>
                    <div style={{ background: 'var(--color-paper)', borderRadius: '100px', height: '8px' }}>
                      <div style={{
                        width: `${pct}%`, height: '100%',
                        background: src.color, borderRadius: '100px',
                        transition: 'width 0.8s ease',
                      }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Popular keywords */}
          <div className="card" style={{ padding: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '20px' }}>
              🔍 Popular Keywords <span style={{ fontSize: '12px', color: '#928c7e', fontFamily: 'var(--font-body)', fontWeight: 400 }}>(SEO Insights)</span>
            </h2>
            {loading ? <><Skeleton /><Skeleton w="70%" /><Skeleton w="85%" /></> : (
              data?.keywords?.length === 0 ? (
                <p style={{ color: '#928c7e', fontSize: '14px' }}>No keyword data yet. Start summarizing to see trends.</p>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {data?.keywords?.map((kw, i) => (
                    <span key={kw.keyword} style={{
                      padding: '5px 12px',
                      background: i < 3 ? 'var(--color-ink)' : 'var(--color-paper)',
                      color: i < 3 ? 'var(--color-cream)' : 'var(--color-ink)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '100px',
                      fontSize: '12px', fontWeight: 500,
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      {kw.keyword}
                      <span style={{ fontSize: '11px', opacity: 0.6 }}>{kw.count}</span>
                    </span>
                  ))}
                </div>
              )
            )}
          </div>

          {/* Daily activity */}
          <div className="card" style={{ padding: '24px', gridColumn: '1 / -1' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '20px' }}>
              Daily Activity (Last 30 Days)
            </h2>
            {loading ? <Skeleton h={120} /> : (
              data?.analytics?.length === 0 ? (
                <p style={{ color: '#928c7e', fontSize: '14px' }}>No activity data yet.</p>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '120px', padding: '8px 0' }}>
                  {data.analytics.slice(-14).map(day => {
                    const max = Math.max(...data.analytics.map(d => d.totalSummaries), 1);
                    const h = Math.max(4, (day.totalSummaries / max) * 100);
                    return (
                      <div key={day.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }} title={`${day.date}: ${day.totalSummaries} summaries`}>
                        <div style={{
                          width: '100%', height: `${h}%`,
                          background: 'var(--color-amber)',
                          borderRadius: '4px 4px 0 0',
                          opacity: 0.8,
                          minHeight: '4px',
                          transition: 'height 0.6s ease',
                        }} />
                        <div style={{ fontSize: '9px', color: '#928c7e', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                          {day.date.slice(5)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
