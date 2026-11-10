import { useEffect, useState } from "react";

// No inertial scroll on this site (the scroll lag is annoying) and no glows.

export const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Index that advances every `ms` while `run` is true and the page is visible.
 * Used by auto-advancing tabs; any manual pick restarts the timer.
 */
export function useAutoIndex(count: number, ms: number, run: boolean) {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!run || reduced() || count < 2) return;
    const t = setInterval(() => {
      if (!document.hidden) setI((v) => (v + 1) % count);
    }, ms);
    return () => clearInterval(t);
  }, [run, ms, count, tick]);
  const pick = (n: number) => {
    setI(n);
    setTick((t) => t + 1);
  };
  return [i, pick] as const;
}

/** id of the section whose top last passed `line` (fraction of the viewport). */
export function useActiveSection(ids: string[], line = 0.4) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < innerHeight * line) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, [ids.join("|"), line]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}

/** Scroll so the element sits under the sticky header. */
export function scrollToId(id: string, offset = 96) {
  const el = document.getElementById(id);
  if (!el) return;
  scrollTo({ top: el.getBoundingClientRect().top + scrollY - offset, behavior: reduced() ? "auto" : "smooth" });
}
