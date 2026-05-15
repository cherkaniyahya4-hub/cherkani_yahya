/* =========================================================
   YAHYA CHERKANI — PORTFOLIO
   main.js · Interactions, animations, data
   ========================================================= */

/* =========================================================
   1. CONFIGURATION — CERTIFICATES
   ========================================================= */
const CERTIFICATES = [
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    file: "images/javascript_intermediate certificate.pdf",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy / Python Institute",
    date: "2026",
    file: "images/JavaScriptEssentials2Update20260509-32-m15jwq.pdf",
  },
  {
    title: "Node.js (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    file: "images/nodejs_intermediate certificate.pdf",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy / Python Institute",
    date: "2026",
    file: "images/PythonEssentials2Update20260509-32-pxfjll.pdf",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "2026",
    file: "images/software_engineer_intern certificate.pdf",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "2026",
    file: "images/sql_advanced certificate.pdf",
  },
];

/* =========================================================
   2. CONFIGURATION — PROJECTS
   ========================================================= */
const PROJECTS = [
  {
    category: "web",
    label: "WEB APP / DASHBOARD",
    title: "Eco Tracker",
    desc: {
      fr: "Eco Tracker est une application web moderne permettant de suivre et visualiser son impact écologique. Le site propose une interface claire, responsive et professionnelle avec une expérience utilisateur simple et orientée données.",
      en: "Eco Tracker is a modern web app to track and visualize your ecological impact. The site offers a clean, responsive and professional interface with a simple, data-driven user experience.",
    },
    images: ["images/1.png", "images/2.png", "images/eco.png"],
    fallbackImages: [
      "https://cherkaniyahya.vercel.app/images/1.png",
      "https://cherkaniyahya.vercel.app/images/2.png",
      "https://cherkaniyahya.vercel.app/images/eco.png",
    ],
    tech: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://ecotracker-mvp.vercel.app",
        icon: "external",
      },
    ],
    status: { fr: "En cours", en: "In progress" },
  },
  {
    category: "web",
    label: "Web App · Realtime",
    title: {
      fr: "Real-time Music Sync with Friends & Chat",
      en: "Real-time Music Sync with Friends & Chat",
    },
    desc: {
      fr: "Application collaborative en temps réel avec lecture musicale synchronisée, chat live, files d'attente partagées et interface moderne orientée expérience utilisateur.",
      en: "Real-time collaborative app with synchronized music playback, live chat, shared queues and a modern UX-driven interface.",
    },
    images: ["images/imagee.png"],
    fallbackImages: ["https://cherkaniyahya.vercel.app/images/imagee.png"],
    tech: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    ],
    links: [
      { label: "Démo", url: "#", icon: "external" },
      {
        label: "GitHub",
        url: "https://github.com/cherkaniyahya4-hub",
        icon: "github",
      },
    ],
    status: { fr: "En cours", en: "In progress" },
  },
  {
    category: "app",
    label: "Mobile · Web App",
    title: {
      fr: "Gestion de la faculté de médecine",
      en: "Medical Faculty Management",
    },
    desc: {
      fr: "Plateforme web et mobile pour organiser les annonces, devoirs, ressources pédagogiques et échanges entre professeurs et étudiants.",
      en: "Web and mobile platform to organize announcements, assignments, learning resources and communication between teachers and students.",
    },
    images: ["images/imagee.png"],
    fallbackImages: ["https://cherkaniyahya.vercel.app/images/imagee.png"],
    tech: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
    links: [
      { label: "Live", url: "#", icon: "external" },
      {
        label: "GitHub",
        url: "https://github.com/cherkaniyahya4-hub",
        icon: "github",
      },
    ],
    status: { fr: "En cours", en: "In progress" },
  },
  {
    category: "web",
    label: "Web · Carte interactive",
    title: {
      fr: "Recherche et filtrage de restaurants",
      en: "Restaurant Search & Filtering",
    },
    desc: {
      fr: "Interface de recherche avec carte interactive, filtres avancés, géolocalisation et affichage des restaurants selon les préférences utilisateur.",
      en: "Search interface with interactive map, advanced filters, geolocation and restaurant display based on user preferences.",
    },
    images: ["images/imagee.png"],
    fallbackImages: ["https://cherkaniyahya.vercel.app/images/imagee.png"],
    tech: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    links: [
      { label: "Démo", url: "#", icon: "external" },
      {
        label: "GitHub",
        url: "https://github.com/cherkaniyahya4-hub",
        icon: "github",
      },
    ],
    status: { fr: "En cours", en: "In progress" },
  },
  {
    category: "app",
    label: "Mobile App",
    title: "Profsswap",
    desc: {
      fr: "Application mobile dédiée aux échanges entre professeurs d'université, avec une interface simple, rapide et adaptée à la gestion académique.",
      en: "Mobile app for university teachers to exchange and collaborate, with a simple, fast UI suited to academic management.",
    },
    images: ["images/imagee.png"],
    fallbackImages: ["https://cherkaniyahya.vercel.app/images/imagee.png"],
    tech: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
    links: [
      { label: "Démo", url: "#", icon: "external" },
      {
        label: "GitHub",
        url: "https://github.com/cherkaniyahya4-hub",
        icon: "github",
      },
    ],
    status: { fr: "En cours", en: "In progress" },
  },
];

