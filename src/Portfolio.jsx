import { useState, useEffect } from "react";


const SHARED = {
  name: "Matúš Cuninka",
  initials: "MC",
  email: "contact@matus-cuninka.dev",
  phone: "+421 903 857 145",
  socials: [
    { label: "GitHub", url: "https://github.com/Cunoo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mat%C3%BA%C5%A1-cuninka-46892123a/" },
  ],
  skills: [
    "Python", "Java", "C/C++", "JavaScript", "TypeScript", "PHP", "SQL", "Bash",
    "React", "React Native", "Flutter", "SwiftUI", "FastAPI", "Spring Boot",
    "PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "Selenium", "BeautifulSoup", "Pandas", "Linux", "FreeBSD", "Ansible", "OPNsense", "WireGuard", "Git",
    "PyTorch", "OpenAI API", "Qlik Sense", "Arduino", "Raspberry Pi",
  ],
};

const GITHUB_URL = SHARED.socials.find((x) => x.label === "GitHub").url;

const TRANSLATIONS = {
  en: {
    nav: [
      ["about", "About"],
      ["services", "Services"],
      ["preferences", "Work with me"],
      ["highlights", "Results"],
      ["work", "Work"],
      ["contact", "Contact"],
    ],
    DATA: {
      tagline:
        "Full-Stack, AI & Automation Engineer. I build web and mobile apps, AI integrations and automations, and I set up servers.",
      openToWork: "Open to work",
      location: "Based in Trnava, Slovakia",
      about:
        "I hold an MSc in Computer Science and I'm a developer with nearly 10 years of hands-on programming experience. I build web and mobile apps, AI integrations and automations, and I set up servers.",
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
          title: "Multi-tenant system",
          text: "Built a Teams-style profile, login and registration system with React and Java Spring Boot, featuring multi-organization switching, role-based access control and team onboarding.",
        },
        {
          title: "Invoicing with dispute workflow",
          text: "Developed an automated invoicing platform where clients can flag, reject and return incorrectly generated invoices for correction.",
        },
        {
          title: "Up to 500x fewer network calls",
          text: "Implemented batched writes to a storage bucket in a Spring Boot backend. Records are grouped into batches of 500 and sent in a single HTTP request instead of 500 separate ones, which cuts the number of network calls and their cost.",
        },
      ],
      work: [
        {
          org: "Freelancer",
          role: "Full-Stack, AI & Automation Engineer",
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
      languages: "Slovak (native), English (fluent)",
    },
    ui: {
      aboutTitle: "About",
      servicesTitle: "What I can do for you",
      highlightsTitle: "Recent results",
      workTitle: "Work Experience",
      skillsTitle: "Skills",
      githubTitle: "My projects",
      githubLead: "My code and personal projects live on GitHub.",
      githubBrowse: "Browse my repositories",
      contactTitle: "Get in Touch",
      contactLead: "I'm open to work and happy to talk about your project. Write or call me:",
      emailLabel: "Email",
      phoneLabel: "Phone",
      languagesLabel: "Languages",
      footerRights: "All rights reserved.",
      navLabel: "Sections",
      langToggleLabel: "Switch language to Slovak",
      langToggleText: "SK",
      metaTitle: "Matúš Cuninka – Full-Stack, AI & Automation Engineer",      metaDescription:
        "Portfolio of Matúš Cuninka: web and mobile apps, AI integrations, automation and server setup. Based in Trnava, Slovakia.",
    },
  },

  sk: {
    nav: [
      ["about", "O mne"],
      ["services", "Služby"],
      ["preferences", "Spolupráca"],
      ["highlights", "Výsledky"],
      ["work", "Prax"],
      ["contact", "Kontakt"],
    ],
    DATA: {
      tagline:
        "Full-Stack, AI & Automation Engineer. Vyvíjam webové a mobilné aplikácie, AI integrácie, automatizácie a nastavujem servery.",
      openToWork: "Mám záujem o prácu",
      location: "Sídlim v Trnave, Slovensko",
      about:
        "Mám magisterský titul (Mgr.) v odbore informatika a takmer 10 rokov praktických skúseností s programovaním. Tvorím webové a mobilné aplikácie, AI integrácie, automatizácie a nastavujem servery.",
      services: [
        { title: "Automatizácia a web scraping", text: "Python a Bash skripty, web scrapery a automatizované procesy (Selenium, BeautifulSoup, Pandas, Paramiko), ktoré nahrádzajú opakujúce sa manuálne úlohy." },
        { title: "Dátová analytika", text: "Surové prevádzkové dáta premenené na prehľadné dashboardy (Qlik Sense, Python, webová aplikácia) a automatizované reporty, s ktorými sa dá pracovať." },
        { title: "AI a LLM integrácie", text: "OpenAI API, PyTorch modely a prompt engineering integrované priamo do vášho webu alebo mobilnej aplikácie." },
        { title: "Webové aplikácie", text: "Škálovateľné backendy vo FastAPI, Spring Boot alebo PHP v kombinácii s responzívnym frontendom v Reacte." },
        { title: "Mobilné aplikácie", text: "Multiplatformové aplikácie v React Native a Flutteri a natívne iOS aplikácie v SwiftUI." },
        { title: "Servery a DevOps", text: "Linuxové a FreeBSD servery automatizované cez Ansible a Bash, firewally a smerovanie (routing) s OPNsense, VPN cez WireGuard, sieťová konfigurácia (TCP/IP, DNS, SSH) a návrh databáz." },
      ],
      preferences: {
        title: "Ako rád pracujem",
        text: "Uprednostňujem čiastočný úväzok (part-time) a dlhodobú spoluprácu, ale nebránim sa ani jednorazovým projektom.",
      },
      highlights: [
        {
          title: "20-krát rýchlejší pracovný postup",
          text: "Hodinu dennej manuálnej práce s webom a serverom som nahradil 3-minútovým skriptom postaveným na Selenium a BeautifulSoup. Klientovi to šetrí vyše 25 hodín mesačne.",
        },
        {
          title: "Multi-tenant systém",
          text: "V Reacte a Jave so Spring Bootom som vytvoril profilový, prihlasovací a registračný systém v štýle Teams s prepínaním medzi organizáciami, riadením prístupov podľa rolí (RBAC) a onboardingom tímov.",
        },
        {
          title: "Fakturácia so systémom reklamácií",
          text: "Vyvinul som automatizovanú fakturačnú platformu, kde klienti môžu nesprávne vygenerované faktúry označiť, zamietnuť a vrátiť na opravu.",
        },
        {
          title: "Až 500-krát menej sieťových volaní",
          text: "V Spring Boot backende som implementoval dávkové odosielanie dát do bucketu. Záznamy sa zoskupujú po 500 a odosielajú jedným HTTP requestom namiesto 500 samostatných, čím sa znížil počet sieťových volaní aj náklady na ne.",
        },
      ],
      work: [
        {
          org: "Freelancer",
          role: "Full-Stack, AI & Automation Engineer",
          period: "Dec 2025 – súčasnosť",
          text: "Webové aplikácie pripravené do produkcie, vlastné AI integrácie, automatizačné skripty, dátové pipeline a nastavenie serverov.",
        },
        {
          org: "BJ accounting services",
          role: "Software Developer",
          period: "Júl 2025 – Dec 2025",
          text: "Backendové služby v Jave a Spring Boote, React frontend, REST API a PostgreSQL databázy.",
        },
        {
          org: "Envien Group",
          role: "Data Analyst",
          period: "Mar 2023 – Sep 2025",
          text: "Reporty a dashboardy v Qlik Sense a SQL, k tomu scraping v Pythone a automatizácia rutinných dátových úloh.",
        },
        {
          org: "Bee hive monitoring",
          role: "Embedded Developer",
          period: "Jún 2022 – Sep 2022",
          text: "Embedded softvér v C a C++ v linuxovom prostredí, s využitím Gitu a GitLabu.",
        },
      ],
      languages: "slovenčina (materinský jazyk), angličtina (plynule)",
    },
    ui: {
      aboutTitle: "O mne",
      servicesTitle: "Čo pre vás môžem urobiť",
      highlightsTitle: "Nedávne výsledky",
      workTitle: "Pracovné skúsenosti",
      skillsTitle: "Zručnosti",
      githubTitle: "Moje projekty",
      githubLead: "Môj kód a osobné projekty nájdete na GitHube.",
      githubBrowse: "Prezrieť moje repozitáre",
      contactTitle: "Kontakt",
      contactLead: "Mám záujem o prácu a rád sa porozprávam o vašom projekte. Napíšte mi alebo zavolajte:",
      emailLabel: "E-mail",
      phoneLabel: "Telefón",
      languagesLabel: "Jazyky",
      footerRights: "Všetky práva vyhradené.",
      navLabel: "Sekcie",
      langToggleLabel: "Prepnúť jazyk na angličtinu",
      langToggleText: "EN",
      metaTitle: "Matúš Cuninka – Full-Stack, AI & Automation Engineer",      metaDescription:
        "Portfólio Matúša Cuninku: webové a mobilné aplikácie, AI integrácie, automatizácia a nastavenie serverov. Sídlim v Trnave.",
    },
  },
};

