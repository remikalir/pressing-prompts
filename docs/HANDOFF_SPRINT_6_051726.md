# Pressing Prompts — Handoff Instructions
## Project context as of May 17, 2026, post-Sprint 5 with live deployment at pressingprompts.org

---

## 1. PROJECT OVERVIEW

### What this is

**Pressing Prompts** is an independently branded, openly accessible online learning experience focused on AI ethics for higher education. The project presents **eleven provocative questions about AI** — each one a "topic" — with structured learning activities, curated resources, pedagogical guidance, and disciplinary extensions designed primarily for **higher education instructors** to bring into their classrooms.

The project was originally incubated at **Duke University** during the 2024–25 academic year through a collaboration between **Duke University Libraries** and the **Center for Teaching and Learning**. Sprint 3 finalized the standalone visual identity. Sprint 4 finalized the content template and reorganized resources, conversation starters, and page-level notes. **Sprint 5 closed out content gaps, ran a mobile-responsive pass, and shipped the site to its public home.** As of this document, the project is fully live.

### Project name
**Pressing Prompts.** Locked since Sprint 4. Wordmark set in Instrument Serif italic.

### Domain status — **LIVE**

- **Production URL:** `https://pressingprompts.org`
- **Hosting:** GitHub Pages, deployed via GitHub Actions on every push to `main`
- **TLS:** Let's Encrypt cert, auto-provisioned and auto-renewed by GitHub Pages
- **Code repository:** `github.com/remikalir/pressing-prompts` (public)
- **Alternate domain:** `pressingprompts.com` registered and 301-redirects to `.org` via Namecheap URL Redirect Records (path-preserving)
- **DNS:** Namecheap, with four A records on the apex (`185.199.108.153`–`185.199.111.153`) and a CNAME on `www` → `remikalir.github.io`

A short-lived attempt to host on Duke's self-managed GitLab instance was abandoned mid-Sprint-5 when it became clear that Duke's GitLab Pages does not have Let's Encrypt integration enabled, which would have required ongoing 90-day manual certificate uploads. GitHub Pages was the cleaner answer and aligns with the project's broader independence from Duke infrastructure.

### License
- Content: **CC BY-NC-SA 4.0**
- Code: **MIT License**

### Project team

Three co-founders, per the About page:

- **Hannah Rozear** — co-founder, librarian
- **Remi Kalir** — co-founder, researcher (project owner, GitHub: `remikalir`)
- **Aria Chernik** — co-founder, designer (added during Sprint 5 About-page authoring)

Original Duke incubation also included **Barron Brothers** and **Emma Ren** (undergraduate research assistants) and additional contributors listed in the original toolkit credits.

---

## 2. THE ELEVEN TOPICS

Three thematic clusters, eleven topics, locked v2 atmospheric palette. Unchanged since Sprint 3.

### Trust & Truth — *How do we evaluate what AI tells us?*
| # | Topic | Main Color |
|---|-------|------------|
| 2 | Can We Trust AI? | `#A55B36` (warm sienna) |
| 3 | Is AI Biased? | `#5A8268` (sage green) |
| 8 | Does AI Spread Mis/Disinfo? | `#AE5226` (deep orange) |

### Power & Access — *Who controls AI and who is affected?*
| # | Topic | Main Color |
|---|-------|------------|
| 5 | Is AI Sustainable? | `#347E5C` (forest green) |
| 6 | Who Builds Our AI? | `#4D5A63` (slate) |
| 7 | Who Benefits from AI? | `#2A7569` (warm teal) |
| 9 | Is AI Theft? | `#A47B27` (antique gold) |

### Self & Society — *How does AI change us and our world?*
| # | Topic | Main Color |
|---|-------|------------|
| 1 | Do We Need AI? | `#95433A` (clay rose) |
| 4 | Does AI Harm Critical Thinking? | `#5A6FA6` (dusty indigo) |
| 10 | Is AI a Spy? | `#6F4283` (dusty violet) |
| 11 | Is AI a Friend? | `#964966` (wine rose) |

