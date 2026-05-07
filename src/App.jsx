import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Church,
  ClipboardList,
  CloudCog,
  Download,
  FileText,
  HardDrive,
  Laptop,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  UserRound,
  Wifi,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#seeking', label: 'Seeking' },
  { href: '#background', label: 'Background' },
  { href: '#resume', label: 'Resume' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
]

const targetRoles = [
  'Cybersecurity Analyst',
  'IT Support Specialist',
  'Help Desk Technician',
  'Technical Support Specialist',
  'SOC Analyst',
  'Desktop Support Technician',
  'Junior Systems Administrator',
  'Network Support Technician'
]

const quickView = [
  {
    label: 'Target Roles',
    value: 'Cybersecurity Analyst, IT Support Specialist, Help Desk Technician, SOC Analyst, Technical Support Specialist'
  },
  {
    label: 'Certifications',
    value: 'CompTIA A+, CompTIA Security+'
  },
  {
    label: 'Education',
    value: 'Cybersecurity graduate background'
  },
  {
    label: 'Strengths',
    value: 'Troubleshooting, security fundamentals, user support, account security, documentation, technical communication'
  },
  {
    label: 'Open To',
    value: 'Full-time IT and cybersecurity opportunities'
  }
]

const credentials = [
  'CompTIA A+',
  'CompTIA Security+',
  'Cybersecurity Graduate',
  'IT Support',
  'Cybersecurity'
]

const skills = [
  'Technical troubleshooting',
  'Help desk support',
  'Account security',
  'Password and MFA setup',
  'Security awareness',
  'Microsoft 365 support',
  'Google Workspace support',
  'Wi-Fi and network basics',
  'Documentation',
  'Customer communication',
  'Backup planning',
  'Livestream and AV support'
]

const projects = [
  {
    title: 'User Support & Troubleshooting',
    text: 'Hands-on experience helping people diagnose slow computers, setup problems, account access issues, software confusion, and device reliability concerns.'
  },
  {
    title: 'Account Protection & Security Awareness',
    text: 'Practical support with password cleanup, multi-factor authentication, safer account recovery, phishing awareness, and security fundamentals.'
  },
  {
    title: 'Local Organization Technology Support',
    text: 'Support for small offices, churches, nonprofits, and community settings where clear communication and dependable systems matter.'
  }
]

const services = [
  {
    title: 'Computer Troubleshooting & Setup',
    text: 'Help with slow devices, new computers, updates, software problems, printers, and confusing tech errors.',
    icon: Laptop
  },
  {
    title: 'Wi-Fi & Network Support',
    text: 'Setup and troubleshooting for home, office, and organization networks with better reliability and security.',
    icon: Wifi
  },
  {
    title: 'Account, Email & Password Security',
    text: 'Password cleanup, MFA setup, safer recovery options, and practical protection for important accounts.',
    icon: LockKeyhole
  },
  {
    title: 'Small Business IT Support',
    text: 'Dependable support for business email, devices, cloud tools, network basics, and everyday operations.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Cybersecurity Checkups',
    text: 'Plain-language reviews that identify risks, strengthen defenses, and turn security concerns into next steps.',
    icon: ShieldCheck
  },
  {
    title: 'Data Backup Planning',
    text: 'Simple backup plans for personal files, business records, church media, and critical organization data.',
    icon: HardDrive
  },
  {
    title: 'Church Livestream & AV Support',
    text: 'Support for OBS, livestream workflows, audio/video troubleshooting, presentation devices, and Wi-Fi needs.',
    icon: Church
  },
  {
    title: 'Resume, LinkedIn & Tech Career Help',
    text: 'Support for career materials, entry-level IT direction, LinkedIn cleanup, and explaining technical experience clearly.',
    icon: Linkedin
  }
]

