# Pressing Prompts — Constellation Centerpiece

*Locked in Sprint 3 (visual identity), final item. The still point at the center of the homepage's animated topic constellation.*

---

## 1. What this is

A small composite glyph at the center of the eleven-orb topic constellation in the homepage hero. Three elements:

- **Outer ring** at radius 18 (within a 40×40 viewBox), 0.5px stroke, white at 18% opacity
- **Inner ring** at radius 12, 0.5px stroke, white at 9% opacity (half the outer)
- **Italic full-stop** as a 3×3.5 white ellipse, 95% opacity, rotated -12° (italic skew), positioned at y=23 — three pixels below the optical center, where italic punctuation actually sits in real typography

The whole composition lives in `src/components/home/TopicConstellation.jsx` and renders at 40×40 absolute-positioned SVG centered on the constellation's still point.

---

## 2. Why an italic full-stop

The constellation visualizes eleven *questions* — every Pressing Prompt is literally a question topic ("Is AI Biased?", "Can We Trust AI?", etc.). The project's identity is explicitly editorial-typographic: the wordmark is set in Instrument Serif italic, the homepage hero and topic page heroes use the same italic register, and the project's voice is the voice of essay-style inquiry.

A single italic full-stop at the constellation's center is the typographic gesture *that closes a sentence*. It punctuates the orbit of questions. It speaks the project's native language — italic serif typography — at the smallest possible scale, as a single mark.

This is also a centerpiece that *only Pressing Prompts could use*. Concentric rings, target glyphs, pressed buttons — those are generic system patterns. An italic period anchored by two faint rings is specific to a project whose identity is built on italic punctuation as a visual move.

---

## 3. The double ring

The two faint concentric rings serve a real spatial function: they tell the eye "this is the still point" before the eye reads the period itself. Without them, a single 3.5px tilted ellipse at the center of an animated constellation reads as orphaned — a small mark floating in space without anchor.

The opacity ratio (outer 18%, inner 9%) creates a deliberate hierarchy:

- Outer ring frames *the still-point area* — a generous breath around the centerpiece, distinguishing it from the chrome surface it sits on
- Inner ring contains *the period itself* — a tighter frame that gives the punctuation room without crowding it
- Period at 95% is the only confident mark in the composition — the eye lands here

The half-opacity relationship between the rings (18% / 9%) is what keeps the structure quiet while still doing its work. Both rings register on the chrome but neither competes with the period or the orbiting topic colors.

---

## 4. The baseline shift

Italic punctuation in real typesetting sits at the baseline of the line — visually below the optical center of an em-square, not at the geometric middle. The period in this glyph sits at y=23 in a 40-tall viewBox (3px below center) for exactly that reason.

This small detail is what makes the mark read as *italic punctuation* rather than as *a tilted dot*. The rotation alone isn't enough — italic punctuation has a specific position, and we honored it.

---

## 5. What the alternatives were and why we didn't pick them

Four candidates were tested in Sprint 3:

- **Concentric rings + center dot** (option A) — most legible, most generic. Fine in any UI system; uniquely owned by no one.
- **Pressed/inset disc** (option B in the original exploration) — tactile button language via radial gradient. The pressed-button-glyph idea from the earliest conversation. Worked conceptually but rendered unpredictably across screens and could flatten on the dark chrome at small scale.
- **Italic stop** (option C, locked) — described above. Native to the project's editorial register.
- **Neutral chrome dot** (option D) — soft glow with small inner dot. The safe fallback if everything else felt too forward.

The italic stop won because it's the only option that is *specifically Pressing Prompts*. The constellation needs an anchor; the project's identity needed a typographic mark; one composition serves both.

---

## 6. Implementation notes

### Rendering

The centerpiece is plain SVG inside the constellation component, absolutely positioned at the constellation's center. No external assets, no fonts, no filters. Just three SVG elements: two `<circle>` rings and one rotated `<ellipse>` for the italic period.

### Why an `<ellipse>` and not actual italic typography

The mark could in principle be rendered as a typeset italic period (`<text>` with the Instrument Serif italic font and a "." character). I chose a hand-shaped ellipse instead because:

1. **Reliability** — actual italic period glyphs vary in shape across fonts and platforms. An explicit ellipse with a known size and rotation renders identically everywhere.
2. **Optical control** — Instrument Serif's italic period is a small dot with subtle terminal modeling that gets lost at this size. A clean 3×3.5 ellipse at -12° captures the *idea* of the italic period without depending on the typeface to deliver it at this scale.
3. **No font-loading dependency** — the mark renders correctly during the brief window before web fonts load, instead of flashing as a substitute glyph.

The 3×3.5 dimensions (slightly taller than wide) and -12° rotation match the optical character of an Instrument Serif italic period at this scale.

### Animation

The centerpiece does not animate. The topic orbs animate (three different float keyframes). The center is the *still* point — the only static element on the constellation. This is intentional: a still point gives the orbiting elements something to orbit *around*, and motion at the center would compete with the topic orbs for attention.

### Accessibility

The SVG carries `aria-hidden="true"` because the centerpiece is purely decorative — it carries no information beyond what the surrounding hero text already provides. The constellation as a whole is a visual flourish; no information is lost to assistive technology.

---

## 7. Change log

- **Sprint 3, item 5 (final).** Centerpiece locked as the italic-stop composite. Replaces the placeholder soft-glow disc that rendered at `rgba(255,255,255,0.05)` (effectively invisible) and was flagged in the file header as a Sprint 3 to-do.

- **Pre-Sprint 3.** The constellation rendered without a meaningful center — a 40×40 disc at 5% opacity sat in the still-point area, intended as a Sprint 1 placeholder. The constellation worked without it; the missing centerpiece was a felt absence, not a broken element.

---

## 8. Related files

- `src/components/home/TopicConstellation.jsx` — the constellation component, including the centerpiece SVG
- `src/pages/HomePage.jsx` — the only consumer of the constellation
- `docs/TYPOGRAPHY.md` — the typography system the centerpiece quotes
- `docs/PALETTE.md` — the chrome surface the centerpiece sits on