/* =========================================================
   3. UTILITIES
   ========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Helper pour récupérer la bonne traduction (string ou objet {fr, en})
const t = (val, lang) => {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[lang] || val.fr || val.en || "";
};

let currentLang = "fr";

/* =========================================================
   4. HEADER — état au scroll (ombre / fond)
   ========================================================= */
function initHeader() {
  const header = $("#header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* =========================================================
   5. THEME TOGGLE — dark / light avec localStorage
   ---------------------------------------------------------
   - Sauvegarde le choix dans localStorage
   - Respecte prefers-color-scheme au premier chargement
   - Met à jour l'icône (☾ / ☀) et le label (Dark / Light)
   - Met à jour meta[name="theme-color"] pour la barre mobile
   ========================================================= */
function initThemeToggle() {
  const toggle = $("#themeToggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const STORAGE_KEY = "portfolio-theme";

  // Applique un thème et met à jour l'UI du bouton
  const apply = (theme) => {
    const safe = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", safe);
    localStorage.setItem(STORAGE_KEY, safe);

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(safe === "light"));
      const icon = toggle.querySelector(".theme-icon");
      const label = toggle.querySelector(".theme-label");
      if (icon) icon.textContent = safe === "light" ? "☀" : "☾";
      if (label) label.textContent = safe === "light" ? "Light" : "Dark";
    }

    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        safe === "light" ? "#FFFFFF" : "#000000",
      );
    }
  };

  // Initialisation : choix sauvegardé > préférence système > dark par défaut
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  apply(saved || (prefersLight ? "light" : "dark"));

  if (!toggle) return;

  // Clic : on bascule
  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    apply(current === "light" ? "dark" : "light");
  });

  // Suit la préférence système si l'utilisateur n'a pas encore fait de choix
  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? "light" : "dark");
        }
      });
  }
}

/* =========================================================
   6. MOBILE DRAWER
   ========================================================= */
function initMobileDrawer() {
  const burger = $("#burger");
  const drawer = $("#mobileDrawer");
  if (!burger || !drawer) return;

  const open = () => {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    drawer.classList.contains("open") ? close() : open();
  });

  $$("[data-close-drawer]").forEach((el) =>
    el.addEventListener("click", close),
  );
  $$(".drawer-link").forEach((link) => link.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) close();
  });
}

/* =========================================================
   7. SMOOTH SCROLL — ancres
   ========================================================= */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#" || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = $("#header")?.offsetHeight || 80;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerH + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* =========================================================
   8. ACTIVE SECTION HIGHLIGHT — surligne le lien de la
   section visible dans la nav
   ========================================================= */
function initActiveSection() {
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-link, .drawer-link");
  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === "#" + id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
  );

  sections.forEach((s) => observer.observe(s));
}

/* =========================================================
   9. REVEAL ON SCROLL — anime l'apparition des blocs
   ========================================================= */
