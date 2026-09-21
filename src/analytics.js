import { track } from '@vercel/analytics'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
let googleAnalyticsReady = false

export function initializeGoogleAnalytics() {
  if (!measurementId || googleAnalyticsReady || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false, anonymize_ip: true })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  googleAnalyticsReady = true
}

export function trackPageView(path, title) {
  if (!measurementId || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: `https://veritagrid.com${path === '/' ? '' : path}`,
    page_path: path
  })
}

export function trackEvent(name, properties = {}) {
  try { track(name, properties) } catch { /* Analytics remains non-blocking. */ }
  if (measurementId && window.gtag) window.gtag('event', name, properties)
}
