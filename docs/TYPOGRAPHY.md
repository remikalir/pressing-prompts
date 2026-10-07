# Pressing Prompts — Typography System

*Locked in Sprint 3 (visual identity), final pass after icon and illustration work. Read this before adding new typography or modifying the existing scale.*

---

## 1. What this is

A nine-step type scale, three-weight system, and pruned set of letter-spacing and line-height values that govern every typographic decision in the codebase. Replaces 24 ad-hoc font sizes, four weights, six letter-spacings, and 13 line-heights that had accumulated through iterative component-by-component decisions.

The values live in `src/styles/tokens.js` as `T.type.*`, `T.weight.*`, and `T.lineHeightProse`. Every text-bearing component should reference these tokens rather than introducing inline literal values.

---

## 2. The fonts

Two families, no third. Locked in early sprints and reaffirmed in Sprint 3.

- **`T.serif` — Instrument Serif (italic only)** for hero questions, topic page questions, the wordmark, and section titles. Always italic. The italic-only treatment is what gives the project its distinctive editorial-essay register; switching to roman would lose that.
- **`T.sans` — DM Sans** for everything else. Body, UI labels, metadata, navigation. A neutral geometric sans with a wide weight range.

Both are loaded from Google Fonts in `src/styles/global.css` with the specific weights actually used (300 is unused but loaded as a precaution).

---

## 3. The type scale

Nine semantic roles. Read the comments in `tokens.js` for the exact CSS values; read this section for the philosophy.

| Role | Size | Family | Use |
|------|------|--------|-----|
| Display | clamp(36, 5.5vw, 56) | Serif italic | Homepage hero only |
| Headline | clamp(36, 5vw, 52) | Serif italic | Topic-page hero questions |
| Title | 22 | Serif italic | Section titles, card titles |
| Subtitle | 18 | Sans | Activity headers, secondary headlines |
| Lead | 16 | Sans | Card descriptions, intro paragraphs |
| Body | 14 | Sans | Default body text |
| Caption | 13 | Sans | In-card descriptions, helper copy |
| Micro | 12 | Sans | Metadata, byline, footnote, smallest legible label |
| Eyebrow | 12 uppercase | Sans medium | Category labels above titles, eyebrows |

**The ratio.** Steps 14 → 16 → 18 → 22 sit at roughly a 1.18 (minor third) ratio. The jump from 22 → 36 is intentional — that's where decorative scale begins, and the gap signals "this is editorial, not body." Below 14 (Caption 13, Micro 12, Eyebrow 12), the steps are 1px each because at small sizes the eye reads pixel deltas more than ratios.

**Display vs Headline.** Both clamp from 36px (mobile) up. Display tops at 56 for the homepage hero — the tallest moment in the system. Headline tops at 52, slightly more restrained, because topic pages are content-pages where the question is one of many things on the page, not the entire pitch.

