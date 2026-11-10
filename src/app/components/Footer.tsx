import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import { IconUp } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={36} height={36} loading="lazy" />
              <span>{site.brand}</span>
            </Link>
            <p className="muted">{site.tagline}</p>
            <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <h2 className="footer__h">Menu</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="footer__h">Help</h2>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer__app">
            <h2 className="footer__h">Get the app</h2>
            <p className="muted">Available for iPhone on the App Store.</p>
            <Btn href={app.url} variant="dark" size="sm">App Store</Btn>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {site.operator}</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <IconUp width={14} height={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