const contactOptions = [
  'Full-time role opportunity',
  'Recruiter or employer inquiry',
  'Cybersecurity role discussion',
  'IT support role discussion',
  'Computer Troubleshooting & Setup',
  'Wi-Fi & Network Support',
  'Account, Email & Password Security',
  'Small Business IT Support',
  'Cybersecurity Checkups',
  'Data Backup Planning',
  'Church Livestream & AV Support',
  'Resume, LinkedIn & Tech Career Help'
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
    <div className="rounded border border-white/12 bg-white/8 p-4 shadow-soft backdrop-blur">
      <div className="relative overflow-hidden rounded border border-white/10 bg-navy">
        {hasPhoto ? (
          <img
            src="/profile-photo.jpg"
            alt="Neander Devil"
            onError={() => setHasPhoto(false)}
            className="aspect-[4/5] w-full object-cover"
          />
        ) : (
          <div className="grid aspect-[4/5] w-full place-items-center bg-[linear-gradient(135deg,#0b1b33,#102a4f)]">
            <div className="grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-electric text-4xl font-black text-white">
              ND
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5">
          <p className="text-sm font-semibold text-slate-300">Available for full-time roles</p>
          <p className="mt-1 text-2xl font-black text-white">Cybersecurity & IT</p>
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

    setFormStatus({ type: 'loading', message: 'Sending your message...' })

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
          message: 'Thanks. Your message was sent successfully.'
        })
        return
      }

      setFormStatus({
        type: 'error',
        message: result.message || 'Something went wrong. Please email me directly.'
      })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Message could not be sent. Please email me directly.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded">
            <span className="grid h-10 w-10 place-items-center rounded bg-electric text-base font-black text-white">
              ND
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Neander Devil</span>
              <span className="block text-xs text-slate-300">Cybersecurity & IT Professional</span>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(31,143,255,0.24),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%)]" />
          <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Seeking full-time cybersecurity and IT opportunities</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                Cybersecurity & IT Professional
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                I am a cybersecurity and IT professional with CompTIA A+ and Security+ certifications,
                a cybersecurity graduate background, and hands-on experience solving real-world
                technology problems. I am currently seeking a full-time opportunity in cybersecurity,
                IT support, technical support, or related technology roles.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#resume"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-electric px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-400"
                >
                  <Download size={18} />
                  View Resume
                </a>
                <a
                  href="#background"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  View Professional Background
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Request IT Support
                </a>
              </div>
            </div>

            <ProfilePhoto />
          </div>
        </section>

        <section id="seeking" className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="eyebrow">Currently Seeking</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Ready for the next full-time role</h2>
                <p className="mt-5 text-lg leading-8 text-steel">
                  I am currently seeking a full-time opportunity in cybersecurity, IT support,
                  technical support, security operations, or related technology roles. I am especially
                  interested in positions where I can combine troubleshooting, user support, security
                  awareness, documentation, and hands-on technical problem-solving.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {targetRoles.map((role) => (
                  <div key={role} className="flex items-center gap-3 rounded border border-line bg-cloud p-4 shadow-sm">
                    <CheckCircle2 className="shrink-0 text-electric" size={20} />
                    <span className="font-bold">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Recruiter Quick View</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The fast scan for hiring teams</h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {quickView.map((item) => (
                <article key={item.label} className="rounded border border-line bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-electric">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-steel">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="background" className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded border border-line bg-cloud p-6 shadow-sm">
              <div className="grid h-16 w-16 place-items-center rounded bg-navy text-white">
                <UserRound size={31} />
              </div>
              <h2 className="mt-6 text-3xl font-black tracking-tight">Neander Devil</h2>
              <p className="mt-2 font-semibold text-electric">Cybersecurity & IT Professional</p>
              <div className="mt-6 grid gap-3 text-sm text-steel">
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-electric" />
                  Open to full-time cybersecurity and IT opportunities
                </p>
                <p className="flex items-center gap-3">
                  <BriefcaseBusiness size={18} className="text-electric" />
                  Also provides independent local technology support
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Professional Summary</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Security-minded support with clear communication</h2>
              <p className="mt-5 text-lg leading-8 text-steel">
                Neander Devil is a cybersecurity and IT professional with CompTIA A+ and
                Security+ certifications, a cybersecurity graduate background, and hands-on experience
                helping people solve technical problems. He brings a practical support mindset,
                security fundamentals, and the ability to explain complex issues in plain language.
              </p>
              <p className="mt-4 text-lg leading-8 text-steel">
                His professional direction is focused on full-time cybersecurity, IT support,
                technical support, SOC, help desk, and related technology roles. He is especially
                interested in environments that value troubleshooting, documentation, user support,
                account security, and steady technical growth.
              </p>
            </div>
          </div>
        </section>

        <section id="resume" className="bg-navy py-16 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow">Resume & Credentials</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Certified, prepared, and ready to contribute
                </h2>
                <p className="mt-4 leading-7 text-slate-200">
                  Resume summary: cybersecurity and IT professional with CompTIA A+ and Security+,
                  cybersecurity graduate preparation, technical troubleshooting experience, account
                  security knowledge, documentation skills, and a strong user-support foundation.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((credential) => (
                    <span
                      key={credential}
                      className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
                    >
                      <BadgeCheck size={16} className="text-electric" />
                      {credential}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="/resume.pdf"
                    download
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-white px-5 py-3 text-sm font-black text-navy transition hover:bg-blue-50"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a
                    href="#contact"
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                  >
                    <Mail size={18} />
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded border border-white/15 bg-white shadow-soft">
                <div className="flex items-center justify-between border-b border-line bg-cloud px-4 py-3 text-navy">
                  <div className="flex items-center gap-2 text-sm font-black">
                    <FileText size={18} className="text-electric" />
                    resume.pdf
                  </div>
                  <a href="/resume.pdf" className="focus-ring rounded text-sm font-bold text-electric hover:text-blue-700">
                    Open PDF
                  </a>
                </div>
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  className="h-[520px] w-full bg-white"
                  aria-label="Embedded resume PDF viewer"
                >
                  <div className="p-6 text-navy">
                    <p className="font-bold">The PDF viewer could not load in this browser.</p>
                    <a href="/resume.pdf" className="mt-3 inline-flex font-bold text-electric">
                      Open the resume PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Skills</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Practical technical strengths</h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded border border-line bg-white p-4 shadow-sm">
                  <Award className="shrink-0 text-electric" size={20} />
                  <span className="font-bold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Experience / Projects</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Hands-on problem solving</h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="rounded border border-line bg-cloud p-6 shadow-sm">
                  <ClipboardList className="text-electric" size={28} />
                  <h3 className="mt-5 text-xl font-black">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Independent IT & Cybersecurity Support</h2>
              <p className="mt-4 text-base leading-7 text-steel">
                In addition to my professional career goals, I also provide practical technology
                support for individuals, small businesses, churches, nonprofits, and local organizations.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article
                    key={service.title}
                    className="group rounded border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-soft"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded bg-blue-50 text-electric transition group-hover:bg-electric group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg font-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel">{service.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reach out about roles or support</h2>
              <p className="mt-4 text-base leading-7 text-steel">
                Employers and recruiters can reach out about full-time cybersecurity or IT opportunities.
                Local clients can also request practical technology support.
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

            <form onSubmit={handleContactSubmit} className="rounded border border-line bg-cloud p-5 shadow-sm sm:p-6">
              <input type="hidden" name="access_key" value={web3FormsAccessKey} />
              <input type="hidden" name="subject" value="New message from Neander Devil portfolio website" />
              <input type="hidden" name="from_name" value="Neander Devil Portfolio" />
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
                  Inquiry Type
                  <select className="focus-ring rounded border border-line bg-white px-4 py-3 font-normal text-ink" name="service" defaultValue="">
                    <option value="" disabled>
                      Select an inquiry
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
                className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-electric px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500 sm:w-auto"
              >
                {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Neander Devil. Cybersecurity & IT Professional.</p>
          <p className="flex items-center gap-2">
            <CloudCog size={17} className="text-electric" />
            Full-time cybersecurity/IT candidate and practical technology support.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
