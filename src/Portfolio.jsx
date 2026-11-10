
const DATA = {
  name: "Matúš Cuninka",
  initials: "MC",
  tagline:
    "Full-Stack, AI & Systems Engineer. I build web and mobile apps, AI integrations and automations, and I set up servers.",
  openToWork: "Open to work",
  location: "Based in Trnava, Slovakia",
  about:
    "I hold an MSc in Computer Science and I'm a developer with nearly 10 years of hands-on programming experience. I build web and mobile apps, AI integrations and automations, and I set up servers.",
  email: "cuninka.matus@gmail.com",
  phone: "+421 903 857 145",
  socials: [
    { label: "GitHub", url: "https://github.com/Cunoo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mat%C3%BA%C5%A1-cuninka-46892123a/" },
  ],
  services: [
    { title: "Automation & scraping", text: "Python and Bash scripts, web scrapers and automated workflows (Selenium, BeautifulSoup, Pandas, Paramiko) that replace repetitive manual tasks." },
    { title: "Data analytics", text: "Raw operational data turned into dashboards (Qlik Sense, Python, web app) and automated reports you can act on." },
    { title: "AI & LLM integrations", text: "OpenAI API, PyTorch models and prompt engineering built directly into your web or mobile app." },
    { title: "Web apps", text: "Scalable backends in FastAPI, Spring Boot or PHP, paired with responsive React frontends." },
    { title: "Mobile apps", text: "Cross-platform apps in React Native and Flutter, and native iOS apps in SwiftUI." },
    { title: "Servers & DevOps", text: "Linux and FreeBSD servers automated with Ansible and Bash, firewalls and routing with OPNsense, VPNs with WireGuard, network configuration (TCP/IP, DNS, SSH) and database design." },
  ],
  preferences: {
    title: "How I like to work",
    text: "I prefer part-time, long-term work, but I'm open to one-off projects too.",
  },
  highlights: [
    {
      title: "20x faster workflow",
      text: "Replaced an hour of daily manual web and server work with a 3-minute script built with Selenium and BeautifulSoup. It saves the client over 25 hours every month.",
    },
    {
      title: "Multi-tenant team system",
      text: "Built a Teams-style profile, login and registration system with multi-organization switching, role-based access control and team onboarding. Request batching saves about 500 requests per day.",
    },
    {
      title: "Invoicing with dispute workflow",
      text: "Developed an automated invoicing platform where clients can flag, reject and return incorrectly generated invoices for correction.",
    },
  ],
  work: [
    {
      org: "Freelancer",
      role: "Full-Stack, AI & Systems Engineer",
      period: "Dec 2025 – Present",
      text: "Production-ready web applications, custom AI integrations, automation scripts, automated data pipelines and server setup.",
    },
    {
      org: "BJ accounting services",
      role: "Software Developer",
      period: "Jul 2025 – Dec 2025",
      text: "Backend services in Java and Spring Boot, React frontend, REST APIs and PostgreSQL databases.",
    },
    {
      org: "Envien Group",
      role: "Data Analyst",
      period: "Mar 2023 – Sep 2025",
      text: "Reports and dashboards in Qlik Sense and SQL, plus Python scraping and automation of repetitive data tasks.",
    },
    {
      org: "Bee hive monitoring",
      role: "Embedded Developer",
      period: "Jun 2022 – Sep 2022",
      text: "Embedded software in C and C++ in a Linux environment, with Git and GitLab.",
    },
  ],
  education: [
    {
      org: "University of St. Cyril and Methodius in Trnava",
      role: "MSc in Computer Science",
      period: "2024 – 2026",
    },
    {
      org: "University of St. Cyril and Methodius in Trnava",
      role: "BSc in Computer Science",
      period: "2021 – 2024",
    },
    {
      org: "School of Electrical Engineering, Trnava",
      role: "Computer Networking",
      period: "2017 – 2021",
    },
  ],
  skills: [
    "Python", "Java", "C/C++", "JavaScript", "TypeScript", "PHP", "SQL", "Bash",
    "React", "React Native", "Flutter", "SwiftUI", "FastAPI", "Spring Boot",
    "PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "Selenium", "BeautifulSoup", "Pandas", "Linux", "FreeBSD", "Ansible", "OPNsense", "WireGuard", "Git",
    "PyTorch", "OpenAI API", "Qlik Sense", "Arduino", "Raspberry Pi",
  ],
  languages: "Slovak (native), English (fluent)",
};

/* ------------------------------------------------------------------ */

const NAV = [
  ["about", "About"],
  ["services", "Services"],
  ["preferences", "Work with me"],
  ["highlights", "Results"],
  ["work", "Work"],
  ["contact", "Contact"],
];