function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  items.forEach((el) => observer.observe(el));
}

/* =========================================================
   10. LANGUAGE TOGGLE (FR / EN)
   ---------------------------------------------------------
   - Met à jour tous les éléments avec data-fr / data-en
   - Re-rend les projets ET les certificats avec la nouvelle langue
   ========================================================= */
function initLangToggle() {
  const toggle = $("#langToggle");
  if (!toggle) return;

  const apply = (lang) => {
    currentLang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang;

    // Traduit tous les éléments statiques
    $$("[data-fr]").forEach((el) => {
      const val = el.getAttribute("data-" + lang);
      if (val != null) {
        el.textContent = val;
      }
    });

    // Met à jour le bouton de langue
    toggle.querySelector(".lang-current").textContent = lang.toUpperCase();
    toggle.querySelector(".lang-other").textContent =
      lang === "fr" ? "EN" : "FR";

    // Re-rend les contenus dynamiques avec la bonne langue
    renderProjects();
    renderCertificates();
  };

  toggle.addEventListener("click", () => {
    apply(currentLang === "fr" ? "en" : "fr");
  });

  apply("fr");
}

/* =========================================================
   11. PROJECTS — render + filter + carousel
   ========================================================= */
function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  PROJECTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.category = p.category;

    // Slides
    const slidesHtml = p.images
      .map((src, i) => {
        const fallback = p.fallbackImages?.[i] || "";
        return `
        <div class="project-slide${i === 0 ? " active" : ""}" data-index="${i}">
          <img src="${src}" alt="${escapeHtml(t(p.title, currentLang))}" loading="lazy"${fallback ? ` onerror="this.onerror=null;this.src='${fallback}'"` : ""} />
        </div>
      `;
      })
      .join("");

    // Pagination dots
    const dotsHtml =
      p.images.length > 1
        ? `
      <div class="project-dots">
        ${p.images.map((_, i) => `<span class="project-dot${i === 0 ? " active" : ""}" data-index="${i}"></span>`).join("")}
      </div>
    `
        : "";

    // Flèches prev / next
    const navHtml =
      p.images.length > 1
        ? `
      <button class="project-nav project-nav-prev" aria-label="Précédent">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button class="project-nav project-nav-next" aria-label="Suivant">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    `
        : "";

    // Icônes des technos
    const techHtml = p.tech
      .map(
        (tech) => `
      <img src="${tech.icon}" alt="${escapeHtml(tech.name)}" title="${escapeHtml(tech.name)}" />
    `,
      )
      .join("");

    // Liens (démo / github)
    const linksHtml = p.links
      .map((link) => {
        const iconSvg =
          link.icon === "github"
            ? '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.94 10.94 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>'
            : '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>';
        const isExternal = link.url.startsWith("http");
        return `<a href="${escapeHtml(link.url)}" class="project-link"${isExternal ? ' target="_blank" rel="noopener"' : ""}>${iconSvg}<span>${escapeHtml(link.label)}</span></a>`;
      })
      .join("");

    card.innerHTML = `
      <div class="project-media">
        <div class="project-slides">
          ${slidesHtml}
        </div>
        ${navHtml}
        ${dotsHtml}
        <span class="project-status">${escapeHtml(t(p.status, currentLang))}</span>
      </div>
      <div class="project-body">
        <span class="project-category">${escapeHtml(p.label)}</span>
        <h3 class="project-title">${escapeHtml(t(p.title, currentLang))}</h3>
        <p class="project-desc">${escapeHtml(t(p.desc, currentLang))}</p>
        <div class="project-tech">${techHtml}</div>
        <div class="project-links">${linksHtml}</div>
      </div>
    `;

    grid.appendChild(card);
    initCarousel(card);
  });
}

function initCarousel(card) {
  const slides = $$(".project-slide", card);
  const dots = $$(".project-dot", card);
  const prev = $(".project-nav-prev", card);
  const next = $(".project-nav-next", card);
  if (slides.length < 2) return;

  let current = 0;
  const goTo = (i) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === current));
    dots.forEach((d, k) => d.classList.toggle("active", k === current));
  };

  prev?.addEventListener("click", (e) => {
    e.preventDefault();
    goTo(current - 1);
  });
  next?.addEventListener("click", (e) => {
    e.preventDefault();
    goTo(current + 1);
  });
  dots.forEach((d) =>
    d.addEventListener("click", () => goTo(parseInt(d.dataset.index, 10))),
  );
}

