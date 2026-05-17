// ─── Illustration for "Is AI Sustainable?" ───
// Atmospheric Muth-register scene: a single tree standing in soft
// watercolor ground, its irregular canopy layered as overlapping
// translucent ellipses suggesting foliage rather than a single mass.
// At the trunk's base, a single fallen leaf in saturated forest green
// — the lone narrative anchor: what's already lost, what falls away
// when systems consume more than they replenish.
//
// Locked in Sprint 3 as part of the Power & Access cluster's first
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `sustainable-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function SustainabilityIllustration({ size = 72, colors }) {
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
        <filter id="sustainable-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="sustainable-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — soft sage washes top and bottom */}
      <ellipse cx="50" cy="25" rx="70" ry="30" fill={c.light} opacity="0.7" filter="url(#sustainable-wash-heavy)" />
      <ellipse cx="50" cy="80" rx="75" ry="17.5" fill={c.main} opacity="0.18" filter="url(#sustainable-wash-heavy)" />
      <ellipse cx="50" cy="67.5" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#sustainable-wash-medium)" />

      {/* Distant ground hills — very faint */}
      <path
        d="M0 65 Q20 61 40 63 Q70 66 100 61 L100 72.5 L0 72.5 Z"
        fill={c.main}
        opacity="0.18"
        filter="url(#sustainable-wash-medium)"
      />

      {/* Cast shadow under the tree */}
      <ellipse cx="40" cy="71" rx="11" ry="1.5" fill={c.dark} opacity="0.32" filter="url(#sustainable-wash-medium)" />

      {/* Tree trunk — irregular, slight S-curve, tapered up */}
      <path
        d="M38.5 69 Q38 60 39 50 Q39.5 40 39 30 Q38.5 28 40.5 28 Q41.5 30 41 40 Q41.5 50 40.75 60 Q40.5 69 39.5 70 Q38.5 70 38.5 69 Z"
        fill={c.dark}
        opacity="0.78"
      />

      {/* Tree canopy — irregular cloud-like form, layered translucent shapes */}
      <ellipse cx="40" cy="30" rx="16" ry="11" fill={c.main} opacity="0.55" filter="url(#sustainable-wash-medium)" />
      <ellipse cx="34" cy="27.5" rx="9" ry="7" fill={c.main} opacity="0.5" filter="url(#sustainable-wash-medium)" />
      <ellipse cx="46" cy="29" rx="10" ry="7.5" fill={c.main} opacity="0.55" filter="url(#sustainable-wash-medium)" />
      <ellipse cx="40" cy="24" rx="11" ry="6" fill={c.dark} opacity="0.4" filter="url(#sustainable-wash-medium)" />
      <ellipse cx="37" cy="34" rx="7" ry="5" fill={c.dark} opacity="0.35" filter="url(#sustainable-wash-medium)" />

      {/* Branches peeking through canopy — irregular, hand-drawn */}
      <path d="M39 39 Q36 37 32 36" stroke={c.dark} strokeWidth="0.4" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M40 35 Q44 33 48 33" stroke={c.dark} strokeWidth="0.35" fill="none" opacity="0.35" strokeLinecap="round" />

      {/* The fallen leaf — narrative anchor, saturated forest green at trunk base */}
      <g transform="translate(49 69) rotate(-25)">
        <path d="M0 0 Q3 -2 6 -1 Q7 1 5 3 Q2 4 0 2 Q-1 1 0 0 Z" fill={c.main} opacity="0.92" />
        <path d="M1 0 Q3 0.5 5 1.5" stroke={c.dark} strokeWidth="0.25" fill="none" opacity="0.5" strokeLinecap="round" />
      </g>

      {/* Atmospheric specks — drifting motes */}
      <circle cx="20" cy="17.5" r="0.5" fill={c.dark} opacity="0.18" />
      <circle cx="80" cy="15" r="0.3" fill={c.dark} opacity="0.14" />
      <circle cx="85" cy="50" r="0.25" fill={c.dark} opacity="0.13" />
      <circle cx="15" cy="40" r="0.35" fill={c.dark} opacity="0.16" />
      <circle cx="67.5" cy="21" r="0.25" fill={c.dark} opacity="0.12" />
    </svg>
  );
}
