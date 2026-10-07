# HANDOFF — SPRINT 8

For the Claude who picks up Pressing Prompts next. This document is your
orientation; read it carefully before acting. Sprint 7 closed with the
blog infrastructure shipped and live at `pressingprompts.org`. This
handoff captures what changed, what's still open, and the working
workflow refinements that emerged.

---

## 1. Where things stand at the close of Sprint 7

- **Site is live** at `pressingprompts.org` with full blog infrastructure.
  Currently in "soft launch" mode — circulating among close colleagues,
  not yet publicly announced.
- **Architecture remains static.** Vite + React + React Router,
  BrowserRouter under a GitHub Pages SPA fallback, deployed via GitHub
  Actions. No backend, no database, no runtime network calls beyond
  Google Fonts. ~107 KB gzipped before the blog work; the blog adds
  marginal weight (front-matter + marked + bundled posts), still well
  under 200 KB.
- **Blog is fully operational** — index at `/blog`, post pages at
  `/blog/<slug>`, RSS at `/feed.xml`, auto-discovery `<link>` tag in
  `index.html`. Placeholder post (`hello-world`) ships as the test bed.

The Sprint 6 architecture (custom apex domain, BrowserRouter, SPA
fallback via `public/404.html` and the unwrap script in `index.html`)
held through Sprint 7 without modification. Don't touch
`public/CNAME`, don't change `base` in `vite.config.js` from `/`, don't
revert to HashRouter.

---

## 2. What Sprint 7 shipped

### Pre-blog: homepage affordance pass

A short warm-up before the blog work. Three groups of UI elements on
the homepage shared the same white-background-thin-border-rounded
styling but had different semantics — info badges (labels), browse
cards (interactive), concept cards (descriptive). Fix:

