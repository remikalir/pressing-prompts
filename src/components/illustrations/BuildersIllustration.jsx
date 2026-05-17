// ─── Illustration for "Who Builds Our AI?" ───
// Atmospheric Muth-register scene: a cairn of five stacked stones in
// soft mist, each slightly irregular and offset from perfect alignment.
// The topmost stone — saturated mid-slate, tilted 8° — is the lone
// narrative anchor: a stack built by hands we don't see, balance
// precarious, the most-recent contribution catching what light there is.
//
// Cairns are made by many hands across time; we encounter them as
// trail markers without ever seeing the builders. That layered,
// invisible-labor metaphor is the topic's question.
//
// Locked in Sprint 3 as part of the Power & Access cluster's first
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `builds-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function BuildersIllustration({ size = 72, colors }) {
  const c = colors;
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
        <filter id="builds-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="builds-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="builds-wash-mist" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Atmospheric ground — slate washes top and bottom */}
      <ellipse cx="50" cy="20" rx="70" ry="27.5" fill={c.light} opacity="0.8" filter="url(#builds-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#builds-wash-heavy)" />

      {/* Mist around the cairn — heavy blur, multiple overlapping ellipses */}
      <ellipse cx="50" cy="62.5" rx="60" ry="10" fill={c.light} opacity="0.6" filter="url(#builds-wash-mist)" />
      <ellipse cx="30" cy="65" rx="20" ry="6" fill={c.light} opacity="0.5" filter="url(#builds-wash-mist)" />
      <ellipse cx="70" cy="65" rx="20" ry="6" fill={c.light} opacity="0.5" filter="url(#builds-wash-mist)" />

      {/* Distant ground */}
      <path
        d="M0 72.5 Q25 69 50 70 Q75 71 100 69 L100 80 L0 80 Z"
        fill={c.dark}
        opacity="0.18"
        filter="url(#builds-wash-medium)"
      />

      {/* Cast shadow at the cairn base */}
      <ellipse cx="50" cy="79" rx="16" ry="2" fill={c.dark} opacity="0.34" filter="url(#builds-wash-medium)" />

      {/* The cairn — five stacked stones, each irregular, varying widths and heights.
          Wider at base, narrower up. Each stone slightly offset from perfect alignment. */}
      {/* Base stone — widest, slightly tilted */}
      <path
        d="M38 76 Q39 72 43 71 Q51 70 59 71 Q63 72 62 76 Q60 78 50 78 Q40 78 38 76 Z"
        fill={c.main}
        opacity="0.85"
      />
      {/* Stone 2 */}
      <path
        d="M41 71 Q42.5 67 46 66 Q52 65.5 58 66.5 Q60.5 67 59.5 70.5 Q58 72 50 72 Q43 72 41 71 Z"
        fill={c.main}
        opacity="0.82"
      />
      {/* Stone 3 */}
      <path
        d="M43 65.5 Q44 61.5 48 61 Q54 60.5 57 61.5 Q58 62 57 65 Q55 66 50 66 Q45 66 43 65.5 Z"
        fill={c.main}
        opacity="0.8"
      />
      {/* Stone 4 */}
      <path
        d="M45.5 61 Q46.5 58 49 57.5 Q53 57 55 58 Q56 58.5 55 60.5 Q53 61 50 61 Q46.5 61 45.5 61 Z"
        fill={c.main}
        opacity="0.78"
      />

      {/* Topmost stone — saturated, off-balance to the right. The narrative anchor. */}
      <g transform="rotate(8 51 55)">
        <path
          d="M47 56.5 Q48 53 51 52.5 Q54 52 55 55 Q55 56.5 51 57 Q47.5 57 47 56.5 Z"
          fill={c.mid}
          opacity="0.95"
        />
        <path
          d="M48.5 54 Q49.5 53 51 53"
          stroke={c.light}
          strokeWidth="0.4"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>

      {/* Subtle texture lines on the stones — irregular, hand-drawn */}
      <path
        d="M41 74 Q46 74.5 51 74.5"
        stroke={c.dark}
        strokeWidth="0.2"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M44 68.5 Q49 69 55 68.5"
        stroke={c.dark}
        strokeWidth="0.18"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M46 63.5 Q50 64 54 63.5"
        stroke={c.dark}
        strokeWidth="0.15"
        fill="none"
        opacity="0.28"
        strokeLinecap="round"
      />

      {/* Atmospheric specks */}
      <circle cx="17.5" cy="20" r="0.45" fill={c.dark} opacity="0.16" />
      <circle cx="82.5" cy="19" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="40" r="0.25" fill={c.dark} opacity="0.12" />
      <circle cx="10" cy="45" r="0.35" fill={c.dark} opacity="0.15" />
      <circle cx="80" cy="30" r="0.25" fill={c.dark} opacity="0.13" />
    </svg>
  );
}
