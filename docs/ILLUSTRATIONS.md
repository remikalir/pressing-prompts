# Pressing Prompts — Illustration System

*Locked in Sprint 3 (visual identity), prototyped on Bias. Read this before drawing or modifying any topic illustration.*

---

## 1. What this is

Each topic has a single hero illustration — a soft watercolor-evocative scene that anchors the topic page and reinforces the topic's question. Eleven illustrations, eleven topics, one shared visual register.

The current values live in code:

- `src/components/illustrations/<TopicName>Illustration.jsx` — one component per topic
- All consume `{ size, colors }` props; all render at 100×100 viewBox
- All use `colors.light`, `colors.mid`, `colors.main`, and `colors.dark` from the topic's v2 palette (see `docs/PALETTE.md`)
- `BiasIllustration.jsx` is the locked prototype and the visual reference

---

## 2. Design philosophy

Three rules that govern every illustration in the system:

### A. Atmosphere over symbol

The illustration is a *scene*, not a stack of icons. We pick one motif per topic and place it in soft watercolor ground — the way Muth places the panda on a single branch, the boy with his kite in fog, the cab pulling toward the doorway. The viewer should feel a *place and a moment*, not decode a diagram.

### B. Hand-drawn imperfection on purpose

Every form is slightly irregular. Beam tapers unevenly. Posts have an S-curve. Pan rims are wonky. Chains in a pair vary in stroke width. The lone saturated accent has an irregular contour. This is what makes the illustration read as drawn rather than drafted, and is the single most important rule for staying in the Muth register.

### C. One narrative anchor

Every scene has *one* small story-element that gives it meaning beyond pure atmosphere — Muth's "lone red kite" against muted ground. For Bias, it's the sienna stone in the heavy pan. The anchor is what the eye lands on; everything else holds the air around it.

---

## 3. The structural recipe

Every illustration is built in this layered order, back to front:

| # | Layer | Role | Bias example |
|---|-------|------|--------------|
| 1 | Top atmospheric wash | "Sky" / above | Light-color ellipse, blurred heavily |
| 2 | Bottom atmospheric wash | "Ground" / below | Main-color ellipse at low opacity, blurred heavily |
| 3 | Horizon implication | Depth shift between sky and ground | Thin horizontal ellipse at very low opacity, blurred medium |
| 4 | Cast shadow(s) | Anchor the form in space | Dark-color blurred ellipse, deeper under the heavy element |
| 5 | The form itself | Rendered in slightly irregular paths with semi-transparent fills (no outlines) | Post, beam, fulcrum, pans, chains |
| 6 | The narrative anchor | One saturated accent that gives the scene its meaning | Sienna stone with soft highlight |
| 7 | Atmospheric specks | "Dust in light" — tiny low-opacity dots scattered across the upper space | 3–5 small circles at 0.12–0.18 opacity |

If a layer doesn't exist for a particular illustration (e.g., a scene that doesn't have a clear horizon), skip it. Don't add a layer that doesn't earn its place.

---

## 4. Technical conventions

### viewBox

All illustrations are 100×100. The Bias prototype was drafted at 200×200 for working room and scaled down by 0.5; future illustrations can be drafted at any scale and normalized.

### Filter IDs

Every filter ID is prefixed with the topic id to avoid collision when multiple illustrations render on the same page (homepage cluster rows do this). Pattern: `{topic}-wash-medium`, `{topic}-wash-heavy`. Example: `bias-wash-medium`, `trust-wash-medium`. Do not share filters across components even though they may be visually identical — collision risk outweighs the few hundred bytes of duplication.

### Filter parameters

Two standard washes:

```jsx
<filter id="{topic}-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
  <feGaussianBlur stdDeviation="3" />
</filter>
<filter id="{topic}-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
  <feGaussianBlur stdDeviation="5" />
</filter>
```

`stdDeviation` is set for a 100×100 viewBox. If you draft at 200×200 and scale, use 6 / 10 in draft and remember to halve them before committing.

### Opacity ranges

