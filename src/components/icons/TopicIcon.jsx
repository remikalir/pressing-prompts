// ─── TopicIcon ───
// One component renders the right SVG icon for any topic, given its id.
// All eleven icons designed in Sprint 3 (visual identity) as part of the
// Muth-inspired register: filled silhouettes (with the lone exception of
// the Thinking spiral, which is a single stroked gesture) on a 100×100
// viewBox so they hold their character from 14px through 64px+.
//
// Icons consume `currentColor` for both fill and stroke, so the consumer
// controls color via the `color` prop. Default fill on the <svg> means
// child paths inherit fill="currentColor" automatically; paths that need
// stroke instead (only the spiral) override with fill="none".
//
// API:
//   <TopicIcon id="bias" size={22} color="white" opacity={0.7} />
//
// All props are optional except `id`. If `id` doesn't match a registered
// topic, the component renders nothing.

import React from "react";

const ICON_PATHS = {
  // Self & Society — closed bud became fork-in-path; rotated 180° so
  // the single trunk descends from above and divides into two branches
  // below — a decision tree from the top.
  need: (
    <g transform="rotate(180 50 50)">
      <path d="M44 80 L44 56 L22 28 Q18 23 23 20 Q28 17 32 21 L50 44 L68 21 Q72 17 77 20 Q82 23 78 28 L56 56 L56 80 Z" />
    </g>
  ),

  // Trust & Truth — arch bridge with three water-ripple marks below
  // disambiguating it from a tunnel or doorway.
  trust: (
    <>
      <path fillRule="evenodd" d="M14 38 L86 38 L86 58 L14 58 Z M22 58 Q22 42 50 42 Q78 42 78 58 Z" />
      <rect x="16" y="70" width="22" height="3" rx="1.5" />
      <rect x="42" y="70" width="16" height="3" rx="1.5" />
      <rect x="62" y="70" width="22" height="3" rx="1.5" />
    </>
  ),

  // Trust & Truth — asymmetric balance scale with the heavier left pan.
  bias: (
    <>
      <path d="M13 37 Q35 33 50 35 Q70 37 87 42 Q88 44 87 47 Q70 42 50 41 Q35 40 14 44 Q12 42 13 37 Z" />
      <path d="M46 19 Q50 19 54 20 L53 39 Q50 41 47 39 Z" />
      <rect x="17" y="42" width="6" height="14" rx="1" />
      <rect x="77" y="44" width="6" height="11" rx="1" />
      <path d="M9 58 Q15 64 26 61 Q32 59 30 55 Q22 51 14 54 Q9 56 9 58 Z" />
      <path d="M72 56 Q77 60 86 57 Q90 55 87 51 Q81 48 75 50 Q71 53 72 56 Z" />
      <path d="M40 40 Q50 39 60 40 Q56 49 50 58 Q43 49 40 40 Z" />
    </>
  ),

  // Self & Society — single inward spiral, the lone stroke-based icon
  // in the set; gestural by nature, captures the recursive turn of
  // thought turning on itself.
  thinking: (
    <path
      d="M50 14 Q72 14 80 36 Q84 56 70 70 Q56 82 40 78 Q24 72 22 56 Q22 44 32 38 Q44 34 52 42 Q60 50 56 60 Q50 68 42 64 Q36 60 38 54"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
  ),

  // Power & Access — single leaf with a vertical stem; the simplest of
  // natural objects, what grows and what costs.
  sustainable: (
    <>
      <path d="M48 60 Q50 70 50 84 L52 84 Q52 70 51 60 Z" />
      <path d="M50 62 Q35 55 24 40 Q20 24 35 20 Q52 20 64 32 Q72 46 65 58 Q58 64 50 62 Z" />
    </>
  ),

  // Power & Access — three stacked blocks; the most geometric icon,
  // chosen as the deliberate counterpoint to the more organic forms.
  builds: (
    <>
      <rect x="20" y="64" width="60" height="18" rx="2" />
      <rect x="28" y="42" width="46" height="18" rx="2" />
      <rect x="22" y="20" width="36" height="18" rx="2" />
    </>
  ),

  // Power & Access — key with refined organic bow. The bow is slightly
  // egg-shaped (not a perfect ellipse) and the bit has three teeth of
  // varying lengths; reads as hand-cast rather than machined.
  benefits: (
    <path
      fillRule="evenodd"
      d="M16 48 Q16 32 30 30 Q46 30 48 46 Q50 50 56 50 L86 50 L86 58 L80 58 L80 64 L74 64 L74 58 L68 58 L68 64 L62 64 L62 58 L56 58 Q50 58 48 62 Q46 76 30 76 Q16 74 16 58 Q15 53 16 48 Z M28 42 Q26 50 28 58 Q34 60 36 53 Q38 46 36 42 Q32 40 28 42 Z"
    />
  ),

  // Trust & Truth — directional megaphone with three sound dots radiating
  // outward; broadcasting from a single source.
  disinfo: (
    <>
      <path d="M16 38 Q12 50 16 62 L46 68 L74 78 L74 22 L46 32 Z" />
      <circle cx="82" cy="38" r="3" />
      <circle cx="86" cy="50" r="3.5" />
      <circle cx="82" cy="62" r="3" />
    </>
  ),

  // Power & Access — open book (V-shaped, spine dipping toward the
  // middle) with three pages floating up and away. "Pages being taken
  // from training data."
  theft: (
    <>
      <path d="M22 48 L48 58 L52 58 L78 48 L78 70 L52 78 L48 78 L22 70 Z" />
      <g transform="rotate(-25 30 28)">
        <rect x="22" y="18" width="14" height="20" rx="1" />
      </g>
      <g transform="rotate(12 56 14)">
        <rect x="48" y="6" width="14" height="18" rx="1" />
      </g>
      <g transform="rotate(-8 76 30)">
        <rect x="68" y="22" width="12" height="14" rx="1" />
      </g>
    </>
  ),

  // Self & Society — open eye with a clear pupil; the watching iris.
  // The negative-space ring around the pupil is carved using fill-rule
  // evenodd so the icon works on any background.
  spy: (
    <>
      <path
        fillRule="evenodd"
        d="M14 50 Q30 28 50 28 Q70 28 86 50 Q70 72 50 72 Q30 72 14 50 Z M28 50 Q40 38 50 38 Q60 38 72 50 Q60 62 50 62 Q40 62 30 50 Z"
      />
      <circle cx="50" cy="50" r="5" />
    </>
  ),

  // Self & Society — bird in profile on no perch; head bump on the left
  // with triangular beak, body with a folded-wing detail carved as
  // negative space (fill-rule evenodd), tail flare on the right.
  friend: (
    <>
      <path
        fillRule="evenodd"
        d="M28 44 Q28 32 40 28 Q56 24 68 34 Q76 44 70 54 Q60 60 44 60 Q30 58 28 44 Z M42 38 Q54 35 62 42 Q60 50 52 51 Q44 49 40 44 Q39 40 42 38 Z"
      />
      <path d="M28 42 L14 44 L28 48 Z" />
      <path d="M68 48 L86 40 L84 54 L70 56 Z" />
    </>
  ),
};

export function TopicIcon({ id, size = 24, color = "currentColor", opacity = 1, style, ...rest }) {
  const paths = ICON_PATHS[id];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      style={{ color, opacity, display: "block", flexShrink: 0, ...style }}
      {...rest}
    >
      {paths}
    </svg>
  );
}

export default TopicIcon;
