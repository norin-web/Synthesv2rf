import type { ReactNode } from "react";
import { app, cast, principles, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";

/** About as end credits: role on the left, name on the right, rolling in as you scroll. */
function Credit({ role, children }: { role?: string; children: ReactNode }) {
  return (
    <Reveal className="credit">
      <span className="credit__role">{role}</span>
      <div className="credit__name">{children}</div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section className="credits">
      <div className="container credits__inner">
        <Reveal className="credits__intro">
          <img src={img("/images/app-icon.png")} alt="" width={72} height={72} />
          <h1 className="h1">{site.brand}</h1>
          <p className="lead">An app for on-camera video without the camera. Here is who and what is behind it.</p>
        </Reveal>

        <div className="credits__roll">
          <Credit role="A production by"><b>{site.operator}</b></Credit>
          <Credit role="Based in"><b>Berlin, Germany</b></Credit>
          <Credit role="Made for"><b>iPhone</b></Credit>
          <Credit role="Written by">
            <b>You</b>
            <p>Every script in the app is yours. We only give it a face and a voice.</p>
          </Credit>
          <Credit role="Voices">
            <b>Male and Female, in the language you choose</b>
            <p>Ready-made voices only. The app does not clone voices.</p>
          </Credit>
        </div>

        <Reveal className="starring">
          <p className="starring__label">Starring the template avatars</p>
          <ul>
            {cast.map((c) => (
              <li key={c.name}>
                <img src={img(c.img)} alt="" width={96} height={96} loading="lazy" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
          <p className="starring__more">and every avatar you create from your own photo</p>
        </Reveal>

        <div className="credits__roll">
          {principles.map((p, i) => (
            <Credit key={p.title} role={i === 0 ? "How we work" : undefined}>
              <b>{p.title}</b>
              <p>{p.text}</p>
            </Credit>
          ))}
          <Credit role="Filmed with"><b>No camera at all</b></Credit>
          <Credit role="Questions and feedback">
            <a href={`mailto:${site.email}`}><b>{site.email}</b></a>
          </Credit>
        </div>

        <Reveal className="credits__end">
          <h2 className="h3">Now showing on the App Store</h2>
          <Btn href={app.url} variant="white" size="lg">Download on the App Store</Btn>
        </Reveal>
      </div>
    </section>
  );
}