Cluster identities: Trust & Truth `#324E68` (ink blue), Power & Access `#6E2F32` (port burgundy), Self & Society `#57385C` (aubergine). Full palette framework with WCAG verification and scaling guidance to ~16–18 topics in `docs/PALETTE.md`.

---

## 3. WHAT SPRINT 5 ACCOMPLISHED

A long sprint that completed the content layer, addressed mobile responsiveness, and got the site to production. Five major work streams.

### Sprint 5, Item 1 — Privacy page ✅
New `src/pages/PrivacyPage.jsx` declaring the project's existing privacy stance: no accounts, no browser storage APIs, no analytics, session-only playlist state, client-side exports. Seven short sections. Final copy authored by Remi. Route registered at `/privacy` in `src/App.jsx`. Discreet link added to `Footer.jsx` alongside the license line. The Sprint-4 TODO comment in the footer has been replaced.

The privacy stance described on the page matches the code as shipped. If a future feature would change any of it (persisted playlists, anonymous usage analytics, etc.), the Privacy page must be updated in the same release. The "updated May 17, 2026" date is folded into the closing paragraph.

### Sprint 5, Item 2 — About page rewrite ✅
Full rewrite of `src/pages/AboutPage.jsx` with final copy from Remi and Hannah, replacing the Sprint-1 placeholder. Five sections — *Our Purpose*, *Our Start*, *Our Values*, *Our Design*, *Our Team* — preceded by a section-nav strip (clickable labels separated by middle dots, sitting in a warm-background panel) that smooth-scrolls to each anchor. A small "↑ Back to top" link sits at the end of every section.

Implementation details that should not be lost:

- Each section heading carries `scrollMarginTop: 80px` so the sticky NavBar (56px) doesn't cover it when an anchor is hit
- The section-nav uses `<button>` elements (not anchor hash links) because under HashRouter, setting `window.location.hash` would clobber the route segment (e.g. `#/about`)
- "Please read our privacy policy" links via React Router `<Link>` to `/privacy`; external links (WCAG 2.1 AA, CC-BY-NC-SA 4.0, LinkedIn profiles) open in new tabs with `rel="noopener noreferrer"`
- Italicized AI questions (*Who benefits from AI? Is AI theft? Can we trust AI?* and *Do we need AI?*) and the closing line (*Press on, critically, together.*) use `<em>` tags

### Sprint 5, Item 3 — Hannah's resource delivery ✅
Two parts: hosted PDFs, plus a comprehensive activity-level resource URL pass.

**PDFs.** `public/sniff-test.pdf` and `public/invisible-knapsack.pdf` placed at site root. Vite copies them into `dist/` during build. Wired into:
- Disinfo Activity 1 SNIFF Test → `/sniff-test.pdf`
- Trust Activity 1 SNIFF Test → `/sniff-test.pdf`
- Benefits Activity 3 — **new** "Invisible Knapsack — Information Privilege" resource entry inserted between Gay and Academic Wheel to match the three pre-readings named in the step detail. The PDF had been referenced in the pre-reading text but missing from the `resources` array; that gap is now closed.

**14 canonical URLs applied** to previously-placeholder (`url: "#"`) activity-level entries across `benefits.js`, `disinfo.js`, `spy.js`, `theft.js`, `thinking.js`. One factual correction along the way: "Carnegie Mellon" → "Carnegie Endowment" on the deepfakes video, per Hannah's canonical attribution.

**Dedup pass (per §6 policy).** All 11 cases resolved: when an activity-level resource and a Further Recommendations entry pointed to the same source, the activity entry took the URL (carrying pedagogical context — *"Activity N pre-reading"*) and the duplicate was removed from `furtherRecommendations`. Affected files: `benefits.js` (3), `builds.js` (2), `disinfo.js` (1), `spy.js` (4), `theft.js` (1).

