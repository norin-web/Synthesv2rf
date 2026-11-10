# Synth AI Avatar — promo site

Promo site for the iOS app Synth AI Avatar (App Store ID 6827178858).
Design: Paper file "Synthesia v2 RF", page **Promo** (7 desktop + 7 mobile artboards and a Handoff board).
Built on the Hisense promo scaffold: React 18 + TypeScript + Vite 6 + Tailwind 4 (layout in plain CSS) + React Router 7.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/Synthesv2rf/
pnpm build      # → dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with pnpm, copies
`index.html` to `404.html` (so deep links load the app) and publishes to GitHub Pages.
In the repo: **Settings → Pages → Source: GitHub Actions** must be on before the first run.

Live URL without a domain: https://norin-web.github.io/Synthesv2rf/

### The `base` trap

`vite.config.ts` has `base: "/Synthesv2rf/"` because the site is served from a subpath.
When a custom domain is attached in Pages settings, in the **same commit**:

1. set `base: "/"`;
2. add `public/CNAME` with the bare domain;
3. update `site.url` in `src/app/content/site.ts` and the `og:url` / `og:image` tags in `index.html`.

Otherwise every asset 404s and the page goes blank.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store link, operator, FAQ, screens, specs.
  Values marked `PLACEHOLDER` wait for the owner (operator name, iOS version, category, languages, size).
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the owner.
  Not received yet: both pages show a "text is on its way" notice until `body` is filled.
  Only markup may change (`## ` headings, `- ` lists); never edit the wording.
- `src/styles/index.css` — tokens in `:root` (mirror the Paper tokens) and all layout.
- `public/images/` — WebP exports from `../File/materials/` (phones 680 px wide, transparent).
- Images in JSX always go through `img()` (`src/app/utils/img.ts`) so they work under any `base`.

## Motion rules

- No smooth/inertia scroll; the header is sticky and never hides.
- Reveals are CSS transitions driven by `useReveal` (`src/app/utils/useReveal.ts`); hidden states
  are scoped under `html.js`, and both fallbacks are gated on real geometry, so content is never
  left invisible in a background tab and the page does not "play everything on load".
- Masked/char headlines (`Split`) keep the space between word spans; check
  `h.innerText === h.getAttribute('aria-label')` after changing a heading.
- Everything respects `prefers-reduced-motion`.
