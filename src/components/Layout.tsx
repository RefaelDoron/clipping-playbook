import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { SECTIONS } from "../data";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/money", label: "Money" },
  { to: "/tools", label: "Tools" },
  { to: "/build", label: "Build" },
  { to: "/approach", label: "Approach" },
  { to: "/niche", label: "Niche" },
  { to: "/checklist", label: "Day one" },
  { to: "/pitch", label: "Pitch" },
  { to: "/tracker", label: "Tracker" },
  { to: "/earnings", label: "Earnings" },
  { to: "/week", label: "7-day" },
  { to: "/sources", label: "Sources" },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, location.search, location.hash, location.key]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="app">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="Video Clipping Playbook home">
            <span className="brand-mark" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polygon points="5,3 13,8 5,13" fill="#e8ff47" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Clip Playbook</strong>
              <span>Refael & Mateen</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open ? "true" : "false"} />
          </button>
        </div>
      </header>
      {open ? (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home <span>00</span>
          </NavLink>
          {SECTIONS.map((s) => (
            <NavLink key={s.path} to={s.path} onClick={() => setOpen(false)}>
              {s.title} <span>{s.num}</span>
            </NavLink>
          ))}
          <NavLink to="/sources" onClick={() => setOpen(false)}>
            Sources <span>11</span>
          </NavLink>
        </nav>
      ) : null}
      <main id="main" className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>Private playbook for Refael and Mateen. Researched Oct 17 – Nov 16, 2026.</span>
          <span>
            <Link to="/sources">Sources</Link>
            {" · "}Campaign budgets change daily — check a campaign page before you clip.
          </span>
        </div>
      </footer>
    </div>
  );
}
