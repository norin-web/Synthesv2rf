import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...p });

export const AppleLogo = (p: P) => (
  <svg viewBox="0 0 814 1000" width={16} height={19} aria-hidden="true" {...p}>
    <path fill="currentColor" d="M788 341c-6 4-108 62-108 190 0 148 130 200 134 202-1 3-21 72-69 142-43 62-88 124-156 124s-86-40-165-40c-77 0-104 41-166 41s-106-57-156-127C44 791 0 668 0 551c0-187 122-287 241-287 64 0 117 42 157 42 38 0 98-45 171-45 28 0 128 3 194 98zM555 166c30-35 51-84 51-133 0-7-1-14-2-19-48 2-106 32-140 72-27 31-53 80-53 130 0 8 1 15 2 18 3 1 9 2 14 2 43 0 97-29 128-70z" />
  </svg>
);

export const IconPerson = (p: P) => <svg aria-hidden="true" {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>;
export const IconPlus = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M12 5v14M5 12h14" /></svg>;
export const IconPen = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M4 20h4L19 9l-4-4L4 16v4z" /></svg>;
export const IconWave = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" /></svg>;
export const IconGlobe = (p: P) => <svg aria-hidden="true" {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>;
export const IconDownload = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>;
export const IconClock = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M12 7v5l3 2" /><circle cx="12" cy="12" r="9" /></svg>;
export const IconMagic = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M5 19L15 9M14 4v3M19 9h-3M17.5 5.5l-1.5 1.5M9 4l.7 1.6 1.6.7-1.6.7L9 8.6l-.7-1.6-1.6-.7 1.6-.7z" /></svg>;
export const IconHistory = (p: P) => <svg aria-hidden="true" {...base(p)}><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6M3.5 4v4h4M12 8v4l3 2" /></svg>;
export const IconGear = (p: P) => <svg aria-hidden="true" {...base(p)}><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></svg>;
export const IconCheck = (p: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="M7 12.5l3.2 3L17 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
export const IconChevron = (p: P) => <svg aria-hidden="true" {...base({ strokeWidth: 2, ...p })}><path d="M6 9l6 6 6-6" /></svg>;
export const IconLeft = (p: P) => <svg aria-hidden="true" {...base({ strokeWidth: 2, ...p })}><path d="M15 5l-7 7 7 7" /></svg>;
export const IconRight = (p: P) => <svg aria-hidden="true" {...base({ strokeWidth: 2, ...p })}><path d="M9 5l7 7-7 7" /></svg>;
export const IconUp = (p: P) => <svg aria-hidden="true" {...base({ strokeWidth: 2.2, ...p })}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
export const IconPlay = (p: P) => <svg width={22} height={24} viewBox="0 0 22 24" aria-hidden="true" {...p}><path d="M3 2l17 10L3 22z" fill="currentColor" /></svg>;
export const IconPause = (p: P) => <svg width={14} height={16} viewBox="0 0 14 16" aria-hidden="true" {...p}><rect x="1" y="1" width="4" height="14" rx="1" fill="currentColor" /><rect x="9" y="1" width="4" height="14" rx="1" fill="currentColor" /></svg>;
