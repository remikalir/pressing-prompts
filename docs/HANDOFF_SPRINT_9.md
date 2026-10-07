# HANDOFF — SPRINT 9

For the Claude who picks up Pressing Prompts next. This document is your
orientation; read it carefully before acting. It supersedes
`HANDOFF_SPRINT_8.md` — that document remains accurate for the blog
infrastructure and for the constraints carried forward in §5, but this
one is current.

Naming follows the established convention: this file is named for the
sprint that picks it up, and documents the sprint just closed. Sprint 8
was a single working session (September 14, 2026) that began as a
one-line mobile bug fix and ended as an information-architecture
extension plus a content revision. That trajectory is itself worth
understanding, so §2 tells it in order rather than as a list of
finished parts.

---

## 1. Where things stand at the close of Sprint 8

- **Site is live** at `pressingprompts.org`, still in soft-launch mode.
- **Architecture unchanged.** Vite + React + React Router,
  BrowserRouter under a GitHub Pages SPA fallback, deployed via GitHub
  Actions. No backend, no database, no browser storage. Sprint 8 added
  no dependencies and no runtime network calls.
- **Blog operational** — index at `/blog`, posts at `/blog/<slug>`, RSS
  at `/feed.xml`. Unchanged this sprint.
- **A mobile layout bug that broke the entire document width on phones
  is fixed**, and the failure mode is now documented and defended
  against in two components.
- **The topic Resources card now supports three subsections**, not
  two. Conversation Starters can carry their own linked resources.
- **Two PDFs are hosted locally** with full CC BY attribution in-file.
- **"Do We Need AI?" has a revised introduction**, six page notes, and
  a sixth conversation starter.

Everything in this sprint is pushed and live.

---

## 2. What Sprint 8 shipped

### Thread A — The mobile overflow bug

**Symptom.** On iPhone, the "Can We Trust AI?" topic page rendered with
the entire document wider than the viewport. The site header stopped
short of the right edge, and conversation starter 4 ran off-screen. It
read as "the site is broken," not as "one prompt is too long."

**Diagnosis.** Not simply an unwrapped URL. The tell was that *every
line* of starter 4 broke at a wider measure than starters 3 and 5 —
meaning the flex item itself had expanded, not just one line overflowed.

`ConversationStarters.jsx` renders each starter as a flex row: numeral,
prompt paragraph, playlist toggle. The prompt had `flex: 1`, which
resolves to `flex: 1 1 0%` — a zero flex-basis. But flex children also
default to `min-width: auto`, which floors them at their **min-content
width**. Starter 4 contained a bare 44-character URL
(`https://x.com/shadbush/status/1616007675145240576`), an unbreakable
token. That token set a min-content floor wider than a phone viewport,
the row grew to accommodate it, the card grew, and the document
overflowed.

**Fix, three properties on the prompt paragraph:**

- `minWidth: 0` — overrides the flex automatic minimum size. This is
  the actual fix.
- `overflowWrap: "anywhere"` — permits a break inside the token *and*,
  unlike `break-word`, reduces min-content size so the floor stays low.
- `wordBreak: "break-word"` — legacy fallback for iOS Safari < 15.4,
  which predates `anywhere`.

Plus a `body { overflow-wrap: break-word }` safety net in `global.css`
for author-written content elsewhere. That net does **not** fix flex
children on its own; the comment in the file says so explicitly, so
nobody later assumes it did the work.

**Later in the sprint**, the same hardening was applied defensively to
`ResourceRow` in `TopicResources.jsx` — identical flex structure,
author-written titles, and a resource list that keeps growing. Nothing
triggers it today.

**Data audit.** A grep of `src/data/` for URLs that are neither
markdown link targets nor `url:` field values:

```bash
grep -rn "https\?://" src/data/ | grep -v "](http" | grep -v 'url: "http'
```

Returned nothing after the fix. `trust.js:171` was the only bare
parenthetical URL in the entire data directory. Residual caveat: the
filter is line-based, so a line carrying both a markdown link and a
bare URL would be excluded. Judged acceptable given the shape of the
data.

### Thread B — Conversation Starter resources