- Removed two redundant info badges ("No login required", "No data
  collected"); restyled the remaining two ("Export anytime", "CC
  BY-NC-SA 4.0") as uppercase eyebrow-style metadata labels with no
  border or background.
- Browse cards (`ActivityBrowser.jsx`) gained hover handlers (shadow
  lift + border darken) and a chevron arrow on the right edge that
  rotates 90° when the card is in the active/expanded state.
- Concept cards ("The Question / Activities / Learning Notes" in
  `HomePage.jsx`) lost their background, border, and shadow entirely
  — now read as typography-led columns rather than tappable surfaces.

### The blog build — 7 commits on `sprint-7-blog-infrastructure`

1. **Install dependencies** — `front-matter`, `marked`, `feed`. (Note:
   the original plan called `gray-matter`; it was swapped mid-sprint
   for `front-matter` because `gray-matter` depends on Node's `Buffer`
   global which isn't defined in the browser. See §3 for details.)
2. **Content folder + placeholder post** — `src/content/blog/` created
   with `.gitkeep` and `2026-05-22-hello-world.md`. Hero image
   provided by the team at `public/blog/hello-world/hero.jpg`
   (1200×675 JPEG, 18.7KB).
3. **Markdown parser utility** — `src/utils/blog.js` using Vite's
   `import.meta.glob` to load posts at build time. Exposes
   `getAllPosts()`, `getPostBySlug(slug)`, `getAllTags()`.
4. **Blog page components** — `src/components/blog/PostMeta.jsx`,
   `src/components/blog/PostBody.jsx`, new `src/pages/BlogPostPage.jsx`,
   refactored `src/pages/BlogPage.jsx`. PostBody uses a scoped `<style>`
   block + `dangerouslySetInnerHTML` to apply typography to
   markdown-derived HTML.
5. **Routing** — added `/blog/:slug` route to `src/App.jsx`.
6. **RSS feed generation** — `scripts/generate-rss.mjs` runs at build
   time (via `prebuild` npm hook) and also at dev time (via a Vite dev
   plugin in `vite.config.js`). Auto-discovery `<link>` added to
   `index.html`. `public/feed.xml` added to `.gitignore` as a build
   artifact.
7. **Authoring guide** — `docs/AUTHORING.md`, ~280 lines, team-facing
   reference covering the writing workflow (Google Docs → markdown →
   Remi for image prep and commit), frontmatter shape, image
   practices, common gotchas.

### Files added (new)

- `src/content/blog/.gitkeep`
- `src/content/blog/2026-05-22-hello-world.md`
- `src/utils/blog.js`
- `src/components/blog/PostMeta.jsx`
- `src/components/blog/PostBody.jsx`
- `src/pages/BlogPostPage.jsx`
- `scripts/generate-rss.mjs`
- `public/blog/hello-world/hero.jpg`
- `docs/AUTHORING.md`

### Files modified

- `src/App.jsx` — one import, one Route line
- `src/pages/BlogPage.jsx` — full refactor from stub to real index
- `vite.config.js` — added `rssDevPlugin` middleware
- `package.json` — added `prebuild` script and three dependencies
- `index.html` — added RSS auto-discovery `<link>` tag
- `.gitignore` — added `public/feed.xml`

---

## 3. Design decisions locked in during Sprint 7

These are the conventions every subsequent post and every future
maintenance task should respect.

### Blog visual register

- **Body column max-width:** 680px. The page wrapper stays wide for
  chrome; just the prose column narrows.
- **Post H1:** `T.type.headline` (clamp 36–52px, Instrument Serif italic).
- **In-post H2:** 28px Instrument Serif italic, matching the section
  headings on `AboutPage.jsx`. Note: this is *not* in the documented
  type scale — it's a deliberate one-off shared with About because both
  pages do the same long-form prose work. If a third long-form page
  ever appears, consider adding `T.type.sectionLong` (28px) to the
  scale and migrating both.
- **In-post H3:** `T.type.subtitle` (18px DM Sans, weight 500).
- **Body paragraphs:** `T.type.lead` (16px DM Sans) with
  `lineHeight: T.lineHeightProse` (1.7). This pairing is documented in
  `tokens.js` as the intended treatment for long-form prose.
- **Image captions:** `T.type.caption` (13px DM Sans, `T.text2`).
- **Blockquotes:** left-border accent in `T.chrome`, prose stays
  upright. Echoes the `LearningNote` treatment on topic pages.

### Frontmatter shape

```yaml
---
title: "Title in sentence case"
slug: kebab-case-slug
date: YYYY-MM-DD
author: "Author Name"
excerpt: "One to two sentence summary for index and RSS."
tags: [lowercase-tag, another-tag]
hero: /blog/<slug>/hero.jpg          # optional
heroAlt: "Description of the image." # required if hero is set
---
```

Filename convention: `src/content/blog/YYYY-MM-DD-<slug>.md`. Date
prefix on filename for chronological sorting in the folder; date is
stripped from the URL. The slug in the URL is just `<slug>`.

### Image conventions

- **Per-post folders:** `public/blog/<slug>/`
- **Hero aspect ratio:** 1200×675 (16:9), under 300KB
- **Inline images:** up to 1200px wide, under 200KB
- **Formats:** JPEG for photos, PNG for diagrams/screenshots, SVG for
  vector
- **Filename hygiene:** lowercase, hyphens, no spaces

### URL & routing

- Blog index: `/blog`
- Post pages: `/blog/<slug>` (slug only, no date prefix)
- Tags: present in frontmatter and rendered on post pages, **no
  filtering UI** at this volume. Add filtering when posts cross ~15
  and tag patterns stabilize.
- RSS feed: `/feed.xml`, 20 most recent posts, full content (not
  excerpts). Auto-discoverable via `<link rel="alternate">` in
  `index.html`.

### Date handling

Dates parse as midnight UTC. `formatDate()` in `src/utils/blog.js`
uses `timeZone: "UTC"` to avoid local-timezone shift bugs (a
`2026-05-22` date would otherwise display as May 21 in PST). Don't
remove the `timeZone: "UTC"` line — it's load-bearing.

---

## 4. What didn't ship (work to do before public announcement)

### The real launch post

The blog currently shows a placeholder (`2026-05-22-hello-world.md`)
that explicitly says "If you're reading this on the live site,
something has gone wrong." Replacing this with the real launch post is
the gating item for public announcement.

The team is writing the launch post themselves (Hannah, Remi, Aria).
Claude should not draft it — the voice of the launch post must be the
team's. Claude can react to drafts, suggest structure, edit, push back
on language. Expected shape:

- ~600–1000 words
- Three-author byline as a single string
- Hero image from Aria
- Title TBD by the team

When the post arrives, the workflow is the one documented in
`docs/AUTHORING.md`: team produces markdown and images, Remi handles
image prep + frontmatter + commit. **Delete the
`2026-05-22-hello-world.md` file when the launch post replaces it** —
otherwise both will appear on the index.

### Per-post Open Graph cards

From §10 of the original handoff document: each blog post should
ideally have its own OG card metadata (title, description, image)
rather than inheriting the site-wide defaults. The current `index.html`
defines static OG tags for the whole site, which means every shared
blog post URL gets the same generic card.

The fix is non-trivial because static-site React doesn't have
per-route HTML. Two real paths:

- **(a) react-helmet-async** — runtime DOM manipulation of `<head>`
  tags. Cards work for users in-app but social scrapers (which only
  read static HTML) still see the site-wide defaults. Insufficient.
- **(b) Build-time per-route HTML generation** — write a small script
  that emits a static `dist/blog/<slug>/index.html` for each post with
  per-post OG tags in the `<head>`. Real fix. Requires adjustments to
  the SPA fallback to not interfere.

Path (b) is the right one but it's a real piece of infrastructure
work. Not blocking the launch, but worth a Sprint 8 conversation.

### Optional: rename `.com` HTTPS

From Sprint 6's "known accepted limitations": `pressingprompts.com`
(without the `.org`) doesn't serve over HTTPS cleanly because Enforce
HTTPS can only be enabled for one apex per Pages site. Possible
future workaround: redirect `.com` to `.org` via a separate
deployment or DNS-level redirect. Low priority; only matters for
users who type `.com` instead of `.org`.

---

## 5. Things to be careful about

These are constraints discovered or affirmed during Sprint 7. Don't
re-litigate without a real reason.

- **Don't use `gray-matter`** — it pulls in Node's `Buffer` global,
  which isn't defined in the browser. Vite doesn't polyfill it. Use
  `front-matter` instead. The rationale is documented in the header
  comment of `src/utils/blog.js`.
- **The Pressing Prompts wordmark stays in Instrument Serif italic.**
- **DM Sans 600 is the bold ceiling.** No 700. Documented in `tokens.js`.
- **No new fonts.** No browser storage. No external runtime
  dependencies without a privacy conversation.
- **Don't touch `public/CNAME`.** Don't disable Enforce HTTPS in
  Pages settings. Don't change `base` in `vite.config.js` from `/` —
  BrowserRouter depends on it.
- **The H2 size discrepancy** (28px in AboutPage and now blog posts,
  vs the documented 22px in `T.type.title`) is deliberate but
  uncomfortable. If future work touches either page's section
  headings, consider proposing a `T.type.sectionLong` token to bring
  this back into the documented scale.
- **`public/feed.xml` is a build artifact, gitignored.** Don't manually
  commit it. The `prebuild` hook regenerates it on every build.
- **The hello-world placeholder post should be deleted, not edited**,
  when the real launch post arrives. Don't try to repurpose it.

---

## 6. Working workflow refinements

This section captures what worked and what tripped us up during the
collaboration loop. The Sprint 7 handoff's section 6 set the baseline;
these are refinements from one sprint of actual practice.

### Two new conventions that landed mid-sprint

- **Local repo paths called out explicitly.** When Claude hands back
  files, the message states the exact local repo path each one belongs
  at — not just the filename, the full repo-relative path. For
  multi-file changes, a numbered list. Avoids ambiguity.
- **Terminal commands provided for anything beyond a single-file
  edit.** Branches, merges, new directories, package installs, build
  steps — Claude provides the full command sequence with brief inline
  comments. Single-file edit-and-push is the baseline; anything more
  involved gets explicit steps.

### Cadence that worked

- **Commit-by-commit, not all-at-once.** Sprint 7's 7-commit plan was
  laid out up front, then executed one commit at a time with
  verification between each. When something broke (the Buffer-not-defined
  error in Commit 4), it broke at a small commit boundary, was easy to
  diagnose, and didn't contaminate later work.
- **Screenshots paired with terminal output.** When Remi reported a
  problem, screenshots from both the browser (showing the symptom) and
  the terminal (showing what command produced what output) gave Claude
  enough context to diagnose without further back-and-forth. This
  pattern is worth keeping.
- **"Don't push yet" between commits.** Sprint 7 ran the entire seven
  commits locally on the `sprint-7-blog-infrastructure` branch before
  any push. This made the build-pipeline verification on the
  branch-preview a single event rather than seven small events, and
  let us catch issues (the gray-matter swap, the timezone bug, the
  authoring-guide scope) without producing public commits that would
  later be amended or reverted.

### Two tangents that ate time

- **The Buffer-not-defined error in Commit 4.** Not avoidable — it's a
  known gray-matter footgun that doesn't surface until you actually
  load the bundle in a browser. The Node-side validation in Claude's
  working directory passed because Node has `Buffer`; the browser
  doesn't. Lesson: when a parser library is involved, mention browser
  vs Node early so the choice is informed. The fix (swap to
  `front-matter`) took ~5 minutes once diagnosed; the diagnosis took
  longer.
- **The macOS dot-file gotcha.** When Claude handed back `.gitignore`,
  Remi downloaded it via Finder, which stripped the leading dot to
  `gitignore`. Renaming to `.gitignore` in Finder failed because
  macOS Finder blocks creating dot-files via rename. Resolution: use
  terminal (`echo "line" >> .gitignore`) for any dot-file edits.
  Worth flagging proactively for any future dot-file work.

### Working pattern still recommended

The Sprint 7 handoff's section 6 already captured the core loop. To
restate, refined:

1. Remi describes what he wants.
2. Claude asks clarifying questions if the answer is genuinely
   underdetermined — but doesn't ask questions Claude can answer from
   context. Surfaces design decisions before code, not during.
3. Claude proposes an approach with reasoning, lists the files needed,
   and requests current versions from Remi's local repo (which is the
   source of truth).
4. Remi uploads the files.
5. Claude edits, syntax-checks (especially for multi-file changes),
   stages outputs in their final repo-relative paths, sends back via
   `present_files` with the exact local paths called out.
6. Remi reviews via `git diff`, runs locally, spot-checks. Branch for
   anything substantive; merge after preview verification.
7. For sequenced work (like the 7 commits in Sprint 7), Claude states
   the plan up front, then executes one step at a time with
   verification between.

The "propose + flag questions + wait" rhythm before code applies even
inside a multi-commit plan — when something looks off mid-build, stop
and ask rather than continuing speculatively.

---

## 7. For the next session

Whatever Sprint 8's priorities are, the work likely includes some
combination of:

- Replacing the placeholder post with the real launch post
- Possibly implementing per-post OG cards (path (b) above)
- Whatever else has emerged since this handoff was written

Read this handoff carefully before acting. Read the Sprint 7 handoff
(if still in project files) for the longer-range project history.
Read `docs/AUTHORING.md` if the work touches blog content. Read
`tokens.js` and `typography_specimen_locked.html` before touching any
typography. Trust that the architecture is durable and the
constraints listed in §5 exist for real reasons.

The work to date — across six prior sprints and this one — has
prioritized lightweight, privacy-preserving, durable infrastructure.
Keep that posture.

— Sprint 7 closing notes, Claude
