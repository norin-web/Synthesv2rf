import { img } from "../utils/img";

/**
 * Transparent iPhone mockup (screen + frame baked into the PNG/WebP, 680×1408).
 * No plate, no border, no hover motion — only a soft shadow below (see .phone).
 */
export default function Phone({ src, alt, className = "", eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <img
      className={`phone ${className}`.trim()}
      src={img(src)}
      alt={alt}
      width={680}
      height={1408}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

/** Several screens stacked in one spot; the active one fades in (calm crossfade). */
export function PhoneStack({ items, active, className = "" }: { items: { img: string; alt: string }[]; active: number; className?: string }) {
  return (
    <div className={`phonestack ${className}`.trim()}>
      {items.map((it, i) => (
        <Phone key={it.img + i} src={it.img} alt={i === active ? it.alt : ""} className={i === active ? "is-on" : ""} />
      ))}
    </div>
  );
}