function Timeline({ items }) {
  return (
    <ul className="pf-list">
      {items.map((it) => (
        <li className={"pf-row" + (it.text ? " pf-row-top" : "")} key={it.org + it.role}>
          <span className="pf-mark" aria-hidden="true">{it.org[0]}</span>
          <div className="pf-row-main">
            <h3>{it.org}</h3>
            <p>{it.role}</p>
            {it.text && <p className="pf-desc">{it.text}</p>}
          </div>
          <span className="pf-date">{it.period}</span>
        </li>
      ))}
    </ul>
  );
}

function Links({ items }) {
  return (
    <div className="pf-links">
      {items.filter(([, url]) => url).map(([label, url]) => (
        <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="pf">
      <style>{css}</style>

      <header className="pf-nav">
        <nav aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="pf-hero">
          <div>
            <h1>Hi, I'm {DATA.name}</h1>
            <p className="pf-tagline">{DATA.tagline}</p>
            <p className="pf-loc">{DATA.location}</p>
          </div>
          <div className="pf-side">
            <div className="pf-avatar" aria-hidden="true">{DATA.initials}</div>
            <p className="pf-badge"><span aria-hidden="true" />{DATA.openToWork}</p>
          </div>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>{DATA.about}</p>
        </section>

        <section id="services">
          <h2>What I can do for you</h2>
          <ul className="pf-grid pf-services">
            {DATA.services.map((v) => (
              <li className="pf-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="preferences">
          <h2>{DATA.preferences.title}</h2>
          <p>{DATA.preferences.text}</p>
        </section>

        <section id="highlights">
          <h2>Recent results</h2>
          <ul className="pf-grid pf-services">
            {DATA.highlights.map((h) => (
              <li className="pf-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work">
          <h2>Work Experience</h2>
          <Timeline items={DATA.work} />
          <h2>Education</h2>
          <Timeline items={DATA.education} />
          <h2>Skills</h2>
          <ul className="pf-tags">
            {DATA.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="github">
          <h2>My projects</h2>
          <p className="pf-lead">
            My code and personal projects live on GitHub.
          </p>
          <a
            className="pf-gh"
            href={DATA.socials.find((x) => x.label === "GitHub").url}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>
              <strong>github.com/Cunoo</strong>
              <small>Browse my repositories</small>
            </span>
          </a>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <p>
            I'm open to work and happy to talk about your project.{" "}
            Write or call me:
          </p>
          <ul className="pf-contact">
            <li>
              <span>Email</span>
              <a className="pf-mail" href={`mailto:${DATA.email}`}>{DATA.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a className="pf-mail" href={`tel:${DATA.phone.replace(/\s/g, "")}`}>{DATA.phone}</a>
            </li>
          </ul>
          <p className="pf-lead">Languages: {DATA.languages}</p>
        </section>
      </main>

      <footer className="pf-foot">
        <ul>
          {DATA.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} {DATA.name}</p>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Source+Sans+3:wght@400;500;600&display=swap');
html, body { margin: 0; padding: 0; background: #f6f7fb; }
@media (prefers-color-scheme: dark) { html, body { background: #0f1320; } }
#root { max-width: none; margin: 0; padding: 0; text-align: left; }
.pf {
  --bg: #f6f7fb; --surface: #ffffff; --ink: #151a27; --muted: #5d6579;
  --line: #e1e4ee; --accent: #2b50e6; --accent-soft: #e8ecfd;
  --display: 'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif;
  --body: 'Source Sans 3', 'Segoe UI', system-ui, sans-serif;
  background: var(--bg); color: var(--ink); font-family: var(--body);
  font-size: 17px; line-height: 1.6; min-height: 100vh;
  box-sizing: border-box; scroll-behavior: smooth;
}
@media (prefers-color-scheme: dark) {
  .pf {
    --bg: #0f1320; --surface: #171c2d; --ink: #eceff8; --muted: #9aa3bb;
    --line: #272e45; --accent: #8aa2ff; --accent-soft: #1f2744;
  }
}
.pf *, .pf *::before, .pf *::after { box-sizing: border-box; }
.pf a { color: inherit; }
.pf main, .pf .pf-foot { max-width: 720px; margin: 0 auto; padding: 0 24px; }

.pf-nav { position: sticky; top: 0; z-index: 5; background: color-mix(in srgb, var(--bg) 88%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); }
.pf-nav nav { max-width: 720px; margin: 0 auto; padding: 12px 24px; display: flex; gap: 20px; overflow-x: auto; }
.pf-nav a { text-decoration: none; color: var(--muted); font-weight: 500; font-size: 15px; white-space: nowrap; }
.pf-nav a:hover { color: var(--ink); }

.pf a:focus-visible, .pf button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

.pf-hero { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 72px 0 40px; }
.pf-hero h1 { font-family: var(--display); font-weight: 700; font-size: clamp(34px, 7vw, 52px); line-height: 1.08; letter-spacing: -0.02em; margin: 0 0 16px; }
.pf-tagline { color: var(--muted); font-size: 19px; margin: 0; max-width: 46ch; }
.pf-avatar { flex: none; width: 112px; height: 112px; border-radius: 50%; display: grid; place-items: center; background: var(--accent); color: #fff; font-family: var(--display); font-weight: 700; font-size: 38px; }
@media (prefers-color-scheme: dark) { .pf-avatar { color: #0f1320; } }
@media (max-width: 560px) { .pf-hero { flex-direction: column-reverse; align-items: flex-start; padding-top: 48px; } .pf-side { flex-direction: row; align-items: center; } .pf-avatar { width: 88px; height: 88px; font-size: 30px; } }

.pf section { padding: 36px 0; scroll-margin-top: 56px; }
.pf h2 { font-family: var(--display); font-weight: 700; font-size: 26px; letter-spacing: -0.01em; margin: 36px 0 16px; }
.pf section > h2:first-child { margin-top: 0; }
.pf p { margin: 0 0 12px; }
.pf-lead { color: var(--muted); }

.pf-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.pf-row { display: flex; align-items: center; gap: 16px; padding: 14px 16px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.pf-row-top { align-items: flex-start; }
.pf-mark { flex: none; width: 44px; height: 44px; border-radius: 10px; background: var(--accent-soft); color: var(--accent); display: grid; place-items: center; font-family: var(--display); font-weight: 700; font-size: 19px; }
.pf-row-main { flex: 1; min-width: 0; }
.pf-row-main h3 { font-size: 18px; margin: 0; font-weight: 600; }
.pf-row-main p { margin: 0 0 6px; color: var(--muted); }
.pf-row-main p:last-of-type { margin-bottom: 0; }
.pf-meta { font-size: 15px; }
.pf-date { color: var(--muted); font-size: 14px; white-space: nowrap; }
@media (max-width: 560px) { .pf-row:not(.pf-row-top) { flex-wrap: wrap; } .pf-row:not(.pf-row-top) .pf-date { margin-left: 60px; } }
.pf-award { margin-left: 10px; font-size: 14px; font-weight: 500; background: var(--accent-soft); color: var(--accent); padding: 2px 10px; border-radius: 99px; }

.pf-tags { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.pf-tags li { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 4px 12px; font-size: 15px; font-weight: 500; }
.pf-tags-sm { margin: 10px 0 14px; }
.pf-tags-sm li { font-size: 13px; padding: 2px 9px; color: var(--muted); }

.pf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 20px; }
.pf-card { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; }
.pf-card-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
.pf-card h3 { margin: 0; font-family: var(--display); font-size: 20px; }
.pf-clamp { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.pf-more { align-self: flex-start; background: none; border: 0; padding: 0; color: var(--accent); font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; }
.pf-links { display: flex; gap: 10px; margin-top: auto; padding-top: 6px; }
.pf-row-main .pf-links { margin-top: 10px; padding-top: 0; }
.pf-links a { font-size: 14px; font-weight: 600; text-decoration: none; border: 1px solid var(--line); border-radius: 8px; padding: 4px 12px; transition: background .15s, border-color .15s; }
.pf-links a:hover { background: var(--accent-soft); border-color: var(--accent); }

.pf-side { flex: none; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.pf-badge { display: inline-flex; align-items: center; gap: 8px; margin: 0; padding: 4px 12px; border-radius: 99px; background: var(--accent-soft); color: var(--accent); font-size: 14px; font-weight: 600; }
.pf-badge span { width: 8px; height: 8px; border-radius: 50%; background: #1fa971; }
.pf-loc { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
.pf-desc { font-size: 15px; }
.pf-services { list-style: none; padding: 0; margin: 0; }
.pf-services .pf-card p { margin: 6px 0 0; color: var(--muted); font-size: 16px; }
.pf-contact { list-style: none; margin: 0 0 16px; padding: 0; display: grid; gap: 8px; }
.pf-contact li { display: flex; gap: 16px; align-items: baseline; }
.pf-contact span { width: 56px; color: var(--muted); font-size: 15px; }
.pf-gh { display: inline-flex; align-items: center; gap: 16px; margin-top: 8px; padding: 16px 22px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; text-decoration: none; transition: border-color .15s, background .15s; }
.pf-gh:hover { border-color: var(--accent); background: var(--accent-soft); }
.pf-gh strong { display: block; font-family: var(--display); font-size: 18px; }
.pf-gh small { color: var(--muted); font-size: 14px; }
.pf-mail { color: var(--accent); font-weight: 600; }

.pf-foot { border-top: 1px solid var(--line); margin-top: 24px; padding-top: 24px; padding-bottom: 48px; max-width: 720px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.pf-foot ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; }
.pf-foot a { color: var(--muted); text-decoration: none; font-size: 15px; }
.pf-foot a:hover { color: var(--ink); }
.pf-foot p { margin: 0; color: var(--muted); font-size: 14px; }

@media (prefers-reduced-motion: reduce) { .pf { scroll-behavior: auto; } .pf * { transition: none !important; } }
`;