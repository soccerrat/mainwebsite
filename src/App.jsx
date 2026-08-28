import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Church,
  CloudCog,
  HardDrive,
  Laptop,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#clients', label: 'Who we support' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
]

const clientTypes = [
  {
    title: 'Homes & Families',
    text: 'Patient help with slow computers, new device setup, Wi-Fi problems, account protection, and backup planning.',
    icon: Laptop,
    tag: 'Personal technology'
  },
  {
    title: 'Small Businesses',
    text: 'Reliable support for business email, cloud tools, devices, networks, security basics, and day-to-day operations.',
    icon: BriefcaseBusiness,
    tag: 'Business continuity'
  },
  {
    title: 'Churches & Nonprofits',
    text: 'Practical help with office technology, Wi-Fi, livestream workflows, OBS, AV troubleshooting, and account safety.',
    icon: Church,
    tag: 'Mission-critical support'
  }
]

const services = [
  {
    title: 'Computer Troubleshooting & Setup',
    text: 'Fix slow devices, set up new computers, resolve software issues, and turn confusing alerts into clear next steps.',
    icon: Laptop
  },
  {
    title: 'Wi-Fi & Network Support',
    text: 'Improve coverage, secure router settings, troubleshoot drops, and support home or office connectivity.',
    icon: Wifi
  },
  {
    title: 'Account, Email & Password Security',
    text: 'Set up MFA, strengthen passwords, review recovery settings, reduce phishing risk, and protect important accounts.',
    icon: LockKeyhole
  },
  {
    title: 'Small Business IT Support',
    text: 'Support Microsoft 365, Google Workspace, business email, devices, documentation, and practical tech decisions.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Cybersecurity Checkups',
    text: 'Review common risks, identify weak spots, explain priorities, and create a practical protection plan.',
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
    title: 'Technology Roadmaps',
    text: 'Translate technology needs into focused recommendations, realistic priorities, and a plan that fits the budget.',
    icon: Network
  }
]

const processSteps = [
  {
    title: 'Listen',
    text: 'Start with the real problem, the people affected, and what a successful fix needs to look like.',
    icon: MessageCircle
  },
  {
    title: 'Stabilize',
    text: 'Resolve the immediate issue and explain what is happening in plain language.',
    icon: Wrench
  },
  {
    title: 'Secure',
    text: 'Tighten accounts, settings, backups, and risky habits where security matters most.',
    icon: ShieldCheck
  },
  {
    title: 'Strengthen',
    text: 'Leave behind clear next steps, useful documentation, and a support path for what comes next.',
    icon: Sparkles
  }
]

const trustPoints = [
  'CompTIA A+',
  'CompTIA Security+',
  'Cybersecurity graduate background',
  'Security-first decisions',
  'Clear documentation',
  'Local, practical support'
]

const contactOptions = [
  'Computer Troubleshooting & Setup',
  'Wi-Fi & Network Support',
  'Account, Email & Password Security',
  'Small Business IT Support',
  'Cybersecurity Checkup',
  'Data Backup Planning',
  'Church Livestream & AV Support',
  'Technology Roadmap',
  'Not sure yet'
]

const contactInfo = {
  email: 'williamcartwright427@gmail.com',
  phoneDisplay: '(516)-725-6490',
  phoneHref: '+15167256490',
  linkedin: 'https://linked.com/neanderdevil/'
}

const businessName = 'VeritaGrid IT Solutions'
const web3FormsAccessKey = '02b17a67-ee5c-41b5-ba19-eb527dcd28cb'