After this pass, only 5 `url: "#"` placeholders remain in the codebase — all intentional Disinfo Activity 2 `deepfakeExamples` (Alligator Alcatraz, Dalai Lama, Hurricane Helene, Ron DeSantis, Hillary Clinton/DeSantis). These are pedagogical examples of synthetic media without canonical viewable URLs.

### Sprint 5, Item 4 — Homepage visual cleanup ✅
Two deletions in service of brand consistency:

- **"Browse Activities, Build Playlists" tiles** (`ActivityBrowser.jsx`): emoji icons (💬/⚡/🎓) and large serif italic count numbers (47/33/47) removed. Label now sits at the top of each tile. The `typeCounts` computation that fed the numbers was unused after the change and is also removed.
- **"Designed for Your Classroom" cards** (`HomePage.jsx`): gradient numbered circles (1/2/3 in teal/indigo/gold) removed. Each card now opens directly with its serif italic heading. The `color` and `num` fields in the data array (only used by the deleted circles) are also removed.

The `badge` field in `TYPE_META` is now dead data in the codebase but harmless — left intact to keep the diff surgical. Cleanup is a one-line edit later.

### Sprint 5, Item 5 — Mobile responsive pass ✅
A pre-deploy pass to address the lack of responsive layout. Before the pass, the codebase had **no `@media` queries** (apart from a single print-only rule on `/playlist`) and used rigid `repeat(N, 1fr)` grids that compressed badly below ~600px viewports.

Two techniques used together:

**`repeat(auto-fit, minmax(N, 1fr))` for grids.** Pure CSS, no JS, no breakpoints to maintain. Tiles flow gracefully from 3 (or 4) columns to 2 to 1 as the viewport narrows. Applied to:
- Browse tiles (`ActivityBrowser.jsx`) — `minmax(200px, 1fr)`
- Cluster grids (`HomePage.jsx`) — `minmax(170px, 1fr)`, handles both 3- and 4-item clusters
- "Designed for Your Classroom" cards (`HomePage.jsx`) — `minmax(220px, 1fr)`
- Export cards (`PlaylistPage.jsx`) — `minmax(220px, 1fr)`
- Key terms (`TopicPage.jsx`) — `minmax(180px, 1fr)`
- All three 2-column `RichBlocks` grids (Opposing Views, Deepfake Examples, Role Contexts) — `minmax(200–220px, 1fr)`

**Targeted media queries in `src/styles/global.css`.** Three cases where a grid change alone couldn't fix the problem:

- At **≤600px**, the topic-page LayerIndicator hides its three uppercase labels and two separator lines, leaving just three dots. The dots still convey position in the Question → Activities → Learning Notes flow.
- At **≤500px**, the About-page section nav hides its middle-dot separators (`.about-section-nav-sep`) and tightens panel padding. Labels stack naturally without orphaned dots.
- At **≤480px**, the floating PlaylistPanel pill tightens its fixed margins to 12px, spans the full width minus margins, and drops the "View →" affordance (tapping the pill already navigates).

Components got `className` hooks where needed: `layer-indicator-label`, `layer-indicator-sep`, `about-section-nav-sep`, `playlist-quickadd-view`. The classnames are the only contract between the JSX and the media queries; if a refactor moves these elements, update both sides.

Deliberately deferred to post-deploy: accordion-internal layout polish on activity cards, print-style refinements, PDF-export rendering on mobile.

### Sprint 5, Item 6 — Deployment to GitHub Pages ✅
The deployment pivot mid-sprint deserves its own item since it shaped the final infrastructure.

**Initial path: Duke GitLab.** Pushed the code to the team's existing `ai-ethics-app` repo on `gitlab.oit.duke.edu/jik15`, renamed the project to `pressing-prompts`, force-pushed to overwrite the prototype commits (after tagging them `prototype-archive`). The CI pipeline ran clean and the site was live at an obfuscated Duke URL within a few minutes. Then we discovered Duke's GitLab Pages does not have Let's Encrypt integration enabled — the New Domain form only accepts manual cert upload, which would require running `certbot` every 90 days and re-uploading the PEM forever. Untenable as a long-term arrangement.

