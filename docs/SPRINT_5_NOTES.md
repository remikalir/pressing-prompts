# Sprint 5 — Progress Notes

*See `HANDOFF_SPRINT_5.md` for the full plan.*

---

## What landed in Sprint 5

### Privacy page
- New `src/pages/PrivacyPage.jsx`, final copy from Remi, declaring the project's existing stance: no accounts, no browser storage APIs, no analytics, session-only playlists, client-side exports. Seven short sections; "updated May 17, 2026" folded into the closing paragraph.
- Route registered at `/privacy` in `src/App.jsx`.
- Discreet link added to `Footer.jsx` alongside the license note (footer-only placement, per the stale Sprint-4 TODO comment that has now been replaced).

### About page
- New `src/pages/AboutPage.jsx`, final copy from Remi & Hannah, replacing the Sprint-1 placeholder.
- Five sections — *Our Purpose*, *Our Start*, *Our Values*, *Our Design*, *Our Team* — preceded by a section-nav strip (clickable labels separated by middle dots) that smooth-scrolls to each anchor.
- A small "↑ Back to top" link sits at the end of every section.
- Each section heading carries `scrollMarginTop: 80px` so the sticky NavBar (56px) doesn't cover the heading when an anchor is hit.
- Buttons (not anchor hash links) are used for scrolling because the app runs under HashRouter — updating `window.location.hash` would interfere with the route segment (e.g. `#/about`).
- "Please read our privacy policy" links via React Router to `/privacy`. External links (WCAG 2.1 AA, CC-BY-NC-SA 4.0, LinkedIn) open in a new tab with `rel="noopener noreferrer"`.

### PDFs hosted
Both delivered by Hannah, copied into `public/` so Vite serves them at site-root URLs:
- `public/sniff-test.pdf` → wired into Disinfo Activity 1 + Trust Activity 1 resources.
- `public/invisible-knapsack.pdf` → wired into **a new resource entry** in Benefits Activity 3, inserted between Gay and the Academic Wheel of Privilege. The PDF had been referenced in the pre-reading step detail but was missing from the activity's `resources` array; that gap is now closed.

### Activity-level resource URLs (Hannah's canonical list)
14 placeholder `url: "#"` entries updated to canonical URLs across:
- `benefits.js` — Academic Wheel of Privilege (UK RIO)
- `disinfo.js` — Abbie Richards TikTok, Carnegie Endowment "What Are Deepfakes?", NYT "Is This Video Even Real?", arXiv "How to Distinguish AI-Generated Images", Benson Wired
- `spy.js` — Meta, Google Gemini, OpenAI privacy policies, "Privacy for Whom?" (New Inquiry)
- `theft.js` — Elon/AAC&U student guide, Monash acknowledgment guidance, "Creativity, Copyright, and Fair Use" video
- `thinking.js` — Vasconcelos et al. 2023 (Stanford-hosted PDF)

One small factual correction along the way: the Carnegie deepfakes video was previously attributed to **Carnegie Mellon**; Hannah's canonical source is **Carnegie Endowment**. Title corrected in `disinfo.js`.

### Dedup pass (per §6 policy)
All 11 cases resolved. Where an activity-level resource and a Further Recommendations entry pointed to the same source, the activity entry now carries the URL (with pedagogical context — "Activity N pre-reading"), and the duplicate has been removed from `furtherRecommendations`. Affected files: `benefits.js` (Satariano, Trucano, Gay), `builds.js` (Bartholomew, Gray & Suri), `disinfo.js` (Simon-Altay-Mercier), `spy.js` (Pew/Faverio, Crowley, Marwick, Joseph), `theft.js` (Casey Fiesler aggregator).

### Audit state at end of pass
- `url: "#"` count: 27 → 5 remaining.
- The 5 remaining are the intentional Disinfo Activity 2 `deepfakeExamples` (Alligator Alcatraz, Dalai Lama, Hurricane Helene, Ron DeSantis, Hillary Clinton/DeSantis). These are pedagogical examples of synthetic media without canonical viewable URLs — left as-is per §6.

### Mobile optimization pass
A pre-deploy pass to address the lack of responsive layout — the codebase previously had no `@media` queries (apart from one print-only rule on `/playlist`) and used rigid `repeat(N, 1fr)` grids that compressed badly below ~600px viewports.

Two techniques used together:
- **`repeat(auto-fit, minmax(N, 1fr))` for grids** — pure CSS, no JS, no breakpoints to maintain. Tiles flow gracefully from 3 (or 4) columns to 2 to 1 as the viewport narrows. Applied to: browse tiles (`ActivityBrowser`), cluster grids (`HomePage`), "Designed for Your Classroom" cards (`HomePage`), export cards (`PlaylistPage`), key terms (`TopicPage`), and all three 2-column `RichBlocks` grids (Opposing Views, Deepfake Examples, Role Contexts).
- **Targeted media queries in `global.css`** — for cases a grid change can't fix:
  - At ≤600px, the LayerIndicator on topic pages hides its three uppercase labels and two separator lines, leaving just the three dots. The dots still convey position in the The Question → Activities → Learning Notes flow.
  - At ≤500px, the About-page section nav hides its middle-dot separators and tightens its panel padding; labels stack naturally.
  - At ≤480px, the floating PlaylistPanel pill tightens its fixed margins to 12px, spans the full width minus those margins, and drops the "View →" affordance (tapping the pill already navigates).

Deliberately deferred to post-deploy: accordion-internal layout polish, print-style refinements, PDF-export rendering on mobile.

### Build state
- 97 modules, 145.3 KB gzipped JS + 0.57 KB gzipped CSS, builds clean.

---

## Still ahead in Sprint 5

- **Team typography & link-resolution pass** — manual click-through verification on every newly-populated URL (sandbox can't reach external domains).
- **Deployment to `pressingprompts.org`** — pivoted from Duke's GitLab to Remi's personal GitHub account during this sprint. The Duke GitLab instance was successfully serving the site at an obfuscated `pages.oit.duke.edu` URL, but their GitLab Pages config doesn't include Let's Encrypt integration, so custom-domain HTTPS would have required manual cert renewal every 90 days. GitHub Pages handles cert provisioning and renewal automatically. New deploy path: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds Vite and publishes via GitHub's Pages-from-Actions model. The `public/CNAME` file declares the custom domain so it survives every deploy. The `prototype-archive` tag on the Duke GitLab repo preserves earlier history if needed.
- **`.com → .org` redirect** — handled at the registrar (or Cloudflare's free tier) with a 301-with-path forward. Independent of the code's hosting location.
