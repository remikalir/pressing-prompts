// ─── Illustration for "Do We Need AI?" ───
// Atmospheric Muth-register scene: a path approaches the viewer from
// the foreground, forks at a small clearing, and two routes diverge
// into the distance. A single small figure walks up the foreground
// stretch toward the divergence — saturated clay-rose, the lone
// narrative anchor. The scene reads as: we are about to choose, and
// we are doing it alone.
//
// Path edges use stacked-stroke weights (thick primary + thin secondary
// pass slightly offset) for hand-painted brush quality matching Spy's
// eye and Friend's branch elsewhere in the cluster.
//
// Locked in Sprint 3 as part of the Self & Society cluster's complete
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `need-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function NeedAIIllustration({ size = 72, colors }) {
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
        <filter id="need-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="need-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — clay-rose washes top and bottom */}
      <ellipse cx="50" cy="25" rx="70" ry="30" fill={c.light} opacity="0.7" filter="url(#need-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#need-wash-heavy)" />
      <ellipse cx="50" cy="67.5" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#need-wash-medium)" />

      {/* Distant ground hills */}
      <path
        d="M0 65 Q20 61 45 63 Q70 65 100 62 L100 75 L0 75 Z"
        fill={c.main}
        opacity="0.18"
        filter="url(#need-wash-medium)"
      />

      {/* Foreground approach path — widens toward viewer, narrows toward fork at (50, 76) */}
      <path
        d="M41 100 Q43 92.5 46 85 Q47.5 79 49 76 Q51 76 52.5 79 Q54.5 85 56.5 92.5 Q58.5 100 60 100 Z"
        fill={c.mid}
        opacity="0.65"
        filter="url(#need-wash-medium)"
      />
      {/* Approach path edges — primary thick + secondary thin pass */}
      <path
        d="M41 100 Q43 92 46 85 Q48 79.5 49.5 76"
        stroke={c.dark}
        strokeWidth="0.85"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M41.5 99 Q43.5 92 46.5 85.5 Q48.5 80 49.75 76.5"
        stroke={c.dark}
        strokeWidth="0.3"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      <path
        d="M60 100 Q58.5 92 56.5 85 Q54 79.5 52.5 76"
        stroke={c.dark}
        strokeWidth="0.9"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M59.5 99 Q58 92 56 85.5 Q53.5 80 52.25 76.5"
        stroke={c.dark}
        strokeWidth="0.275"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Left fork — heads up and to the left, irregular curving path */}
      <path
        d="M48.5 76 Q44 69 39 62 Q33 55 27 50 Q22 46 18 44 Q17 43.5 17.5 45 Q20 47.5 25 51 Q31 56 36.5 62 Q42 69 45.5 76 Z"
        fill={c.mid}
        opacity="0.55"
        filter="url(#need-wash-medium)"
      />
      {/* Left fork edges — primary + secondary */}
      <path
        d="M48.5 76 Q44 68.5 38 61 Q31 53 24 48 Q20 45.5 17.5 44.5"
        stroke={c.dark}
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M48.75 76.5 Q44.25 69 38.25 61.5 Q31.25 53.5 24.25 48.25 Q20.25 45.75 17.75 44.75"
        stroke={c.dark}
        strokeWidth="0.25"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M45.5 76 Q41 69 35 63 Q29 58 23.5 54 Q20.5 52 18.5 51"
        stroke={c.dark}
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M45.5 76.5 Q41 69.5 35.25 63.5 Q29.25 58.5 23.75 54.5"
        stroke={c.dark}
        strokeWidth="0.2"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* Right fork — heads up and to the right */}
      <path
        d="M51.5 76 Q56 69 61 62 Q67 55 73 50 Q78 46 82 44 Q83 43.5 82.5 45 Q80 47.5 75 51 Q69 56 63.5 62 Q58 69 54.5 76 Z"
        fill={c.mid}
        opacity="0.55"
        filter="url(#need-wash-medium)"
      />
      {/* Right fork edges — primary + secondary */}
      <path
        d="M51.5 76 Q56 68.5 62 61 Q69 53 76 48 Q80 45.5 82.5 44.5"
        stroke={c.dark}
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M51.25 76.5 Q55.75 69 61.75 61.5 Q68.75 53.5 75.75 48.25 Q79.75 45.75 82.25 44.75"
        stroke={c.dark}
        strokeWidth="0.25"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M54.5 76 Q59 69 65 63 Q71 58 76.5 54 Q79.5 52 81.5 51"
        stroke={c.dark}
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M54.5 76.5 Q59 69.5 64.75 63.5 Q70.75 58.5 76.25 54.5"
        stroke={c.dark}
        strokeWidth="0.2"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* Decision marker at the fork */}
      <ellipse cx="50" cy="74" rx="2.5" ry="2" fill={c.dark} opacity="0.45" filter="url(#need-wash-medium)" />

      {/* Cast shadow under the figure */}
      <ellipse cx="50" cy="95" rx="3" ry="0.6" fill={c.dark} opacity="0.4" filter="url(#need-wash-medium)" />

      {/* The figure — small, walking up the foreground path, facing the fork.
          Saturated clay-rose narrative anchor. */}
      <path
        d="M48.5 82.5 Q49 80.5 50 80.5 Q51.25 80.5 51.5 82 Q51.5 83.5 50.5 83.75 Q49.25 83.5 48.5 82.5 Z"
        fill={c.main}
        opacity="0.92"
      />
      <path
        d="M47.5 83.75 Q47 89 47.5 94 Q47.5 95.5 49.5 95.5 L51 95.5 Q52.5 94 52.5 92 Q53 89 52.5 83.75 Q51.5 84 50 84 Q49 84 47.5 83.75 Z"
        fill={c.main}
        opacity="0.92"
      />
      {/* Mid-stride leg suggestion */}
      <path d="M48.5 95.5 Q48.25 98 49 98 L49.5 98 Q49.75 96 49.5 95.5 Z" fill={c.main} opacity="0.85" />
      <path d="M50.5 95.5 Q50.75 97.5 50.25 98 L50 98 Q50.5 96 50.25 95.5 Z" fill={c.main} opacity="0.7" />

      {/* Atmospheric specks */}
      <circle cx="20" cy="17.5" r="0.45" fill={c.dark} opacity="0.16" />
      <circle cx="80" cy="20" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="40" r="0.25" fill={c.dark} opacity="0.13" />
      <circle cx="15" cy="40" r="0.3" fill={c.dark} opacity="0.15" />
    </svg>
  );
}
