# Pressing Prompts — Sprint 5 Handoff
## Complete Project Context for Continuation in a New Conversation
*Prepared at the close of Sprint 4 (May 6, 2026)*

---

## 1. Project Overview

### What This Is
Pressing Prompts is an independently branded, openly accessible online learning experience focused on AI ethics for higher education. The project presents **eleven provocative questions about AI** — each one a "topic" — with structured learning activities, curated resources, pedagogical guidance, and disciplinary extensions designed primarily for **higher education instructors** to bring into their classrooms.

### Origin Story
The project was incubated at **Duke University** during the 2024–25 academic year through a collaboration between **Duke University Libraries** (led by Hannah Rozear, Librarian for AI Learning) and the **Center for Teaching and Learning** (led by Remi Kalir). The original public version was a static WordPress page at `https://ctl.duke.edu/ai-ethics-learning-toolkit/` with a complementary React prototype at `https://remikalir.github.io/ai-ethics-toolkit/`.

### Branding & Domain
- **Project name:** Pressing Prompts (locked)
- **Primary domain:** `pressingprompts.org`
- **Redirect:** `pressingprompts.com` → `.org` (DNS-level, not application code)

### Hosting
- Code remains on Duke's GitLab instance, pointing at the new `.org` domain
- Deployment pipeline: GitLab Pages with Vite build (per `GETTING_STARTED.md`)
- HashRouter currently in use for portability across base paths; can switch to BrowserRouter once on the custom domain (see GETTING_STARTED.md §6)

### Primary Audience
Higher education instructors across all disciplines. The earlier student/instructor role toggle has been eliminated in favor of a layered design where instructor-specific content (Learning Notes) is an optional toggle.

### License
- Content: **CC BY-NC-SA 4.0**
- Code: **MIT License**

### Project Team
- **Remi Kalir** — project owner (Duke NetID: jik15, GitHub: remikalir)
- **Hannah Rozear** — Duke Libraries collaborator
- **Barron Brothers, Emma Ren** — undergraduate research assistants
- Additional contributors listed on the original toolkit

---

## 2. The Eleven Topics

Each topic poses a provocative question about AI ethics, organized into three thematic clusters. All eleven are now content-complete; topic content lives in `src/data/topicContent/<id>.js`.

### Trust & Truth — *How do we evaluate what AI tells us?*
| # | Topic | id | Slug |
|---|-------|----|----|
| 2 | Can We Trust AI? | trust | can-we-trust-ai |
| 3 | Is AI Biased? | bias | is-ai-biased |
| 8 | Does AI Spread Mis/Disinfo? | disinfo | does-ai-spread-disinfo |

### Power & Access — *Who controls AI and who is affected?*
| # | Topic | id | Slug |
|---|-------|----|----|
| 5 | Is AI Sustainable? | sustainable | is-ai-sustainable |
| 6 | Who Builds Our AI? | builds | who-builds-our-ai |
| 7 | Who Benefits from AI? | benefits | who-benefits-from-ai |
| 9 | Is AI Theft? | theft | is-ai-theft |

### Self & Society — *How does AI change us and our world?*
| # | Topic | id | Slug |
|---|-------|----|----|
| 1 | Do We Need AI? | need | do-we-need-ai |
| 4 | Does AI Harm Critical Thinking? | thinking | does-ai-harm-critical-thinking |
| 10 | Is AI a Spy? | spy | is-ai-a-spy |
| 11 | Is AI a Friend? | friend | is-ai-a-friend |

Topic colors, cluster assignments, and metadata live in `src/data/topics.js`.

---

## 3. Topic Page Architecture

Every topic page renders through `src/pages/TopicPage.jsx` against the data shape in its content module. The current section order (locked in Sprint 4):

