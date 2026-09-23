export const SITE_URL = 'https://veritagrid.com'
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export const routeSeo = {
  '/': {
    title: 'Local IT Support in Elmont, NY | VeritaGrid',
    description: 'Local computer, Wi-Fi, printer, business technology, website, and cybersecurity support for Elmont and surrounding Nassau County communities.',
    service: 'Local IT support and technology services'
  },
  '/services': {
    title: 'Computer Repair & IT Support in Elmont | VeritaGrid',
    description: 'Computer troubleshooting, printer help, Wi-Fi support, device setup, upgrades, backups, and practical security services in Elmont, NY.',
    service: 'Computer repair and IT support'
  },
  '/business-it': {
    title: 'Small Business IT Support Nassau County | VeritaGrid',
    description: 'Dependable small business IT support for Microsoft 365, Google Workspace, email, devices, networks, backups, and account security.',
    service: 'Small business IT support'
  },
  '/websites': {
    title: 'Small Business Website Design Long Island | VeritaGrid',
    description: 'Modern website design, redesign, hosting guidance, maintenance, lead forms, and local SEO foundations for Long Island organizations.',
    service: 'Small business website design and maintenance'
  },
  '/pricing': {
    title: 'Affordable IT Support Pricing in Elmont | VeritaGrid',
    description: 'Compare service packages and starting prices for computer help, Wi-Fi, business IT, cybersecurity checkups, and websites in Elmont, NY.',
    service: 'IT support and website service pricing'
  },
  '/about': {
    title: 'About VeritaGrid | IT & Cybersecurity Expertise',
    description: 'Meet Neander Devil, founder of VeritaGrid, with bachelor’s and master’s degrees in cybersecurity plus CompTIA A+ and Security+ certifications.',
    service: 'Technology consulting'
  },
  '/contact': {
    title: 'Request Local IT Support | VeritaGrid Elmont, NY',
    description: 'Request local or remote support for computers, Wi-Fi, printers, business technology, websites, backups, and account security.',
    service: 'Technology support request'
  },
  '/privacy': {
    title: 'Privacy Policy | VeritaGrid IT Solutions',
    description: 'Learn how VeritaGrid handles contact requests, analytics choices, service communications, and website information.',
    service: null
  },
  '/terms': {
    title: 'Terms of Service | VeritaGrid IT Solutions',
    description: 'Review the website and service terms for VeritaGrid IT support, cybersecurity consulting, and website services.',
    service: null
  }
}

export function structuredDataFor(path) {
  const seo = routeSeo[path] || routeSeo['/']
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const graph = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'VeritaGrid IT Solutions',
        alternateName: 'VeritaGrid',
        url: SITE_URL,
        logo: `${SITE_URL}/veritagrid-logo.svg`,
        email: 'veritagridit@gmail.com',
        telephone: '+1-516-725-6490',
        founder: {
          '@type': 'Person',
          name: 'Neander Devil',
          hasCredential: [
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor’s degree in Cybersecurity' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master’s degree in Cybersecurity' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CompTIA A+' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CompTIA Security+' }
          ]
        },
        sameAs: ['https://www.linkedin.com/in/neanderdevil/'],
        areaServed: ['Elmont', 'Nassau County', 'Western Nassau County', 'Eastern Queens']
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'VeritaGrid IT Solutions',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `${url}/#webpage`,
        url,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US'
      }
    ]
  if (seo.service) {
    graph.push(
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: seo.service,
        description: seo.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: [
          { '@type': 'City', name: 'Elmont' },
          { '@type': 'AdministrativeArea', name: 'Nassau County' }
        ]
      }
    )
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
}

export function updateSeo(path) {
  const seo = routeSeo[path] || routeSeo['/']
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`
  document.title = seo.title
  upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)
  let jsonLd = document.head.querySelector('#veritagrid-structured-data')
  if (!jsonLd) {
    jsonLd = document.createElement('script')
    jsonLd.id = 'veritagrid-structured-data'
    jsonLd.type = 'application/ld+json'
    document.head.appendChild(jsonLd)
  }
  jsonLd.textContent = JSON.stringify(structuredDataFor(path))
}