**The 12px floor.** No non-decorative text drops below 12px. This was a Sprint 3 decision based on accessibility convention (WCAG doesn't mandate a specific minimum, but 12px is the practical floor for legibility). The pre-Sprint 3 codebase used 10px and 11px for category labels in 30+ places; all bumped to 12px in the typography sweep.

**Two documented exceptions to the scale:**

- **20px decorative glyphs.** A handful of decorative icon-glyphs (NavBar wordmark glyph, banner icons, playlist icons) sit at 20px. These aren't text content — they're visual elements that happen to render as characters. Allowed.
- **72px on the 404 page.** The "404" number on the not-found page is intentionally oversized for affect. Allowed as a one-off.

---

## 4. The weight system

Three weights, no more.

- **400 (regular)** — body text default
- **500 (medium)** — eyebrow labels, subtitles, button text, soft emphasis
- **600 (bold)** — strong emphasis: activity titles, learning-note headers, things that need to read as bold

**Why no 700.** The pre-Sprint 3 codebase used 700 30+ times — more often than 400. That's heavier than the project's visual register supports. With Muth-inspired soft watercolor illustration, atmospheric palettes, and italic serif headlines, 700 reads as shouty. 600 carries the same hierarchical role at a more sympathetic weight.

**The 500 vs 600 distinction.** 500 is for *labels* (things that contextualize content). 600 is for *titles* (things that anchor content). When in doubt, 500 — it's the gentler default; reach for 600 only when something needs to read as a strong header.

---

## 5. Letter-spacing

Three values, each tied to a specific role.

- **`letterSpacing: "-0.02em"`** — Display and Headline serif italic. The slight tightening compensates for the optical loosening serif italic shows at large sizes.
- **`letterSpacing: "-0.01em"`** — Title and the navbar wordmark. A gentler tightening for medium-large serif italic.
- **`letterSpacing: "0.08em"`** — All UPPERCASE labels (eyebrows, category tags, button labels, small caps). The pre-Sprint 3 codebase had five different uppercase letter-spacings (0.03 through 0.10); they all collapsed to 0.08em.

Body sizes (16 and below in regular case) use `letter-spacing: 0` — never adjusted.

---

## 6. Line-height

Four values, mapped to size class.

- **`lineHeight: 1.15`** — Display, Headline, Title (the tight-headline range). Lets serif italic breathe without becoming airy.
- **`lineHeight: 1.4`** — Subtitle, Eyebrow. Just enough to feel like a deliberate pause, not so much that the label floats.
- **`lineHeight: 1.6`** — Lead, Body, Caption, Micro (everything else). The DM Sans body sweet spot.
- **`T.lineHeightProse` = 1.7`** — Long-form prose only. Multi-paragraph essays, About narrative, blog posts. Not used for shorter copy where 1.6 already feels right.

The pre-Sprint 3 codebase had 13 distinct line-heights with suspiciously close pairs (1.5 and 1.55, 1.6 and 1.65). All collapsed to the four canonical values.

---

## 7. WCAG accessibility audit

Verified against WCAG 2.1 AA (normal text 4.5:1, large text 3:1).

### Body text contrast — passes

All three text tokens verified against both background tokens:

| Token | On `T.bg` (#FAFAF8) | On `T.bgWarm` (#F5F3EE) | Status |
|-------|---|---|---|
| `text1` #1A1A1A | 16.65:1 | 15.69:1 | AAA (all sizes) |
| `text2` #555555 | 7.13:1 | 6.72:1 | AAA normal |
| `text3` #6A6A6A | 5.13:1 | 4.88:1 | AA normal, AAA large |

**`text3` was changed from `#888888` to `#6A6A6A` in Sprint 3 to fix a real accessibility failure.** The original value sat at 3.20:1 on bgWarm, well below the 4.5:1 AA threshold. The new value clears AA on both backgrounds while preserving the "lighter than text2" register the role calls for.

### White text on chrome — passes

White on `T.chrome` (#2E2A28): 14.21:1, AAA all sizes. Hero, footer, and navbar text safe.

### White text on topic-main gradients — mixed

The topic page hero uses white text on a gradient between `colors.main` and `colors.mid`. Most colors pass AA for normal text; two need a guideline:

- **Bias `#5A8268`: 4.35:1.** Passes for *large* text only. Hero question (clamped 36-52px) is well above the large-text threshold and fine. Don't put small white text on the Bias gradient.
- **Theft `#A47B27`: 3.86:1.** Same situation as Bias. Hero question is fine; small white text on this gradient should be avoided.
- All nine other topic colors pass AA or AAA for both normal and large white text.

This is a guideline, not a code rule — current usage is compliant. If a future component places small white text on any topic gradient, audit Bias and Theft specifically before committing.

---

## 8. Implementation notes

### When inline styling

Spread the type role into the component's style object:

```jsx
<h2 style={{ ...T.type.title, color: T.text1, fontWeight: T.weight.medium }}>
  Section title
</h2>
```

Weight is intentionally not part of `T.type.*` because emphasis is a separate decision from scale. Eyebrow is the one exception — its uppercase + medium weight is part of its identity.

### When you need a value not in the scale

You probably don't. The most common temptation is "13.5px because 13 feels small but 14 feels big" — that exact temptation produced six in-between values pre-Sprint 3, all of which were drift. If you find yourself wanting an unsupported size, the right answer is almost always to use the nearest scale value and adjust line-height or surrounding spacing to compensate.

If a genuine new role emerges that isn't covered by the nine, *add it to `T.type` and document the role in this file rather than inlining a one-off value*.

### Migrating components built pre-Sprint 3

Most components still use inline literal values rather than `T.type.*` references. They were swept to scale-aligned values during the Sprint 3 typography pass, but they don't yet *reference the system*. Migration to `T.type.*` is a future refactor — non-blocking, but worth doing component by component as components are otherwise modified.

---

## 9. Change log

- **Sprint 3, typography review.** Type scale collapsed from 24 sizes to 9 (plus 2 documented exceptions). Weights collapsed from 4 to 3 (700 demoted to 600 throughout). Letter-spacing collapsed from 6 values to 3. Line-heights collapsed from 13 to 4. `text3` darkened from `#888888` to `#6A6A6A` to pass WCAG 2.1 AA. Type system formalized as `T.type.*`, `T.weight.*`, and `T.lineHeightProse` in `src/styles/tokens.js`. Sweep applied across all components via mechanical replacement.

- **Pre-Sprint 3.** Typography accumulated component-by-component. No central scale, no formal weight rules. 30+ uses of 700 weight. Six in-between font sizes. text3 failing WCAG AA across the codebase.

---

## 10. Related files

- `src/styles/tokens.js` — the canonical type system values
- `src/styles/global.css` — font loading from Google Fonts
- `docs/PALETTE.md` — color system the typography sits on top of
- `docs/ILLUSTRATIONS.md` — illustration system (typography supports the visual register)