The CSS fix made the URL wrap; it did not make it *good*. A
44-character URL breaking mid-token inside a discussion prompt reads
badly at 393px, and a starter that requires opening a link isn't the
"no-prep prompt" the component advertises. That opened an editorial
thread, which opened a licensing thread, which opened an IA thread.

**Licensing.** The flowchart is Hannah's adaptation of Aleksandr
Tiulkanov's "Is it safe to use ChatGPT for your task?", which is CC BY
4.0. CC BY permits redistributing adaptations but requires credit to
the original creator, a link to the license, and an indication of
changes. Hannah's first version credited Tiulkanov in prose but didn't
name herself as adapter, didn't link the license deed, didn't say what
changed, and left the badge ambiguous as to whether it marked the
original or the adaptation. All four were resolved in-file. The
adaptation is licensed CC BY 4.0 — deliberately matching the original
rather than the site's CC BY-NC-SA 4.0, because the artifact exists to
be reused by instructors. The `sniff-test.pdf` byline was refreshed in
the same pass.

**IA.** Once the flowchart moved out of the prompt, it needed a home.
The Resources card had two subsections, both auto-derived — Activity
Resources (from per-activity `resources` arrays, deduplicated by URL
with combined labels like "Activity 1, 3") and Further Recommendations
(curated topic-level background reading). A starter-owned resource fit
neither.

An initial proposal to rename the card's headings and generalize
"resource owner" as a concept was **rejected, correctly**, by Remi —
it was proposed before reading `TopicResources.jsx`, and the file
already showed the answer. Further Recommendations proves the card
holds subsections with differing provenance; the heading "Activity
Resources" scopes its own subsection, not the card. A third subsection
was therefore the *established* pattern, not a departure from it. See
§6.

**What was built:**

- A third subsection, heading **"Conversation Starters"**, rendering
  only when at least one starter in the topic carries a `resources`
  array. Most topics show nothing.
- Render order: Conversation Starters → Activity Resources → Further
  Recommendations. This mirrors the order the material appears on the
  topic page, so the card reads in the same sequence the instructor
  encountered it.
- Attribution labels read **"Starter 4"**, derived exactly like
  "Activity 1, 3" — dedupe by URL, join the numbers.
- The two hardcoded visible-count variables were replaced with a
  filtered `sections` array and a single budget loop, because two
  variables don't extend to three subsections and wouldn't extend to
  four.
- `deriveActivityResources` and `deriveStarterResources` are now thin
  wrappers over a shared `deriveOwnedResources(owners, label,
  numberOf)`. Activity behavior is unchanged.
- `TopicPage.jsx` passes `conversationStarters` through.

**A latent crash was fixed in passing.** `useState` sat *below* the
`if (totalCount === 0) return null` early return — a conditional hook
call. A topic with no resources rendered zero hooks where a topic with
resources rendered one; React reconciling the same component position
across a route change between those two cases throws "Rendered fewer
hooks than expected" and white-screens the page. Latent while every
topic has resources. Not latent the moment a topic is scaffolded empty
— which is exactly how Topic 12 will begin. The hook now runs before
any early return, with a comment explaining why so it doesn't get
"tidied" back.

### Thread C — "Do We Need AI?" content revision

Hannah supplied a revised introduction with six new sources, and a
sixth conversation starter linking Karen Hao's AI Resist List.

- **Footnote collision caught before it shipped.** The memo numbered
  its notes from `[^1]`, but `need.js` already used `[^1]` — on the
  expert quote. The convention (confirmed against `trust.js`) is that
  the expert quote owns `[^1]` and the introduction picks up at `[^2]`.
  Markers and note ids were shifted accordingly.
- **Starter 6 arrived with an inline markdown link**, which
  `ConversationStarters.jsx` would have rendered literally as
  `[the AI Resist List,](https://airesistlist.org/)`, since it renders
  `{s.prompt}` as plain text. Rather than add markdown rendering to
  starters, the link was moved to a starter `resources` array using
  the convention built in Thread B. Consistency and playlist
  portability both argued for this; see §3.