| Layer | Opacity | Reasoning |
|-------|---------|-----------|
| Atmospheric washes | 0.18 – 0.7 | Pulls air into the scene without overwhelming the form |
| Cast shadows | 0.12 – 0.34 | Heavier under the topic's narrative-anchor element, lighter elsewhere |
| Form silhouettes (post, beam, central form) | 0.7 – 0.85 | Dark enough to read as the subject, light enough to feel painted |
| Auxiliary form details (chains, rim strokes) | 0.38 – 0.6 | Recede behind the main forms |
| Narrative anchor (the saturated accent) | 0.85 – 0.95 | The eye should land here |
| Atmospheric specks | 0.12 – 0.18 | Just barely visible; below conscious notice |

### Color usage

Each illustration draws from the four palette values of its topic:

- `colors.light` — top atmospheric wash
- `colors.main` — bottom atmospheric wash, light pan / counter-form, sometimes faint horizon
- `colors.dark` — main forms, posts, beams, shadows, dark structural elements
- `colors.mid` — narrative anchor (the saturated accent), highlights

The narrative anchor uses `colors.mid` rather than `colors.main` because mid is the more saturated / warmer version — the right register for the "single red kite" moment. If a topic's mid is too pale to anchor, fall back to the topic's main and re-evaluate the palette for that topic.

### What NOT to use

- **No outlines as primary form definition.** Forms are rendered as filled paths. Strokes are only for thin auxiliary details (chains, rim accents).
- **No text. Ever.** No labels, no glyphs, no monogram letters, no copyright symbols. This rule is absolute.
- **No dashed lines.** Dashed strokes were the visual signature of the old icon-system register and are excluded.
- **No geometric primitives as central forms.** No `<rect>`, `<polygon>`, `<line>` for the main subject. These are fine for atmospheric specks, but the post/beam/pans/main motif should always be `<path>` with bezier curves.
- **No symmetric duplicates.** If something appears as a pair (chains, paws, pages), each member of the pair must be slightly different in stroke width, curve, or position. CAD-tool symmetry is the giveaway of a system illustration.

---

## 5. Adding hand-drawn quality — the wobble checklist

When the geometric form is right, walk through this checklist before committing:

1. **Beams, posts, columns** — does the path have a slight S-curve or wobble? Are the ends tapered rather than blunt? Are the top and bottom edges of any thick form subtly out of parallel?
2. **Round forms** (pans, bowls, eyes, leaves) — is the rim curve uneven? Are the two halves of the form slightly asymmetric?
3. **Pairs** (chains, fingers, hands, leaves on a stem) — do the pair members vary in stroke width, opacity, or path shape?
4. **The narrative anchor** — is it an irregular contour, not a perfect ellipse or rectangle? Does it have a soft highlight that's also irregular?
5. **The fulcrum / connecting points** — slightly asymmetric, slightly off-center, slightly imperfect?

If any answer is "no, it's clean," fix that one element. Don't fix all of them at once — over-correction is worse than under-correction.

---

## 6. Topic-specific scenes

The Bias prototype establishes the formula. The other ten scenes are deliberately diverse — same recipe, different stories. Below is the working list of *narrative anchors and motifs* for each topic, to be drawn during the propagation pass.

