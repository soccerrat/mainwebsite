# VeritaGrid IT Solutions

Modern React, Vite, and Tailwind CSS business website for cybersecurity consulting and independent IT support.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build also generates crawlable HTML documents for every public route.

## Analytics and SEO

- Enable Web Analytics for the project in the Vercel dashboard after deployment.
- Optional GA4: add `VITE_GA_MEASUREMENT_ID` in Vercel using the value from `.env.example` as a guide.
- Submit `https://veritagrid.com/sitemap.xml` in Google Search Console.
- Route metadata and structured data live in `src/seo.js`.
- Analytics events live in `src/analytics.js`.

## Easy edits

- Main website content: `src/App.jsx`
- Brand colors and Tailwind theme: `tailwind.config.js`
- Global CSS helpers: `src/index.css`
- Hero visual: `public/operations-grid.png`
- Business card source and preview: `design/business-card-front.svg`, `design/business-card-back.svg`, and `design/business-card-preview.html`
- Business card PDF: `output/pdf/veritagrid-business-card.pdf`
