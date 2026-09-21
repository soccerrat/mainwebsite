import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_IMAGE, routeSeo, SITE_URL, structuredDataFor } from '../src/seo.js'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

for (const [path, seo] of Object.entries(routeSeo)) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`
  const head = `
    <title>${escapeAttribute(seo.title)}</title>
    <meta name="description" content="${escapeAttribute(seo.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="VeritaGrid IT Solutions" />
    <meta property="og:title" content="${escapeAttribute(seo.title)}" />
    <meta property="og:description" content="${escapeAttribute(seo.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${DEFAULT_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttribute(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttribute(seo.description)}" />
    <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
    <script id="veritagrid-structured-data" type="application/ld+json">${JSON.stringify(structuredDataFor(path)).replaceAll('<', '\\u003c')}</script>`
  const page = template
    .replace(/<title>.*?<\/title>/s, '')
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/i, '')
    .replace('<!-- SEO_ROUTE_META -->', head)
  const target = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html')
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, page)
}

console.log(`Generated ${Object.keys(routeSeo).length} crawlable route documents.`)
