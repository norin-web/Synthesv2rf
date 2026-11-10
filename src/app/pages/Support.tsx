import { useEffect, useRef, useState } from "react";
import { cast, faq, site } from "../content/site";
import { img } from "../utils/img";
import { reduced } from "../utils/motion";
import Cta from "../components/Cta";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { IconPause, IconPlay } from "../components/Icons";

const host = cast.find((c) => c.name === "Natasha")!;
const DEFAULT = faq.findIndex((f) => f.short === "Cancel subscription");

/**
 * "Ask the avatar": pick a question chip, the answer types in as subtitles over
 * the host avatar and the player bar fills. The full answer is always in the
 * DOM (screen readers and a paused player get the whole text).
 */
export default function Support() {
  const [i, setI] = useState(DEFAULT);
  const [shown, setShown] = useState(faq[DEFAULT].a.length);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number>();
  const text = faq[i].a;

  useEffect(() => {
    clearInterval(timer.current);
    if (!playing) return;
    if (reduced() || document.hidden) {
      setShown(text.length);
      setPlaying(false);
      return;
    }
    timer.current = window.setInterval(() => {
      setShown((n) => {
        if (n >= text.length) {
          clearInterval(timer.current);
          setPlaying(false);
          return n;
        }
        return n + 2;
      });
    }, 28);
    return () => clearInterval(timer.current);
  }, [playing, text]);

  const ask = (n: number) => {
    setI(n);
    setShown(0);
    setPlaying(true);
  };
  const toggle = () => {
    if (!playing && shown >= text.length) setShown(0);
    setPlaying(!playing);
  };
  const progress = Math.min(1, shown / text.length);

  return (
    <>
      <section className="ask">
        <div className="container ask__grid">
          <Reveal className="ask__player">
            <div className="ask__frame">
              <img src={img(host.img)} alt={`${host.name}, template avatar from the app`} width={768} height={768} />
              <div className="subs">
                <span className="subs__q">{faq[i].q}</span>
                <p className="subs__a" aria-live="polite">
                  <span>{text.slice(0, shown)}</span>
                  <span className="subs__rest" aria-hidden="true">{text.slice(shown)}</span>
                </p>
              </div>
            </div>
            <div className="pbar">
              <span>{host.name} answers</span>
              <span className="pbar__track"><i style={{ transform: `scaleX(${progress})` }} /></span>
              <button className="pbar__btn" onClick={toggle} aria-label={playing ? "Pause answer" : "Play answer"}>
                {playing ? <IconPause /> : <IconPlay width={14} height={16} />}
              </button>
            </div>
          </Reveal>

          <div className="ask__side">
            <Reveal as="p" className="eyebrow-line">Support</Reveal>
            <Split as="h1" className="h1 ask__title" parts={[["Pick a question. The answer plays."]]} />
            <Reveal as="p" className="lead" delay={200}>
              The most common questions, answered the way the app answers everything: by an avatar.
            </Reveal>
            <Reveal className="chips" delay={300}>
              {faq.map((f, n) => (
                <button key={f.q} className={`chip${n === i ? " is-on" : ""}`} aria-pressed={n === i} onClick={() => ask(n)}>
                  <span className="only-wide">{f.chip}</span>
                  <span className="only-narrow">{f.short}</span>
                </button>
              ))}
            </Reveal>
            <Reveal className="ask__mail" delay={400}>
              <span className="muted">Your question is not here? Write to us</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Reveal>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
