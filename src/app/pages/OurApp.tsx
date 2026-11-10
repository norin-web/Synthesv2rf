import { useState } from "react";
import { Link } from "react-router";
import { app, site, specs, storeShots, tabs } from "../content/site";
import { img } from "../utils/img";
import { scrollToId, useActiveSection } from "../utils/motion";
import Btn from "../components/Btn";
import Cta from "../components/Cta";
import Phone, { PhoneStack } from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { IconGear, IconHistory, IconMagic } from "../components/Icons";

const TABS = [
  { id: "tab-generate", label: "Generate", Icon: IconMagic },
  { id: "tab-history", label: "History", Icon: IconHistory },
  { id: "tab-settings", label: "Settings", Icon: IconGear },
];

export default function OurApp() {
  const active = useActiveSection(TABS.map((t) => t.id), 0.5);
  return (
    <>
      <section className="phero">
        <div className="container phero__inner">
          <Reveal as="p" className="eyebrow-line">The app</Reveal>
          <Split as="h1" className="h1" parts={[["A small studio for avatar videos, inside your iPhone"]]} />
          <Reveal as="p" className="lead" delay={250}>
            The app has three tabs: Generate, History and Settings. The bar below works the same way. Tap a tab to jump to it.
          </Reveal>
          <Reveal delay={350}>
            <Btn href={app.url} variant="primary" size="lg">Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>

      <section className="apptabs">
        <nav className="tabbar" aria-label="App tabs">
          {TABS.map(({ id, label, Icon }) => (
            <button key={id} className={active === id ? "is-on" : ""} aria-current={active === id ? "true" : undefined} onClick={() => scrollToId(id, 110)}>
              <Icon width={20} height={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="container apptabs__list">
          <Generate />
          <History />
          <Settings />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="head">
            <h2 className="h3">On the App Store</h2>
          </Reveal>
          <div className="reel">
            {storeShots.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <img src={img(s)} alt={`App Store screenshot ${i + 2}`} width={600} height={1304} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section specs-wrap">
        <div className="container specs">
          <Reveal className="specs__head">
            <h2 className="h3">Details</h2>
            <p className="muted">Taken from the App Store listing.</p>
          </Reveal>
          <Reveal as="dl" className="specs__list" delay={120}>
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}

function Generate() {
  const steps = tabs.generate.steps;
  const [i, setI] = useState(0);
  return (
    <article id="tab-generate" className="chapter chapter--tint">
      <div className="chapter__copy">
        <span className="tagline">Tab 1 of 3</span>
        <h2 className="h2">Generate</h2>
        <p className="lead">Everything that makes a video lives on this tab. Pick a step to see its screen.</p>
        <div className="steplist" role="tablist" aria-label="Generate steps">
          {steps.map((s, n) => (
            <button key={s.title} role="tab" aria-selected={n === i} className={n === i ? "is-on" : ""} onClick={() => setI(n)}>
              <b>{s.title}</b>
              <span>{s.hint}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="chapter__phone">
        <PhoneStack items={steps.map((s) => ({ img: s.img, alt: `${s.title} screen` }))} active={i} />
      </div>
    </article>
  );
}

function History() {
  const [list, setList] = useState<"Templates" | "My Avatars">("Templates");
  return (
    <article id="tab-history" className="chapter chapter--line chapter--rev">
      <div className="chapter__phone">
        <Phone src="/images/phone-history.webp" alt="History screen with Templates and My Avatars tabs" />
      </div>
      <div className="chapter__copy">
        <span className="tagline">Tab 2 of 3</span>
        <h2 className="h2">History</h2>
        <p className="lead">Every video you generate lands here with its name and date. Open one to watch it again, download it or share it.</p>
        <div className="seg seg--inline" role="radiogroup" aria-label="History lists">
          {(["Templates", "My Avatars"] as const).map((v) => (
            <button key={v} role="radio" aria-checked={list === v} className={list === v ? "is-on" : ""} onClick={() => setList(v)}>
              {v}
            </button>
          ))}
        </div>
        <p className="muted">
          {list === "Templates"
            ? "Videos made from template avatars like Natasha or Marcus."
            : "Videos made from avatars you created from your own photos."}
        </p>
      </div>
    </article>
  );
}

function Settings() {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: site.brand, url: site.url });
      else {
        await navigator.clipboard.writeText(site.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* the visitor closed the share sheet */
    }
  };
  return (
    <article id="tab-settings" className="chapter chapter--tint">
      <div className="chapter__copy">
        <span className="tagline">Tab 3 of 3</span>
        <h2 className="h2">Settings</h2>
        <p className="lead">The same rows you see in the app. On this site each one opens its page.</p>
        <ul className="setrows">
          {tabs.settings.map((r) => (
            <li key={r.label}>
              {r.to ? (
                <Link to={r.to}><b>{r.label}</b><span>{r.action}</span></Link>
              ) : r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer"><b>{r.label}</b><span>{r.action}</span></a>
              ) : (
                <button onClick={share}><b>{r.label}</b><span aria-live="polite">{copied ? "Link copied" : r.action}</span></button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="chapter__phone">
        <Phone src="/images/phone-settings.webp" alt="Settings screen" />
      </div>
    </article>
  );
}