| Topic | Cluster | Motif | Narrative anchor (the saturated accent) |
|-------|---------|-------|-----------------------------------------|
| Need | Self | A path forking at a threshold; soft horizon | A single small bird watching from one fork (echoes Muth's quiet creatures) |
| Trust | Truth | Arch bridge spanning soft water; mist below | A small lantern hanging on the bridge's underside (light suspended in fog) |
| Bias | Truth | **(LOCKED)** Asymmetric scale | Sienna stone in the heavy pan |
| Thinking | Self | Open hand with smoke / spiral rising from palm | The spiral itself, in saturated indigo |
| Sustainable | Power | Single tree in atmospheric ground; faint heat shimmer above | A single fallen leaf at the trunk |
| Builds | Power | Stack of stones in mist (cairn-like) | The topmost stone, slightly off-balance |
| Benefits | Power | Doorway opening from dark to light, with a key on a worn hook | The key itself, in saturated teal |
| Disinfo | Truth | Single megaphone-shape in foreground; sound radiating into wash | One small distant figure listening (or several? TBD) |
| Theft | Power | Open book in foreground with pages drifting up into atmospheric distance | One page caught mid-air, brighter than the rest |
| Spy | Self | Window with curtain partly drawn; soft eye-shape implied in the negative space | A single point of light visible through the gap |
| Friend | Self | Two forms close together in soft ground — could be reading shapes (bird + bird? hand + hand? two seated forms?) | The closer form, in saturated wine-rose |

These are *proposed* narrative anchors. They will be evaluated and refined when each illustration is drawn — same as Bias was iterated through three variants before locking. The list is a starting frame, not a contract.

---

## 7. Cluster coherence — what emerged from Trust & Truth

The Trust & Truth cluster (Bias, Trust, Disinfo) revealed an unintentional but powerful coherence move: **all three illustrations feature a small saturated element as the lone narrative anchor against atmospheric ground**. Bias has the sienna stone in the heavy pan. Trust has the sienna figure on the bridge. Disinfo has the dark-sienna figure receiving the broadcast.

This has been adopted as the system's universal coherence principle:

> **Every illustration in the system has exactly one small saturated narrative anchor against atmospheric ground.**

The anchor can be a figure, an object, a single creature, or any small saturated element. What matters is that:
- It is *small* relative to the scene
- It is *saturated* relative to the surrounding atmospheric wash
- It is the *lone* such element — there is no second focal point competing
- It carries the topic's question in concrete form

For the more relational topics (Self & Society especially), the anchor will often be a figure. For more object-based topics (Theft, Benefits, Sustainable), the anchor may be the central object itself rendered in saturated tone against muted ground.

A possible additional enhancement — giving each cluster a shared atmospheric mood (e.g., all Trust & Truth in misty register, all Power & Access in earthier register, all Self & Society at more intimate close-in scale) — remains a "nice to have." The Trust & Truth cluster has its own emergent register (cool atmospheric, sienna-and-sage tonalities, mid-distance compositions) that may or may not deserve to be explicitly echoed in other clusters. We'll know when we see what emerges from Power & Access and Self & Society.

---

## 8. Performance and rendering notes

### Filter cost

Gaussian blur filters are computationally non-trivial. With eleven illustrations on the page at once (theoretical maximum, e.g., the homepage hero with all topics shown), each having 3–4 blur layers, that's ~40 blur ops per render. Modern browsers handle this on the GPU and it's fine, but watch for:

- Don't put illustrations inside elements that re-render frequently (animated containers, scroll-driven transforms, etc.). The filters themselves are cached, but if React re-mounts the SVG, the filters are re-allocated.
- If we ever see frame drops on lower-end devices, the easiest mitigation is to bake the wash layers as a single pre-blurred radial gradient and reserve the live filter only for the cast shadows.

### Bundle size

Each illustration is ~2–3 KB of JSX (gzipped: ~600 bytes). Eleven illustrations is ~6 KB total. This is well within the project's overall budget.

### Animation

The current floating animation on illustrations (defined in component-level `<style>` blocks) continues to work — the SVG is the animated element, and the filters render correctly across the animated transform. No changes needed for animation compatibility.

---

## 9. Change log

- **October 2026, blog hero entries logged retroactively.** The four entries below record blog heroes that shipped between May and August 2026 without change-log entries. They were written in October 2026 from the shipped files in `public/blog/<slug>/hero.jpg`, sampled pixel by pixel and compared against the working records from the sessions that made them. Where two topic colors are too close to tell apart at low opacity in a JPEG, both are named. Blog heroes are a separate sub-register from the topic illustrations described in §§1–8: *atmospheric point-and-wash compositions* on chrome `#2E2A28`, descended from the constellation and OG image rather than from the figurative topic formula. They obey the same lone-anchor principle, are wordless, unmasked, and exactly 1200×675 so they can double as Open Graph images. In each entry, **washes are topic colors** and stay on-palette; **threads, points, and highlights are atmospheric accents** — desaturated warm and cool tints (`#CBAE82` sand, `#F2E8D6` warm-white, `#D99A5A` amber, `#DFE3EC` cool-white, `#8B9BD4` periwinkle, `#C08098` rose) that make no claim to topic identity and so do not fall under the atmospheric band or the off-palette rule. **Rendering finding:** the generator source for these heroes applies `feGaussianBlur` to the washes, but in all four shipped files the washes render as hard-edged translucent discs — the blur did not survive rasterization. The likely cause is that cairosvg does not implement SVG blur filters; this has not yet been verified by execution. The hard-edged discs are what was approved and shipped, so the entries describe them as they are. Whether future heroes keep this look or restore the blur (for example by blurring the wash layer in PIL after rasterizing) is an open decision.

- **August 2026, blog hero — `fall-pedagogy-series`.** Composition: *horizontal spine, off-center anchor* — the first hero built on a line rather than a centered field or mass. A faint hand-drawn sand thread runs the width of the canvas just above center. At left it carries the lone anchor (Trust main `#A55B36` body, lighter `#C98A52` core, highlight) paired with a smaller amber companion, for the two back-to-back September workshops. Three points of varied size and color sit above and below the line for the monthly community conversations: periwinkle `#8B9BD4`, sage `#5A8268`, and rose `#C08098`. Near the right edge a second, dimmer point in the same Trust hue sits in its own wash with two very faint gray points beyond it — a gathering not yet lit, for the post's invitation to colleagues at other institutions. Washes (topic colors): Trust, in two overlapping discs at left; Thinking; a green (Sustainable or Benefits); Friend; a warm sienna at right (Disinfo, Theft, or Trust); and two very faint washes at top and bottom (green; Spy or Self & Society aubergine). Note that the sage point is Bias's main hex used at point scale, not a softened derivative; it is an accent here, not a claim on Bias. Chosen as direction A of three, then refined through sub-variations A1–A3 to A3; A1 (a loose cluster beyond the edge) and A2 (the line splitting into three threads) were rejected, the latter for edging toward diagram.

- **July 2026, blog hero — `we-the-people-workshop`.** Composition: *two balanced masses.* A warm mass at left (Trust dominant, with a Theft goldenrod undertone in its upper-left disc — a nod to *Is AI Theft?*, one of the two topics the workshop teachers named as resonant) holds amber and warm-white points of varied size. A cool mass at right (Thinking dominant, with a grayer Builds-range disc) holds periwinkle and cool-white points. Between them, a larger luminous anchor (Trust main body, lighter core, highlight) sits in its own faint amber halo, with two faint sand traces reaching toward each mass. Built from the post's structural spine — the teachers' two-column reflection on how AI might help and where it might harm — and the authors' word "clear-eyed" for holding both at once. Kept beam-less and atmospheric on purpose so the two-sided balance does not read as the Bias scale motif. The first pass was too subtle on every axis; per Remi's critique, the masses were strengthened, the points given more size and color variation, and the center point enlarged so it visibly holds the center. Drafted under the provisional slug `k12-critical-thinking`; shipped as `we-the-people-workshop`.

- **June 2026, blog hero — `tlai-conference-report`.** Composition: *converging clusters around the glyph.* Four loose clusters of warm-white points, one in each quadrant, joined by faint sand threads that run inward to a ring of small points around the centerpiece glyph (two concentric rings and the italic period, centered). A single Trust-sienna point sits just right of center as the lone anchor. Washes (topic colors), one or more behind each cluster: Thinking (upper left), a sienna (Trust or Disinfo, left), Sustainable (lower left), Friend (upper right), Benefits (right), Theft (lower right), with faint green, aubergine, and ink-blue washes at top, center, and bottom. Built from Hannah's opening game of Connections and the post's argument that distinct communities are linked by the same questions; the glyph — the still point that closes a question — becomes the place every thread meets. Chosen as direction C of three. The rejected wildcard was a hand-drawn alligator in water washes, drawn from the post's opening anecdote; it lost because a hero should carry the post's argument rather than its color commentary.

- **May 2026, blog hero — `welcome-to-pressing-prompts` (launch).** Composition: *centered constellation.* Eleven topic orbs in their main colors, each bearing its white topic icon (legible at this scale, unlike the OG image, which omits them), arranged around the centerpiece glyph, with eight topic-color washes behind (Need, Theft, Trust, Friend, Thinking, Builds, Benefits, Spy, at roughly 6–12% opacity). Built in Sprint 6 alongside the OG image as `blog-hero-intro.png`; it shipped with the launch post on 2026-05-27. The shipped file matches the generator in `ILLUSTRATIONS_HANDOFF.md` Appendix A — the same hand-tuned `ORB_LAYOUT` and wash positions — and is the template the later heroes extended. Because the orb layout is hand-placed for eleven, this hero, like `public/og-image.png`, will need a manual twelfth orb if it is ever regenerated for twelve topics.

- **Post-Sprint 3, Bias stone color fix.** The Bias illustration's stone was rendering as `c.mid` (sage `#98C2A4`) when it should have been the saturated sienna established in the prototype (`#A55B36`). The mismatch came from wiring the prototype to use `colors.mid` rather than the literal sienna value, since `colors.mid` is the saturated narrative-anchor slot in most other topics. For Bias specifically, `mid` is a pale sage tint that doesn't carry the role. Fixed by introducing a literal `stoneColor = "#A55B36"` and `stoneHighlight = "#D4A48C"` (Trust's main and mid — already in the system), with the off-palette decision documented inline. This makes Bias the second illustration with a literal off-palette value (Benefits is the first). The pattern: when a topic's `mid` is too pale to carry the saturated narrative anchor and there's no neighboring topic color that provides the right contrast, an off-palette literal value is acceptable and should be documented at the component level.

- **Sprint 3, illustration propagation, COMPLETE.** All eleven illustrations now in the Muth register. The Self & Society cluster (Need, Thinking, Spy, Friend) added the cluster's own emergent atmospheric character: *populated and intimate* — three of four illustrations include human figures; the fourth has two birds. This contrasts deliberately with Power & Access's *grounded structural* register (objects and spaces, no figures except in Benefits) and Trust & Truth's *cool atmospheric* register (figures present but small in atmospheric scenes). The three clusters now read as three distinct emotional weathers within a unified visual system.

- **Sprint 3, illustration propagation, Power & Access cluster.** Sustainable, Builds, Benefits, and Theft illustrations completed in the Muth register. Cluster's emergent atmospheric mood is *grounded* (more concrete objects, more solid ground) rather than the *misty cognitive* register of Trust & Truth — appropriate for topics about systems and structures. The cluster also surfaced one off-palette decision: Benefits uses `#5A998D` for the figure, a midpoint between the topic's `main` and `mid` values, to achieve sufficient contrast against the dark wall while preserving saturated narrative-anchor presence. This is the only illustration in the system using a custom value, and the choice is documented inline in `BenefitsIllustration.jsx`.

- **Sprint 3, illustration propagation, Trust & Truth cluster.** Trust and Disinfo illustrations completed in the Muth register; Bias remains the prototype reference. The cluster's emergent compositional move — *small saturated narrative anchor against atmospheric ground* — has been adopted as a universal coherence principle for the system. The anchor doesn't have to be a figure; it can be any small saturated element doing the "lone red kite" job. The figure-in-landscape composition specifically (Trust's bridge-walker, Disinfo's listener) is appropriate where the topic invites a human surrogate, but is not required of every illustration. See §6 for per-topic motif planning.

- **Sprint 3, illustration propagation, prototype.** Bias illustration locked as the prototype establishing the Muth-register formula.

- **Pre-Sprint 3 (Duke toolkit era).** All eleven illustrations were drawn in an icon-system register: thin strokes, opacity-graded layers, geometric primitives, embedded text, dashed dividers. See git history for pre-prototype values.

---

## 10. Related files

- `src/components/illustrations/BiasIllustration.jsx` — the prototype-locked reference
- `src/components/illustrations/*.jsx` — the other ten, propagated into the Muth register in Sprint 3 (see §9)
- `src/data/topics.js` — palette values consumed by every illustration
- `docs/PALETTE.md` — the framework that governs the palette
- `src/components/icons/TopicIcon.jsx` — the topic icon system, which shares its visual register with these illustrations
