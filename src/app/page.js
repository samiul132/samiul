"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Laravel SaaS Platform",
    tag: "Full Stack · Laravel · MySQL",
    desc: "Multi-tenant SaaS application with subscription billing, role-based access control, and real-time notifications.",
    year: "2024",
  },
  {
    id: "02",
    title: "Vue.js Admin Dashboard",
    tag: "Frontend · Vue.js · Tailwind",
    desc: "Feature-rich admin panel with data tables, charts, and dynamic form builders. Deployed across 3 client projects.",
    year: "2025",
  },
  {
    id: "03",
    title: "React Native Mobile App",
    tag: "Mobile · React Native · Node.js",
    desc: "Cross-platform e-commerce app with push notifications, offline support, and seamless payment integration.",
    year: "2025",
  },
  {
    id: "04",
    title: "Next.js E-Commerce Store",
    tag: "Full Stack · Next.js · MySQL",
    desc: "Server-side rendered storefront with dynamic routing, cart management, and Laravel REST API backend.",
    year: "2026",
  },
];

const skills = [
  "Laravel", "PHP", "MySQL", "JavaScript",
  "Vue.js", "Next.js", "React Native", "Node.js",
  "Tailwind CSS", "Bootstrap", "React", "REST API",
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (rootRef.current) rootRef.current.setAttribute("data-loaded", "true");
    });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* NAV */}
      <nav className={scrollY > 40 ? "scrolled" : ""}>
        <a href="#" className="nav-logo">Md Samiul Arfin</a>
        <ul className="nav-links">
          <li><a href="#projects">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Available for hire · 2025</p>
          <h1 className="hero-name">
            Full Stack<br /><em>Developer</em>
          </h1>
          <p className="hero-bio">
            I craft robust web and mobile applications — from elegant Laravel
            backends to pixel-perfect Vue &amp; React frontends. Based in Bangladesh,
            working globally.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Work ↓</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-bg-text">SA</div>
          <div className="hero-stats">
            <div>
              <div className="stat-number">1<sup>+</sup></div>
              <div className="stat-label">Years of exp.</div>
            </div>
            <div>
              <div className="stat-number">8<sup>+</sup></div>
              <div className="stat-label">Projects shipped</div>
            </div>
            <div>
              <div className="stat-number">5<sup>+</sup></div>
              <div className="stat-label">Clients served</div>
            </div>
            <div>
              <div className="stat-number">6<sup>×</sup></div>
              <div className="stat-label">Tech stacks</div>
            </div>
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
          <div key={p.id} className="project-row">
            <span className="project-num">{p.id}</span>
            <div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <span className="project-year">{p.year}</span>
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

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div>
          <span className="section-label">Let&apos;s build something</span>
          <h2 className="contact-headline">Got a project<br />in <em>mind?</em></h2>
        </div>
        <div className="contact-right">
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
            <span className="contact-link-handle">in/md-samiul-arfin-959954277</span>
            <span className="contact-link-arrow">↗</span>
          </a>
          {/* <a href="https://twitter.com/samiularfin" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-label">Twitter / X</span>
            <span className="contact-link-handle">@samiularfin</span>
            <span className="contact-link-arrow">↗</span>
          </a> */}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">
          © 2026
          {new Date().getFullYear() > 2026 ? `-${new Date().getFullYear()}` : ""} Md Samiul Arfin — All rights reserved
        </span>
        <div className="footer-dot" title="Open to work" />
      </footer>
    </div>
  );
}