/* ------------------------------------------------------------------ */

function getInitialLang() {
  try {
    const saved = localStorage.getItem("pf-lang");
    if (saved === "sk" || saved === "en") return saved;
  } catch {
  }
  if (typeof navigator !== "undefined") {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
    if (langs.some((l) => /^(sk|cs)/i.test(l))) return "sk";
  }
  return "en";
}

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

export default function Portfolio() {
  const [lang, setLang] = useState(getInitialLang);

  const t = TRANSLATIONS[lang];
  const DATA = { ...SHARED, ...t.DATA };

  useEffect(() => {
    try {
      localStorage.setItem("pf-lang", lang);
    } catch {
    }
    document.documentElement.lang = lang;
    document.title = t.ui.metaTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = t.ui.metaDescription;
  }, [lang, t]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "sk" : "en"));

  return (
    <div className="pf">
      <style>{css}</style>

      <header className="pf-nav">
        <nav aria-label={t.ui.navLabel}>
          <div className="pf-nav-links">
            {t.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>
          <button className="pf-lang-btn" onClick={toggleLang} aria-label={t.ui.langToggleLabel}>
            {t.ui.langToggleText}
          </button>
        </nav>
      </header>

      <main>
        <section className="pf-hero">
          <div>
            <h1>{DATA.name}</h1>
            <p className="pf-tagline">{DATA.tagline}</p>
            <p className="pf-loc">{DATA.location}</p>
          </div>
          <div className="pf-side">
            <div className="pf-avatar" aria-hidden="true">{DATA.initials}</div>
            <p className="pf-badge"><span aria-hidden="true" />{DATA.openToWork}</p>
          </div>
        </section>

        <section id="about">
          <h2>{t.ui.aboutTitle}</h2>
          <p>{DATA.about}</p>
        </section>

        <section id="services">
          <h2>{t.ui.servicesTitle}</h2>
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
          <h2>{t.ui.highlightsTitle}</h2>
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
          <h2>{t.ui.workTitle}</h2>
          <Timeline items={DATA.work} />
          <h2>{t.ui.skillsTitle}</h2>
          <ul className="pf-tags">
            {DATA.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="github">
          <h2>{t.ui.githubTitle}</h2>
          <p className="pf-lead">{t.ui.githubLead}</p>
          <a className="pf-gh" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>
              <strong>github.com/Cunoo</strong>
              <small>{t.ui.githubBrowse}</small>
            </span>
          </a>
        </section>

        <section id="contact">
          <h2>{t.ui.contactTitle}</h2>
          <p>{t.ui.contactLead}</p>
          <ul className="pf-contact">
            <li>
              <span>{t.ui.emailLabel}</span>
              <a className="pf-mail" href={`mailto:${DATA.email}`}>{DATA.email}</a>
            </li>
            <li>
              <span>{t.ui.phoneLabel}</span>
              <a className="pf-mail" href={`tel:${DATA.phone.replace(/\s/g, "")}`}>{DATA.phone}</a>
            </li>
          </ul>
          <p className="pf-lead">{t.ui.languagesLabel}: {DATA.languages}</p>
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
        <p>© {new Date().getFullYear()} {DATA.name}. {t.ui.footerRights}</p>
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
.pf-nav nav { max-width: 720px; margin: 0 auto; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.pf-nav-links { display: flex; gap: 20px; overflow-x: auto; flex: 1; scrollbar-width: none; }
.pf-nav-links::-webkit-scrollbar { display: none; }
.pf-nav a { text-decoration: none; color: var(--muted); font-weight: 500; font-size: 15px; white-space: nowrap; }
.pf-nav a:hover { color: var(--ink); }

.pf-lang-btn {
  background: var(--surface); border: 1px solid var(--line); border-radius: 8px;
  padding: 4px 12px; font: inherit; font-size: 13px; font-weight: 600; color: var(--ink);
  cursor: pointer; white-space: nowrap; flex: none;
  transition: background .15s, border-color .15s;
}
.pf-lang-btn:hover { background: var(--accent-soft); border-color: var(--accent); }

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
.pf-date { color: var(--muted); font-size: 14px; white-space: nowrap; }
@media (max-width: 560px) {
  .pf-row { flex-wrap: wrap; }
  .pf-row-main { flex: 1 1 calc(100% - 60px); }
  .pf-date { margin-left: 60px; }
}

.pf-tags { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.pf-tags li { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 4px 12px; font-size: 15px; font-weight: 500; }

.pf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 20px; }
.pf-card { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; }
.pf-card h3 { margin: 0; font-family: var(--display); font-size: 20px; }

.pf-side { flex: none; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.pf-badge { display: inline-flex; align-items: center; gap: 8px; margin: 0; padding: 4px 12px; border-radius: 99px; background: var(--accent-soft); color: var(--accent); font-size: 14px; font-weight: 600; }
.pf-badge span { width: 8px; height: 8px; border-radius: 50%; background: #1fa971; }
.pf-loc { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
.pf-desc { font-size: 15px; }
.pf-services { list-style: none; padding: 0; margin: 0; }
.pf-services .pf-card p { margin: 6px 0 0; color: var(--muted); font-size: 16px; }
.pf-contact { list-style: none; margin: 0 0 16px; padding: 0; display: grid; gap: 8px; }
.pf-contact li { display: flex; gap: 16px; align-items: baseline; }
.pf-contact span { width: 64px; color: var(--muted); font-size: 15px; }
.pf-gh { display: inline-flex; align-items: center; gap: 16px; margin-top: 8px; padding: 16px 22px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; text-decoration: none; transition: border-color .15s, background .15s; }
.pf-gh:hover { border-color: var(--accent); background: var(--accent-soft); }
.pf-gh strong { display: block; font-family: var(--display); font-size: 18px; }
.pf-gh small { color: var(--muted); font-size: 14px; }
.pf-mail { color: var(--accent); font-weight: 600; }

.pf .pf-foot { border-top: 1px solid var(--line); margin-top: 24px; padding-top: 24px; padding-bottom: 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.pf-foot ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; }
.pf-foot a { color: var(--muted); text-decoration: none; font-size: 15px; }
.pf-foot a:hover { color: var(--ink); }
.pf-foot p { margin: 0; color: var(--muted); font-size: 14px; }

@media (prefers-reduced-motion: reduce) { .pf { scroll-behavior: auto; } .pf * { transition: none !important; } }
`;
