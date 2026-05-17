// ─── Illustration for "Is AI Biased?" ───
// Atmospheric Muth-register scene: an asymmetric scale standing in soft
// watercolor wash, the heavy left pan pulled down by a single sienna
// stone, the empty right pan rising. Hand-drawn imperfections in beam
// taper, post curve, pan rims, chain pairs, and stone contour give the
// scene the feel of paint on paper rather than vector geometry.
//
// This is the prototype-locked Sprint 3 illustration formula. The other
// ten illustrations in the system follow the same structural recipe —
// see docs/ILLUSTRATIONS.md for the formula and propagation notes.
//
// Off-palette note: the stone uses literal sienna values (#A55B36 main
// with #D4A48C highlight) rather than `c.mid` because Bias's mid is a
// pale sage (#98C2A4) that doesn't carry the saturated-narrative-anchor
// role. The sienna is the Trust topic's main color, already present in
// the system. This is the second illustration with an off-palette
// value (Benefits is the first, with its custom figure tone). Both
// exceptions are minimal and intentional — see the broader rationale
// in docs/ILLUSTRATIONS.md.
//
// Filter IDs are prefixed with `bias-` to avoid collision when multiple
// illustrations render on the same page (e.g., the homepage cluster
// rows). Every illustration in this folder uses topic-prefixed IDs.
//
// All path coordinates are on a 100×100 viewBox; the prototype was
// drafted at 200×200 and scaled down by 0.5 for codebase consistency
// with the existing Illustration component contract (size + colors).

export default function BiasIllustration({ size = 72, colors }) {
  const c = colors;
  // Off-palette stone color — sienna saturated against sage atmospheric
  // ground. See header comment for rationale.
  const stoneColor = "#A55B36";
  const stoneHighlight = "#D4A48C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="bias-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="bias-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — top wash lighter, bottom wash slightly warmer */}
      <ellipse cx="50" cy="30" rx="60" ry="25" fill={c.light} opacity="0.7" filter="url(#bias-wash-heavy)" />
      <ellipse cx="50" cy="90" rx="70" ry="20" fill={c.main} opacity="0.18" filter="url(#bias-wash-heavy)" />
      <ellipse cx="50" cy="67.5" rx="60" ry="3" fill={c.main} opacity="0.12" filter="url(#bias-wash-medium)" />

      {/* Cast shadows — deeper under the heavy (left) pan, lighter under the empty (right) pan */}
      <ellipse cx="28" cy="74" rx="18" ry="3.5" fill={c.dark} opacity="0.34" filter="url(#bias-wash-medium)" />
      <ellipse cx="73" cy="65" rx="10" ry="1.25" fill={c.dark} opacity="0.12" filter="url(#bias-wash-medium)" />

      {/* Post — slight S-curve, ~1px off-center, tapered foot */}
      <path
        d="M49.75 25 Q49.4 35 50 45 Q50.6 55 50.15 66 Q51 66.5 50.25 67 Q49.5 66.5 49.25 66 Q48.75 55 49.4 45 Q50 35 49.35 25 Q49.5 24.5 49.75 25 Z"
        fill={c.dark}
        opacity="0.7"
      />

      {/* Beam — uneven taper, slimmer at the middle, fuller at the ends, top and bottom edges
          subtly out of parallel; tilted heavy-end-down with the empty end rising */}
      <path
        d="M18.5 45.5 Q28 44.5 36 43.5 Q43 42.5 50 41.5 Q58 40.5 67 38.5 Q75 37 81.5 35.5 Q82.75 35.25 82.5 36.5 Q82 37 81 36.75 Q75 38 67 39.5 Q58 41.5 50 42.5 Q43 43.5 36 44.5 Q28 45.5 19 47 Q17.75 47.25 17.5 46.25 Q17.75 45.75 18.5 45.5 Z"
        fill={c.dark}
        opacity="0.78"
      />

      {/* Fulcrum — slightly asymmetric triangle */}
      <path
        d="M46.5 40 L53.5 40 Q54 40.5 52.5 42 Q51 43.5 50 44 Q48.5 43 47.5 41.5 Q46 40.5 46.5 40 Z"
        fill={c.dark}
        opacity="0.85"
      />

      {/* Left chains — varied stroke widths and curves so the pair doesn't read as a CAD duplicate */}
      <path
        d="M22 47.5 Q21.25 55 23 60.5"
        stroke={c.dark}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M26 48 Q27 54.5 24.75 60.5"
        stroke={c.dark}
        strokeWidth="0.55"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Right chains — thinner overall (less weight to support), pair varied */}
      <path
        d="M78 35.5 Q78 39 79 42.5"
        stroke={c.dark}
        strokeWidth="0.52"
        fill="none"
        opacity="0.42"
        strokeLinecap="round"
      />
      <path
        d="M82 35.25 Q81.5 39 81.25 42.5"
        stroke={c.dark}
        strokeWidth="0.42"
        fill="none"
        opacity="0.38"
        strokeLinecap="round"
      />

      {/* Heavy pan (left, lower) — wonky rim, asymmetric bowl */}
      <path
        d="M13.5 61 Q15.5 67 20.5 69 Q26 70 31 69 Q36 67.5 38.25 62 Q36.5 60.75 32.5 60.25 Q26 59.75 18 60.25 Q15.5 60.5 14 60.75 Q13.25 60.85 13.5 61 Z"
        fill={c.dark}
        opacity="0.7"
      />
      <path
        d="M13.5 61 Q15.5 67 20.5 69 Q26 70 31 69 Q36 67.5 38.25 62"
        stroke={c.dark}
        strokeWidth="0.75"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* Light pan (right, higher) — even more irregular, thinner, less presence */}
      <path
        d="M70.5 43 Q72 46.5 75.5 47.75 Q80 48.5 84 47.5 Q87 46.5 88.25 43.75 Q87 42.75 84.5 42.5 Q78.5 42.25 73.5 42.6 Q71.5 42.75 70.5 43 Z"
        fill={c.main}
        opacity="0.45"
      />
      <path
        d="M70.5 43 Q72 46.5 75.5 47.75 Q80 48.5 84 47.5 Q87 46.5 88.25 43.75"
        stroke={c.main}
        strokeWidth="0.58"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Stone — irregular contour with a soft warm highlight; the lone saturated accent
          in the scene, matching Muth's "single red kite" technique. Off-palette sienna
          (see header comment) carries the role that c.mid can't because Bias's mid is sage. */}
      <path
        d="M20 59.5 Q21.5 58 24.5 58 Q28 58 30 59 Q31 60.5 30 62 Q28 63.5 24.5 63.5 Q21.5 63.5 20.5 62 Q19.5 60.5 20 59.5 Z"
        fill={stoneColor}
        opacity="0.95"
      />
      <path
        d="M22 58.5 Q23 58 24.5 58.25 Q25.5 58.5 25 59 Q23.5 59.25 22.5 59 Q21.5 58.75 22 58.5 Z"
        fill={stoneHighlight}
        opacity="0.7"
      />

      {/* Atmospheric specks — dust in light */}
      <circle cx="19" cy="20" r="0.6" fill={c.dark} opacity="0.18" />
      <circle cx="85" cy="22" r="0.45" fill={c.dark} opacity="0.14" />
      <circle cx="80" cy="29" r="0.35" fill={c.dark} opacity="0.12" />
      <circle cx="25" cy="24" r="0.4" fill={c.dark} opacity="0.16" />
    </svg>
  );
}
