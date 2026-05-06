/* ==========================================================================
   Portfolio — Yahya Cherkani
   Script principal : thème, langue FR/EN, menu mobile, animations,
   scrollspy, contact effects, année footer, smooth scroll, filtres projets,
   sliders projets (avec swipe/touch), badges "En cours".
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const root = document.documentElement;

  /* ----------------------------------------------------------------------
     1. THEME — DARK / LIGHT
  ---------------------------------------------------------------------- */

  const themeToggle = document.getElementById("themeToggle");

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const applyTheme = (theme) => {
    const safeTheme = theme === "light" ? "light" : "dark";

    root.setAttribute("data-theme", safeTheme);
    localStorage.setItem("theme", safeTheme);

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        safeTheme === "dark"
          ? "Activer le mode clair"
          : "Activer le mode sombre",
      );

      themeToggle.setAttribute("aria-pressed", String(safeTheme === "light"));
    }
  };

  applyTheme(
    localStorage.getItem("theme") ||
      root.getAttribute("data-theme") ||
      getSystemTheme(),
  );

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ----------------------------------------------------------------------
     2. LANGUE — FR / EN POUR TOUTE LA PAGE
  ---------------------------------------------------------------------- */

  const langToggle = document.getElementById("langToggle");

  const translations = {
    fr: {
      pageTitle: "Yahya Cherkani — Développeur Full-Stack",

      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navSkills: "Skills",
      navProjects: "Projects",
      navEducation: "Education",
      navCertifications: "Certifications",
      navContact: "Contact",

      heroRole: "Développeur Full-Stack · Étudiant en BTS",
      heroDesc:
        "Je conçois des applications web modernes et performantes, avec une attention particulière portée à la structure du code, à l'expérience utilisateur et à l'amélioration continue.",
      heroStack: "Stack",
      scroll: "scroll",

      aboutTitle: "À propos",
      aboutSub: "Passion & expertise.",
      aboutBadge: "Disponible · Temps plein",
      aboutText1:
        "Développeur full-stack en formation, passionné par la création d’applications web modernes et le développement de solutions numériques performantes. Je porte une attention particulière à la conception de projets bien structurés et à l’amélioration continue de mes compétences en génie logiciel.",
      aboutText2:
        "Technicien logiciel spécialisé dans le développement d’applications cloud et de systèmes de surveillance. Expertise en FastAPI et architecture robuste.",
      stat1Value: "1",
      stat1Small: "an",
      stat1Label: "d’expérience",
      stat2Value: "9",
      stat2Small: "+",
      stat2Label: "projets réalisés",
      stat3Value: "∞",
      stat3Label: "curiosité",
      cvButton: "Télécharger le CV",

      experienceTitle: "Expérience",
      experienceSub: "Parcours professionnel & missions.",
      exp1Date: "2026 — Présent",
      exp1Type: "Formation",
      exp1Title: "Étudiant en BTS · Développement Full-Stack",
      exp1Place: "BTS — Développement Web & Applications",
      exp1Desc:
        "Conception et développement d’applications web modernes : front-end (HTML/CSS/JS, React), back-end (PHP, FastAPI, C#), bases de données (MySQL, SQL Server) et méthodes agiles.",
      exp2Date: "2025",
      exp2Type: "Projet",
      exp2Title: "Technicien logiciel · Applications cloud",
      exp2Place: "Projets personnels & académiques",
      exp2Desc:
        "Développement d’applications cloud et de systèmes de surveillance. Expertise en FastAPI, architecture robuste et traçabilité des données.",

      skillsTitle: "Compétences",
      skillsSub: "Ma boîte à outils technique.",
      skillsLanguages: "Languages",
      skillsFrontend: "Frontend",
      skillsBackend: "Backend",
      skillsDatabases: "Databases",
      skillsDevops: "DevOps & Cloud",

      projectsTitle: "Projets",
      projectsSub: "Réalisations récentes & études de cas.",
      filterAll: "All",
      filterWeb: "Web",
      filterApp: "App",
      filterDesktop: "Desktop",

      /* Eco Tracker (Projet 1) */
      project1Kicker: "WEB APP / DASHBOARD",
      project1Title: "Eco Tracker",
      project1Desc:
        "Eco Tracker est une application web permettant de suivre et visualiser son impact écologique. Le projet propose une interface moderne avec des statistiques, des graphiques et un tableau de bord clair pour aider l’utilisateur à mieux comprendre ses habitudes et réduire son empreinte environnementale.",

      /* Music Sync (Projet 2) */
      project2Kicker: "Web App · Realtime",
      project2Title: "Real-time Music Sync with Friends & Chat",
      project2Desc:
        "Application collaborative en temps réel avec lecture musicale synchronisée, chat live, files d’attente partagées et interface moderne orientée expérience utilisateur.",

      /* Faculté de Médecine (Projet 3) */
      project3Kicker: "Mobile · Web App",
      project3Title: "Gestion de la faculté de médecine",
      project3Desc:
        "Plateforme web et mobile pour organiser les annonces, devoirs, ressources pédagogiques et échanges entre professeurs et étudiants.",

      /* Restaurants (Projet 4) */
      project4Kicker: "Web · Carte interactive",
      project4Title: "Recherche et filtrage de restaurants",
      project4Desc:
        "Interface de recherche avec carte interactive, filtres avancés, géolocalisation et affichage des restaurants selon les préférences utilisateur.",

      /* Profsswap (Projet 5) */
      project5Kicker: "Mobile App",
      project5Title: "Profsswap",
      project5Desc:
        "Application mobile dédiée aux échanges entre professeurs d’université, avec une interface simple, rapide et adaptée à la gestion académique.",

      /* Badge statut */
      projectInProgress: "En cours",

      githubMore: "Voir plus sur GitHub",

      educationTitle: "Formation",
      educationSub: "Mon parcours académique.",
      edu1Date: "2026 — Présent",
      edu1Type: "En cours",
      edu1Title: "BTS — Développement Web & Applications",
      edu1Place: "Brevet de Technicien Supérieur",
      edu1Desc:
        "Formation approfondie en développement full-stack : architecture logicielle, bases de données, réseaux, frameworks web modernes et méthodologies agiles.",
      edu2Date: "Avant 2024",
      edu2Type: "Diplôme",
      edu2Title: "Baccalauréat",
      edu2Place: "Sciences & Technologies",
      edu2Desc:
        "Fondations solides en mathématiques, sciences et logique — socle indispensable pour une carrière dans le développement logiciel.",

      certificationsTitle: "Certifications",
      certificationsSub: "Validations & accréditations professionnelles.",
      certEmptyTitle: "Certifications à venir",
      certEmptyText:
        "Je suis actuellement en préparation de plusieurs certifications techniques. Cette section sera mise à jour prochainement.",
      certTag: "En cours",

      contactTitle: "Contact",
      contactSub: "Un projet en tête ? Parlons-en.",
      contactEmailTitle: "Email",
      contactWhatsappTitle: "Whatsapp",
      contactLinkedinTitle: "LinkedIn",
      writeMe: "Write me",

      footerName: "Yahya Cherkani",
      footerCopy: "Conçu & développé avec passion.",
    },

    en: {
      pageTitle: "Yahya Cherkani — Full-Stack Developer",

      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navSkills: "Skills",
      navProjects: "Projects",
      navEducation: "Education",
      navCertifications: "Certifications",
      navContact: "Contact",

      heroRole: "Full-Stack Developer · BTS Student",
      heroDesc:
        "I build modern and high-performance web applications with strong attention to code structure, user experience, and continuous improvement.",
      heroStack: "Stack",
      scroll: "scroll",

      aboutTitle: "About",
      aboutSub: "Passion & expertise.",
      aboutBadge: "Available · Full-time",
      aboutText1:
        "Full-stack developer in training, passionate about building modern web applications and high-performance digital solutions. I pay close attention to well-structured projects and the continuous improvement of my software engineering skills.",
      aboutText2:
        "Software technician specialized in cloud application development and monitoring systems. Skilled in FastAPI and robust software architecture.",
      stat1Value: "1",
      stat1Small: "year",
      stat1Label: "of experience",
      stat2Value: "9",
      stat2Small: "+",
      stat2Label: "completed projects",
      stat3Value: "∞",
      stat3Label: "curiosity",
      cvButton: "Download CV",

      experienceTitle: "Experience",
      experienceSub: "Professional background & missions.",
      exp1Date: "2026 — Present",
      exp1Type: "Training",
      exp1Title: "BTS Student · Full-Stack Development",
      exp1Place: "BTS — Web & Application Development",
      exp1Desc:
        "Design and development of modern web applications: front-end (HTML/CSS/JS, React), back-end (PHP, FastAPI, C#), databases (MySQL, SQL Server), and agile methods.",
      exp2Date: "2025",
      exp2Type: "Project",
      exp2Title: "Software Technician · Cloud Applications",
      exp2Place: "Personal & academic projects",
      exp2Desc:
        "Development of cloud applications and monitoring systems. Expertise in FastAPI, robust architecture, and data traceability.",

      skillsTitle: "Skills",
      skillsSub: "My technical toolkit.",
      skillsLanguages: "Languages",
      skillsFrontend: "Frontend",
      skillsBackend: "Backend",
      skillsDatabases: "Databases",
      skillsDevops: "DevOps & Cloud",

      projectsTitle: "Projects",
      projectsSub: "Recent work & case studies.",
      filterAll: "All",
      filterWeb: "Web",
      filterApp: "App",
      filterDesktop: "Desktop",

      /* Eco Tracker (Project 1) */
      project1Kicker: "WEB APP / DASHBOARD",
      project1Title: "Eco Tracker",
      project1Desc:
        "Eco Tracker is a web application designed to track and visualize environmental impact. It provides a modern interface with statistics, charts, and a clear dashboard to help users understand their habits and reduce their ecological footprint.",

      /* Music Sync (Project 2) */
      project2Kicker: "Web App · Realtime",
      project2Title: "Real-time Music Sync with Friends & Chat",
      project2Desc:
        "A real-time platform that allows friends to listen to the same music simultaneously, with synchronized playback, live chat, and interactive features for a shared experience.",

      /* Medical Faculty (Project 3) */
      project3Kicker: "Mobile · Web App",
      project3Title: "Medical Faculty Management",
      project3Desc:
        "Mobile and web application for managing a medical faculty. Professors can create assignments and announcements, while students submit work and access educational resources.",

      /* Restaurants (Project 4) */
      project4Kicker: "Web · Interactive map",
      project4Title: "Restaurant search & filtering",
      project4Desc:
        "Search interface with interactive map, advanced filters, geolocation, and restaurant display based on user preferences.",

      /* Profsswap (Project 5) */
      project5Kicker: "Mobile App",
      project5Title: "Profsswap",
      project5Desc:
        "Mobile app dedicated to exchanges between university professors, with a simple, fast, and academic-management-oriented interface.",

      /* Status badge */
      projectInProgress: "In progress",

      githubMore: "See more on GitHub",

      educationTitle: "Education",
      educationSub: "My academic background.",
      edu1Date: "2026 — Present",
      edu1Type: "Ongoing",
      edu1Title: "BTS — Web & Application Development",
      edu1Place: "Higher Technician Certificate",
      edu1Desc:
        "In-depth training in full-stack development: software architecture, databases, networks, modern web frameworks, and agile methodologies.",
      edu2Date: "Before 2025",
      edu2Type: "Degree",
      edu2Title: "Baccalaureate",
      edu2Place: "Science & Technology",
      edu2Desc:
        "Strong foundations in mathematics, science, and logic — an essential base for a career in software development.",

      certificationsTitle: "Certifications",
      certificationsSub: "Professional validations & accreditations.",
      certEmptyTitle: "Upcoming certifications",
      certEmptyText:
        "I am currently preparing several technical certifications. This section will be updated soon.",
      certTag: "In progress",

      contactTitle: "Contact",
      contactSub: "Have a project in mind? Let’s talk.",
      contactEmailTitle: "Email",
      contactWhatsappTitle: "Whatsapp",
      contactLinkedinTitle: "LinkedIn",
      writeMe: "Write me",

      footerName: "Yahya Cherkani",
      footerCopy: "Designed & developed with passion.",
    },
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === "string") {
      element.textContent = value;
    }
  };

  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === "string") {
      element.innerHTML = value;
    }
  };

  const applyLanguage = (lang) => {
    const safeLang = lang === "en" ? "en" : "fr";
    const t = translations[safeLang];

    root.setAttribute("lang", safeLang);
    localStorage.setItem("lang", safeLang);
    document.title = t.pageTitle;

    if (langToggle) {
      const langText = langToggle.querySelector(".lang-toggle__text");

      if (langText) {
        langText.textContent = safeLang.toUpperCase();
      }

      langToggle.setAttribute(
        "aria-label",
        safeLang === "fr" ? "Switch to English" : "Passer en français",
      );

      langToggle.setAttribute("aria-pressed", String(safeLang === "en"));
    }

    /* NAV */
    setText('.nav__link[href="#home"]', t.navHome);
    setText('.nav__link[href="#about"]', t.navAbout);
    setText('.nav__link[href="#experience"]', t.navExperience);
    setText('.nav__link[href="#skills"]', t.navSkills);
    setText('.nav__link[href="#projects"]', t.navProjects);
    setText('.nav__link[href="#education"]', t.navEducation);
    setText('.nav__link[href="#certifications"]', t.navCertifications);
    setText('.nav__link[href="#contact"]', t.navContact);

    /* HERO */
    setText(".hero-role span:last-child", t.heroRole);
    setText(".hero-desc", t.heroDesc);
    setText(".hero-stack-title", t.heroStack);
    setText(".scroll-indicator span:first-child", t.scroll);

    /* ABOUT */
    setText("#about .section__title", t.aboutTitle);
    setText("#about .section__sub", t.aboutSub);
    setHtml(
      ".about__badge",
      `<span class="about__badge-dot"></span>${t.aboutBadge}`,
    );
    setText("#about .about__text:nth-of-type(1)", t.aboutText1);
    setText("#about .about__text:nth-of-type(2)", t.aboutText2);

    const statValues = document.querySelectorAll(".stat__value");
    const statLabels = document.querySelectorAll(".stat__label");

    if (statValues[0]) {
      statValues[0].innerHTML = `${t.stat1Value}<span>${t.stat1Small}</span>`;
    }
    if (statValues[1]) {
      statValues[1].innerHTML = `${t.stat2Value}<span>${t.stat2Small}</span>`;
    }
    if (statValues[2]) {
      statValues[2].textContent = t.stat3Value;
    }

    if (statLabels[0]) statLabels[0].textContent = t.stat1Label;
    if (statLabels[1]) statLabels[1].textContent = t.stat2Label;
    if (statLabels[2]) statLabels[2].textContent = t.stat3Label;

    const cvButton = document.querySelector("#about .btn--primary");
    if (cvButton) {
      const icon = cvButton.querySelector("svg");
      cvButton.textContent = t.cvButton + " ";
      if (icon) cvButton.appendChild(icon);
    }

    /* EXPERIENCE */
    setText("#experience .section__title", t.experienceTitle);
    setText("#experience .section__sub", t.experienceSub);

    setText(
      "#experience .timeline-item:nth-child(1) .timeline-item__date",
      t.exp1Date,
    );
    setText(
      "#experience .timeline-item:nth-child(1) .timeline-item__type",
      t.exp1Type,
    );
    setText(
      "#experience .timeline-item:nth-child(1) .timeline-item__title",
      t.exp1Title,
    );
    setText(
      "#experience .timeline-item:nth-child(1) .timeline-item__place",
      t.exp1Place,
    );
    setText(
      "#experience .timeline-item:nth-child(1) .timeline-item__desc",
      t.exp1Desc,
    );

    setText(
      "#experience .timeline-item:nth-child(2) .timeline-item__date",
      t.exp2Date,
    );
    setText(
      "#experience .timeline-item:nth-child(2) .timeline-item__type",
      t.exp2Type,
    );
    setText(
      "#experience .timeline-item:nth-child(2) .timeline-item__title",
      t.exp2Title,
    );
    setText(
      "#experience .timeline-item:nth-child(2) .timeline-item__place",
      t.exp2Place,
    );
    setText(
      "#experience .timeline-item:nth-child(2) .timeline-item__desc",
      t.exp2Desc,
    );

    /* SKILLS */
    setText("#skills .section__title", t.skillsTitle);
    setText("#skills .section__sub", t.skillsSub);

    const skillCategories = document.querySelectorAll(
      "#skills .skills-category-title span",
    );
    if (skillCategories[0]) skillCategories[0].textContent = t.skillsLanguages;
    if (skillCategories[1]) skillCategories[1].textContent = t.skillsFrontend;
    if (skillCategories[2]) skillCategories[2].textContent = t.skillsBackend;
    if (skillCategories[3]) skillCategories[3].textContent = t.skillsDatabases;
    if (skillCategories[4]) skillCategories[4].textContent = t.skillsDevops;

    /* PROJECTS — section + filtres */
    setText("#projects .section__title", t.projectsTitle);
    setText("#projects .section__sub", t.projectsSub);

    const filterButtons = document.querySelectorAll(".project-filter-btn");
    if (filterButtons[0]) filterButtons[0].textContent = t.filterAll;
    if (filterButtons[1]) filterButtons[1].textContent = t.filterWeb;
    if (filterButtons[2]) filterButtons[2].textContent = t.filterApp;
    if (filterButtons[3]) filterButtons[3].textContent = t.filterDesktop;

    /* PROJECTS — cartes (5 projets) */
    const projectData = [
      {
        kicker: t.project1Kicker,
        title: t.project1Title,
        desc: t.project1Desc,
      },
      {
        kicker: t.project2Kicker,
        title: t.project2Title,
        desc: t.project2Desc,
      },
      {
        kicker: t.project3Kicker,
        title: t.project3Title,
        desc: t.project3Desc,
      },
      {
        kicker: t.project4Kicker,
        title: t.project4Title,
        desc: t.project4Desc,
      },
      {
        kicker: t.project5Kicker,
        title: t.project5Title,
        desc: t.project5Desc,
      },
    ];

    const cards = document.querySelectorAll("#projects .project-card");
    cards.forEach((card, i) => {
      const data = projectData[i];
      if (!data) return;

      const kicker = card.querySelector(".project-kicker");
      const title = card.querySelector(".project-title");
      const desc = card.querySelector(".project-description");

      if (kicker && data.kicker) kicker.textContent = data.kicker;
      if (title && data.title) title.textContent = data.title;
      if (desc && data.desc) desc.textContent = data.desc;
    });

    /* PROJECTS — badges "En cours" / "In progress" */
    document
      .querySelectorAll('[data-i18n="projectInProgress"]')
      .forEach((el) => {
        el.textContent = t.projectInProgress;
      });

    /* "Voir plus sur GitHub" */
    const moreLink = document.querySelector(".more-link");
    if (moreLink) {
      const icon = moreLink.querySelector("svg");
      moreLink.textContent = t.githubMore + " ";
      if (icon) moreLink.appendChild(icon);
    }

    /* EDUCATION */
    setText("#education .section__title", t.educationTitle);
    setText("#education .section__sub", t.educationSub);

    setText(
      "#education .timeline-item:nth-child(1) .timeline-item__date",
      t.edu1Date,
    );
    setText(
      "#education .timeline-item:nth-child(1) .timeline-item__type",
      t.edu1Type,
    );
    setText(
      "#education .timeline-item:nth-child(1) .timeline-item__title",
      t.edu1Title,
    );
    setText(
      "#education .timeline-item:nth-child(1) .timeline-item__place",
      t.edu1Place,
    );
    setText(
      "#education .timeline-item:nth-child(1) .timeline-item__desc",
      t.edu1Desc,
    );

    setText(
      "#education .timeline-item:nth-child(2) .timeline-item__date",
      t.edu2Date,
    );
    setText(
      "#education .timeline-item:nth-child(2) .timeline-item__type",
      t.edu2Type,
    );
    setText(
      "#education .timeline-item:nth-child(2) .timeline-item__title",
      t.edu2Title,
    );
    setText(
      "#education .timeline-item:nth-child(2) .timeline-item__place",
      t.edu2Place,
    );
    setText(
      "#education .timeline-item:nth-child(2) .timeline-item__desc",
      t.edu2Desc,
    );

    /* CERTIFICATIONS */
    setText("#certifications .section__title", t.certificationsTitle);
    setText("#certifications .section__sub", t.certificationsSub);
    setText(".empty-state__title", t.certEmptyTitle);
    setText(".empty-state__text", t.certEmptyText);
    setText(".empty-state__tag", t.certTag);

    /* CONTACT */
    setText("#contact .section__title", t.contactTitle);
    setText("#contact .section__sub", t.contactSub);

    const contactTitles = document.querySelectorAll(".contact-title");
    if (contactTitles[0]) contactTitles[0].textContent = t.contactEmailTitle;
    if (contactTitles[1]) contactTitles[1].textContent = t.contactWhatsappTitle;
    if (contactTitles[2]) contactTitles[2].textContent = t.contactLinkedinTitle;

    document.querySelectorAll(".contact-btn").forEach((btn) => {
      btn.innerHTML = `${t.writeMe} <span>→</span>`;
    });

    /* FOOTER */
    setText(".footer__brand span", t.footerName);

    const footerCopy = document.querySelector(".footer__copy");
    const year = document.getElementById("year")?.textContent || "";

    if (footerCopy) {
      footerCopy.innerHTML = `© <span id="year">${year}</span> — ${t.footerCopy}`;
    }
  };

  const savedLang = localStorage.getItem("lang");
  applyLanguage(savedLang || root.getAttribute("lang") || "fr");

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = root.getAttribute("lang") || "fr";
      applyLanguage(current === "fr" ? "en" : "fr");
    });
  }

  /* ----------------------------------------------------------------------
     3. HEADER — SCROLL EFFECT
  ---------------------------------------------------------------------- */

  const header = document.getElementById("header");

  const onScroll = () => {
    if (!header) return;

    if (window.scrollY > 16) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  let scrollTicking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;

      window.requestAnimationFrame(() => {
        onScroll();
        scrollTicking = false;
      });

      scrollTicking = true;
    },
    { passive: true },
  );

  onScroll();

  /* ----------------------------------------------------------------------
     4. MENU MOBILE
  ---------------------------------------------------------------------- */

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  const closeMenu = () => {
    if (!nav || !menuToggle) return;

    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ----------------------------------------------------------------------
     5. REVEAL ANIMATIONS
  ---------------------------------------------------------------------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  /* ----------------------------------------------------------------------
     6. SCROLLSPY
  ---------------------------------------------------------------------- */

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  if (
    "IntersectionObserver" in window &&
    sections.length > 0 &&
    navLinks.length > 0
  ) {
    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
          });
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => scrollSpyObserver.observe(section));
  }

  /* ----------------------------------------------------------------------
     7. CONTACT CARD LIGHT EFFECT
  ---------------------------------------------------------------------- */

  const contactCards = document.querySelectorAll(".contact-card");

  contactCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
  });

  /* ----------------------------------------------------------------------
     8. YEAR FOOTER
  ---------------------------------------------------------------------- */

  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ----------------------------------------------------------------------
     9. SMOOTH SCROLL
  ---------------------------------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      const headerOffset = 72;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    });
  });

  /* ----------------------------------------------------------------------
     10. PROJECT FILTERS
  ---------------------------------------------------------------------- */

  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterBtns.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      projectCards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.style.display = "";

          window.requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ----------------------------------------------------------------------
     11. PROJECT SLIDERS — carousel pro (réutilisable, multi-instances)
     - Fonctionne avec `.project-slider > .project-slider__track > img...`
     - Fonctionne aussi avec un wrapper `.project-slider__viewport`
     - Génère les dots, gère prev/next, et le swipe tactile (mobile).
  ---------------------------------------------------------------------- */

  const initProjectSlider = (slider) => {
    const track = slider.querySelector(".project-slider__track");
    if (!track) return;

    const slides = Array.from(track.querySelectorAll("img"));
    if (slides.length === 0) return;

    const prevBtn = slider.querySelector(".project-slider__btn--prev");
    const nextBtn = slider.querySelector(".project-slider__btn--next");
    const dotsContainer = slider.querySelector(".project-slider__dots");

    // Cas : un seul slide → on cache la nav
    if (slides.length <= 1) {
      slider.classList.add("is-single");
      track.style.transform = "translateX(0)";
      return;
    }

    let currentIndex = 0;

    // Génération des dots
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "project-slider__dot";
        dot.setAttribute("aria-label", `Aller à l'image ${i + 1}`);
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer
      ? Array.from(dotsContainer.querySelectorAll(".project-slider__dot"))
      : [];

    const goTo = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === currentIndex);
      });
    };

    const next = () => goTo(currentIndex + 1);
    const prev = () => goTo(currentIndex - 1);

    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);

    // Touch / swipe
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouching = false;
    const SWIPE_THRESHOLD = 40;

    slider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchEndX = touchStartX;
        isTouching = true;
      },
      { passive: true },
    );

    slider.addEventListener(
      "touchmove",
      (e) => {
        if (!isTouching) return;
        touchEndX = e.changedTouches[0].clientX;
      },
      { passive: true },
    );

    slider.addEventListener(
      "touchend",
      () => {
        if (!isTouching) return;
        isTouching = false;

        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;

        if (delta < 0) next();
        else prev();
      },
      { passive: true },
    );

    // Empêche les images d'être glissées comme un fichier (drag natif)
    slides.forEach((img) => {
      img.addEventListener("dragstart", (e) => e.preventDefault());
    });

    // Initialisation
    goTo(0);
  };

  document
    .querySelectorAll(".project-slider")
    .forEach((slider) => initProjectSlider(slider));
});
