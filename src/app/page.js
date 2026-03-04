"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  {
    id: "01",
    title: "DFH Skin — Laravel Website",
    tag: "Full Stack · Laravel · MySQL",
    year: "2025",
    desc: "Professional skincare business website with dynamic content, service pages, and contact management.",
    longDesc:
      "A complete business website for DFH Skin built with Laravel and MySQL. Includes dynamic home, about, services, and contact pages with a custom admin panel for content management, SEO-friendly routing, email notifications, and a fully responsive frontend.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Bootstrap", "Blade"],
    liveUrl: "https://www.dfhskin.com/",
    screenshots: [
      "/images/dfhskin/dfh-home.png",
      "/images/dfhskin/dfh-about.png",
      "/images/dfhskin/dfh-services.png",
      "/images/dfhskin/dfh-contact.png",
      "/images/dfhskin/dfh-footer.png",
    ],
  },
  {
    id: "02",
    title: "DCIT Admission — SaaS Software",
    tag: "Full Stack · Laravel · MySQL",
    year: "2025",
    desc: "Admission management SaaS with course enrollment, dashboard, fee collection, and form management.",
    longDesc:
      "A SaaS-based admission management system built with Laravel and MySQL. Features include student admission forms, course management, fee collection, admin dashboard with analytics, role-based access control, and automated notifications. Designed for educational institutions to streamline their admission process end-to-end.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Bootstrap", "Blade", "REST API"],
    liveUrl: "https://secret.com/login",
    screenshots: [
      "/images/dcit-admission/dashboard.png",
      "/images/dcit-admission/admission.png",
      "/images/dcit-admission/admission-f-rm.png",
      "/images/dcit-admission/courses.png",
      "/images/dcit-admission/fee-collect.png",
    ],
  },
  {
    id: "03",
    title: "Airlytiq — React Static Website",
    tag: "Frontend · React · JavaScript",
    year: "2025",
    desc: "Modern static website for Airlytiq with live dashboard, solutions pages, and interactive contact forms.",
    longDesc:
      "A fast, modern static website built with React for Airlytiq. Features a live dashboard view, solutions showcase, interactive contact forms, smooth animations, and pixel-perfect responsive design. Optimized for performance with lazy loading and deployed on a global CDN.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
    liveUrl: "https://airlytiq.com/",
    screenshots: [
      "/images/airlytq/home.png",
      "/images/airlytq/live-dashboard.png",
      "/images/airlytq/solutions.png",
      "/images/airlytq/form.png",
      "/images/airlytq/footer.png",
    ],
  },
  {
    id: "04",
    title: "Maxford — ERP SaaS Platform",
    tag: "Full Stack · Laravel · Vue.js · MySQL",
    year: "2025–26",
    desc: "Full-featured ERP SaaS with dashboard, customer/vendor management, orders, purchases, invoices, HR payroll, and reports.",
    longDesc:
      "A comprehensive ERP SaaS platform built with Laravel, MySQL, and Vue.js. Covers the full business workflow: customer and vendor management, product catalog, order and purchase processing, invoice generation, cash & bank tracking, HR & payroll module, detailed reports, and a granular user role permission system.",
    tech: ["Laravel", "PHP", "MySQL", "Vue.js", "Vite", "Tailwind CSS", "REST API", "Pinia"],
    liveUrl: "https://secret.com/login",
    screenshots: [
      "/images/maxford/dashboard.png",
      "/images/maxford/order-create.png",
      "/images/maxford/products-create.png",
      "/images/maxford/cash-banks.png",
      "/images/maxford/hr-payroll.png",
      "/images/maxford/report.png",
      "/images/maxford/user-role.png",
    ],
  },
  {
    id: "05",
    title: "School Management SaaS",
    tag: "Full Stack · Laravel · Vue.js · MySQL",
    year: "2025–26",
    desc: "SaaS school management system covering admissions, students, campus, fee assignment & payment, subjects, and user roles.",
    longDesc:
      "A SaaS school management platform built with Laravel, MySQL, and Vue.js. Manages the complete school lifecycle: student admissions, campus and class management, subject assignment, fee setup and payment tracking, HR module, and a flexible user role & permission system. Designed for multi-branch school operations.",
    tech: ["Laravel", "PHP", "MySQL", "Vue.js", "Vite", "Tailwind CSS", "REST API"],
    liveUrl: "https://secret.com/login",
    screenshots: [
      "/images/school/dashboard.png",
      "/images/school/admissions.png",
      "/images/school/admission2.png",
      "/images/school/campus.png",
      "/images/school/students.png",
      "/images/school/subject-assign.png",
      "/images/school/feeassign.png",
      "/images/school/fee-payment.png",
      "/images/school/user-role.png",
    ],
  },
  {
    id: "06",
    title: "Anginar Bazar — E-Commerce",
    tag: "Full Stack · Laravel · Vue.js · Next.js",
    year: "2025",
    desc: "Full-stack e-commerce with Laravel + Vue.js backend API and Next.js frontend — brands, categories, cart, checkout, and orders.",
    longDesc:
      "A complete e-commerce platform: Laravel and Vue.js power the admin dashboard and REST API, while Next.js delivers a fast, SEO-optimized storefront. Features include brand and category browsing, product search, cart and wishlist, checkout, order tracking, user profile, and a dedicated admin dashboard — all connected through a unified API.",
    tech: ["Laravel", "Vue.js", "Next.js", "MySQL", "REST API", "Tailwind CSS"],
    liveUrl: "https://anginarbazar.com",
    screenshots: [
      "/images/anginar-bazar/home.png",
      "/images/anginar-bazar/home-1.png",
      "/images/anginar-bazar/home-2.png",
      "/images/anginar-bazar/shop.png",
      "/images/anginar-bazar/category.png",
      "/images/anginar-bazar/categorydetails.png",
      "/images/anginar-bazar/brands.png",
      "/images/anginar-bazar/brand-details.png",
      "/images/anginar-bazar/special-offer.png",
      "/images/anginar-bazar/cart.png",
      "/images/anginar-bazar/checkout.png",
      "/images/anginar-bazar/order-details.png",
      "/images/anginar-bazar/profile.png",
      "/images/anginar-bazar/login.png",
      "/images/anginar-bazar/contact.png",
      "/images/anginar-bazar/footer.png",
      "/images/anginar-bazar/dashboard.png",
    ],
  },
  {
    id: "07",
    title: "Hospital Website",
    tag: "Full Stack · Laravel · MySQL",
    year: "2025",
    desc: "Hospital website with doctor listings, appointment booking, test services, blog, and contact — built with Laravel & MySQL.",
    longDesc:
      "A professional hospital website built with Laravel and MySQL. Features include a dynamic homepage, doctor profiles and detail pages, test & diagnostic services listing, online appointment booking system, blog/news section, and contact page. Fully responsive with a clean medical design.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Bootstrap", "Blade"],
    liveUrl: "#",
    screenshots: [
      "/images/hospital/home.png",
      "/images/hospital/home-1.png",
      "/images/hospital/doctors.png",
      "/images/hospital/doctor-details.png",
      "/images/hospital/test-services.png",
      "/images/hospital/appointment.png",
      "/images/hospital/blog.png",
      "/images/hospital/contacs.png",
      "/images/hospital/footer.png",
    ],
  },
  {
    id: "08",
    title: "React Native Mobile App",
    tag: "Mobile · React Native · Laravel API",
    year: "2025",
    desc: "Cross-platform e-commerce mobile app with product browsing, cart, checkout, order tracking, and user profile.",
    longDesc:
      "A cross-platform e-commerce mobile app built with React Native for iOS and Android. Connected to a Laravel REST API backend. Features product catalog with search, cart and checkout flow, order history and details, user profile management, push notifications, and offline support.",
    tech: ["React Native", "Laravel", "MySQL", "REST API", "Firebase FCM", "AsyncStorage"],
    liveUrl: "https://github.com/samiul132",
    screenshots: [
      "/images/mobile_app/mobile-app-home.png",
      "/images/mobile_app/mobile-app-shop.png",
      "/images/mobile_app/mobile-app-search.png",
      "/images/mobile_app/mobile-app-cart.png",
      "/images/mobile_app/mobile-app-checkout.png",
      "/images/mobile_app/mobile-app-order-details.png",
      "/images/mobile_app/mobile-app-order-history.png",
      "/images/mobile_app/mobile-app-profile.png",
      "/images/mobile_app/mobile-app-profile-edit.png",
    ],
  },
];

