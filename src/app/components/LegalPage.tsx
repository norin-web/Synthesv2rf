import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated } from "../content/legal";
import { scrollToId } from "../utils/motion";
import Split from "./Split";
import Reveal from "./Reveal";
import Btn from "./Btn";

type Doc = {
  title: string;
  body: string | null;
  glance: [string, string][];
  other: { to: string; label: string };
};

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet grey plate so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [active, setActive] = useState(sections[0]?.id);

  // highlight the section whose heading last passed the upper third of the viewport
  useEffect(() => {
    if (!sections.length) return;
    const onScroll = () => {
      let cur = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      <section className="lhero">
        <div className="container">
          <div className="lhero__card">
            <Split as="h1" className="h1 lhero__title" parts={[[doc.title]]} />
            <Reveal as="dl" className="lhero__meta" delay={300}>
              <div><dt>Last updated</dt><dd>{legalUpdated}</dd></div>
              <div><dt>Sections</dt><dd>{sections.length || "Soon"}</dd></div>
              <div><dt>Privacy requests</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="legal">
        <div className={`container legal__grid${sections.length ? " has-toc" : ""}`}>
          {sections.length > 0 && (
            <nav className="legal__toc" aria-label="Contents">
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      className={active === s.id ? "is-on" : ""}
                      onClick={() => scrollToId(s.id, 100)}
                      aria-current={active === s.id ? "true" : undefined}
                      aria-label={`${i + 1}. ${s.title}`}
                      title={s.title}
                    >
                      <b>{i + 1}</b>
                      <i aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article className="legal__body">
            {doc.glance.length > 0 && (
              <Reveal className="glance">
                <h2 className="h5">At a glance</h2>
                <div className="glance__grid">
                  {doc.glance.map(([h, t]) => (
                    <div className="glance__card" key={h}>
                      <b>{h}</b>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <p className="small subtle">A short summary for convenience. The full text below is what applies.</p>
              </Reveal>
            )}

            {!doc.body && (
              <div className="legal__pending">
                <h2 className="h4">The full text is on its way</h2>
                <p className="muted">
                  We are publishing the {doc.title} here shortly. Until then, write to{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a> with any question about it.
                </p>
              </div>
            )}

            {intro.map((t, i) => (
              <p className="legal__intro" key={i}>{linkify(t)}</p>
            ))}

            {sections.map((s, i) => (
              <section className="lsec" id={s.id} key={s.id}>
                <h2 className="h4">{i + 1}. {s.title}</h2>
                <div className="lsec__text">
                  {s.blocks.map((b, j) => <Block key={j} text={b} />)}
                </div>
              </section>
            ))}

            <div className="legal__ask">
              <div>
                <h2 className="h4">Questions?</h2>
                <p className="muted">Write to <a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
              <Btn to={doc.other.to} variant="dark">Read {doc.other.label}</Btn>
            </div>
            <p className="small subtle legal__back">
              Need help with the app instead? See <Link to="/support">Support</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
