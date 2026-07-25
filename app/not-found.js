// Next automatically marks not-found pages noindex, so no robots override here.
export const metadata = {
  title: 'Page not found',
};

// Styled 404 that matches the Broadsheet look (inherits fonts + tokens from the
// root layout). output: 'export' emits this as 404.html.
export default function NotFound() {
  return (
    <main
      style={{
        '--leading': '28px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(72px,16vh,180px) clamp(20px,5vw,72px)',
      }}
    >
      <p
        style={{
          fontSize: '13px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
          margin: '0 0 var(--leading)',
        }}
      >
        <span style={{ color: 'var(--color-accent-2)' }}>Error 404</span> &mdash; Page not found
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--font-heading-weight)',
          fontSize: 'clamp(38px,6vw,72px)',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          margin: 0,
          maxWidth: '16ch',
        }}
      >
        This page went ghost.
      </h1>
      <p
        style={{
          fontSize: '18px',
          lineHeight: 'var(--leading)',
          color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
          margin: 'var(--leading) 0 0',
          maxWidth: '52ch',
        }}
      >
        The page you’re after doesn’t exist or has moved. Head back to the homepage — or book a
        call and we’ll point you the right way.
      </p>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: 'var(--leading)' }}>
        <a className="btn btn-primary" href="/">
          Back to homepage
        </a>
        <a className="btn btn-secondary" href="/#book">
          Book a call
        </a>
      </div>
    </main>
  );
}
