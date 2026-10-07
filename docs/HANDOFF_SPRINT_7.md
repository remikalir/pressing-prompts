# Pressing Prompts — Handoff Instructions
## Project context as of May 21, 2026, post-Sprint 6 — playlist surfacing, BrowserRouter migration, OG metadata

---

## 1. PROJECT OVERVIEW

### What this is

**Pressing Prompts** is an independently branded, openly accessible online learning experience focused on AI ethics for higher education. The project presents **eleven provocative questions about AI** — each one a "topic" — with structured learning activities, curated resources, pedagogical guidance, and disciplinary extensions designed primarily for **higher education instructors** to bring into their classrooms.

The project was originally incubated at **Duke University** during the 2024–25 academic year through a collaboration between **Duke University Libraries** and the **Center for Teaching and Learning**. Sprint 3 finalized the standalone visual identity. Sprint 4 finalized the content template and reorganized resources, conversation starters, and page-level notes. Sprint 5 closed out content gaps, ran a mobile-responsive pass, and shipped the site to its public home. **Sprint 6 surfaced the playlist add-from-topics affordance, migrated routing from HashRouter to BrowserRouter, retired the now-obsolete footnote-anchor intercept, and added Open Graph / Twitter Card metadata for shareable link previews.**

As of this document, the site is live, in maintenance mode, and beginning to circulate among close colleagues for initial feedback.

### Project name
**Pressing Prompts.** Locked since Sprint 4. Wordmark set in Instrument Serif italic.

### Domain status — **LIVE**

- **Production URL:** `https://pressingprompts.org` (now serving clean URLs — `/about`, `/topic/<slug>`, `/playlist` — under BrowserRouter)
- **Hosting:** GitHub Pages, deployed via GitHub Actions on every push to `main`
- **TLS:** Let's Encrypt cert, auto-provisioned and auto-renewed by GitHub Pages
- **Code repository:** `github.com/remikalir/pressing-prompts` (public)
- **Alternate domain:** `pressingprompts.com` registered and 301-redirects to `.org` via Namecheap. See §10 for the full DNS configuration and known limitations.
- **DNS:** Namecheap, with four A records on the apex (`185.199.108.153`–`185.199.111.153`) and a CNAME on `www` → `remikalir.github.io`. URL Redirect configuration is documented in §10.

### License
- Content: **CC BY-NC-SA 4.0**
- Code: **MIT License**

### Project team

Three co-founders, per the About page:

- **Hannah Rozear** — co-founder, librarian
- **Remi Kalir** — co-founder, researcher (project owner, GitHub: `remikalir`)
- **Aria Chernik** — co-founder, designer

Original Duke incubation also included **Barron Brothers** and **Emma Ren** (undergraduate research assistants) and additional contributors listed in the original toolkit credits.

---

## 2. THE ELEVEN TOPICS

Three thematic clusters, eleven topics, locked v2 atmospheric palette. Unchanged since Sprint 3.

### Trust & Truth — *How do we evaluate what AI tells us?*
| # | Topic | Main Color |
|---|-------|------------|
| 2 | Can We Trust AI? | `#C75233` warm red-orange |
| 3 | Is AI Biased? | `#2E6B4F` deep green |
| 8 | Does AI Spread Mis/Disinfo? | `#D84315` deep orange |

### Power & Access — *Who controls AI and who is affected?*
| # | Topic | Main Color |
|---|-------|------------|
| 5 | Is AI Sustainable? | `#2D6A4F` forest green |
| 6 | Who Builds Our AI? | `#37474F` cool slate-grey |
| 7 | Who Benefits from AI? | `#00695C` warm teal |
| 9 | Is AI Theft? | `#B8860B` dark goldenrod |

### Self & Society — *How does AI change us and our world?*
| # | Topic | Main Color |
|---|-------|------------|
| 1 | Do We Need AI? | `#C0392B` rose/coral |
| 4 | Does AI Harm Critical Thinking? | `#5C6BC0` indigo |
| 10 | Is AI a Spy? | `#7B2D8E` purple |
| 11 | Is AI a Friend? | `#AD1457` warm pink/magenta |