**Pivot: GitHub Pages.** Created a public repo at `github.com/remikalir/pressing-prompts`, replaced the `.gitlab-ci.yml` with a `.github/workflows/deploy.yml` using GitHub's Pages-from-Actions deployment model, added `public/CNAME` (containing `pressingprompts.org`) to preserve the custom domain across deploys. Force-pushed to GitHub, configured `Settings → Pages → Source: GitHub Actions`, set the custom domain, added Namecheap DNS records, waited for propagation, enabled Enforce HTTPS once Let's Encrypt provisioned the cert. Total time from "push to GitHub" to "https://pressingprompts.org live" was approximately 90 minutes, most of it DNS propagation wait.

**`.com → .org` redirect.** Two Namecheap URL Redirect Records on `pressingprompts.com` — `@` and `www`, both pointing to `https://pressingprompts.org/`, both set to **Permanent (301)**. Path is preserved by Namecheap's redirect behavior; verified post-setup with `pressingprompts.com/#/about` → `pressingprompts.org/#/about`.

**The Duke GitLab project still exists** at its renamed URL and continues to serve the obfuscated `pages.oit.duke.edu` URL. It does no harm and the `prototype-archive` tag preserves the original prototype if anyone ever wants to look at it. Remi has the option to delete or archive it any time.

---

## 4. CURRENT TECHNICAL STATE

### App architecture

```
pressing-prompts/
├── .github/
│   └── workflows/
│       └── deploy.yml            GitHub Actions build + Pages deploy
├── public/
│   ├── CNAME                     pressingprompts.org (preserves custom domain)
│   ├── sniff-test.pdf            Disinfo + Trust pre-reading
│   └── invisible-knapsack.pdf    Benefits Activity 3 pre-reading
├── src/
│   ├── App.jsx                   HashRouter setup, route table
│   ├── main.jsx                  entry, global.css import
│   ├── data/
│   │   ├── topics.js             eleven topic metadata + palettes
│   │   ├── clusters.js           three cluster identity colors
│   │   ├── browseActivities.js   homepage browse data
│   │   └── topicContent/         per-topic activity content (eleven .js files + index)
│   ├── components/
│   │   ├── icons/TopicIcon.jsx   eleven topic icons (Sprint 3)
│   │   ├── illustrations/        eleven illustrations (Sprint 3)
│   │   ├── home/                 homepage components
│   │   ├── topic/                topic page components
│   │   └── layout/               navbar, footer, grain overlay
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── TopicPage.jsx         340px masked illustration treatment
│   │   ├── PlaylistPage.jsx
│   │   ├── AboutPage.jsx         Sprint 5 rewrite with section nav
│   │   ├── PrivacyPage.jsx       Sprint 5 addition
│   │   ├── BlogPage.jsx          stub
│   │   └── NotFoundPage.jsx
│   ├── context/PlaylistContext.jsx
│   ├── lib/playlistExport.js
│   ├── utils/markdown.js
│   └── styles/
│       ├── tokens.js             T.type, T.weight, palette tokens
│       └── global.css            font loading + animations + Sprint 5 media queries
├── docs/
│   ├── PALETTE.md
│   ├── ILLUSTRATIONS.md
│   ├── TYPOGRAPHY.md
│   ├── CENTERPIECE.md
│   ├── SPRINT_4_NOTES.md
│   ├── SPRINT_5_NOTES.md         Sprint 5 progress log
│   ├── HANDOFF_SPRINT_5.md       previous handoff (close of Sprint 4)
│   └── HANDOFF_SPRINT_6.md       this document
├── README.md
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js                base: "./" (relative paths)
```

### Build & local dev

```bash
cd ~/projects/pressing-prompts    # or wherever the repo is cloned
npm install                        # one-time per local copy
npm run dev                        # http://localhost:5173, hot-reload
npm run build                      # writes to dist/
npm run preview                    # serves dist/ at http://localhost:4173
```