- Remi subsequently refined the notes on the live site, combining the
  Gallup and Fehr & Saul sources into a single note 6, adding links,
  and correcting a mangled two-author byline ("Saul, C. F., Jennifer."
  → "Fehr, C., & Saul, J."). Final state: notes 1–6, markers `[^1]`
  through `[^6]`.

### Files added (new)

- `public/is-it-safe-to-use-chatgpt.pdf` — Hannah's CC BY 4.0
  adaptation of Tiulkanov's flowchart, with full attribution in-file

### Files modified

- `src/components/topic/ConversationStarters.jsx` — long-token
  containment on the prompt paragraph; `minWidth: 0` on the row
- `src/styles/global.css` — `body { overflow-wrap: break-word }`
  safety net with explanatory comment
- `src/components/topic/TopicResources.jsx` — third subsection;
  generalized derivation; rewritten collapse allocation; hook-order
  fix; `ResourceRow` long-token hardening
- `src/pages/TopicPage.jsx` — one prop added at the `TopicResources`
  call site
- `src/data/topicContent/trust.js` — starter 4 reworded, bare URL
  removed, starter `resources` array added
- `src/data/topicContent/need.js` — revised introduction, six page
  notes, new starter 6 with `resources`
- `public/sniff-test.pdf` — replaced with updated byline

---

## 3. Conventions locked in during Sprint 8

### Starter-owned resources

Data shape, mirroring the activity pattern — the owner object carries
its own array:

```js
{
  id: "cs-trust-4",
  prompt: "…",
  resources: [
    { title: "\"Is It Safe to Use ChatGPT for Your Task?\" flowchart (downloadable PDF)",
      url: "/is-it-safe-to-use-chatgpt.pdf" },
  ],
},
```

A topic-level array was considered and rejected: it can't say *which*
starter a link belongs to, and it wouldn't generalize when Key Terms or
Disciplinary Extensions eventually want an artifact.

**Starter numbers are positional.** `deriveStarterResources` numbers by
array index, matching the numerals `ConversationStarters.jsx` renders
from the same index. Reordering or inserting a starter changes the
label automatically — correct behavior, but be aware the number lives
in no data field.

### Resources card structure

- Three subsections, fixed order: **Conversation Starters → Activity
  Resources → Further Recommendations**, each rendering only when
  non-empty.
- Headings were **not** renamed. "Activity Resources" scopes its own
  subsection; the card has no overall visible heading.
- **Deduplication is per-subsection, not across the card.** A resource
  cited by both a starter and an activity appears in both, because each
  row makes a separate claim about where that resource is used.
- `VISIBLE_LIMIT` stays at 5. The collapsed slice fills subsections in
  render order. On Trust this means the starter resource plus four of
  five activity resources show, with the fifth behind "Show all."
  Reviewed and accepted.

### Starter copy must be position-independent

Conversation starters are lifted out of the topic page and into the
playlist. Any copy with a spatial pointer — "below," "in the section
above" — breaks the moment the text travels. Discovered when Remi built
a playlist from the home browse list and found "(access in Conversation
Starters, below)" incoherent out of context.

**The standing phrasing is "(link in topic resources)"** — lowercase
and generic, naming a thing rather than a position, and it survives the
jump. Note there is no literal "Topic Resources" heading on the page;
the generic lowercase phrasing absorbs this deliberately.

### Footnote numbering

`pageNotes` is a single topic-level numbered list. **The expert quote
owns `[^1]`**; the introduction picks up at `[^2]`. Confirmed across
`trust.js` and `need.js`. When a content memo arrives numbering its own
sources from 1, expect to shift them and say so — the memo and the file
will disagree, and that discrepancy looks like an error later.

### Hosted PDFs

- Path: `public/<kebab-case-name>.pdf`, served at `/<kebab-case-name>.pdf`
- **Attribution lives inside the file**, not only on the page. These
  travel — an instructor downloads the PDF and it leaves the site
  entirely.
- For adaptations of CC-licensed work, the in-file line must name the
  adapter, name and link the original, state the original's license
  with a deed URL, indicate what changed, and state the adaptation's
  own license. Implication by badge is not a license grant.

### Long-token containment

