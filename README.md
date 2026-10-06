# DreamLife Now — Premium Redesign

A bespoke, premium redesign of the DreamLife Now landing page
(reference: `https://dreamlifenow.de/dreamlifenow-2/`), rebuilt from the
original WordPress/Elementor page into a fast, accessible **Next.js + TypeScript
+ Tailwind CSS** site.

The original brand identity is preserved; the design, layout, UX and motion are
elevated. All customer-facing content is in **German** and sourced faithfully
from the reference page — no testimonials, statistics, certifications or
promises were invented or strengthened.

---

## 1. Extracted branding (verified from the reference site)

| Token | Value | Usage |
|-------|-------|-------|
| **Brand sky blue (accent)** | `#5AC8FA` | Logo swoosh, primary accent, highlights, CTAs |
| **Ink / navy (dark)** | `#101D45` | Dark sections, headings, primary button |
| **Deep indigo** | `#3B3664` | Gradient partner for the navy |
| **Body gray** | `#4B5563` / `#6F7D91` | Paragraph + muted text |
| **Cloud / surfaces** | `#ECEFF1` / `#F4F9FF` | Light section backgrounds |

> The current DreamLife Now logo uses a **sky-blue swoosh** (`#5AC8FA`), and the
> live reference site uses that blue as its primary accent — so the redesign is
> built around brand blue. (An older green swoosh `#A9DD65` also exists in the
> brand's history; it is not used here.) For stability the Tailwind accent token
> is still named `lime`, but every shade maps to the sky-blue scale.

- **Logo:** handwritten script wordmark “Dreamlife.now” with a sky-blue swoosh
  (`/public/brand/logo-blue.png`, the current brand logo). A **white variant**
  (`logo-white.png`, white script + blue swoosh) was generated for dark
  backgrounds (header over the hero, footer).
- **Typography:** `Nunito Sans` (display / headings, weights 800–900) + `Inter`
  (body / UI) — both from the original site, loaded via `next/font`.
- **Imagery:** the original tropical-beach hero photo is reused
  (`hero-island.jpg`) with intentional cropping. Trust badges (Trustpilot,
  ProvenExpert, Meta Partner, Verbraucherschutz) are the original assets.
- **Voice / audience / goal:** motivational, direct, “du” form; audience is
  career-changers seeking location-independent income; **primary conversion
  goal = booking the free strategy call** (`erstgespraech.dreamlifenow.de`),
  secondary = the free video training (`dein.dreamlifenow.de/video/`).

> Everything above is **verified** from the live reference page’s HTML/CSS and
> assets.

**Real imagery from the reference (all pulled from dreamlifenow.de):**

- **Team / coaches** — real headshots for all six (Nico, Viktoria, Felix Huber,
  Ploy, Irina Beier, Philipp), mapped by the label shown next to each photo on
  the reference. Stored in `public/brand/people/`.
- **Testimonials** — real photos for the three review-card people the reference
  shows with a portrait + Instagram link (Jonathan Chavannes, Irina Beier, Ploy
  Boonmeeprasert), matched by each image’s `alt` text. The remaining quote cards
  (whose subjects appear only as video case studies on the reference, with no
  portrait) keep clean monogram avatars.
- **Über Nico & Viktoria** uses the brand’s founder photo-collage (`artboard-9`).
- **Hero/trust strip** uses the brand’s “Bereits über 150+ Teilnehmer” social-proof
  graphic.
- **Trustmarkt case studies** — the exact `[trustmarkt]` shortcode output is
  embedded (`widget.trustmarkt.de/embed/...`). ⚠️ Trustmarkt licenses the widget
  to a single domain and returns **HTTP 403** for any other referrer, so the live
  widget only renders when the site is served from **dreamlifenow.de**. On the
  GitHub Pages preview (or localhost) a graceful fallback card with a link to the
  public case studies is shown instead. No action needed — it will render
  automatically once deployed on the production domain.

**Premium pass (v2):**

- **Success stories** are now a video gallery — real reference YouTube videos
  (mapped by each branded thumbnail's content), shown as a featured story + grid
  with play buttons that open an accessible video **lightbox** (Esc / backdrop to
  close, autoplay via youtube-nocookie).
- **Team** redesigned as premium portrait cards (founders featured + team row)
  instead of avatar circles.
- **Presse** is an editorial, image-rich layout using the six real press-article
  images, with a large lead story.
- **Comparison** now reflects the attorney's ~50 % tax/levies (net ≈ 2.629 € vs.
  the nomad's ≈ 5.258 €) and adds Freiheit / Netto / Zeitaufwand meter bars.
- **Final CTA** gains an animated SVG growth chart on the right (illustrative),
  echoing the reference's "Start your journey" graphic.
- **Footer** has slow-drifting brand orbs; a brand scroll-progress bar sits at
  the top of the page. All motion respects `prefers-reduced-motion`.

---

## 2. Section audit (keep / improve / merge / remove)

| Original section | Recommendation | Reason |
|---|---|---|
| Hero + main CTA | **Keep & improve** | Clearer headline hierarchy, one dominant CTA, coordinated entrance. |
| Trust badges | **Keep & merge** | Consolidated into one tidy, de-duplicated trust strip under the hero. |
| Value propositions (6) | **Keep & improve** | Rebuilt as a consistent icon-card grid. |
| Success stories (video case studies) | **Keep & merge** | Condensed from ~19 near-identical video cards to **9 representative stories** + one link to the full case-study archive. The 19-card wall was repetitive and diluted impact. |
| “Über Nico & Viktoria” | **Keep & improve** | Focused split layout with the brand image + pillars. |
| Digitalisation / motivation blocks | **Merge** | Several overlapping “Freiheit leben / Starte dein Business” blocks merged into the founder section (they repeated the same message). |
| Income model | **Keep & improve** | Presented with clear stats + qualifying footnote. |
| Anwalt vs. Nomade comparison | **Keep & improve** | Rebuilt as a clean two-column comparison; Stepstone source retained. |
| Testimonials / reviews | **Keep & merge** | Merged the duplicate “Was unsere Kunden sagen” + review-carousel blocks into one testimonial grid; kept the Expertenmarkt link. |
| Eligibility (“ideale Teilnehmer”) | **Keep & improve** | Paired with the verification card. |
| Verbraucherschutz verification | **Keep** | Trust signal; wording preserved verbatim. |
| Press | **Keep & improve** | Clean outlet cards. |
| Coaches | **Keep & improve** | Tidy team grid. |
| FAQ | **Keep & improve** | Accessible accordion with smooth expansion. |
| Final CTA | **Keep & improve** | Single focused strategy-call CTA. |
| Footer + legal | **Keep** | All legal links (Impressum, Datenschutz, Barrierefreiheit), socials, address and contact retained. |

**Recommended to remove / reconsider:** the repeated mid-page CTA banners and
the duplicated “Dein Weg zu mehr Freiheit & Einkommen” headings (there were
several). These competing CTAs were consolidated so the strategy-call remains
the single dominant action.

### ⚠️ Claims flagged for your review (not strengthened — preserved as-is)

These appeared on the original page and may need legal/qualification review.
They were **kept faithfully but not emphasised or strengthened**; some were
given mild qualification (e.g. “Ergebnisse sind individuell”):

- *“0 % Steuern? Kein Problem mit dieser Methode!”* — **omitted** from the
  redesign pending substantiation (tax claims are high-risk). Re-add only with
  proper qualification if you can support it.
- Specific income figures (`20.000 €`, `70.000 €`, `11.000 €`, etc.) — kept as
  individual testimonial statements, with an “individual results” disclaimer.
- *“sicheres Online-Geschäftsmodell”* and *“bestätigtes Serviceversprechen ohne
  versteckte Mängel”* — preserved verbatim from the original.

---

## 3. What changed & why

- **Design system:** shared tokens for colour, typography, spacing, radius,
  shadow and motion (`tailwind.config.ts` + `globals.css`); reusable
  `Button`, `Section`, `Reveal`, `Logo`, `Icon` primitives.
- **Hierarchy & composition:** generous spacing, a consistent `max-w-content`
  grid, display type scale, intentional section rhythm (light / tinted / dark).
- **Premium feel from composition, not gimmicks:** no heavy gradients, glass
  spam or decorative noise — depth comes from type, imagery, cards and subtle
  shadow.
- **Motion:** coordinated hero entrance (framer-motion), subtle scroll reveals
  (IntersectionObserver), refined button/card hovers, smooth CSS-grid FAQ
  expansion, gentle hero image drift. All **content stays visible without JS**,
  and **`prefers-reduced-motion` disables motion** entirely.
- **Accessibility:** semantic landmarks, skip link, labelled nav, ARIA on the
  accordion & mobile menu, visible on-brand focus rings, accessible contrast,
  `next/image` optimisation + blur placeholders to minimise layout shift.

---

## 4. Integrations & configuration required

- **CTAs are real and preserved** — they link to the live funnels:
  - Strategy call → `https://erstgespraech.dreamlifenow.de/`
  - Video training → `https://dein.dreamlifenow.de/video/`
  - Case studies → Expertenmarkt; socials & legal → original URLs.
- **Newsletter form** (`src/components/sections/NewsletterForm.tsx`): to avoid a
  fabricated backend/success state, it currently opens the visitor’s mail client
  to `info@dreamlifenow.de`. **Swap `handleSubmit` for a real ESP endpoint**
  (Mailchimp, Brevo, etc.) once credentials exist.
- **Cookie/consent banner** is **not** included — add your existing CMP
  (e.g. the original Cookiebot/consent tool) before going live in the EU.
- No analytics/tracking pixels are bundled; add as needed.

---

## 5. Run & preview

```bash
npm install
npm run dev     # http://localhost:3000  (development)

# production
npm run build
npm start       # serves the optimized build on http://localhost:3000
```

Other scripts: `npm run lint`.

**Tech:** Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 ·
framer-motion · next/font · next/image (sharp).

---

## 6. Live preview via GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) builds a static
export and deploys it to GitHub Pages on every push to the default branch.

**Preview URL (once enabled):** `https://shahzadishq.github.io/dreamlife/`

### One-time setup (required — do this once in the repo UI)

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The next push (or a manual run via **Actions → “Deploy to GitHub
Pages” → Run workflow**) builds and publishes the site; the deploy job prints
the live URL. First deploys take a couple of minutes.

### How the static build works

- `GITHUB_PAGES=true` switches `next.config.mjs` to `output: "export"` (a fully
  static site in `./out`) with `basePath`/`assetPrefix` set to `/<repo>` so all
  assets resolve under the project subpath, and `images.unoptimized` (Pages has
  no image-optimization server).
- Local `npm run dev` / `npm start` are unaffected — the export settings only
  apply when `GITHUB_PAGES=true`.
- To reproduce the exact Pages build locally:
  ```bash
  GITHUB_PAGES=true PAGES_BASE_PATH=/dreamlife npm run build
  npx serve out   # or any static server; note the /dreamlife base path
  ```

> Note: this is a static preview. Client-side motion, the FAQ accordion and the
> mobile menu all work; the newsletter form still just opens the mail client.
> The real CTAs continue to point at the live funnels.

## 7. Project structure

```
public/brand/            Logo variants, hero image, trust badges, favicon
src/app/                 layout.tsx (fonts, metadata), page.tsx, globals.css
src/lib/content.ts       All German copy + CTA destinations (single source)
src/components/ui/        Button, Section, Reveal, Logo, Icons
src/components/sections/  Header, Hero, TrustBar, ValueProps, SuccessStories,
                          Founder, IncomeModel, Comparison, Testimonials,
                          Eligibility, Press, Coaches, Faq, FinalCta, Footer
```

Content is centralised in `src/lib/content.ts`, so copy can be edited without
touching layout code.
