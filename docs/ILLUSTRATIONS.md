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

- **Post-Sprint 3, Bias stone color fix.** The Bias illustration's stone was rendering as `c.mid` (sage `#98C2A4`) when it should have been the saturated sienna established in the prototype (`#A55B36`). The mismatch came from wiring the prototype to use `colors.mid` rather than the literal sienna value, since `colors.mid` is the saturated narrative-anchor slot in most other topics. For Bias specifically, `mid` is a pale sage tint that doesn't carry the role. Fixed by introducing a literal `stoneColor = "#A55B36"` and `stoneHighlight = "#D4A48C"` (Trust's main and mid — already in the system), with the off-palette decision documented inline. This makes Bias the second illustration with a literal off-palette value (Benefits is the first). The pattern: when a topic's `mid` is too pale to carry the saturated narrative anchor and there's no neighboring topic color that provides the right contrast, an off-palette literal value is acceptable and should be documented at the component level.

- **Sprint 3, illustration propagation, COMPLETE.** All eleven illustrations now in the Muth register. The Self & Society cluster (Need, Thinking, Spy, Friend) added the cluster's own emergent atmospheric character: *populated and intimate* — three of four illustrations include human figures; the fourth has two birds. This contrasts deliberately with Power & Access's *grounded structural* register (objects and spaces, no figures except in Benefits) and Trust & Truth's *cool atmospheric* register (figures present but small in atmospheric scenes). The three clusters now read as three distinct emotional weathers within a unified visual system.

- **Sprint 3, illustration propagation, Power & Access cluster.** Sustainable, Builds, Benefits, and Theft illustrations completed in the Muth register. Cluster's emergent atmospheric mood is *grounded* (more concrete objects, more solid ground) rather than the *misty cognitive* register of Trust & Truth — appropriate for topics about systems and structures. The cluster also surfaced one off-palette decision: Benefits uses `#5A998D` for the figure, a midpoint between the topic's `main` and `mid` values, to achieve sufficient contrast against the dark wall while preserving saturated narrative-anchor presence. This is the only illustration in the system using a custom value, and the choice is documented inline in `BenefitsIllustration.jsx`.

- **Sprint 3, illustration propagation, Trust & Truth cluster.** Trust and Disinfo illustrations completed in the Muth register; Bias remains the prototype reference. The cluster's emergent compositional move — *small saturated narrative anchor against atmospheric ground* — has been adopted as a universal coherence principle for the system. The anchor doesn't have to be a figure; it can be any small saturated element doing the "lone red kite" job. The figure-in-landscape composition specifically (Trust's bridge-walker, Disinfo's listener) is appropriate where the topic invites a human surrogate, but is not required of every illustration. See §6 for per-topic motif planning.

- **Sprint 3, illustration propagation, prototype.** Bias illustration locked as the prototype establishing the Muth-register formula.

- **Pre-Sprint 3 (Duke toolkit era).** All eleven illustrations were drawn in an icon-system register: thin strokes, opacity-graded layers, geometric primitives, embedded text, dashed dividers. See git history for pre-prototype values.

---

## 10. Related files

- `src/components/illustrations/BiasIllustration.jsx` — the prototype-locked reference
- `src/components/illustrations/*.jsx` — the other ten, awaiting propagation
- `src/data/topics.js` — palette values consumed by every illustration
- `docs/PALETTE.md` — the framework that governs the palette
- `src/components/icons/TopicIcon.jsx` — the topic icon system, which shares its visual register with these illustrations
