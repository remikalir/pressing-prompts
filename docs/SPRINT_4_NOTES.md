# Sprint 4 — Content Notes

*Running list of content items deferred to Sprint 4. Add to this as new items surface.*

This doc is intentionally lightweight — it's not a spec, just a catch list so deferred ideas don't get lost between sessions.

---

## Carried over from Handoff §11

- **About page narrative.** Full About page, including: the incubation story (Duke 2024–25, mirroring how the AI Pedagogy Project credits metaLAB), team bios, project mission, license summary. Currently the About page is a scaffold.
- **Privacy page.** Currently parked in the footer as a Sprint 4 item. Should articulate the project's privacy stance: no accounts, no analytics, no tracking, no localStorage, playlist state lives only in session memory, exports happen client-side. The page exists to make the stance legible to users who care.
- **Blog launch content.** Blog route currently exists as a stub. Sprint 4 brings the first posts, an RSS feed (if we want one), and the editorial cadence.
- **"Is AI a Friend?" full activities.** Currently shows the Coming Soon banner, conversation starters, and partial content. The Sycophancy Audit, Red-Team, and Persona activities need to be developed by the team.
- **Resource link audit.** Many resource links across the topic pages currently use `#` as placeholders. Sprint 4 should sweep the canonical URLs from the Duke site into the prototype.

---

## Added during Sprint 3

### Visual identity behind-the-scenes explainer (About page)

**Source:** the icon family preview rendered at the end of Sprint 3 icon work — eleven cards showing each topic's icon at large size with the topic question and the icon's explanatory tag ("Asymmetric scale", "Hand-cast key", "Open book, pages", etc.). The local file `final_topic_icon_set.html` captures this layout.

**Idea:** include this as a "behind the scenes" visual section on the About page. Instructors who want to understand *why the icons look the way they do* — and by extension, why anything on the site looks the way it does — get a transparent answer. This positions the project as one that treats design choices as part of the pedagogy, not as packaging.

**Possible framing on the page:** something like "We chose eleven icons to carry these eleven questions. Here's what each one is, and why." Then the grid of cards.

**Possible expansion:** if this section works, it could become the seed of a richer "Design notes" page covering palette rationale (drawing from `docs/PALETTE.md`), illustration register (Muth-inspired), and typography choices. Optional — depends on how prominent the visual-rationale story should be in the project's voice.

**Implementation note:** the icon component (`src/components/icons/TopicIcon.jsx`) and topic metadata (`src/data/topics.js`) already provide everything needed to render this section data-driven. The only new content is the per-icon explanatory tag (e.g., bias → "Asymmetric scale"), which could either live as a new field on each topic entry or as a sibling map in the explainer component.

---

## How to use this doc

When a content idea surfaces during a future sprint that's clearly Sprint 4 territory, add it here under "Added during Sprint N" with enough context that a future session can pick it up cleanly.