1. **Question / Encounter layer** — provocative question, illustration, expert quote (with optional `[^N]` footnote markers), introduction prose (with bold/italic emphasis and footnote markers), key terms (3-column grid), learning objectives
2. **Conversation Starters** — light-weight prompts before the deeper activities (moved from below activities in Sprint 4)
3. **Activities** — three structured activity cards per topic (or as designed); each card has steps, learning notes, grading criteria, and per-activity resources
4. **Disciplinary Extensions** — discipline-specific prompts in a full-width card
5. **Resources & Connected Topics** — full-width stacked cards (changed from side-by-side grid in Sprint 4):
   - Resources card has two equal-weight subsections: **Activity Resources** (auto-derived from each activity's `resources` array) and **Further Recommendations** (curated). Collapses by default at 5 visible items with a "Show all (N more)" expand toggle.
   - Connected Topics card sits below Resources at the same width.
6. **Page Notes** — numbered citations referenced by `[^N]` superscripts elsewhere on the page; styled with citation typography (italics, links). Added in Sprint 4.

Footnote markers (`[^N]`) in any source text become clickable superscript links that smooth-scroll to the corresponding Page Note. A document-level click-delegation handler in TopicPage intercepts these clicks before HashRouter sees them, so the hash anchors don't trigger 404s.

---

## 4. Content Authoring Patterns

The data shape for each topic (defined in `src/data/topicContent/<id>.js`):

```javascript
export const <id>Content = {
  Illustration,
  expertQuote: { text, source },          // text may contain trailing [^N] markers
  introduction: [paragraph, ...],          // markdown: **bold**, *italic*, [link](url), [^N]
  keyTerms: [{ term, definition }, ...],
  learningObjectives: [...],
  questionLearningNote: "...",             // visible when Learning Notes toggle is on
  activities: [
    {
      id, slug, number, type, title, tagline,
      purpose, objectives,
      steps: [{ label, detail, instructorNote }, ...],
      blocks: [...],                       // optional; see RichBlocks below
      grading: [...],
      resources: [{ title, url }, ...],    // titles may contain markdown
    },
    ...
  ],
  conversationStarters: [{ id, prompt }, ...],
  furtherRecommendations: [{ title, url }, ...],   // titles support markdown
  pageNotes: [{ id, text }, ...],          // text supports markdown
  disciplinaryExtensions: [{ id, discipline, prompt }, ...],
  connectedTopics: [{ topicId, relation }, ...],
  belowActivitiesLearningNote: "...",
};
```

### Rich Blocks (`activity.blocks`)
Specialty content within activities. Each block has a `kind` and may include `afterStep: N` (1-indexed) to position itself between specific steps rather than at the top of the activity. Supported kinds:

- `caseStudy` — warm yellow narrative container (Need Activity 3)
- `keyPassage` — styled quote from a pre-reading
- `opposingViews` — side-by-side debate cards
- `deepfakeExamples` — paired image/video panels (Disinfo Activity 2)
- `roleContext` — assigned-role grid (Spy, Friend Activity 2)
- `comparisonTable` — fillable reference grid with dimensions, lookFor prompts, and student fill-in columns (Friend Activity 1) — added in Sprint 4

### Identifier Convention
Every conversation starter, disciplinary extension, page note, and activity has a stable `id`. The Activity Index (`src/data/topicContent/index.js`) builds a flat lookup at module load that maps every id to `{ type, topic, record }`. The Playlist functionality uses this index for cross-topic resolution.

### Markdown Helper
`src/utils/markdown.js` provides:
- `renderInlineMarkdown(s)` — handles `**bold**`, `*italic*`, `[text](url)`, and `[^N]` footnote markers (rendered as `<sup><a href="#page-note-N">N</a></sup>`)
- `renderQuoteHtml(text)` — peels trailing `[^N]` markers off quote text and renders them after the closing curly quote rather than inside (scholarly typography convention)

---

## 5. Sprint 4 — What Landed

### Structural template changes
- Resources card restructured into Activity Resources (auto-derived, deduplicated by URL with combined attributions) + Further Recommendations (curated)
- Resources card collapses at 5 items with chevron toggle
- Conversation Starters moved above Activities
- Resources and Connected Topics restacked vertically (was side-by-side)
- Page Notes section added at the bottom of every topic page
- `comparisonTable` block kind added; block interleaving via `afterStep` added
- Inline markdown helper extended to support links, footnote markers, and quote-typography rules

### Per-topic content updates (all 11 topics)
- Bias, Builds, Disinfo, Benefits, Need, Spy, Sustainable, Theft, Thinking, Trust, Friend — each received quote+footnote, replaced introduction matching CTL source verbatim (with bold/italic emphasis and `[^N]` markers), 3–5 conversation starters, dropped legacy `topicResources` arrays, populated `furtherRecommendations`, and Page Notes
- Spy gained `keyTerms` (Privacy Paradox, AI Privacy) and `disciplinaryExtensions` (4 entries)
- Trust gained `disciplinaryExtensions` (5 entries) and lost its `stats` array (numbers now appear in intro prose)
- Friend received the full Pass 2 treatment: three activities from Hannah's Word doc, comparison table block, persona role-context block, removed Coming Soon banner (`comingSoon` flag dropped from topics.js), removed duplicate stats and activityPreviews

### Bugs fixed during Sprint 4
- Footnote markers were 404'ing under HashRouter — fixed via document-level click delegation that intercepts `a[href^="#page-note-"]` clicks and scrolls to the target manually
- Footnote superscripts were rendering inside the closing curly quote — fixed via `renderQuoteHtml` peeling trailing markers
- Embedded markdown links inside Page Notes had no visible link styling — fixed via scoped `<style>` block with topic-color underlines

### Sprint 4 wrap pass (final cleanup)
- Audited and removed duplicate stats from benefits.js and sustainable.js (numbers were appearing both in stat callout cards and in intro prose)
- Verified brand consistency — no stale `[Project Name]` placeholders in user-facing surfaces; only one comment reference in AboutPage scaffold (which is being replaced anyway)
- Audited every URL in the topic data files; results in §6

### Build state
- 96 modules, ~141 KB gzipped, builds clean

---

## 6. Resource Link Audit Results

Sprint 4's wrap-pass URL audit found **32 placeholder (`#`) URLs** across the topic data. These break into two categories:

### Intentional placeholders — leave as-is unless Hannah requests
**5 entries**, all inside the Disinfo Activity 2 `deepfakeExamples` block:
- Alligator Alcatraz (image)
- Dalai Lama being arrested (image)
- Hurricane Helene victim (image)
- Ron DeSantis deepfake (video)
- Hillary Clinton endorsing DeSantis (video)

These are pedagogical examples of synthetic media without canonical viewable URLs. The educational point is "see how it spreads," not "click through to the source."

### Need canonical URLs — Sprint 5 work
**27 entries**, all inside activity-level `resources` arrays. Pass 1 only updated topic-level Further Recommendations, not activity-level resources, which is why these still hold prototype-era `#` placeholders.

A subset of these duplicate entries we already populated in `furtherRecommendations`:

| File | Activity | Title fragment | Duplicate of further-rec? |
|---|---|---|---|
| benefits.js | bene-1 | Satariano A.I. Race | Yes — same NYT URL |
| benefits.js | bene-1 | "AI and the Next Digital Divide" | Yes — Trucano Brookings |
| benefits.js | bene-3 | Gay "Peculiar Benefits" | Yes — Rumpus URL |
| builds.js | build-2 | Bartholomew CJR | Yes |
| builds.js | build-2 | Gray & Suri Ghost Work | Yes — Duke catalog |
| disinfo.js | dis-3 | Simon-Altay-Mercier | Yes — HKS Misinfo Review |
| spy.js | spy-1 | Pew Research American Attitudes | Yes — Faverio entry |
| spy.js | spy-2 | Ethical Tech Card Set | Yes — Crowley entry |
| spy.js | spy-3 | Marwick Wired | Yes |
| spy.js | spy-3 | Joseph PCMag | Yes |
| theft.js | theft-3 | Casey Fiesler aggregator | Yes |

**Recommended policy** for the team's pre-launch pass: when an activity-level resource and a further-rec point to the same source, the activity entry wins (it carries pedagogical context — "Activity N pre-reading"), and the further-rec duplicate should be removed. This keeps each citation in one place.

The remaining 16 placeholders are activity-level entries that don't have a further-rec equivalent and need new URLs from Hannah / the original Duke site. These include:
- benefits.js: Academic Wheel of Privilege visualization
- disinfo.js: Abbie Richards TikTok video, Carnegie Mellon "What Are Deepfakes?" video, NYT "Is This Video Even Real?" video, "How to Distinguish AI-Generated Images" guide, Benson "This Disinformation Is Just for You" Wired
- spy.js: Meta / Google Gemini / OpenAI privacy policies, "Privacy for Whom?" piece
- theft.js: Elon University / AAC&U academic integrity, Monash University AI acknowledgment guidance, "Creativity, Copyright, and Fair Use" video
- thinking.js: Vasconcelos et al. (2023) explanations paper
- disinfo.js + trust.js: SNIFF Test PDF (deferred — see §7)

### Network-level URL resolution
The development sandbox cannot reach arbitrary external domains, so a click-through resolution check on every populated URL has to happen on the team's side. This is best folded into the planned pre-launch typography pass.

---

## 7. Deferred Items

These came up during Sprint 4 but were intentionally not addressed:

### PDF hosting
Three topics reference PDFs that aren't yet hosted:
- **Disinfo, Trust** — SNIFF Test (downloadable PDF used in Activities 1 / 2)
- **Benefits, Activity 3** — Invisible Knapsack PDF

Hannah is finalizing canonical versions. Plan: drop the PDFs into `public/` so Vite serves them as static assets at predictable paths, then update the `url:` fields in the affected activities to point to `/sniff-test.pdf` etc.

### About page copy
The AboutPage scaffold exists at `src/pages/AboutPage.jsx`. Remi and Hannah are finalizing the narrative — incubation story, team bios (Remi, Hannah, Barron, Emma + any additional contributors), license note, optional design / pedagogy section. Expected within a few days of Sprint 5 kickoff.

### Privacy page
A small page articulating the project's existing privacy stance: no accounts, no localStorage / sessionStorage, no analytics, no tracking, playlist state session-only, exports generated client-side. The stance is already true in the code; the page just needs to declare it. No copy yet.

### Homepage refinement
Small visual adjustments may be in order before launch. Specifics TBD — flagged by Remi as "some small visual adjustments may be in order prior to launch."

---

## 8. Sprint 5 Plan

Suggested ordering for Sprint 5, in priority order:

### Phase 1 — Foundation pages (blocked on copy)
1. **About page** — wire Remi & Hannah's finalized copy into AboutPage.jsx. Likely a structured layout with: incubation narrative, team bios with photos (if available), license info, contributor acknowledgments. The first draft pass should be Claude-implemented, then Remi/Hannah refine, then pass back.
2. **Privacy page** — author from the existing privacy stance. Small page, single pass. Add to NavBar or footer per the team's preference.

### Phase 2 — Content polish
3. **PDF wiring** — once Hannah delivers SNIFF Test and Invisible Knapsack PDFs, drop them in `public/` and update the affected activity resource URLs.
4. **Activity-level resource URL pass** — consolidation per the policy in §6. When activity-level entries duplicate further-recs, update the activity URL and remove the further-rec duplicate. For non-overlapping placeholders, source canonical URLs from Hannah / the live Duke site.
5. **Team typography & link-resolution pass** — manual click-through verification, italic citation consistency, formatting checks.

### Phase 3 — Launch prep
6. **Homepage visual adjustments** — surface from team feedback, implement.
7. **Deployment to pressingprompts.org** — update GitLab Pages config to point at the custom domain; verify that the `base: "./"` in vite.config.js continues to work; configure DNS for `.com` → `.org` redirect; once on the custom domain, optionally switch from HashRouter to BrowserRouter for clean URLs (per GETTING_STARTED.md §6).

---

## 9. Open Decisions for Sprint 5

These need answers as they come up, not blocking starting Sprint 5:

- **About page layout** — single long page vs. sectioned with anchor links? Photos for team bios or text only? Whether to include a separate "Our Design" pedagogical-philosophy section per the AI Pedagogy Project model.
- **Privacy page placement** — footer link only, or also in the main NavBar? Whether to title it "Privacy" or "Privacy & Data Practices" or similar.
- **HashRouter → BrowserRouter** — when to flip the switch. The hash routes work fine but aren't elegant; flipping requires server-side rewrite config which is host-specific.
- **`.com` redirect mechanism** — server-level redirect, DNS forwarding, or domain registrar setting. Out of scope for application code but worth nailing down before launch.

---

## 10. Reference: Working Tarball Structure

The current bundle (`pressing-prompts.tar.gz`) contains a complete Vite + React + React Router project. Key directories:

- `src/data/topics.js` — topic metadata (color palettes, cluster assignments, slugs)
- `src/data/topicContent/<id>.js` — per-topic content modules
- `src/data/topicContent/index.js` — Activity Index that powers playlist resolution
- `src/components/topic/` — shared components (ActivityCard, RichBlocks, TopicResources, ConnectedTopics, PageNotes, etc.)
- `src/components/illustrations/` — the eleven topic illustrations
- `src/pages/` — TopicPage, HomePage, AboutPage, BlogPage, NotFoundPage, PlaylistPage
- `src/lib/playlistExport.js` — Markdown / PDF export logic
- `src/utils/markdown.js` — shared inline markdown helper
- `src/styles/tokens.js` — design tokens (`T`)
- `docs/` — design system documentation (palette, typography, illustrations, centerpiece)

### Key patterns to maintain
- Inline styles using the shared `T` (tokens) object
- Google Fonts loaded via CSS `@import` in a `<style>` tag
- All animations defined in the same `<style>` tag
- Function components with hooks
- Activity / topic data as const arrays at the top of each content module
- SVG illustrations as React components

### Privacy principles
- No localStorage, sessionStorage, or any browser storage APIs
- No user accounts or authentication
- No analytics or tracking
- Playlist state exists only in React state during the session
- Export features generate files client-side (no server round-trips)

---

*This handoff was prepared by Claude at the close of Sprint 4 to enable seamless continuation in a new conversation. All design decisions, terminology, and technical details reflect the collaborative work between Remi Kalir, Hannah Rozear, the Duke team, and Claude through Sprints 1–4.*
