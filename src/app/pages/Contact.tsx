import { useState, type FormEvent } from "react";
import { site, topics } from "../content/site";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { IconUp } from "../components/Icons";

/**
 * Contact form styled like the app's script field. No backend on a static
 * site: the arrow validates and opens the visitor's mail app pre-filled.
 */
export default function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState<{ msg?: string; email?: string }>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof err = {};
    if (!msg.trim()) next.msg = "Please write a message first.";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "That email doesn’t look right. Check for typos.";
    setErr(next);
    if (next.msg) return document.getElementById("c-msg")?.focus();
    if (next.email) return document.getElementById("c-email")?.focus();
    const body = `${msg}\n\nReply to: ${email || "(not given)"}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${site.brand}: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <Reveal as="p" className="eyebrow-line">Contact and feedback</Reveal>
          <Split as="h1" className="h1" parts={[["Tell us what to fix or what to add"]]} />
          <Reveal as="p" className="lead" delay={200}>
            Bug reports, ideas for new voices or templates, questions about your data. Every message goes to the same inbox.
          </Reveal>
          <Reveal className="mailblock" delay={300}>
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>

        <Reveal as="form" className="sform" onSubmit={submit} noValidate delay={150}>
          <fieldset className="sform__group">
            <legend>Topic</legend>
            <div className="seg seg--wrap">
              {topics.map((t) => (
                <label key={t} className={topic === t ? "is-on" : ""}>
                  <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="sform__group">
            <label htmlFor="c-msg">Message</label>
            <div className="script">
              <textarea
                id="c-msg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Write your message..."
                aria-invalid={!!err.msg}
                aria-describedby={err.msg ? "c-msg-err" : "c-msg-hint"}
                rows={8}
              />
              <div className="script__foot">
                <span id="c-msg-hint" className="small subtle">Tell us what happened or what you would like to see</span>
                <button type="submit" className="script__send" aria-label="Send message">
                  <IconUp width={18} height={18} />
                </button>
              </div>
            </div>
            {err.msg && <span className="err" id="c-msg-err" role="alert">{err.msg}</span>}
          </div>

          <div className="sform__group">
            <label htmlFor="c-email">Your email</label>
            <input
              id="c-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="So we can write back"
              aria-invalid={!!err.email}
              aria-describedby={err.email ? "c-email-err" : undefined}
            />
            {err.email && <span className="err" id="c-email-err" role="alert">{err.email}</span>}
          </div>

          <p className="small muted">The arrow opens your mail app with the message filled in.</p>
          {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn’t, write to {site.email}.</p>}
        </Reveal>
      </div>
    </section>
  );
}