A note on language: this handoff and the Sprint 6 handoff before it have referenced "eleven topics" in multiple places. The number is currently stable but the project may add a twelfth topic eventually. In code (especially alt text and other user-visible strings), prefer descriptive language over specific counts unless the count is genuinely permanent. Sprint 6 caught one such instance in the OG image alt text — "eleven topics" was edited to "pressing" — and that judgment is worth carrying forward.

---

## 3. THE LAYERED DEPTH MODEL

Unchanged from Sprints 4 and 5. Every topic page renders three layers:

**The Question** — provocative headline, expert quote, custom illustration (340px masked atmospheric treatment, untouched since Sprint 3), student-facing intro, key terms grid, optional stat callouts, learning objectives, optional encounter-layer learning note.

**Activities** — three structured activities per topic, conversation starters above, disciplinary extensions and resources below. Activity cards expand to show purpose, objectives, optional in-class/online modality toggle, steps, no-AI alternatives, resources. Cross-topic shared frameworks (SNIFF Test, Jigsaw Technique, Confirmation Bias) get a Shared Framework Badge.

**Learning Notes** — toggled globally via the star icon in the Activities section header. When on, instructor-facing context appears within activities alongside the relevant steps. Grading criteria sit inside Learning Notes. Navy left-border styling, star icon header.

**Sprint 6 addition:** every conversation starter, learning activity, and disciplinary extension on a topic page now carries a small `+` / `✓` toggle on its right edge — the same affordance as the homepage activity browser, mirroring the same `usePlaylist` context. Items added on a topic page show up immediately in the homepage browser's "added" state, the floating `PlaylistPanel`, and the `/playlist` export view. See §5 for implementation details.

---

## 4. TERMINOLOGY

Final and consistent across the codebase:

| Use This | Not This |
|----------|----------|
| Topic, theme | Module |
| Activities (layer name) | Experience |
| Learning Notes (layer name) | Teaching Guide |
| Activity Objectives | Learning Objectives (within activities) |
| Online version | Online variant |
| In-Class | Synchronous, face-to-face |
| Online | Asynchronous |
| Pressing Prompts | [Project Name], AI Ethics Learning Toolkit |
| version | variant |

---

## 5. WHAT SHIPPED IN SPRINT 6

Four substantive items merged to `main`, all live on `pressingprompts.org`.

### 5a. Playlist add-from-topic-page surfacing

Before Sprint 6, the playlist `+` / `✓` toggle existed only on the homepage's `ActivityBrowser`. Users had to leave the topic they were reading to add an item to a playlist. Sprint 6 surfaces the same affordance on every topic page.

**New shared component:** `src/components/topic/PlaylistToggle.jsx` — encapsulates `usePlaylist()` and exposes a clean `<PlaylistToggle id={…} colors={…} />` interface. Stops click propagation so the toggle doesn't accidentally expand its host activity card.

**Modified:** `ActivityCard.jsx`, `ConversationStarters.jsx`, `DisciplinaryExtensions.jsx`, `TopicPage.jsx`.

The `ActivityCard` change required splitting the header row: it was previously a single `<button>` wrapping the whole header (number + content + chevron). The toggle needed to be a sibling, not a nested button, so the outer wrapper became a `<div>` with an inner expand-`<button>` and the `<PlaylistToggle>` as a separate sibling. Behavior unchanged; HTML structure now valid.

`TopicPage.jsx` got a three-word copy addition to the Activities section subhead: *"...expand any to explore, build your playlist"*.

No changes to `PlaylistContext` or `browseActivities.js` were required — the id schema (`bias-1`, `cs-bias-1`, `de-bias-1`) was already canonical across both surfaces.

Branch: `sprint-6-playlist-from-topics`.

### 5b. HashRouter → BrowserRouter migration

Clean URLs site-wide: `/about` instead of `/#/about`, `/topic/bias` instead of `/#/topic/bias`, and so on.

