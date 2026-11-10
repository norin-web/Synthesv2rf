import type { ReactNode } from "react";
import { Link } from "react-router";
import { AppleLogo } from "./Icons";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "dark" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

/** Pill button; links to the App Store get the Apple logo. */
export default function Btn({ children, to, href, variant = "dark", size = "md", className = "", type = "button", onClick }: Props) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const inner = (
    <>
      {href?.startsWith("https://apps.apple.com") && <AppleLogo className="btn__apple" />}
      <span>{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