const skills = [
  "Laravel", "PHP", "MySQL", "JavaScript",
  "Vue.js", "Next.js", "React Native", "Node.js",
  "Tailwind CSS", "Bootstrap", "React", "REST API",
  "Git", "GitHub", "Bitbucket", "Firebase",
];

/* ─────────────────────────────────────────────────────
   IMAGE SLIDER
   - width: 100% / height: auto  →  image natural size
   - no forced background
   - arrows always visible on mobile (touch)
───────────────────────────────────────────────────── */
function ImageSlider({ screenshots, liveUrl }) {
  const [current, setCurrent] = useState(0);
  const [zoomSrc, setZoomSrc] = useState(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const total = screenshots.length;

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current);
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3500);
  }, [total]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  const manualGo = (idx) => {
    setCurrent((idx + total) % total);
    startAuto();
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) manualGo(diff > 0 ? current + 1 : current - 1);
    touchStartX.current = null;
  };

  return (
    <>
      {/* Zoom modal with slide navigation */}
      {zoomSrc !== null && (
        <div className="zoom-modal" onClick={() => setZoomSrc(null)}>
          <button className="zoom-close" onClick={() => setZoomSrc(null)}>✕</button>

          {/* Prev */}
          {total > 1 && (
            <button
              className="zoom-nav zoom-nav-prev"
              onClick={(e) => { e.stopPropagation(); const idx = screenshots.indexOf(zoomSrc); setZoomSrc(screenshots[(idx - 1 + total) % total]); }}
            >←</button>
          )}

          <img
            src={zoomSrc}
            alt="Zoomed screenshot"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {total > 1 && (
            <button
              className="zoom-nav zoom-nav-next"
              onClick={(e) => { e.stopPropagation(); const idx = screenshots.indexOf(zoomSrc); setZoomSrc(screenshots[(idx + 1) % total]); }}
            >→</button>
          )}

          {/* Counter */}
          {total > 1 && (
            <div className="zoom-counter">
              {screenshots.indexOf(zoomSrc) + 1} / {total}
            </div>
          )}
        </div>
      )}

      <div className="browser-mockup">
        <div className="browser-bar">
          <div className="browser-dots">
            <span className="browser-dot r" />
            <span className="browser-dot y" />
            <span className="browser-dot g" />
          </div>
          <div className="browser-url">{liveUrl}</div>
          {total > 1 && <span className="slider-counter">{current + 1} / {total}</span>}
        </div>

        <div className="slider-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {screenshots.map((src, idx) => (
              <div key={idx} className="slide">
                <img
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="browser-screenshot screenshot-clickable"
                  onClick={() => setZoomSrc(src)}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button className="slider-btn slider-btn-prev" onClick={() => manualGo(current - 1)}>←</button>
              <button className="slider-btn slider-btn-next" onClick={() => manualGo(current + 1)}>→</button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="slider-dots">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot${idx === current ? " active" : ""}`}
                onClick={() => manualGo(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (rootRef.current) rootRef.current.setAttribute("data-loaded", "true");
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const openProject = (id) => {
    setActiveProject(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeData = projects.find((p) => p.id === activeProject);

  return (
    <div ref={rootRef}>

      {/* ── NAV ── */}
      <nav className={scrolled ? "scrolled" : ""}>
        <span
          className="nav-logo"
          onClick={closeProject}
          style={{ cursor: "pointer" }}
        >
          Md Samiul Hasan
        </span>
        <ul className="nav-links">
          {activeProject ? (
            <li><a onClick={closeProject}>← Back</a></li>
          ) : (
            <>
              <li><a href="#projects">Work</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </>
          )}
        </ul>
      </nav>

      {/* ── HAMBURGER (fixed, always above overlay) ── */}
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {activeProject ? (
          <a onClick={() => { closeProject(); closeMenu(); }}>← Back</a>
        ) : (
          <>
            <a href="#projects" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </>
        )}
      </div>

      {/* ══════════════════════════ PROJECT DETAIL */}
      {activeProject && activeData && (
        <div className="project-detail-wrapper">
          <button className="detail-nav-back" onClick={closeProject}>
            ← Back to all projects
          </button>

          <div className="mb-8">
            <span className="detail-eyebrow">Project {activeData.id} / 0{projects.length}</span>
            <h1 className="detail-title">{activeData.title}</h1>
            <div className="detail-tag">{activeData.tag} · {activeData.year}</div>
          </div>

          <div className="detail-body">
            <p className="detail-desc">{activeData.longDesc}</p>
            <div className="detail-meta">
              <div>
                <span className="meta-label">Year</span>
                <span className="meta-value">{activeData.year}</span>
              </div>
              <div>
                <span className="meta-label">Type</span>
                <span className="meta-value">{activeData.tag.split("·")[0].trim()}</span>
              </div>
              <div>
                <span className="meta-label">Technologies</span>
                <div className="tech-chips">
                  {activeData.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slider */}
          <ImageSlider
            key={activeData.id}
            screenshots={activeData.screenshots}
            liveUrl={activeData.liveUrl}
          />

          <a
            href={activeData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-live-btn"
          >
            View Live Project ↗
          </a>

          {/* Next project */}
          {(() => {
            const idx = projects.findIndex((p) => p.id === activeProject);
            const next = projects[(idx + 1) % projects.length];
            return (
              <div className="next-project-wrap">
                <span className="section-label">Next project</span>
                <div className="project-row" onClick={() => openProject(next.id)}>
                  <span className="project-num">{next.id}</span>
                  <div>
                    <div className="project-tag">{next.tag}</div>
                    <div className="project-title">{next.title}</div>
                    <div className="project-desc">{next.desc}</div>
                  </div>
                  <div className="project-year">{next.year}<span className="project-arrow">↗</span></div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ══════════════════════════ MAIN PAGE */}
      <div style={{ display: activeProject ? "none" : "block" }}>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <p className="hero-eyebrow">Available for hire · 2026</p>
            <h1 className="hero-name">Full Stack<br /><em>Developer</em></h1>
            <p className="hero-bio">
              I craft robust web and mobile applications — from elegant Laravel
              backends to pixel-perfect Vue &amp; React frontends. Based in Bangladesh, working globally.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View Work ↓</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-bg-text">SH</div>
            <div className="hero-stats">
              <div><div className="stat-number">1<sup>+</sup></div><div className="stat-label">Years of exp.</div></div>
              <div><div className="stat-number">8<sup>+</sup></div><div className="stat-label">Projects shipped</div></div>
              <div><div className="stat-number">5<sup>+</sup></div><div className="stat-label">Clients served</div></div>
              <div><div className="stat-number">10<sup>+</sup></div><div className="stat-label">Tech stacks</div></div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <span className="section-label">Selected work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          {projects.map((p) => (
            <div key={p.id} className="project-row" onClick={() => openProject(p.id)}>
              <span className="project-num">{p.id}</span>
              <div>
                <div className="project-tag">{p.tag}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
              </div>
              <div className="project-year">{p.year}<span className="project-arrow">↗</span></div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="skills-left">
            <div className="skills-inner-header">
              <span className="section-label">Toolkit</span>
              <h2 className="section-title">Skills</h2>
            </div>
            <p className="skills-intro">
              I work across the full stack — Laravel APIs, relational databases,
              modern JavaScript frameworks, and cross-platform mobile apps.
              I care as much about clean code as I do about great user experience.
            </p>
          </div>
          <div className="skills-right">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="about-left">
            <div className="about-section-header">
              <span className="section-label">Background</span>
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="exp-item">
              <div className="exp-date">NOV 2024 — PRESENT (2026)</div>
              <div className="exp-role">Software Developer · Full Stack Web & App</div>
              <div className="exp-company"><a href="https://designcodeit.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--rust)", textDecoration: "none" }}>DesignCodeIT</a></div>
              <div className="exp-desc">
                Developed full-stack web applications using Laravel and PHP. Designed MySQL databases,
                built responsive UI with Tailwind CSS and Bootstrap, created and integrated REST APIs,
                developed modern frontend apps with Vue.js, React.js, and Next.js, and built
                cross-platform mobile apps using React Native.
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-section-header">
              <span className="section-label">Education</span>
              <h2 className="section-title">Study</h2>
            </div>
            <div className="edu-item">
              <div className="edu-date">2021 – 2023</div>
              <div className="edu-degree">HSC · 4.08</div>
              <div className="edu-school">Nischintapur Degree College</div>
            </div>
            <div className="edu-item">
              <div className="edu-date">2023 – Present (2026)</div>
              <div className="edu-degree">Bachelor of Business Administration</div>
              <div className="edu-school">Chengarchar Govt. College</div>
            </div>
            <div className="edu-item" style={{ borderBottom: "none" }}>
              <div className="edu-date">Languages</div>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                <span className="tech-chip">English</span>
                <span className="tech-chip">Bangla (Fluent)</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div>
            <span className="section-label">Let&apos;s build something</span>
            <h2 className="contact-headline">Got a project<br />in <em>mind?</em></h2>
          </div>
          <div className="contact-right">
            <a href="https://wa.me/8801612043558" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">WhatsApp</span>
              <span className="contact-link-handle">+880 1612043558</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="mailto:samiularfinmd@gmail.com" className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-handle">samiularfinmd@gmail.com</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://github.com/samiul132" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-handle">@samiul132</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/md-samiul-arfin-959954277/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-handle">md-samiul-arfin-959954277</span>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://www.fiverr.com/samiul_arfin?public_mode=true" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-label">Fiverr</span>
              <span className="contact-link-handle">@samiul_arfin</span>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </section>

        <footer>
          <span className="footer-copy">© 2026 Md Samiul Hasan — All rights reserved</span>
          <div className="footer-dot" title="Open to work" />
        </footer>
      </div>
    </div>
  );
}