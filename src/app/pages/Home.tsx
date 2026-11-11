import { useState } from "react";
import { app, cast, demo, flow, gains, modes, scenarios, screens, steps, strip } from "../content/site";
import { img } from "../utils/img";
import { useAutoIndex } from "../utils/motion";
import { useReveal } from "../utils/useReveal";
import Btn from "../components/Btn";
import Cta from "../components/Cta";
import Phone, { PhoneStack } from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import {
  IconClock, IconDownload, IconGlobe, IconLeft, IconPen, IconPerson, IconPlay, IconPlus, IconRight, IconWave,
} from "../components/Icons";

const stripIcons = [IconPerson, IconPlus, IconPen, IconWave, IconGlobe, IconDownload];
// waveform bar heights (px), like the voice player in the app
const WAVE = [8, 16, 24, 12, 20, 10, 28, 16, 8, 22, 14, 8, 18, 10, 4, 4, 4, 4, 4, 4];

export default function Home() {
  return (
    <>
      <Hero />
      <Strip />
      <Gains />
      <Modes />
      <Flow />
      <Demo />
      <Start />
      <Screens />
      <Scenarios />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal as="p" className="eyebrow-line">AI avatar video generator for iPhone</Reveal>
            <Split as="h1" className="h1 hero__title" parts={[["Turn a script into a video with a talking AI avatar"]]} />
            <Reveal as="p" className="lead hero__lead" delay={250}>
              Pick an avatar from the templates or upload your own photo, write what it should say and choose a voice. The app turns it into a video you can save and share.
            </Reveal>
            <Reveal className="hero__cta" delay={400}>
              <Btn href={app.url} variant="primary" size="lg">Download on the App Store</Btn>
              <span className="small subtle">Free to download on the App Store</span>
            </Reveal>
          </div>
          <div className="hero__stage">
            <Phone src="/images/phone-result.webp" alt="" className="hero__back" eager />
            <Phone src="/images/phone-templates.webp" alt="The app’s templates screen with nine avatars" className="hero__front" eager />
            <Reveal className="hero__fact" delay={600}>
              <b className="h-num">3 steps</b>
              <p className="muted">Avatar, script, voice. Then the app generates the video and keeps it in History.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <section className="strip">
      <div className="container">
        <p className="strip__title">Everything you need is on one screen</p>
        <ul className="strip__list">
          {strip.map((s, i) => {
            const I = stripIcons[i];
            return (
              <li key={s}>
                <I width={22} height={22} />
                <span>{s}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Gains() {
  return (
    <section className="section gains">
      <div className="container gains__grid">
        <Reveal className="gains__copy">
          <h2 className="h3">From the first line to a finished video in one app</h2>
          <p className="muted">No camera crew and no editing timeline. You choose who speaks, what they say and in which voice.</p>
          <Btn href={app.url} variant="dark">Get the app</Btn>
        </Reveal>
        <div className="gains__cards">
          {gains.map((g, i) => (
            <Reveal className="gcard" key={g.tag} delay={i * 120}>
              <span className="tagline">
                <span className="ic-badge">{i === 0 ? <IconPerson width={18} height={18} /> : <IconClock width={18} height={18} />}</span>
                {g.tag}
              </span>
              <b className="h-num">{g.n}</b>
              <p className="muted">{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modes() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="head">
          <h2 className="h2">Start from a template or from your own photo</h2>
          <p className="muted">The Generate tab has two modes. Switch between them at the top of the screen.</p>
        </Reveal>
        <div className="modes">
          {modes.map((m, i) => (
            <Reveal className="mode" key={m.tag} delay={i * 120}>
              <span className="tagline">
                <span className="ic-badge">{i === 0 ? <IconPerson width={18} height={18} /> : <IconPlus width={18} height={18} />}</span>
                {m.tag}
              </span>
              <h3 className="h4">{m.title}</h3>
              <p className="muted">{m.text}</p>
              <div className="mode__phone">
                <Phone src={m.img} alt={`${m.tag} screen`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [i, pick] = useAutoIndex(flow.length, 5000, shown);
  return (
    <section className="section">
      <div className="container">
        <Reveal className="head">
          <h2 className="h2">Write it, voice it, watch it</h2>
          <p className="muted">Three screens take you from a blank script to a video you can download.</p>
        </Reveal>
        <div className="flow" ref={ref}>
          <div className="flow__tabs" role="tablist" aria-label="Steps">
            {flow.map((f, n) => (
              <button
                key={f.title}
                role="tab"
                aria-selected={n === i}
                className={`flow__tab${n === i ? " is-on" : ""}`}
                onClick={() => pick(n)}
              >
                <span className="flow__row">
                  <span className="flow__n">{n + 1}</span>
                  <span className="flow__t">{f.title}</span>
                </span>
                <span className="flow__body">
                  <span className="flow__text">{f.text}</span>
                  <span className="flow__bar"><i key={`${n}-${i}`} /></span>
                </span>
              </button>
            ))}
          </div>
          <div className="flow__stage">
            <PhoneStack items={flow.map((f) => ({ img: f.img, alt: `${f.title} screen` }))} active={i} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const people = demo.avatars.map((n) => cast.find((c) => c.name === n)!);
  const [who, setWho] = useState(0);
  const [voice, setVoice] = useState<"Female" | "Male">("Female");
  const [playing, setPlaying] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <Reveal className="head">
          <h2 className="h2">Same script, different speaker</h2>
          <p className="muted">Swap the avatar or the voice without rewriting a word. Try it below.</p>
        </Reveal>
        <div className="demo">
          <Reveal className="demo__dark">
            <div className="demo__darktext">
              <h3 className="h4">Male or female voice, in the language you need</h3>
              <p>Filter voices by Male and Female, play a sample, then pick a language on the next screen.</p>
            </div>
            <div className="faces faces--dark">
              {cast.filter((c) => ["Natasha", "Krish", "Valeria", "Mira"].includes(c.name)).map((c) => (
                <img key={c.name} src={img(c.img)} alt="" width={48} height={48} loading="lazy" />
              ))}
            </div>
          </Reveal>
          <Reveal className="demo__card" delay={120}>
            <div className="demo__controls">
              <div className="demo__group">
                <span className="demo__label" id="d-av">Avatar</span>
                <div className="demo__avatars" role="radiogroup" aria-labelledby="d-av">
                  {people.map((p, n) => (
                    <button key={p.name} role="radio" aria-checked={n === who} aria-label={p.name} className={n === who ? "is-on" : ""} onClick={() => setWho(n)}>
                      <img src={img(p.img)} alt="" width={64} height={64} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="demo__group">
                <span className="demo__label">Script</span>
                <p className="demo__script">{demo.script}</p>
              </div>
              <div className="demo__group">
                <span className="demo__label" id="d-v">Voice</span>
                <div className="seg" role="radiogroup" aria-labelledby="d-v">
                  {(["Female", "Male"] as const).map((v) => (
                    <button key={v} role="radio" aria-checked={voice === v} className={voice === v ? "is-on" : ""} onClick={() => setVoice(v)}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="demo__preview">
              <div className="demo__frame">
                {people.map((p, n) => (
                  <img key={p.name} src={img(p.img)} alt={n === who ? `${p.name}, template avatar` : ""} className={n === who ? "is-on" : ""} width={768} height={768} loading="lazy" />
                ))}
                <span className="demo__play" aria-hidden="true"><IconPlay /></span>
              </div>
              <div className={`player${playing ? " is-playing" : ""}`}>
                <span className="player__wave" aria-hidden="true">
                  {WAVE.map((h, k) => <i key={k} style={{ height: h, ["--k" as string]: k }} />)}
                </span>
                <button className="player__btn" aria-label={playing ? "Pause sample" : `Play ${voice.toLowerCase()} voice sample`} onClick={() => setPlaying(!playing)}>
                  <IconPlay width={14} height={16} />
                </button>
              </div>
              <p className="demo__note small subtle">Illustration of the app’s screens. Voices play inside the app.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Start() {
  return (
    <section className="section">
      <div className="container start">
        <div className="start__copy">
          <Reveal>
            <h2 className="h2">Your first video in three steps</h2>
            <p className="muted">Everything starts on the Generate tab, the first screen you see.</p>
          </Reveal>
          <ol className="start__steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120}>
                {s.icon === "app" ? (
                  <img className="start__icon" src={img("/images/app-icon.png")} alt="" width={52} height={52} />
                ) : (
                  <span className="ic-badge ic-badge--lg">{s.icon === "face" ? <IconPerson /> : <IconPen />}</span>
                )}
                <b>{s.title}</b>
                <p className="muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="start__box" delay={150}>
          <Phone src="/images/phone-generating.webp" alt="Your video is generating screen" />
        </Reveal>
      </div>
    </section>
  );
}

function Screens() {
  const [i, setI] = useState(0);
  const n = screens.length;
  const s = screens[i];
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="band">
          <h2 className="h3 band__title">See every screen before you install</h2>
          <div className="band__phone">
            <PhoneStack items={screens.map((x) => ({ img: x.img, alt: `${x.title} screen` }))} active={i} />
          </div>
          <div className="band__info" aria-live="polite">
            <span className="band__count">{i + 1} / {n}</span>
            <h3 className="h4">{s.title}</h3>
            <p>{s.text}</p>
            <div className="band__arrows">
              <button aria-label="Previous screen" onClick={() => setI((i - 1 + n) % n)}><IconLeft /></button>
              <button aria-label="Next screen" className="is-primary" onClick={() => setI((i + 1) % n)}><IconRight /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="head">
          <h2 className="h2">For the videos you keep putting off</h2>
          <p className="muted">When you need someone on screen but filming is not an option.</p>
        </Reveal>
        <div className="scen">
          {scenarios.map((s, i) => (
            <Reveal as="article" className="scen__card" key={s.title} delay={i * 100}>
              <img src={img(s.img)} alt="" width={768} height={768} loading="lazy" />
              <h3 className="h5">{s.title}</h3>
              <p className="muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
