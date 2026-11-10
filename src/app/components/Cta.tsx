import { app, cast } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

/** Dark split card with the hand-holding-phone shot (Paper: S11 CTA). */
export default function Cta() {
  const faces = cast.filter((c) => ["Natasha", "Krish", "Mira"].includes(c.name));
  return (
    <section className="section cta-wrap">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__copy">
            <div className="cta__top">
              <h2 className="h2 cta__title">Your next video can be ready before the coffee cools</h2>
              <p className="cta__text">Download Synth AI Avatar, pick a face and write the first line.</p>
              <Btn href={app.url} variant="white" size="lg">Download on the App Store</Btn>
            </div>
            <div className="cta__faces">
              <div className="faces">
                {faces.map((f) => (
                  <img key={f.name} src={img(f.img)} alt="" width={44} height={44} loading="lazy" />
                ))}
              </div>
              <span>Template avatars are ready the moment you open the app</span>
            </div>
          </div>
          <img className="cta__photo" src={img("/images/hand.webp")} alt="A hand holding an iPhone with the Synth AI Avatar templates screen" width={1220} height={1120} loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
