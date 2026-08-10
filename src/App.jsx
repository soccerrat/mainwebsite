import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Church,
  ClipboardCheck,
  CloudCog,
  DownloadCloud,
  HardDrive,
  Laptop,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wifi,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#clients', label: 'Clients' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
]

const clientTypes = [
  {
    title: 'Individuals & Families',
    text: 'Patient help with slow computers, new device setup, Wi-Fi problems, password cleanup, account protection, and backup planning.',
    icon: UserRound
  },
  {
    title: 'Small Businesses',
    text: 'Reliable support for business email, cloud tools, devices, networks, security basics, documentation, and day-to-day operations.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Churches & Nonprofits',
    text: 'Practical help with office technology, Wi-Fi, livestream workflows, OBS, AV troubleshooting, account safety, and volunteer-friendly setup.',
    icon: Church
  }
]

const services = [
  {
    title: 'Computer Troubleshooting & Setup',
    text: 'Fix slow devices, setup new computers, resolve software issues, clean up confusing alerts, and get systems working again.',
    icon: Laptop
  },
  {
    title: 'Wi-Fi & Network Support',
    text: 'Improve coverage, secure router settings, organize network names, troubleshoot drops, and support home or office connectivity.',
    icon: Wifi
  },
  {
    title: 'Account, Email & Password Security',
    text: 'Set up MFA, strengthen passwords, review recovery settings, reduce phishing risk, and protect important accounts.',
    icon: LockKeyhole
  },
  {
    title: 'Small Business IT Support',
    text: 'Support Microsoft 365, Google Workspace, business email, devices, basic documentation, and practical technology decisions.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Cybersecurity Checkups',
    text: 'Review common risks, identify weak spots, explain priorities clearly, and create a practical protection plan.',
    icon: ShieldCheck
  },
  {
    title: 'Data Backup Planning',
    text: 'Build a simple backup strategy for files, business records, photos, church media, and other important data.',
    icon: HardDrive
  },
  {
    title: 'Church Livestream & AV Support',
    text: 'Support OBS, cameras, audio routing, presentation devices, streaming workflows, and Sunday-ready troubleshooting.',
    icon: Church
  },
  {
    title: 'Resume, LinkedIn & Tech Career Help',
    text: 'Help people organize career materials, improve LinkedIn, and explain technical experience with confidence.',
    icon: Linkedin
  }
]

const processSteps = [
  {
    title: 'Listen',
    text: 'We start with the real problem, the people affected, and what “fixed” needs to look like.',
    icon: MessageSquare
  },
  {
    title: 'Stabilize',
    text: 'I troubleshoot the immediate issue and explain what is happening in plain language.',
    icon: ClipboardCheck
  },
  {
    title: 'Secure',
    text: 'Where security matters, I tighten accounts, settings, backups, and risky habits.',
    icon: ShieldCheck
  },
  {
    title: 'Document',
    text: 'You leave with clear next steps, settings, recommendations, and a support path.',
    icon: DownloadCloud
  }
]

const trustPoints = [
  'CompTIA A+',
  'CompTIA Security+',
  'Cybersecurity graduate background',
  'Clear explanations',
  'Local support',
  'Home, church, nonprofit, and small business focus'
]

const contactOptions = [
  'Computer Troubleshooting & Setup',
  'Wi-Fi & Network Support',
  'Account, Email & Password Security',
  'Small Business IT Support',
  'Cybersecurity Checkup',
  'Data Backup Planning',
  'Church Livestream & AV Support',
  'Resume, LinkedIn & Tech Career Help',
  'Not sure yet'
]

const contactInfo = {
  email: 'williamcartwright427@gmail.com',
  phoneDisplay: '(516)-725-6490',
  phoneHref: '+15167256490',
  linkedin: 'https://linked.com/neanderdevil/'
}

const web3FormsAccessKey = '02b17a67-ee5c-41b5-ba19-eb527dcd28cb'

