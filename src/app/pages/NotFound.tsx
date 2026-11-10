import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="phero nf">
      <div className="container phero__inner">
        <h1 className="h1">This page is not in the script</h1>
        <p className="lead">The link may be old or mistyped.</p>
        <Btn to="/" variant="dark" size="lg">Back to Home</Btn>
      </div>
    </section>
  );
}
