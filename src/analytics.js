import { track } from '@vercel/analytics'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
export const ANALYTICS_CONSENT_KEY = 'veritagrid-analytics-consent'
let googleAnalyticsReady = false

export function getAnalyticsConsent() {
  if (typeof window === 'undefined') return null
  try {
    const consent = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
    return consent === 'analytics' || consent === 'essential' ? consent : null
  } catch {
    return null
  }
}

export function setAnalyticsConsent(consent) {
  try { window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent) } catch { /* Storage can be unavailable in restrictive browser modes. */ }
}

export function initializeGoogleAnalytics() {
  if (!measurementId || typeof window === 'undefined' || getAnalyticsConsent() !== 'analytics') return false
  window[`ga-disable-${measurementId}`] = false
  if (googleAnalyticsReady) return true
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false, anonymize_ip: true })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  googleAnalyticsReady = true
  return true
}

export function disableGoogleAnalytics() {
  if (!measurementId || typeof window === 'undefined') return
  window[`ga-disable-${measurementId}`] = true
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (name === '_ga' || name === '_gid' || name === '_gat' || name.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.veritagrid.com; SameSite=Lax`
    }
  })
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
