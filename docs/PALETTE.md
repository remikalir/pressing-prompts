# Pressing Prompts — Palette Framework

*Locked in Sprint 3 (visual identity). Read this before changing any color or adding a topic.*

---

## 1. What this is

The palette is the system that governs every color in Pressing Prompts: the eleven topic palettes (each with light / mid / main / dark variants), the three thematic cluster identities, and the relationship between them and the brand chrome. This document captures the design philosophy, the scaling logic for new topics, and the exact values currently in use.

The values themselves live in code:

- `src/data/topics.js` — eleven topic palettes (`colors.{light, mid, main, dark}` per topic)
- `src/data/clusters.js` — three cluster identity colors
- `src/styles/tokens.js` — neutral chrome tokens (`chrome`, `bg`, `bgWarm`, `accent`, etc.)

This doc is the *why*. The code is the *what*.

---

## 2. Design philosophy

Atmospheric, muted, watercolor-tonal. Every color in the system is chosen so that Muth-inspired illustration — the soft watercolor washes, layered translucent forms, organic edges, and atmospheric backgrounds we've adopted as our visual register — reads *through* the palette rather than fighting it.

This means:

- **No vivid saturation.** A color that demands attention from the palette layer leaves nothing for the illustration layer. Every saturated digital primary has been pulled toward earth, parchment, or ink.
- **A narrow lightness band.** Mains all sit at roughly L≈35–45%. Bright colors and dead-dark colors are both excluded.
- **Family resemblance over individual brilliance.** No single topic should be the color you remember. The collection is what's memorable.
- **Each color holds its semantic family.** Bias is green (the green of evaluation, of weighing). Theft is goldenrod (the gold of value, of antiquity). Friend is wine-pink (the warmth of relation). Semantic identity is preserved across the rebalance — only hue/saturation/lightness shift.

---

## 3. The atmospheric band — three guardrails

Every palette decision passes through three constraints:

### Lightness

Mains target L ≈ 35–45% (in HSL). Lights target L ≈ 88–94% (very pale wash). Mids target L ≈ 70–78% (mid-tone wash). Darks target L ≈ 22–32% (deep but not black).

The narrow band on mains is what makes the family read as one family even across very different hues.

### Saturation

Mains target S ≈ 25–55%. Anything above ~60% starts to read as digital and competes with watercolor illustration. Anything below ~20% reads as gray and loses its semantic identity. Mid-tones (the "mid" variant) sit at slightly higher saturation than the main, which makes them read as the same color "diluted" rather than washed-out.

### Chroma against chrome

The site's chrome is `#2E2A28` — a warm institutional dark. Every topic color must:

- Read as distinctly itself when placed against `#2E2A28` (i.e., not collapse into the chrome's warmth)
- Not echo the chrome (no warm-dark-brown topic that reads as "the brand color")
- Hold sufficient contrast for white text on the main color when used in topic-card headers

If a candidate color fails any of these three guardrails, it doesn't belong in the palette regardless of how compelling it is in isolation.

---

## 4. The hue map — where existing topics sit

The eleven mains, sorted by hue:

| Hue | Topic | Main | Cluster |
|-----|-------|------|---------|
| 6° | Need | `#95433A` | Self |
| 17° | Trust | `#A55B36` | Truth |
| 18° | Disinfo | `#AE5226` | Truth |
| 43° | Theft | `#A47B27` | Power |
| 138° | Bias | `#5A8268` | Truth |
| 150° | Sustainable | `#347E5C` | Power |
| 171° | Benefits | `#2A7569` | Power |
| 206° | Builds | `#4D5A63` | Power |
| 225° | Thinking | `#5A6FA6` | Self |
| 280° | Spy | `#6F4283` | Self |
| 336° | Friend | `#964966` | Self |

Cluster anchors (in hue terms):

| Hue | Cluster | Color | Description |
|-----|---------|-------|-------------|
| 208° | Truth | `#324E68` | ink-blue — evaluation, archives, the marginal note |
| 290° | Self | `#57385C` | aubergine — interiority, contemplation |
| 358° | Power | `#6E2F32` | port-burgundy — institutional weight, gravitas |

---

## 5. Available zones for future topics

The hue space currently has four open regions. New topics should claim a position in one of these zones before considering the crowded zones:

| Hue range | Character | Open for |
|-----------|-----------|----------|
| ~60–130° | Yellow → olive → lime → green | The largest open territory. Could host topics about deliberation, archives, agriculture, data — anything that semantically benefits from earthy organic green. |
| ~235–270° | Deep indigo → blue-violet | Where the proposed twelfth topic sits. Reads as judicial dusk: deliberation, weighing, threshold of decision. |
| ~340–360° | Magenta → rose-red | Tight wrap-around space. Could host one more warm topic before the warm zone is fully crowded. |
| ~175–200° | Cyan → sky-blue | Small gap between Benefits (171°) and Builds (206°). Could host one more cool topic. |

The crowded zone (~5–20°) — where Need, Trust, and Disinfo all live — has no room for additional warm-rust topics without compression. If a future topic needs to be in this hue range, that's a signal to either reframe the topic or accept that one of the three needs a hue-shift.

---

## 6. The cluster system

Each topic belongs to exactly one cluster:

- **Trust & Truth** — How do we evaluate what AI tells us? *(Trust, Bias, Disinfo)*
- **Power & Access** — Who controls AI and who is affected? *(Sustainable, Builds, Benefits, Theft)*
- **Self & Society** — How does AI change us and our world? *(Need, Thinking, Spy, Friend)*

A cluster identity color is chosen as a deep atmospheric counterpoint to the *family* of the cluster, not to any specific member. This is why the cluster identity holds when new members are added: the counterpoint relationship is defined against the cluster's character, not against a fixed member set.

### When to add a new cluster

If a topic genuinely doesn't fit any existing cluster — say, a phenomenology topic ("How does AI feel?") that's neither evaluation, nor power-economy, nor self-relation — that's the signal to add a fourth cluster.

Candidate identity colors held in reserve for a fourth cluster, in the same deep-atmospheric register as the existing three:

- **Deep olive** `#4E4F2E` — for an organic / embodied / phenomenological cluster
- **Deep sepia** `#5C4A36` — for an archival / historical / craft cluster
- **Deep slate-charcoal** `#3A4248` — for a structural / systems / infrastructure cluster

Any of these would sit in the same paintbox as ink-blue, port-burgundy, and aubergine. Pick by thematic fit.

### Cluster size limits

A cluster is comfortable at 3–4 topics, workable at 5–6. Beyond ~6, the cluster identity color stops feeling like a counterpoint to its members and starts feeling like another arbitrary point. That's the signal to either sub-cluster (e.g., split Power & Access into "Labor" and "Access") or accept that the cluster is now a category, not a family.

---

## 7. Decision algorithm — adding a new topic

When adding a topic, work through these in order:

1. **Cluster fit.** Does it belong to Truth, Power, or Self? If yes, proceed to step 2. If genuinely none, skip to *Adding a new cluster* below.

2. **Hue slot.** Identify an available zone (§5). Pick a hue position that's both:
   - Semantically meaningful for the topic (judgment → indigo-violet; embodiment → olive; intimacy → magenta)
   - At least 15° from the nearest existing topic in either direction

3. **Atmospheric band.** Dial in lightness and saturation per the guardrails (§3): main at L≈35–45%, S≈25–55%.

4. **Derive the variants.** Light at L≈90% with low saturation; mid at L≈75% with moderate saturation; dark at L≈25% with the topic's hue and slightly elevated saturation.

5. **Stress-test.**
   - Sit the new main against the chrome `#2E2A28` — does it read as itself?
   - Place it next to its closest hue neighbors in the harmony row — is it visibly distinct?
   - Imagine a Muth-style illustration filling its topic-page hero — does the watercolor read through, or does the gradient overpower it?

6. **Stress-test the cluster.** Does the new member dilute the cluster identity, or does it sit comfortably as another counterpoint to the cluster's deep anchor color?

If any stress test fails, iterate. If multiple fail, the topic may need either a different cluster, a different hue zone, or — rarely — a fourth cluster.

### Adding a new cluster

If no existing cluster fits:

1. Pick a candidate identity color from the reserves (§6) by thematic match.
2. Place the new topic and the cluster identity together; ensure the cluster reads as a deliberate counterpoint to the topic, just as the existing clusters do for theirs.
3. Update `src/data/clusters.js` and the cluster-grouping logic (the homepage `<Explore by Theme>` section automatically picks up new clusters; check that the cluster ribbon and topic-page badges still render correctly).

---

## 8. Practical limits

- **Per cluster:** comfortable at 3–4 topics; workable at 5–6; sub-cluster signal beyond ~6.
- **Per palette:** comfortable at 11 topics; workable at ~16–18; beyond that, hue space crowds and we'd need a second axis (e.g., a "deep" and a "light" version of the same hue family — different topics, same hue, different lightness).
- **Atmospheric band as floor:** a topic that *needs* a vivid color to read right is signaling that either the topic doesn't fit this collection, or the collection's register has changed. Either is a meaningful signal — investigate before pushing the band.

---

## 9. Worked example — "What should AI decide?"

This topic is in development for a future sprint. Its palette derivation is included here as a reference for the decision algorithm in action.

**Cluster:** Self & Society. The topic is about delegation of judgment — the human-AI relationship at the boundary of agency. Same family as Need (relationship to AI as tool), Thinking (as cognitive partner), Spy (as observer), Friend (as companion). It's another facet of how AI changes us — specifically, what we hand over.

**Hue slot:** ~245° (deep blue-violet). Sits in the open zone between Thinking (225°, periwinkle) and Spy (280°, violet) — both in the same cluster, both leaving room. Reads as judicial dusk: deliberation, weight, the threshold of decision.

**Proposed values:**

| Variant | Hex | Notes |
|---------|-----|-------|
| Main | `#524A91` | L≈43%, S≈33% — within atmospheric band |
| Light | `#DEDDF0` | L≈90%, low saturation |
| Mid | `#9B97C9` | L≈75%, moderate saturation |
| Dark | `#363177` | L≈30%, hue preserved, saturation lifted |

These values are **proposed, not locked**. They will be reviewed and finalized when the topic enters development.

---

## 10. Change log

- **Sprint 3 (current).** v2 palette locked. Eleven topic palettes rebalanced from the original Duke-inherited values to the atmospheric, muted, watercolor-tonal system documented here. Three cluster identities established as deep counterpoints (ink-blue, port-burgundy, aubergine), replacing the previous practice of borrowing a member topic's color for the cluster.

- **Original (Duke toolkit).** Eleven topic colors inherited from the WordPress and React prototypes built at Duke during the 2024–25 incubation. Cluster colors were identical to specific member topics' mains. See git history for pre-v2 values.

---

## 11. Related files

- `src/data/topics.js` — current topic palette values
- `src/data/clusters.js` — current cluster identity values
- `src/styles/tokens.js` — chrome, neutrals, accents
- `src/components/icons/TopicIcon.jsx` — the eleven topic icons (silhouettes plus one stroked spiral); add a new entry keyed by topic id when adding a topic
- `src/components/illustrations/*.jsx` — topic illustrations (use `colors.light`, `colors.mid`, `colors.main`)
- `src/components/home/TopicConstellation.jsx` — homepage hero constellation
- `src/components/home/ClusterIllustration.jsx` — cluster header marks