function initFilters() {
  const buttons = $$(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      $$(".project-card").forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

/* =========================================================
   12. CERTIFICATES — render avec aperçu PDF
   ========================================================= */
function renderCertificates() {
  const grid = $("#certsGrid");
  const empty = $("#certsEmpty");
  if (!grid) return;

  // Aucun certificat → état vide
  if (!CERTIFICATES.length) {
    grid.innerHTML = "";
    grid.style.display = "none";
    if (empty) empty.hidden = false;
    return;
  }

  grid.style.display = "";
  if (empty) empty.hidden = true;
  grid.innerHTML = "";

  // Labels traduits
  const verifyLabel = currentLang === "fr" ? "Vérifier" : "Verify";
  const downloadLabel = currentLang === "fr" ? "Télécharger" : "Download";
  const pdfLabel = currentLang === "fr" ? "Aperçu PDF" : "PDF preview";

  CERTIFICATES.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "cert-card";

    const fileHref = escapeAttr(cert.file);
    const fileName = (cert.file || "").split("/").pop() || "certificate.pdf";
    const title = escapeHtml(cert.title || "");
    const issuer = escapeHtml(cert.issuer || "");
    const date = escapeHtml(cert.date || "");

    const desc =
      currentLang === "fr"
        ? `Certification technique validée par ${cert.issuer || "l'organisation"}.`
        : `Technical certification validated by ${cert.issuer || "the organization"}.`;

    card.innerHTML = `
      <a href="${fileHref}" target="_blank" rel="noopener" class="cert-preview" aria-label="${escapeAttr(pdfLabel)} - ${escapeAttr(cert.title || "")}">
        <object data="${fileHref}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" class="cert-preview-pdf" aria-hidden="true">
          <span class="cert-preview-fallback">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M8 15h8M8 18h5"/>
            </svg>
          </span>
        </object>
        <span class="cert-preview-badge">PDF</span>
      </a>

      <div class="cert-meta">
        <div class="cert-heading">
          ${issuer ? `<span class="cert-issuer">${issuer}</span>` : ""}
          ${date ? `<span class="cert-date">${date}</span>` : ""}
        </div>
        <h3 class="cert-title">${title}</h3>
        <p class="cert-desc">${escapeHtml(desc)}</p>
      </div>

      <div class="cert-actions">
        <a href="${fileHref}" target="_blank" rel="noopener" class="cert-btn cert-btn-primary" aria-label="${escapeAttr(verifyLabel)}">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
          <span>${verifyLabel}</span>
        </a>
        <a href="${fileHref}" download="${escapeAttr(fileName)}" class="cert-btn cert-btn-ghost" aria-label="${escapeAttr(downloadLabel)}">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/>
          </svg>
          <span>${downloadLabel}</span>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* =========================================================
   13. UTILS — escape HTML / attributs
   ========================================================= */
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
function escapeAttr(str) {
  return escapeHtml(str);
}

/* =========================================================
   14. INIT — point d'entrée
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle(); // thème dark/light + localStorage
  initHeader(); // état scrolled du header
  initMobileDrawer(); // menu burger mobile
  initSmoothScroll(); // scroll fluide sur les ancres
  initActiveSection(); // surligne le lien actif
  renderProjects(); // affiche les projets
  initFilters(); // filtres projets (all / web / app...)
  renderCertificates(); // affiche les certificats
  initLangToggle(); // bouton FR/EN (re-rend projets + certifs)
  initReveal(); // animation reveal au scroll
});

/* =========================================================
   15. SAFETY NET — au cas où IntersectionObserver échoue,
   on force tous les .reveal à être visibles après 1.5s
   ========================================================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    $$(".reveal:not(.visible)").forEach((el) => el.classList.add("visible"));
  }, 1500);
});