function HeroSignalPanel() {
  return (
    <div className="relative isolate min-h-[480px] overflow-hidden rounded border border-white/15 bg-ink shadow-electric lg:min-h-[540px]">
      <img
        src="/operations-grid.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative flex h-full min-h-[480px] flex-col justify-between p-5 sm:p-7 lg:min-h-[540px]">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            VeritaGrid signal
          </div>
          <Activity size={18} className="text-electric" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded border border-white/15 bg-ink/70 p-4 backdrop-blur">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Security posture</p>
            <p className="mt-2 font-display text-2xl font-bold text-white">Clearer</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[78%] rounded-full bg-electric" />
            </div>
            <p className="mt-2 text-xs text-slate-300">Priorities mapped to action</p>
          </div>
          <div className="rounded border border-white/15 bg-ink/70 p-4 backdrop-blur">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Support mode</p>
            <p className="mt-2 font-display text-2xl font-bold text-white">Human</p>
            <p className="mt-4 text-xs leading-5 text-slate-300">Technical help with context, care, and clear communication.</p>
          </div>
        </div>

        <div className="rounded border border-electric/40 bg-navy/85 p-5 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-electric">The bridge</p>
              <p className="mt-2 max-w-xs font-display text-xl font-bold leading-tight text-white">From technology friction to dependable operations.</p>
            </div>
            <ArrowUpRight className="shrink-0 text-electric" size={22} />
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2">
            {['People', 'Devices', 'Accounts', 'Data'].map((label, index) => (
              <div key={label} className="border-t border-white/20 pt-2">
                <p className="text-[10px] font-bold text-slate-300">0{index + 1}</p>
                <p className="mt-1 text-xs font-bold text-white">{label}</p>
              </div>
            ))}
          </div>
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
        message: result.message || 'Your request could not be sent. Please email VeritaGrid directly.'
      })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Your request could not be sent. Please email VeritaGrid directly.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
        <nav className="section-shell flex h-[4.5rem] items-center justify-between">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded">
            <span className="grid h-10 w-10 place-items-center rounded bg-electric font-display text-base font-black text-white shadow-[0_8px_22px_rgba(31,143,255,0.28)]">
              SB
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">{businessName}</span>
              <span className="block text-[11px] uppercase tracking-[0.1em] text-slate-400">Technology, secured</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded border border-electric/60 px-4 py-2 text-sm font-bold text-white transition hover:bg-electric">
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
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
              <a href="#contact" onClick={() => setMenuOpen(false)} className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded bg-electric px-4 py-3 text-sm font-bold text-white">
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="section-shell relative grid min-h-[min(820px,calc(100vh-4.5rem))] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-20">
            <div className="reveal-in max-w-2xl">
              <p className="eyebrow">Cybersecurity + IT consulting</p>
              <h1 className="mt-6 font-display text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                Secure systems.<br />
                <span className="text-electric">Clear decisions.</span><br />
                Better operations.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Practical technology support for homes, churches, nonprofits, and small businesses. VeritaGrid brings calm troubleshooting, stronger security, and a clearer path forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-electric px-5 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-blue-400"
                >
                  Start a conversation
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Local support</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-electric" /> Security-minded</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Plain language</span>
              </div>
            </div>

            <div className="reveal-in reveal-delay-2">
              <HeroSignalPanel />
            </div>
          </div>
          <div className="section-shell pb-8 lg:pb-10">
            <div className="grid gap-px overflow-hidden rounded border border-white/15 bg-white/15 sm:grid-cols-3">
              {[
                ['For people', 'Support that respects the human side of technology'],
                ['For organizations', 'Systems that stay understandable and dependable'],
                ['For the long run', 'Security habits and documentation that compound']
              ].map(([label, value]) => (
                <div key={label} className="bg-navy/95 p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-electric">{label}</p>
                  <p className="mt-2 text-sm font-bold leading-5 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="bg-white py-20 sm:py-28">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="eyebrow">Who we support</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                  Technology help built around real life.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-steel">
                Different environments need different answers. The standard stays consistent: responsive service, thoughtful guidance, and security that makes sense.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {clientTypes.map((client) => {
                const Icon = client.icon
                return (
                  <article key={client.title} className="card-lift group rounded border border-line bg-cloud p-7 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded bg-navy text-white transition group-hover:bg-electric">
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-steel">{client.tag}</span>
                    </div>
                    <h3 className="mt-7 font-display text-2xl font-black">{client.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel">{client.text}</p>
                    <a href="#contact" className="focus-ring mt-6 inline-flex items-center gap-2 rounded text-sm font-bold text-ink transition hover:text-electric">
                      Discuss support
                      <ArrowUpRight size={16} />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="page-grid py-20 sm:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                Independent IT & Cybersecurity Support
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
                From a device that will not cooperate to a business that needs a safer foundation, each engagement is shaped around the actual environment and the next useful step.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <article key={service.title} className="card-lift group relative rounded border border-line bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded bg-blue-50 text-electric transition group-hover:bg-electric group-hover:text-white">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-black leading-snug">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel">{service.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="bg-navy py-20 text-white sm:py-28">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="eyebrow">Approach</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                  Calm, structured, and easy to follow.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Technology support works best when the process is visible. Each engagement moves from context to action, with security considered at every turn.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <article key={step.title} className="bg-navy p-7 transition hover:bg-[#102849]">
                    <div className="flex items-center justify-between">
                      <Icon className="text-electric" size={26} />
                      <span className="font-mono text-xs font-bold text-slate-500">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-black">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 sm:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="rounded border border-line bg-cloud p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Trust signals</p>
                <BadgeCheck className="text-electric" size={22} />
              </div>
              <div className="mt-7 grid gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded border border-line bg-white p-4">
                    <CheckCircle2 className="shrink-0 text-electric" size={19} />
                    <span className="text-sm font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">About VeritaGrid</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight sm:text-5xl">
                Technical capability, translated for people.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                VeritaGrid IT Solutions provides practical cybersecurity and IT support for the places where technology has to work: homes, community organizations, churches, nonprofits, and local businesses.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
                Led by Neander Devil, the practice combines CompTIA A+ and Security+ credentials, a cybersecurity graduate background, and hands-on experience solving real technical problems. The result is support that is professional enough for business and approachable enough for everyday technology.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['01', 'Explain', 'Make the issue understandable'],
                  ['02', 'Improve', 'Fix what is slowing things down'],
                  ['03', 'Protect', 'Build stronger habits and settings']
                ].map(([number, title, text]) => (
                  <div key={number} className="border-t-2 border-ink pt-4">
                    <p className="font-mono text-xs font-bold text-electric">{number}</p>
                    <p className="mt-3 font-display text-lg font-black">{title}</p>
                    <p className="mt-1 text-sm leading-5 text-steel">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-cloud py-20 sm:py-28">
          <div className="section-shell">
            <div className="grid gap-12 rounded border border-line bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                  Start with the situation.
                </h2>
                <p className="mt-5 text-lg leading-8 text-steel">
                  Share the issue, the environment, and the best way to reach you. The next step will be clear and practical.
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
                    LinkedIn profile
                  </a>
                </div>
                <div className="mt-10 border-l-2 border-electric pl-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-electric">Typical first step</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-ink">A short conversation to understand the situation and identify the right kind of support.</p>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="rounded border border-line bg-cloud p-5 sm:p-6">
                <input type="hidden" name="access_key" value={web3FormsAccessKey} />
                <input type="hidden" name="subject" value="New support request from VeritaGrid IT Solutions website" />
                <input type="hidden" name="from_name" value={businessName} />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">
                    Name
                    <input className="focus-ring rounded border border-line bg-white px-4 py-3 font-normal text-ink" name="name" type="text" autoComplete="name" required />
                  </label>
                  <label className="grid gap-2 text-sm font-bold">
                    Email
                    <input className="focus-ring rounded border border-line bg-white px-4 py-3 font-normal text-ink" name="email" type="email" autoComplete="email" required />
                  </label>
                  <label className="grid gap-2 text-sm font-bold">
                    Phone
                    <input className="focus-ring rounded border border-line bg-white px-4 py-3 font-normal text-ink" name="phone" type="tel" autoComplete="tel" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold">
                    Service needed
                    <select className="focus-ring rounded border border-line bg-white px-4 py-3 font-normal text-ink" name="service" defaultValue="">
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
                      className="focus-ring min-h-36 rounded border border-line bg-white px-4 py-3 font-normal text-ink"
                      name="message"
                      placeholder="What is happening, and what would a good outcome look like?"
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
                          : 'border-line bg-white text-steel'
                    }`}
                    role="status"
                  >
                    {formStatus.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-electric px-5 py-3.5 text-sm font-black text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {formStatus.type === 'loading' ? 'Sending...' : 'Send request'}
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white py-8">
        <div className="section-shell flex flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {businessName}. Cybersecurity & IT Consulting.</p>
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