function ProfilePhoto() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <div className="reveal-in reveal-delay-2 relative mx-auto w-full max-w-md">
      <div className="absolute -left-4 top-8 hidden h-28 w-2 rounded bg-electric shadow-electric sm:block" />
      <div className="rounded border border-white/12 bg-white/8 p-4 shadow-electric backdrop-blur">
        <div className="relative overflow-hidden rounded border border-white/10 bg-navy">
          {hasPhoto ? (
            <img
              src="/profile-photo.jpg"
              alt="Neander Devil"
              onError={() => setHasPhoto(false)}
              className="aspect-[4/5] w-full object-cover object-[50%_18%]"
            />
          ) : (
            <div className="grid aspect-[4/5] w-full place-items-center bg-[linear-gradient(135deg,#0b1b33,#102a4f)]">
              <div className="grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-electric text-4xl font-black text-white">
                ND
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-electric">Principal consultant</p>
            <p className="mt-1 font-display text-2xl font-black text-white">Neander Devil</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {['Secure setup', 'Clear support'].map((item) => (
            <div key={item} className="rounded border border-white/10 bg-white/8 px-3 py-2 text-center text-xs font-bold text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })

  async function handleContactSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus({ type: 'loading', message: 'Sending your request...' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()

      if (result.success) {
        form.reset()
        setFormStatus({
          type: 'success',
          message: 'Thanks. Your request was sent successfully.'
        })
        return
      }

      setFormStatus({
        type: 'error',
        message: result.message || 'Your request could not be sent. Please email me directly.'
      })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Your request could not be sent. Please email me directly.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded">
            <span className="grid h-10 w-10 place-items-center rounded bg-electric font-display text-base font-black text-white">
              ND
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Neander Cyber Solutions</span>
              <span className="block text-xs text-slate-300">Cybersecurity & IT Consulting</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-ring grid h-10 w-10 place-items-center rounded border border-white/15 text-white lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-navy px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring rounded py-2 text-sm font-medium text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="signal-grid absolute inset-0 opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(31,143,255,0.24),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%)]" />
          <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="reveal-in max-w-3xl">
              <p className="eyebrow">Cybersecurity & IT consulting for local organizations</p>
              <p className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
                Neander Cyber Solutions
              </p>
              <h1 className="mt-3 max-w-4xl font-display text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
                Practical tech support with security built in.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                I help individuals, churches, nonprofits, and small businesses fix frustrating
                technology problems, protect important accounts, improve Wi-Fi, plan backups, and keep
                systems running with less stress.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-electric px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-400"
                >
                  Request Support
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  View Services
                </a>
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {trustPoints.slice(0, 4).map((point) => (
                  <span key={point} className="rounded border border-white/15 bg-white/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-100">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <ProfilePhoto />
          </div>
          <div className="section-shell relative pb-8">
            <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
              {[
                ['Support lane', 'Homes, churches, nonprofits, small businesses'],
                ['Security lens', 'Accounts, backups, Wi-Fi, email, user habits'],
                ['Client experience', 'Plain language, calm process, clear next steps']
              ].map(([label, value]) => (
                <div key={label} className="rounded border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-electric">{label}</p>
                  <p className="mt-2 text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Who I Help</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Technology help for people who need answers, not jargon.
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                The work changes from client to client. The standard stays the same: professional,
                patient, secure, and easy to understand.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {clientTypes.map((client) => {
                const Icon = client.icon
                return (
                  <article key={client.title} className="card-lift rounded border border-line bg-cloud p-6 shadow-sm">
                    <div className="grid h-12 w-12 place-items-center rounded bg-navy text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-black">{client.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel">{client.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="eyebrow">Services</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                  Independent IT & Cybersecurity Support
                </h2>
              </div>
              <p className="text-base leading-7 text-steel">
                From urgent troubleshooting to security checkups, I provide hands-on support that helps
                clients make better technology decisions and avoid preventable problems.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article
                    key={service.title}
                    className="card-lift group rounded border border-line bg-white p-6 shadow-sm"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded bg-blue-50 text-electric transition group-hover:bg-electric group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel">{service.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="process" className="bg-navy py-16 text-white sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Process</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                A calm path from “something is wrong” to “we know what to do.”
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <article key={step.title} className="rounded border border-white/12 bg-white/8 p-6 backdrop-blur">
                    <Icon className="text-electric" size={28} />
                    <h3 className="mt-5 font-display text-xl font-black">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{step.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded border border-line bg-cloud p-6 shadow-sm">
              <p className="eyebrow">Trust Signals</p>
              <div className="mt-6 grid gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded border border-line bg-white p-4">
                    <BadgeCheck className="shrink-0 text-electric" size={20} />
                    <span className="font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Professional support with a security-first mindset.
              </h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Neander Devil is a cybersecurity and IT professional with CompTIA A+ and Security+
                credentials, a cybersecurity graduate background, and hands-on experience helping
                people and organizations solve technical problems.
              </p>
              <p className="mt-4 text-lg leading-8 text-steel">
                Clients work with Neander because he makes technology less overwhelming. He explains
                the problem, fixes what can be fixed, flags what needs attention, and helps people
                build safer habits around their devices, accounts, networks, and data.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Tell me what is going on with your technology.
              </h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Share the issue, the type of help you need, and the best way to reach you. I will
                follow up with clear next steps.
              </p>
              <div className="mt-8 grid gap-4">
                <a href={`mailto:${contactInfo.email}`} className="focus-ring flex items-center gap-3 rounded text-steel transition hover:text-ink">
                  <Mail size={20} className="text-electric" />
                  {contactInfo.email}
                </a>
                <a href={`tel:${contactInfo.phoneHref}`} className="focus-ring flex items-center gap-3 rounded text-steel transition hover:text-ink">
                  <Phone size={20} className="text-electric" />
                  {contactInfo.phoneDisplay}
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded text-steel transition hover:text-ink">
                  <Linkedin size={20} className="text-electric" />
                  linked.com/neanderdevil/
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="rounded border border-line bg-white p-5 shadow-soft sm:p-6">
              <input type="hidden" name="access_key" value={web3FormsAccessKey} />
              <input type="hidden" name="subject" value="New IT support request from Neander Cyber Solutions website" />
              <input type="hidden" name="from_name" value="Neander Cyber Solutions" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Name
                  <input className="focus-ring rounded border border-line bg-cloud px-4 py-3 font-normal text-ink" name="name" type="text" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Email
                  <input className="focus-ring rounded border border-line bg-cloud px-4 py-3 font-normal text-ink" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Phone
                  <input className="focus-ring rounded border border-line bg-cloud px-4 py-3 font-normal text-ink" name="phone" type="tel" autoComplete="tel" />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Service Needed
                  <select className="focus-ring rounded border border-line bg-cloud px-4 py-3 font-normal text-ink" name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {contactOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold sm:col-span-2">
                  Message
                  <textarea
                    className="focus-ring min-h-36 rounded border border-line bg-cloud px-4 py-3 font-normal text-ink"
                    name="message"
                    required
                  />
                </label>
              </div>
              {formStatus.message && (
                <p
                  className={`mt-4 rounded border px-4 py-3 text-sm font-bold ${
                    formStatus.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : formStatus.type === 'error'
                        ? 'border-red-200 bg-red-50 text-red-800'
                        : 'border-line bg-cloud text-steel'
                  }`}
                  role="status"
                >
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-electric px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {formStatus.type === 'loading' ? 'Sending...' : 'Request Support'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Neander Cyber Solutions. Cybersecurity & IT Consulting.</p>
          <p className="flex items-center gap-2">
            <CloudCog size={17} className="text-electric" />
            Practical technology support, explained clearly.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