Any flex child rendering author-written text gets `minWidth: 0`,
`overflowWrap: "anywhere"`, `wordBreak: "break-word"`. Currently
applied in `ConversationStarters.jsx` and `TopicResources.jsx`. Apply
it to new components of this shape by default rather than waiting for a
phone screenshot.

---

## 4. Open items

### From this sprint

- **The outbound-arrow glyph on local PDFs.** `ResourceRow` renders
  `↗` on every link including same-origin PDFs. If that glyph means
  "leaves the site," a download affordance would be more honest. There
  are now two hosted PDFs. Cosmetic; deliberately deferred.
- **An accessible in-site version of the flowchart.** The PDF's text
  layer extracts in scrambled order, so the decision logic is lost to a
  screen reader. Hannah's authorship makes a redraw legally simple —
  she's the author, and CC BY permits it with credit to Tiulkanov. It
  would need Aria's eye and the SVG illustration pipeline. This is the
  one item in this section with real pedagogical weight, given the
  project's accessibility posture.
- **Inline links in starter prose** remain unimplemented. Would require
  running `prompt` through `renderInlineMarkdown` in
  `ConversationStarters.jsx` *and* wherever the playlist renders
  starters. Deliberately not done via a single content memo; it should
  be a decision, not a side effect.
- **Activity card title wrapping** on topic pages — titles wrap at
  three or four words on mobile. Confirmed *not* a symptom of the
  overflow bug (it persists on pages with no overflow) and may not be a
  bug at all: 22px Instrument Serif in a column indented past the
  number badge will wrap early by design. `ActivityCard.jsx` not yet
  examined.

### Carried forward from prior sprints

These were not touched in Sprint 8 and their status is as of the last
sprint that addressed them:

- Replacing the `hello-world` placeholder with the real launch post
  (team-written; Claude must not draft it)
- Per-post Open Graph cards — build-time per-route HTML, path (b) in
  Sprint 8 §4
- `pressingprompts.com` HTTPS
- Topic 12 ("What Should AI Decide?") — icon direction, and the
  `TopicConstellation.jsx` four-fold symmetry introduced by moving from
  11 to 12 topics (11 and 3 are coprime; 12 and 3 are not)
- `ILLUSTRATIONS_HANDOFF.md` §9 path conflict —
  `public/blog/heroes/<slug>.png` documented vs
  `public/blog/<slug>/hero.*` in practice
- A second `AUTHORING.md` gotchas entry on frontmatter and setext
  heading artifacts
- **K-12 crosswalk work remains paused** by team decision. Do not treat
  it as active unless Remi reopens it.

---

## 5. Things to be careful about

New constraints from Sprint 8, followed by the ones still in force from
Sprint 8's §5.

**New:**

- **Don't remove `minWidth: 0` from flex children rendering
  author-written text.** It looks redundant next to `flex: 1`. It is
  not — `flex: 1` sets a zero basis, `min-width: auto` sets a
  min-content floor, and only the explicit `minWidth: 0` removes the
  floor. Removing it reintroduces a whole-document overflow that is
  invisible on desktop.
- **Don't move `useState` below the early return in
  `TopicResources.jsx`.** It reads like dead weight above a guard
  clause. It prevents a conditional-hook crash on route changes.
- **`deriveStarterResources` walks every starter in every topic.** Add
  a `resources` array to a starter anywhere and that topic grows a
  Conversation Starters subsection. Expected, not silent.
- **Topic data files use escaped double quotes** (`\"`) inside string
  values. When patching them programmatically, validate by loading the
  module — not by eyeballing the diff. A double-escaping error in this
  sprint produced `\\"` and would have shipped broken JS.
- **Content memos arrive with their own footnote numbering.** Check
  against the file before transcribing.

**Still in force:**

- Don't use `gray-matter` (Node `Buffer` dependency); `front-matter`
  only
- The wordmark stays Instrument Serif italic
- DM Sans 600 is the bold ceiling — no 700
- No new fonts, no browser storage, no external runtime dependencies
  without a privacy conversation
- Don't touch `public/CNAME`, don't disable Enforce HTTPS, don't change
  `base` in `vite.config.js` from `/`
