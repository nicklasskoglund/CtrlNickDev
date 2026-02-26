export const sections = ["home", "about", "education", "stack", "projects", "activity", "contact"];

export const translations = {
  sv: {
    nav: {
      home: "Hem",
      about: "Om mig",
      education: "Utbildning",
      stack: "Kompetenser",
      projects: "Projekt",
      activity: "GitHub",
      contact: "Kontakt",
      menu: "Meny",
      close: "Stäng"
    },
    hero: {
      greeting: "Nicklas Skoglund",
      tagline: "\"Lär maskiner att lära sig, medan de lär mig tålamod. Under tiden förvandlar jag koffein till commits… en bugg i taget.\"",
      intro:
        "AI Developer-student • Debug Mode: ON — coffee-addict, gamer, sportfåne och musiknörd som bygger saker som funkar med Python, web och AI: från mönster och insikter till lösningar jag kan skeppa och förbättra.",
      noticeLabel: "Notis",
      notice: "Öppen för praktik / LIA från november 2026",
      viewProjects: "Se projekt",
      contact: "Kontakt"
    },
    about: {
      title: "Om mig",
      text:
        "Jag är AI Developer-student i Stockholm och trivs bäst i korsningen mellan kod, data och produkt. Gamer-mindset i verkliga livet: lär mönster, anpassa snabbt, levla upp. Musiknörd och före detta DJ/producer som fortfarande jagar perfekta grooves, gillar sport och laddar om i naturen. Scrum-vänlig av naturen: tydlighet, momentum och färre blockers. Skynet 2.0? Lugnt — det är bara v0.1 (och world-domination-knappen är gömd)."
    },
    education: {
      title: "Utbildning",
      details: "Detaljer",
      close: "Stäng",
      linkLabel: "Mer info",
      items: [
        {
          program: "AI-Developer",
          school: "JENSEN yrkeshögskola",
          period: "aug. 2025-juni 2027",
          location: "Stockholm, Kista",
          href: "https://www.jensenyh.se/utbildningar/ai-developer",
          details: [
            "Python, JavaScript",
            "Frontend (HTML, CSS, React, TypeScript m.m)",
            "Backend (SQL, Flask, MongoDB m.m)",
            "Verktyg/plattformar (Git, GitHub, DBeaver, MySQL Workbench, VSCode / PyCharm m.m)",
            "Testning (pytest, ruff, vulture, pip)",
            "Övrigt: Maskininlärning (ML), Tillämpad AI, Deep Learning, agila metoder, självledarskap"
          ]
        },
        {
          program: "Webbutveckling 1",
          school: "NTI-skolan",
          period: "apr. 2024-juni 2024",
          location: "Stockholm, distans",
          href: "https://nti.se/komvux-pa-distans/webbutveckling-niva-1/",
          details: [
            "Grunderna i HTML och CSS",
            "Optimering av bilder och media för webben",
            "Webbtillgänglighet",
            "Den fullständiga utvecklingscykeln för webbprojekt",
            "Legala och etiska aspekter av webbutveckling"
          ]
        },
        {
          program: "Gymnasium - Naturvetenskapsprogrammet",
          school: "Brännkyrka gymnasium (Midsommarkransen gymnasium)",
          period: "1997-2000",
          location: "Stockholm"
        }
      ]
    },
    stack: {
      title: "Kompetenser framåt",
      groups: {
        languages: "Språk",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Verktyg"
      }
    },
    projects: {
      title: "Projekt",
      openGithub: "Öppna GitHub",
      close: "Stäng",
      details: "Mer info",
      items: [
        {
          id: "ctrlnickdev",
          name: "CtrlNickDev",
          description:
            "Personlig portfoliosida som presenterar projekt, utbildning, tech‑stack och kontaktlänkar i en ren one‑pager.",
          tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Formspree"],
          github: "https://github.com/nicklasskoglund/CtrlNickDev",
          highlights: [
            "One‑page layout med smidig sektion‑navigation",
            "Svensk/engelsk språkväxling",
            "Projektkort med modaler och detaljer"
          ],
          gradient: "from-emerald-500/30 via-cyan-500/20 to-slate-900"
        },
        {
          id: "stocksimulator",
          name: "StockSimulator",
          description:
            "Förmodligen den näst bästa aktiehandelssimulatorn där ute. Scrum Master‑roll som del av AIDEV25.",
          tags: ["Python", "AIDEV25", "Scrum Master", "Handelssimulator"],
          github: "https://github.com/gonzycodes/StockSimulator",
          highlights: [
            "Teamprojekt inom AIDEV25",
            "Scrum‑baserat arbetssätt",
            "Simuleringslogik och samarbete"
          ],
          gradient: "from-cyan-500/30 via-blue-500/20 to-slate-900"
        },
        {
          id: "dungeon-runner",
          name: "DungeonRunner",
          description: "Litet 2D‑spel med rutnät i Python med Pygame (v0.3.0).",
          tags: ["Python", "Pygame", "2D", "Spelutveckling"],
          github: "https://github.com/nicklasskoglund/Dungeon-Runner",
          highlights: [
            "Rörelse på rutnät",
            "Versionerade iterationer",
            "Spellogik i Python"
          ],
          gradient: "from-violet-500/30 via-indigo-500/20 to-slate-900"
        },
        {
          id: "passgen",
          name: "PassGen",
          description: "Litet CLI‑projekt för lösenordsgenerering, del av AIDEV25.",
          tags: ["Python", "CLI", "AIDEV25", "Säkerhet"],
          github: "https://github.com/nicklasskoglund/PassGen",
          highlights: [
            "Enkel terminal‑UX",
            "Återanvändbar genereringslogik",
            "Kursprojektleverans"
          ],
          gradient: "from-emerald-500/30 via-teal-500/20 to-slate-900"
        },
        {
          id: "gissanumret",
          name: "GissaNumret",
          description: "Textbaserat nummergissningsspel i Python, del av AIDEV25.",
          tags: ["Python", "Textspel", "AIDEV25"],
          github: "https://github.com/Aeontonn/AIDEV-grupp1",
          highlights: [
            "Grupp‑repo",
            "Kärnloop för spelet",
            "Input‑ och feedbacklogik"
          ],
          gradient: "from-fuchsia-500/30 via-pink-500/20 to-slate-900"
        }
      ]
    },
    activity: {
      title: "GitHub",
      cards: {
        "awesome-stats": "Nyckeltal",
        ghchart: "Commit-flöde"
      }
    },
    contact: {
      title: "Kontakt",
      subtitle: "Praktik, samarbete eller kreativa sidoprojekt.",
      open: "Öppna",
      send: "Skicka",
      name: "Namn",
      email: "E-post",
      message: "Meddelande",
      formHint:
        "Sätt VITE_FORMSPREE_FORM_ID i .env.local (lokalt) och i GitHub Secrets (deploy) för att visa formuläret.",
      thanks: "Tack! Ditt meddelande är skickat."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      stack: "Stack",
      projects: "Projects",
      activity: "GitHub",
      contact: "Contact",
      menu: "Menu",
      close: "Close"
    },
    hero: {
      greeting: "Nicklas Skoglund",
      tagline: "\"Teaching machines to learn, while they teach me patience. Meanwhile, I turn caffeine into commits… one bug at a time.\"",
      intro:
        "AI Developer student • Debug Mode: ON — coffee addict, gamer, sports fanatic, and music nerd building things that work with Python, web, and AI: from patterns and insights to solutions I can ship and improve.",
      noticeLabel: "Notice",
      notice: "Open to internship from November 2026",
      viewProjects: "View projects",
      contact: "Contact"
    },
    about: {
      title: "About",
      text:
        "I’m an AI Developer student in Stockholm, and I thrive at the intersection of code, data, and product. Gamer mindset in real life: learn patterns, adapt fast, level up. Music nerd and former DJ/producer still chasing the perfect groove, into sports, and I recharge out in nature. Scrum-friendly by nature — clarity, momentum, and fewer blockers. Skynet 2.0? Relax — it’s just v0.1 (and the world-domination button is hidden)."
    },
    education: {
      title: "Education",
      details: "Details",
      close: "Close",
      linkLabel: "More info",
      items: [
        {
          program: "AI Developer",
          school: "JENSEN University of Applied Sciences",
          period: "Aug 2025-Jun 2027",
          location: "Stockholm, Kista",
          href: "https://www.jensenyh.se/utbildningar/ai-developer",
          details: [
            "Python, JavaScript",
            "Frontend (HTML, CSS, React, TypeScript, etc.)",
            "Backend (SQL, Flask, MongoDB, etc.)",
            "Tools/platforms (Git, GitHub, DBeaver, MySQL Workbench, VS Code / PyCharm, etc.)",
            "Testing (pytest, ruff, vulture, pip)",
            "Other: Machine Learning, Applied AI, Deep Learning, Agile methods, Self-leadership"
          ]
        },
        {
          program: "Web Development 1",
          school: "NTI-skolan",
          period: "Apr 2024-Jun 2024",
          location: "Stockholm, distance learning",
          href: "https://nti.se/komvux-pa-distans/webbutveckling-niva-1/",
          details: [
            "HTML and CSS fundamentals",
            "Optimizing images and media for the web",
            "Web accessibility",
            "The full development cycle for web projects",
            "Legal and ethical aspects of web development"
          ]
        },
        {
          program: "Upper Secondary - Natural Science Programme",
          school: "Brännkyrka Gymnasium (Midsommarkransen Gymnasium)",
          period: "1997-2000",
          location: "Stockholm"
        }
      ]
    },
    stack: {
      title: "Future Skills",
      groups: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools"
      }
    },
    projects: {
      title: "Projects",
      openGithub: "Open GitHub",
      close: "Close",
      details: "More info",
      items: [
        {
          id: "ctrlnickdev",
          name: "CtrlNickDev",
          description:
            "Personal portfolio site built to present projects, education, tech stack, and contact links in a clean one-page layout.",
          tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Formspree"],
          github: "https://github.com/nicklasskoglund/CtrlNickDev",
          highlights: [
            "One-page portfolio with smooth section navigation",
            "Swedish and English language toggle",
            "Project cards with detailed modal views"
          ],
          gradient: "from-emerald-500/30 via-cyan-500/20 to-slate-900"
        },
        {
          id: "stocksimulator",
          name: "StockSimulator",
          description:
            "Probably the second best stock-trading simulator out there. Scrum Master role as part of AIDEV25.",
          tags: ["Python", "AIDEV25", "Scrum Master", "Trading Simulator"],
          github: "https://github.com/gonzycodes/StockSimulator",
          highlights: [
            "Team project within AIDEV25",
            "Scrum-based workflow",
            "Simulation logic and collaboration"
          ],
          gradient: "from-cyan-500/30 via-blue-500/20 to-slate-900"
        },
        {
          id: "dungeon-runner",
          name: "DungeonRunner",
          description: "Small 2D tile-based game in Python using Pygame (v0.3.0).",
          tags: ["Python", "Pygame", "2D", "Game Dev"],
          github: "https://github.com/nicklasskoglund/Dungeon-Runner",
          highlights: [
            "Tile-based movement",
            "Versioned iterations",
            "Gameplay logic in Python"
          ],
          gradient: "from-violet-500/30 via-indigo-500/20 to-slate-900"
        },
        {
          id: "passgen",
          name: "PassGen",
          description: "Small CLI password generator project, part of AIDEV25.",
          tags: ["Python", "CLI", "AIDEV25", "Security"],
          github: "https://github.com/nicklasskoglund/PassGen",
          highlights: [
            "Simple terminal UX",
            "Reusable generation logic",
            "Course project delivery"
          ],
          gradient: "from-emerald-500/30 via-teal-500/20 to-slate-900"
        },
        {
          id: "gissanumret",
          name: "GissaNumret",
          description: "Text-based number guessing game in Python, part of AIDEV25.",
          tags: ["Python", "Text Game", "AIDEV25"],
          github: "https://github.com/Aeontonn/AIDEV-grupp1",
          highlights: [
            "Group repository",
            "Core game loop",
            "Input and feedback logic"
          ],
          gradient: "from-fuchsia-500/30 via-pink-500/20 to-slate-900"
        }
      ]
    },
    activity: {
      title: "GitHub",
      cards: {
        "awesome-stats": "Key metrics",
        ghchart: "Commit flow"
      }
    },
    contact: {
      title: "Contact",
      open: "Open",
      send: "Send",
      name: "Name",
      email: "Email",
      message: "Message",
      formHint:
        "Set VITE_FORMSPREE_FORM_ID in .env.local (local) and GitHub Secrets (deploy) to display the form.",
      thanks: "Thanks! Your message has been sent."
    }
  }
};

export const stackGroups = {
  languages: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  frontend: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  backend: ["Flask", "MongoDB", "MySQL", "Applied AI", "Machine Learning", "Deep Learning"],
  tools: ["Git", "GitHub", "DBeaver", "VS Code", "PyCharm", "Agile Methods", "Self-leadership"]
};

export const activityLinks = [
  {
    id: "awesome-stats",
    title: "GitHub Stats",
    href: "https://git.io/awesome-stats-card",
    image: "https://awesome-github-stats.azurewebsites.net/user-stats/nicklasskoglund?cardType=github&theme=github-dark&fontFamily=&preferLogin=false"
  },
  {
    id: "ghchart",
    title: "Contribution Graph",
    href: "https://ghchart.rshah.org/nicklasskoglund",
    image: "https://ghchart.rshah.org/nicklasskoglund"
  }
];

export const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nicklas-skoglund-68650659/" },
  { label: "GitHub", href: "https://github.com/nicklasskoglund" },
  { label: "SoundCloud", href: "https://soundcloud.com/nicklas-enace" }
];
