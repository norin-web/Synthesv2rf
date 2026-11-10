import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav, app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

/** Sticky header — always in place, never hides on scroll. */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    // lock scrolling on <html>: overflow on <body> would make body the scroller and unstick the header
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="container header__bar">
          <Link to="/" className="logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={36} height={36} />
            <span>{site.brand}</span>
          </Link>
          <nav className="header__nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `navlink${isActive ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__right">
            <Btn href={app.url} variant="dark" size="sm" className="header__cta">
              <span className="only-wide">Download</span>
              <span className="only-narrow">Get</span>
            </Btn>
            <button
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mmenu"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
            {n.label}
          </Link>
        ))}
        <Btn href={app.url} variant="primary" size="lg">Download on the App Store</Btn>
      </div>
    </>
  );
}