- `public/feed.xml` is a gitignored build artifact
- Delete the `hello-world` placeholder when the launch post lands;
  don't repurpose it

---

## 6. Working notes from this sprint

### What went wrong on Claude's side, and the lesson

**Proposing an architectural change before reading the architecture.**
Claude proposed renaming the Resources card headings and generalizing
"resource owner" as a new concept — before having read
`TopicResources.jsx`. Remi pushed back: *"I'm a little concerned because
I feel like you're suggesting a more major change to an established
convention without seeing all of the related code files for
reference."* He was right. The file already contained the answer: a
third subsection was the existing pattern. The rename would have
touched all eleven topics and broken copy that referenced the heading
by name, to solve a problem that didn't exist.

The lesson generalizes: **request the file before proposing the
pattern, not after.** Especially when the proposal starts with
"generalize" or "rename."

**A double-escaping error** in a patch script wrote `\\"` where `\"`
was needed. Caught because the patched data file was loaded as a module
and inspected, not because the diff looked right — it looked fine.

### What worked

- **Separating structural fixes from content fixes.** The CSS fix and
  the editorial URL removal were repeatedly framed as alternatives.
  They aren't: the CSS fix makes the component durable against any
  future content, the editorial fix improves this instance. Both
  shipped, as separate commits, in that order.
- **Verification by execution.** The derivation functions were sliced
  out of the shipped `.jsx` and run against the real patched
  `trust.js`, printing the actual subsection contents and the actual
  collapsed-state allocation before Remi placed a single file. The
  predicted output ("Show all (15 more)", IBM row behind the toggle)
  matched the live render exactly. Technique: strip `import` lines and
  the `Illustration:` property from a data file, append an export,
  write as `.mjs`, and import it in Node.
- **Screenshots at every checkpoint** — mobile Safari, Chrome device
  emulation with DevTools open, Finder windows for path confirmation,
  terminal output for the grep audit. Path questions that would have
  cost a round-trip each were answered by a screenshot.
- **Remi's editorial instincts caught two things Claude missed** — the
  playlist-portability problem with "below," and the judgment that the
  flowchart is simple enough that requiring a link doesn't violate the
  no-prep promise. Content judgment stays with Remi and Hannah; that
  division held well.

### The working loop

Unchanged from Sprint 8 §6 and still recommended. Restating the two
refinements that mattered most this sprint: exact repo-relative paths
with every handed-back file, and "don't push yet" until a branch
preview is verified.

---

## 7. For the next session

Likely candidates, in rough priority order:

1. **Topic 12 ("What Should AI Decide?")** — the largest outstanding
   piece. Icon direction, the constellation symmetry problem, and the
   data file. Note that the hook fix in §2 removed a crash that a
   freshly scaffolded empty topic would otherwise have triggered.
2. **The accessible flowchart redraw**, if the team wants it before
   wider circulation.
3. **The small deferred items** — arrow glyph on local PDFs,
   `ActivityCard.jsx` wrapping, `ILLUSTRATIONS_HANDOFF.md` §9
   reconciliation.

Read this handoff before acting. Read `HANDOFF_SPRINT_8.md` for blog
infrastructure and longer-range history. Read `docs/AUTHORING.md` for
blog content work, `ILLUSTRATIONS_HANDOFF.md` for anything visual, and
`tokens.js` plus `typography_specimen_locked.html` before touching
typography.

Sprint 8 is a good illustration of how this project actually moves: a
one-line CSS fix surfaced a content problem, which surfaced a licensing
problem, which surfaced an information-architecture question, which
surfaced a latent React crash. None of that was scoped at the start.
The reason it stayed coherent is that each layer was resolved on its
own terms — the CSS fix wasn't asked to solve the content problem, the
content fix wasn't asked to solve the IA question — and that decisions
were locked before implementation rather than during.

Keep that posture. And keep the project's core commitments: no
surveillance, no accounts, no browser storage, durable and
privacy-preserving infrastructure. Those aren't incidental to Pressing
Prompts — they're part of its pedagogical argument.

— Sprint 8 closing notes, Claude
