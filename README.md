# LeadGhost site

Marketing site for LeadGhost — [leadghost.co](https://leadghost.co).

Next.js 14 (App Router), **static export** (`output: 'export'`), deployed on Vercel.
Single-page landing built on the in-repo "Broadsheet" design system
(`app/broadsheet.css`). Source Serif 4 is self-hosted via `next/font`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

Because it's a static export, `npm run build` writes plain files to `out/` — no
server at runtime.

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables**
(Production, and Preview if you want them active on preview URLs). Redeploy
after changing them — env vars only apply to a new build.

| Variable | Required for | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form | Your Formspree endpoint, e.g. `https://formspree.io/f/abcdwxyz` |

The `NEXT_PUBLIC_` prefix is required and safe: the form POST happens in the
browser and the Formspree form ID is meant to be public.

## Contact form (Formspree)

The contact form (`components/ContactForm.js`) POSTs to Formspree. To wire it up:

1. Create a form at [formspree.io](https://formspree.io); set the notification
   email to `micheal@leadghost.co`. Copy its endpoint
   (`https://formspree.io/f/xxxxxxx`).
2. Add it as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel (see above) and redeploy.
3. Submit the form once on the live site and click the Formspree confirmation
   email to verify the address. After that, submissions arrive in the inbox.

Until the endpoint is set, the form still validates and shows a graceful
"email us in the meantime" message instead of sending. It has client-side
validation, a `_gotcha` honeypot, and inline success/error states (no redirect).

## Analytics (Vercel)

`@vercel/analytics` is wired into the root layout (cookieless — no consent
banner). Enable **Web Analytics** in the Vercel dashboard, then redeploy.

Speed Insights was removed because it requires a paid Vercel plan. To re-enable
after upgrading: `npm i @vercel/speed-insights`, then render `<SpeedInsights />`
(from `@vercel/speed-insights/next`) in `app/layout.js`, and enable Speed
Insights in the dashboard.

Two conversions are tracked (see `lib/analytics.js` + `components/ConversionTracking.js`):

- **`book_a_call`** — click on any "Book a call" CTA (tagged with `location`).
- **`contact_submit`** — a successful contact-form send (tagged with `outbound_for`).

Custom events require a Vercel plan that supports them; pageviews and Speed
Insights work on any plan.

## Booking

All "Book a call" CTAs smooth-scroll to the `#book` section, which lazy-loads
the OneCal inline embed. The OneCal URL and CTA label live in `lib/config.js`.

## Editing common things

| Change | Where |
| --- | --- |
| Booking link / CTA label | `lib/config.js` (`BOOKING_URL`, `BOOKING_ANCHOR`, `CTA`) |
| Page copy / sections | `app/page.js` |
| Contact form fields | `components/ContactForm.js` |
| SEO metadata, OG, favicons | `app/layout.js` |
| Structured data (JSON-LD) | `components/StructuredData.js` |
| Sitemap / robots | `app/sitemap.js`, `app/robots.js` |
| AI crawler summary | `public/llms.txt` |
| Design tokens / components | `app/broadsheet.css` (system) + `app/globals.css` (overrides) |
| Logo / OG image / favicons | `public/logo.png`, `public/og.png`, `public/favicon.ico`, `public/icon-*.png` |

## Deploy

Connected to Vercel; **merging to `main` auto-deploys to production**. Start
each change from a fresh branch off `main` so one PR maps to one merge.