**Changes:**
- `src/App.jsx` — `HashRouter` → `BrowserRouter`, header comment rewritten to reflect GitHub Pages + custom domain reality.
- `vite.config.js` — `base: "./"` → `base: "/"`. The relative base was correct for GitLab Pages (subpath hosting) but breaks BrowserRouter at a custom apex domain: when the SPA fallback lands a user at `/about`, asset URLs resolve relative to `/about/` and 404.
- `index.html` — added an inline SPA-redirect unwrap script in `<head>` before the module script. Adapted from the canonical [spa-github-pages](https://github.com/rafgraph/spa-github-pages) technique (Rafael Pedicini, MIT-licensed).
- `public/404.html` — new file. GitHub Pages serves this for any path that doesn't match a file on disk; it encodes the requested path into a query string and redirects to `/`, where the inline script in `index.html` unwraps it via `history.replaceState` before React Router boots.

**How the redirect works under the hood:** a user hits `pressingprompts.org/about`. GitHub Pages finds no file at `/about`, serves `404.html`, which redirects to `/?/about`. The inline script in `index.html` sees the `?/` pattern, decodes it, calls `history.replaceState` to rewrite the address bar back to `/about`, and React Router then boots and renders the `/about` route. The encoded form is visible for ~100ms — fast enough that most users never see it, but a fast-eyed user on a slow connection might catch the flicker. There's no cleaner alternative on GitHub Pages (Netlify or Vercel can do real server-side rewrites; GitHub Pages cannot).

`pathSegmentsToKeep` is set to `0` in `404.html` because the site is hosted at the apex of a custom domain. If the site ever moves to project-subpath hosting (`<user>.github.io/<repo>/`), that parameter would need to become `1`.

Branch: `sprint-6-browser-router`.

### 5c. Footnote-anchor intercept removal

Under `HashRouter`, the router owned the URL hash, so a click on `<a href="#page-note-1">` would have been interpreted as a navigation to the route `/page-note-1` and produced a 404. `TopicPage.jsx` had a document-level click intercept that prevented default and manually scrolled to the target.

Under `BrowserRouter`, the router owns the path and leaves the hash alone — native browser anchor scrolling works correctly. The intercept (22 lines, lines 62–83 of the pre-cleanup `TopicPage.jsx`) was removed in a single follow-up commit. No branch.

The only user-visible difference: footnote-marker clicks scroll instantly rather than smoothly. If smooth-scroll behavior is wanted back, the modern approach is to add `scroll-behavior: smooth` to global CSS site-wide — a single CSS line, no JS, works for every anchor link in the site automatically. Not done in Sprint 6 because the instant-scroll feels acceptable; available as a future enhancement.

### 5d. Open Graph / Twitter Card metadata

Site-wide social-card metadata for shareable link previews on Facebook, LinkedIn, Slack, Discord, Bluesky, Mastodon, and other OG-reading platforms.

**Changes:**
- `index.html` — added 10 Open Graph and 5 Twitter Card meta tags between the existing `theme-color` and the SPA-redirect script. Tightened the existing `<meta name="description">` from 170 chars to 107 chars (the new description matches the OG/Twitter description, keeping social cards and SEO snippets in sync).
- `public/og-image.png` — new file, 1200×630, dark background, Instrument Serif italic headline, DM Sans tagline, atmospheric constellation, `pressingprompts.org` URL band at bottom.

The OG image is shared by all routes — every page that gets linked shows the same card. Per-route OG images (each topic's card tinted with its own color, showing its specific question) is a real future enhancement but requires either build-time pre-rendering or some server-side mechanism, since OG scrapers don't run JavaScript and React-injected meta tags are invisible to them. Deferred from Sprint 6 by design.

Verification was done via LinkedIn's Post Inspector at `https://www.linkedin.com/post-inspector/` (Facebook Sharing Debugger requires a Facebook login, which the team doesn't have). LinkedIn rendered the card correctly. The preview image in the inspector appears blurry due to the inspector's own thumbnail rendering; the actual image served to feed contexts is full-resolution.

**Important caching note:** every OG-reading platform caches scraped cards aggressively. If `og-image.png` or any meta-tag content is updated, the platforms won't re-scrape automatically — they'll continue showing the cached version for days or weeks. Facebook Debugger and LinkedIn Post Inspector both have "Scrape Again" / re-fetch buttons to force a re-scrape. Slack, Discord, and others vary.

---

## 6. WORKING WORKFLOW (POST-SPRINT-6)

The shift from build-mode to maintenance-mode collaboration was previewed at Sprint 5's close and **validated through three feature cycles in Sprint 6**. The pattern works. Future sprints should follow it.

### Source of truth

**Remi's local repo is the source of truth.** Not GitHub, not Claude's context. Claude's in-context copies of files become stale the moment Remi pushes anything; if Claude makes a follow-up edit without re-reading the current file, it's editing a stale copy.

**Implication for Claude:** any time work touches files that have been edited before (in this conversation or any prior one), Remi re-uploads the current versions from his local repo. Don't reason from memory of what a file used to look like.

**Implication for Remi:** pulling from GitHub before editing is rarely necessary, since you push from the same local repo after every edit. Pull only if you've been pushing from a different machine.

### Collaborative engagement model

Two-tier division of labor:

**Small edits (handle solo):** typos, link fixes, copy refinements, dead-code removal, single-file changes you've diagnosed yourself. You've built the muscle for these and the round-trip overhead isn't worth it. Verify with `grep` or `git diff` before pushing.

**Larger work (collaborate here):** multi-file coordinated changes, architectural shifts, new features, new pages, new components, anything where the diff would be hard to review piece-by-piece.

### The collaborative loop

1. **Describe the feature or change.** Don't pre-map the file set unless you already know it.
2. **Claude identifies the file set with you.** Claude may also request read-only reference files ("show me how AboutPage structures its section nav") — this is normal and part of the same upload round, not scope creep.
3. **Remi uploads current files** from local repo.
4. **Claude proposes the approach, surfaces design questions, asks for any remaining files needed.**
5. **Once aligned, Claude edits and returns files.** For multi-file features, Claude runs syntax checks (JSX parsing, balanced-brace verification) before handing back. This caught no errors in Sprint 6 but the cost is near-zero and would catch real issues on a larger change.
6. **Remi places files in local repo, runs `git diff` to confirm changes, runs `npm run dev` to spot-check.**
7. **For larger features, use a feature branch.** `git checkout -b sprint-N-<feature-slug>`. This gives a rollback point and produces a branch preview build that can be verified before merging to `main`. Branch naming pattern from Sprint 6: `sprint-6-playlist-from-topics`, `sprint-6-browser-router`.
8. **Verify on the branch preview, then merge.** `git checkout main && git merge <branch-name> && git push`.

For small single-file edits a branch isn't worth the overhead — commit straight to `main`.

### File transfer

Claude expects files as uploads in the conversation. Claude returns files via the `present_files` tool. Remi drops them into the local repo at the indicated paths, replacing the existing versions. Always run `git diff` before committing — this catches any drift between what was discussed and what was actually produced.

### Anti-patterns to avoid

- **Claude reasoning from stale memory of a file** when Remi hasn't re-uploaded it.
- **Both parties writing detailed code in the chat** before any files have been uploaded — wastes context on speculation about file state that may not match reality.
- **Pushing to `main` without `git diff` review** — too easy for a multi-file change to include a stale file or a debug fragment that should have been removed.
- **Branch-overhead theater on truly small changes** — typo fixes and one-line copy changes don't need a branch.

---

## 7. THE DNS ADVENTURE (LESSONS FROM SPRINT 6)

Documenting this because it took two hours to navigate and produced real institutional knowledge that would be expensive to rediscover in a future sprint. None of these are obvious from any single piece of Namecheap or GitHub Pages documentation.

### What we learned about Namecheap's URL Redirect Records

**The redirect type label refers to HTTP status, not path-preservation.** A "Permanent (301)" URL Redirect Record on the Advanced DNS tab points the source hostname at the destination URL *verbatim*. The path of the incoming request is dropped. Setting 301 vs 302 (Unmasked vs Masked) affects only the status code and whether the redirect is cached by browsers — not whether the path survives.

**Path preservation requires the Wildcard Redirect feature on the Domain tab, not URL Redirect Records on Advanced DNS.** "Add Wildcard Redirect" on the Domain tab creates a `*` URL Redirect Record under the hood that *does* preserve paths. The two tabs are showing different views of the same underlying record store, but the wildcard `*` record behaves differently from a hostname-specific record.

**Wildcard `*` does not match the apex `@`.** This was the single biggest gotcha. The wildcard covers `*.pressingprompts.com` (anything-prefix-dot-domain), which catches `www.pressingprompts.com`, `blog.pressingprompts.com`, etc., but **does not match a bare `pressingprompts.com` with no prefix**. The apex needs its own `@` URL Redirect Record. Two records are required: `@` for the apex, `*` for everything else.

**The Wildcard Redirect created via the Domain tab is type "Unmasked" (302), not Permanent (301).** This is a quirk of Namecheap's wildcard feature. For `pressingprompts.com`, where `.com` is never publicly promoted and the canonical URL is always `.org`, this is fine — search engines aren't being asked to choose between competing canonical sources. If a future sprint ever wants `.com` to be SEO-relevant, this should be fixed (likely by deleting the wildcard via the Domain tab and recreating `*` directly on Advanced DNS with type Permanent).

### Current Namecheap configuration (post-Sprint-6, verified working)

Two URL Redirect Records on Advanced DNS:

| Host | Value | Type | Purpose |
|------|-------|------|---------|
| `@` | `https://pressingprompts.org/` | Permanent (301) | Apex redirect — `.com` → `.org` |
| `*` | `https://pressingprompts.org/` | Unmasked (302) | Wildcard for `www.` and any other subdomain |

Verified with `curl -I` against four endpoints:
- `http://pressingprompts.com/` → 301 → `https://pressingprompts.org/` ✓
- `http://pressingprompts.com/about` → 301 → `https://pressingprompts.org/about` ✓ (path preserved)
- `http://www.pressingprompts.com/` → 302 → `https://pressingprompts.org/` ✓
- `http://www.pressingprompts.com/about` → 302 → `https://pressingprompts.org/about` ✓ (path preserved)

### Known limitation: `.com` does not serve HTTPS

Namecheap's free URL Forward service operates over HTTP only, on port 80. There is no SSL certificate provisioned for `pressingprompts.com`. Connections to `https://pressingprompts.com/...` fail with "couldn't connect to server" — port 443 is not listening.

**User impact:** anyone who types `https://pressingprompts.com` directly, or who has visited `.org` recently (where HSTS may cause the browser to auto-https subsequent requests to related domains), will hit a connection failure rather than a redirect. Modern browsers in HTTPS-First mode (Chrome 90+ default) may try HTTPS first and fall back to HTTP after a delay, producing a confusing user experience.

**Accepted as a documented limitation in Sprint 6.** Rationale: `.com` is owned defensively (typosquatter prevention, courtesy redirect) but is never publicly promoted — all blog posts, social shares, QR codes, papers, conference handouts use `.org` directly. The fraction of users who arrive via `.com` is small, and most of that fraction will recover via address-bar autocomplete or a second attempt.

**Future-sprint options if usage data ever justifies fixing this:**

- **Cloudflare proxy.** Point `.com` DNS at Cloudflare nameservers, set up a Page Rule for redirection, let Cloudflare handle SSL termination on a free plan. This is the canonical fix and is widely used for exactly this pattern.
- **Self-hosted redirector on GitHub Pages.** Stand up a tiny `pressingprompts-com` repo with `.com` as its custom domain, get Let's Encrypt SSL via GitHub Pages, serve a static `index.html` plus `404.html` that together do path-preserving redirects to `.org` using the same SPA-fallback technique we use for the main site.

Both are real work (estimated half-day plus DNS propagation time) and out of scope unless something changes.

### Lessons for future DNS work

- **Curl is the ground truth; browsers are not.** Browsers cache 301s aggressively — old redirects can persist for days or weeks even after the underlying configuration changes. Always verify DNS changes with `curl -I` rather than browser address-bar tests. Incognito helps but isn't fully reliable; curl is.
- **Verify each step before moving to the next.** Sprint 6's DNS work hit a regression because we deleted the `@` and `www` records assuming the wildcard covered them. The wildcard does not cover the apex. One curl test after deletion would have caught this immediately; instead, we hit a brief 404 window before re-adding `@`. Cost: ~5 minutes. Lesson: cheap verification > confident assumptions.
- **The Domain tab and Advanced DNS tab are views of the same record store, not separate features.** Edits in one place can appear in the other. When in doubt, the Advanced DNS view is more granular and shows what's actually in the records.

---

## 8. CODEBASE ARCHITECTURE

Unchanged from Sprint 5 except for the changes documented in §5. Repeated here for handoff completeness.

### Stack

- **Vite + React 18** (`package.json`)
- **React Router DOM v6** with `BrowserRouter` (post-Sprint-6)
- No state-management library — `useState` / `useReducer` / Context as needed
- No CSS framework — inline styles via a shared `T` (tokens) object in `src/styles/tokens.js`; site-wide globals in `src/styles/global.css`
- No backend, no API, no analytics, no tracking, no browser storage

### Directory shape

```
pressing-prompts/
├── public/
│   ├── 404.html              ← SPA fallback (Sprint 6)
│   ├── CNAME                 ← pressingprompts.org
│   ├── android-chrome-*.png
│   ├── apple-touch-icon.png
│   ├── favicon.png
│   ├── og-image.png          ← Sprint 6
│   ├── site.webmanifest
│   ├── invisible-knapsack.pdf
│   └── sniff-test.pdf
├── src/
│   ├── App.jsx               ← BrowserRouter (Sprint 6)
│   ├── main.jsx
│   ├── components/
│   │   ├── home/             ← HomePage components incl. ActivityBrowser, PlaylistPanel
│   │   ├── layout/           ← NavBar, Footer, GrainOverlay
│   │   ├── topic/            ← TopicPage components incl. ActivityCard, PlaylistToggle (Sprint 6), ConversationStarters, DisciplinaryExtensions, LearningNote, etc.
│   │   └── illustrations/    ← 11 SVG illustration components
│   ├── context/
│   │   └── PlaylistContext.jsx
│   ├── data/
│   │   ├── topics.js         ← topic metadata, colors
│   │   ├── clusters.js
│   │   ├── browseActivities.js ← derived from topicContent at build time
│   │   └── topicContent/     ← 11 per-topic content modules
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── TopicPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── BlogPage.jsx      ← currently a placeholder; Sprint 7 priority
│   │   ├── PlaylistPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   ├── tokens.js
│   │   └── global.css
│   └── utils/
│       └── markdown.js
├── index.html                ← OG metadata + SPA unwrap script (Sprint 6)
├── vite.config.js            ← base: "/" (Sprint 6)
└── .github/workflows/        ← deploy.yml for GitHub Pages
```

### Design tokens

`src/styles/tokens.js` exposes the `T` object referenced throughout. Key tokens:

- **Typography:** `T.serif` (Instrument Serif, italic for headings), `T.sans` (DM Sans)
- **Colors:** `T.bg` (#FAFAF8), `T.bgWarm` (#F5F3EE), `T.text1/2/3`, `T.border`, `T.borderLight`, `T.chrome` (the dark navy header/footer), `T.accent`
- **Radii:** `T.radius` (12px), `T.radiusLg` (20px)
- **Shadows:** `T.shadow`, `T.shadowHover`, `T.shadowDeep`

### Privacy principles (still inviolate)

- No localStorage, sessionStorage, IndexedDB, or any browser storage APIs
- No user accounts, no authentication
- No analytics or tracking scripts
- No external API calls at runtime (Google Fonts stylesheet is the only network dependency beyond the site's own assets)
- Playlist state lives only in React state; refreshing the page clears it
- Export features (PDF, links, Markdown) generate client-side

---

## 9. CUMULATIVE DON'TS

Accumulated across sprints. Worth re-reading before any visual or architectural change.

- No new fonts beyond Instrument Serif and DM Sans
- No font weight 700 (DM Sans 600 is the bold ceiling)
- No off-palette topic colors except the documented intentional exceptions in Benefits and Bias
- No embedded text in topic illustrations
- No browser storage APIs (per §8 privacy principles)
- Don't reduce hero illustration below 340px or remove the radial mask treatment
- Don't introduce external runtime dependencies without a privacy conversation first
- Don't remove `public/CNAME` (would break the custom domain)
- Don't disable Enforce HTTPS in GitHub Pages settings (would break the SSL cert)
- Don't change `base` in `vite.config.js` from `/` without re-thinking the BrowserRouter setup (per §5b)
- Don't add a `<base>` tag to `index.html` — would conflict with React Router's path resolution
- Don't put logic in `404.html` beyond the redirect script — it must execute fast and fail safely

---

## 10. SPRINT 7 PRIORITIES

### Priority 1 (substantive, design-conversation-then-build): Blog infrastructure

The site currently has a `BlogPage.jsx` placeholder route. Sprint 7's first item is building this out into a real blog.

**What it needs:**

- **Post storage format.** Markdown files in `src/content/blog/` is the obvious shape, with frontmatter for metadata (title, date, author, excerpt, tags). Parsed at build time by Vite plugin or similar.
- **Routing.** `/blog` for the index page (chronological reverse order), `/blog/<slug>` for individual posts.
- **Individual post page layout.** Visual register consistent with the existing site (Instrument Serif italic for the title, DM Sans for body, atmospheric design language). Reading-focused: long lines, generous line-height, restrained sidebars.
- **Index page layout.** Date, title, author, excerpt per entry. Possibly tag-filterable.
- **Authors.** Hannah Rozear, Remi Kalir, Aria Chernik are the current three. Author field can be a simple string in frontmatter; if a posts-by-author view is wanted later, that's a Sprint-N enhancement.
- **RSS feed.** Yes or no? Worth a design decision. If yes, generated at build time. Adds discoverability and aligns with the open-web ethos but is one more thing to maintain.
- **First post.** A launch-announcement post by the team would be the natural first piece of content.

**Why this is its own design conversation:** the choices interact. The post-storage format constrains the build pipeline. The routing structure interacts with the BrowserRouter + GitHub Pages SPA fallback we just deployed (any post URL needs to be reachable on direct hit, not just from in-app navigation). The visual register pulls from the existing design system but blog reading is a different mode than topic browsing — column widths, spacing, typography size all want to be reconsidered.

**Recommended approach for the conversation:**

1. Start with design questions (storage, routing, RSS, visual register) before any code.
2. Once the shape is agreed, scaffold the infrastructure (route, content folder, parser) before any individual posts exist.
3. Build the index and post-detail layouts as a paired set.
4. Write one launch post to validate the whole pipeline end-to-end.
5. Verify on a branch preview before merging.

This is a multi-file, multi-decision feature. Allow time for the conversation; don't try to compress it.

### Priority 2 (visual/affordance, moderate): Homepage button-confusion pass

Initial-feedback note from close colleagues sharing the live site: three groups of UI elements on the homepage currently share button-like styling but have different actual roles.

**The three groups:**

1. **Info badges** in `ActivityBrowser.jsx` (lines ~70–86 of the version reviewed in Sprint 6) — the four pills reading "No login required", "No data collected", "Export anytime", "CC BY-NC-SA 4.0". Currently white background + thin border + rounded. **Should read as informational labels, not buttons.**
2. **Browse cards** in `ActivityBrowser.jsx` (the three type-selector cards: "Browse Conversation Starters", "Browse Student-Centered Learning", "Browse Disciplinary Extensions"). Currently white background + thin border + rounded. **Genuinely interactive — should keep or strengthen the affordance.**
3. **"Designed for Your Classroom" concept cards** in `HomePage.jsx` (lines ~205–246 of the current version) — "The Question", "Activities", "Learning Notes". Currently white background + thin border + rounded. **Descriptive content only, not interactive — should read as content panels, not buttons.**

The trap is real: all three groups share the same visual language. A user scanning the page can't tell from styling alone which are tappable.

**Design direction (not prescriptive — a starting point for the actual design conversation):**

- Info badges: remove or weaken the border; consider flat background; treat as labels.
- Browse cards: keep card treatment; consider adding a hover state, cursor affordance, or directional cue (chevron, →).
- Concept cards: remove border entirely; let typography do the structural work; consider a subtle background tint at most.

**Scope:** two files, ~30–50 lines of style changes. Mechanically small. Design judgment matters — the three new treatments need to be visibly distinct from each other while still feeling coherent within the design system.

**Recommended order:** do this *after* the blog design conversation, since both involve visual register decisions and the blog work may surface useful framing about content-vs-interface distinctions that informs the homepage pass.

### Other items rolling forward (no urgency)

These are tracked for awareness, not slated for Sprint 7 unless something changes:

- **`.com` HTTPS gap** (per §7). Cloudflare proxy or self-hosted redirector. Half-day of work. Fix when usage data justifies.
- **Wildcard redirect 302 → 301.** Delete via Domain tab, recreate as `*` directly on Advanced DNS with Permanent type. ~10 minutes. Fix if `.com` ever needs to be SEO-relevant.
- **Per-route OG images** (per §5d). Each topic page gets its own card. Requires build-time pre-rendering or a generator route. Real future enhancement.
- **Smooth-scroll behavior for anchor links** (per §5c). One CSS line in `global.css`: `html { scroll-behavior: smooth; }`. Trivial to add when you decide you want it.
- **Twelfth topic** if and when the team is ready.
- **Glossary** — a project-wide feature from the original Duke toolkit that wasn't carried forward. Possible future enhancement.

---

## 11. FOR THE NEXT CLAUDE

A few framing notes for whoever picks this up next, which is likely Claude in a fresh conversation.

**Read this whole document before starting any work.** It's longer than is comfortable but every section is doing real work — project context, terminology discipline, the workflow that has now been validated, the DNS lessons that would be expensive to relearn, the codebase architecture as it now exists. Skimming risks proposing changes that conflict with documented commitments.

**Read the relevant SKILL.md files before generating any code.** The standard environmental discipline. For most Sprint 7 work this will mean frontend-design (for any React component or styling), plus md if any documentation gets generated.

**The first piece of work in the conversation will likely be the blog design discussion.** Don't jump to code. Ask design questions. Surface tradeoffs. The Sprint 6 pattern of "propose approach + flag design questions + wait for the user before building" worked well and should continue.

**Remi's local repo is the source of truth.** Don't reason from this document's description of file contents — request the files. Specifically for blog work, you'll want at minimum:

- `src/pages/BlogPage.jsx` (the current placeholder)
- `src/App.jsx` (the routing)
- `src/styles/tokens.js` and `src/styles/global.css` (to match the design system)
- `vite.config.js` (to confirm what's already configured)
- One or two existing page components (e.g. `AboutPage.jsx`, `PrivacyPage.jsx`) to see how the site composes long-form text pages

For the homepage affordance pass:

- `src/components/home/ActivityBrowser.jsx`
- `src/pages/HomePage.jsx`
- `src/styles/tokens.js` (for color and shadow tokens you might want to adjust)

**One final note on language.** Pressing Prompts has a specific tone — warm, considered, intellectually serious without being academic-stuffy. The About page, the topic introductions, the OG description are all written in this voice. Match it in any user-facing copy. If you're not sure whether something fits, ask. Better to pause than to produce text that drifts.

---

*Prepared at the close of Sprint 6 by Claude in collaboration with Remi Kalir. All decisions, terminology, and configuration details reflect the work that shipped to `main` between May 17 and May 21, 2026.*