### Edit-and-deploy loop (post-launch)

```bash
cd ~/projects/pressing-prompts
# edit files in src/
npm run dev                        # optional preview
git add . && git commit -m "Describe the change"
git push                           # GitHub Actions builds + deploys
                                   # ~90 seconds to live
```

Watch the run in the repo's **Actions** tab. If the build fails, the deploy step doesn't run and the live site stays on the previous good version — a built-in safety net for typos.

### Bundle size
Production build: ~485 KB raw, ~145.3 KB gzipped JS + ~0.57 KB gzipped CSS. Two PDFs at site root (~269 KB combined, loaded only when linked from a resource).

### Routing
**HashRouter.** URLs look like `pressingprompts.org/#/topic/spy`. This works on GitHub Pages without SPA fallback configuration. Migrating to BrowserRouter for clean URLs (`/topic/spy`) is a Sprint 6 candidate — see Section 5.

### Privacy stance (unchanged across all sprints)
- No user accounts or authentication
- No `localStorage`, `sessionStorage`, or any browser storage API
- No analytics, no tracking, no third-party services beyond Google Fonts
- Playlist state lives only in React state during the session
- All exports happen client-side
- These commitments are documented on the live `/privacy` page

### Deployment infrastructure

- **GitHub Actions workflow** at `.github/workflows/deploy.yml`. Two jobs: `build` (checkout, setup Node 20, `npm ci`, `npm run build`, upload artifact from `dist/`) and `deploy` (uses `actions/deploy-pages@v4`). Permissions block grants `pages: write` and `id-token: write` for the official Pages deployment.
- **GitHub Pages source** set to "GitHub Actions" in repo Settings → Pages
- **Custom domain** `pressingprompts.org` set in repo Settings → Pages, persisted via `public/CNAME` so deploys don't strip it
- **DNS at Namecheap** for `pressingprompts.org`: four A records on `@` pointing to GitHub's anycast IPs (`185.199.108.153`, `109.153`, `110.153`, `111.153`); one CNAME on `www` → `remikalir.github.io.`
- **DNS at Namecheap** for `pressingprompts.com`: two URL Redirect Records (`@` and `www`) both pointing to `https://pressingprompts.org/` with type Permanent (301), path-preserving
- **HTTPS** auto-provisioned and auto-renewed by GitHub Pages via Let's Encrypt; Enforce HTTPS toggle is enabled
- **No CDN proxy** in front of the site (Cloudflare or otherwise). If added later, see Cloudflare's note about setting SSL mode to "Full" not "Flexible" when in front of GitHub Pages.

### Mobile responsive patterns (Sprint 5 additions)

The codebase otherwise uses inline styles exclusively. Sprint 5 introduced two responsive patterns:

1. **`repeat(auto-fit, minmax(N, 1fr))`** in `gridTemplateColumns` for every multi-column grid. No JS, no breakpoints. Tiles flow from 3 (or 4) to 2 to 1 as the viewport narrows. This is now the established pattern — apply it to any new grid.

2. **Media queries in `src/styles/global.css`**, hooked to elements via `className`. Currently three blocks, at 600px, 500px, and 480px. Inline styles can't carry media queries, so any future responsive logic that isn't grid-driven should follow this pattern: assign a classname, write the rule in `global.css`, document the breakpoint reason inline in the CSS.

---

## 5. SPRINT 6 — WHAT'S NEXT

The launch closed Sprint 5. The remaining work breaks into three categories: short-term polish, medium-term feature work, and ongoing post-launch iteration.

### Short-term, partially scoped

1. **Manual link-verification pass.** Walk through every newly-populated URL (the 14 from Hannah, plus the 11 dedup'd ones inheriting their further-rec URLs) in a real browser. Remi flagged this for post-deploy because the sandbox can't reach external domains. Any broken or wrong links get fixed via the standard edit-commit-push loop. Probably one focused hour of work.

2. **Real-device mobile smoke test.** The Sprint 5 mobile pass was code-side only — no actual phone or tablet was used during development. Spot-check the live site on iPhone, iPad, and an Android phone. Likely surface candidates for further work: accordion-internal layouts on activity cards (Sprint 5 deferred this), tap-target sizing on the Browse tile chips, the PlaylistPanel at the bottom edge of the viewport on phones with home-bar gestures.

3. **Stakeholder feedback iteration.** As Remi shares the live site with the team, friends, and early-access reviewers, expect a stream of small text/typography/link fixes. The edit-commit-push loop handles these in ~90 seconds each.

### Medium-term feature work

4. **HashRouter → BrowserRouter migration.** Trades cosmetically ugly URLs (`pressingprompts.org/#/about`) for clean ones (`pressingprompts.org/about`). The barrier is that BrowserRouter requires the server to serve `index.html` for unknown routes (so `/topic/spy` falls through to the SPA). GitHub Pages does support this via a 404.html that re-routes, but it's a separate piece of work worth doing in isolation rather than during launch. See `docs/GETTING_STARTED.md` §6 in the read-only project files for the conceptual switch in `src/App.jsx`.

5. **Open-Graph / social-share metadata.** When someone shares a Pressing Prompts URL on social media, the preview card currently shows nothing custom — no title image, no description, no Twitter Card meta. Adding `<meta property="og:*">` and `<meta name="twitter:*">` tags to `index.html` (or per-route via React Helmet) is a clear quality-of-launch upgrade. Could include a topic-specific OG image per topic page, ideally featuring the topic illustration.

6. **Image ALT text audit.** The eleven topic illustrations are decorative SVGs with `aria-hidden="true"` (Sprint 3 decision), but the eleven topic icons and any new content images should be audited for descriptive ALT text. WCAG 2.1 AA compliance was verified for typography contrast in Sprint 3; an a11y pass focused on non-text content would be a meaningful Sprint 6 item.

### Ongoing

7. **Blog launch content.** `BlogPage.jsx` is still a stub. Whenever editorial cadence is ready, follow the existing topic-content module pattern.

8. **Future topic 12 (and beyond).** The palette framework reserves four hue zones for additional topics; `docs/PALETTE.md` includes a worked example for a hypothetical topic 12. The illustration formula in `docs/ILLUSTRATIONS.md` and the icon-design notes from Sprint 3 give a 12th-topic candidate everything it needs to slot in cleanly.

---

## 6. THE PROJECT'S DESIGN LANGUAGE — A REFERENCE

The visual register that was locked in Sprint 3 and refined in Sprint 4 is unchanged. Sprint 5 added responsive patterns but did not alter typography, palette, or illustration treatment. For full reference read the docs in `/docs`; the high points:

### Visual register
**Atmospheric, hand-drawn, editorial-typographic.** Inspired by Jon Muth's watercolor children's book illustrations — soft washes, single saturated narrative anchors, hand-drawn imperfection, intimate scale.

### Type pairing
- **Instrument Serif italic** for hero questions, topic questions, the wordmark, section titles. Always italic.
- **DM Sans** for everything else.

### Color philosophy
Topic colors are atmospheric and muted, never saturated. Off-palette literal values are permitted in two documented cases (Benefits figure, Bias stone) where the topic's own `mid` is too pale to function as the lone narrative anchor.

### Topic page hero treatment (Sprint 3 lock)
On topic pages, the illustration sits in the right column of the hero at 340px with a CSS radial fade mask softening its rectangular SVG edge into the hero gradient. Don't reduce the size below 340px or remove the mask without an explicit design reason.

### Mobile responsive patterns (Sprint 5 addition)
1. Use `repeat(auto-fit, minmax(N, 1fr))` for any new multi-column grid. No JS, no media queries needed.
2. For component-level responsive logic that grids can't handle, add a `className` to the JSX element and write the rule in `src/styles/global.css` with a comment explaining the breakpoint reason.

### When in doubt
Read the relevant doc in `/docs` before changing anything visual. They were written specifically so future sessions don't have to reverse-engineer the rationale.

---

## 7. NOTES FOR THE NEXT CLAUDE

### How this project iterates (post-launch)
- The site is live and updates roll out automatically on push to `main`. Treat any code change as a deploy in waiting.
- The build is a safety net: broken syntax fails the workflow before deploy, and the live site stays on the previous good version. Encourage Remi to push small, focused commits.
- Tarballs are no longer the source of truth — the GitHub repo is. Remi's local clone at `~/projects/pressing-prompts/` syncs via git. If a session involves significant file changes, suggest pushing those changes through the same git loop rather than producing a new tarball.

### Tone and voice (unchanged across sprints)
- Honest reads with pros/cons, then a recommendation
- Professional warmth, no sycophancy
- Explicit about tradeoffs and risks
- Respectful of Remi's expertise even when offering technical direction
- Visualizer widgets remain useful for design decisions; codebase wiring follows lock-ins

### Documentation as you work
Every Sprint 3, 4, and 5 substantive decision has a corresponding doc in `/docs`. Continue this. When making non-trivial changes, write the rationale alongside the change rather than after.

### What NOT to do (cumulative across sprints)
- Don't introduce a 700 font weight or a new font family
- Don't introduce non-atmospheric topic colors
- Don't add embedded text to illustrations
- Don't use `localStorage`, `sessionStorage`, or any browser storage API
- Don't break the HashRouter routing pattern unless explicitly switching to BrowserRouter with the corresponding GitHub Pages SPA fallback in place
- **Don't reduce the topic page illustration size below 340px** or remove the radial fade mask — Sprint 3 lock
- Don't undo the off-palette literal values in Benefits or Bias
- Don't introduce new external runtime dependencies (analytics, third-party widgets, embeds) without an explicit conversation about the privacy stance
- Don't remove the `public/CNAME` file — deletion would cause GitHub Pages to strip the custom domain on the next deploy
- Don't disable the `Enforce HTTPS` toggle in GitHub Pages settings

### Working with the live site
- A push to `main` triggers a build. Watch the Actions tab in the repo to confirm green.
- DNS changes (rare now) propagate through Namecheap in 5–30 minutes typically.
- Certificate renewal is fully automatic.
- The `.com` → `.org` redirect is independent of code — it lives at Namecheap and survives any code change.

---

## 8. APPENDIX: KEY FILES TO READ AT SESSION START

For a Claude joining a fresh conversation in Sprint 6:

1. **This document** — for project state and Sprint 6 priorities
2. **`docs/SPRINT_5_NOTES.md`** — granular Sprint 5 progress log if more detail is needed
3. **`docs/PALETTE.md`, `TYPOGRAPHY.md`, `ILLUSTRATIONS.md`, `CENTERPIECE.md`** — if visual changes are involved
4. **`README.md`** — for build and run instructions
5. **`src/styles/tokens.js`** — to confirm token names before referencing them
6. **`src/styles/global.css`** — to see the established media-query pattern before adding new responsive logic
7. **`src/data/topics.js`** — for topic metadata
8. **`src/pages/AboutPage.jsx`** — for the section-nav pattern (Sprint 5) if any other long-form page needs the same treatment
9. **`src/pages/PrivacyPage.jsx`** — minimal page template if a new content page is needed
10. **`.github/workflows/deploy.yml`** — for the CI configuration, in case build behavior needs adjustment
11. **The relevant page or component being modified** — read before editing

---

*Prepared by Claude on May 17, 2026, at the close of Sprint 5 with the live deployment of Pressing Prompts at `pressingprompts.org`, to facilitate seamless continuation in Sprint 6. All Sprint 5 work — Privacy and About pages, resource population, homepage cleanup, mobile responsive pass, GitHub Pages deployment — is reflected here and documented inline in the relevant source files and docs.*
