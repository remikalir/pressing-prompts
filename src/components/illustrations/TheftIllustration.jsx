// ─── Illustration for "Is AI Theft?" ───
// Atmospheric Muth-register scene: an open book in V-shape sits in
// the lower foreground; six pages drift up and away into atmospheric
// distance, fading and tumbling at varied rotations. One page caught
// mid-air at the scene's center is the lone narrative anchor — in
// saturated antique gold, brighter than the rest. The page that's
// gone is the one we can still see, before it joins the others in
// dispersal.
//
// Echoes the topic icon (open book + drifting pages) at scene scale.
// Locked in Sprint 3 as part of the Power & Access cluster's first
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `theft-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function TheftIllustration({ size = 72, colors }) {
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
        <filter id="theft-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="theft-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — antique gold washes top and bottom */}
      <ellipse cx="50" cy="25" rx="70" ry="30" fill={c.light} opacity="0.7" filter="url(#theft-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#theft-wash-heavy)" />
      <ellipse cx="50" cy="67.5" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#theft-wash-medium)" />

      {/* Cast shadow under the book */}
      <ellipse cx="50" cy="81" rx="21" ry="2" fill={c.dark} opacity="0.32" filter="url(#theft-wash-medium)" />

      {/* Open book — V-shape pages, single wrapping cover */}
      {/* Cover (single piece wrapping under both halves) */}
      <path
        d="M26 75 Q29 79 37.5 79 Q50 79 62.5 79 Q71 79 74 75 L71 77 Q62.5 78 50 78 Q37.5 78 29 77 Z"
        fill={c.dark}
        opacity="0.85"
      />
      {/* Left page surface (V-dipping toward center spine) */}
      <path
        d="M26 75 Q35 69 48 72 L50 76 L26 75 Z"
        fill={c.light}
        opacity="0.95"
        stroke={c.dark}
        strokeWidth="0.25"
        strokeLinejoin="round"
      />
      {/* Right page surface (V-dipping toward center spine) */}
      <path
        d="M74 75 Q65 69 52 72 L50 76 L74 75 Z"
        fill={c.light}
        opacity="0.95"
        stroke={c.dark}
        strokeWidth="0.25"
        strokeLinejoin="round"
      />
      {/* Spine line */}
      <path d="M50 76 L50 72" stroke={c.dark} strokeWidth="0.35" opacity="0.5" />

      {/* Text/lines on pages */}
      <path d="M31 72 Q36 71 43 72" stroke={c.dark} strokeWidth="0.2" fill="none" opacity="0.45" />
      <path d="M31 73.5 Q36 72.5 42 73.5" stroke={c.dark} strokeWidth="0.18" fill="none" opacity="0.4" />
      <path d="M57 72 Q62 71 69 72" stroke={c.dark} strokeWidth="0.2" fill="none" opacity="0.45" />
      <path d="M57 73.5 Q62 72.5 68 73.5" stroke={c.dark} strokeWidth="0.18" fill="none" opacity="0.4" />

      {/* Drifting companion pages — six pages tumbling at varied rotations and depths.
          All visible at higher opacity floor, surrounding the bright narrative anchor. */}

      {/* Page 1 — foreground, just lifted off, low rotation */}
      <g transform="translate(35 61) rotate(-12)">
        <path d="M-3.5 -4 L3.5 -4 L3.5 4 L-3.5 4 Z" fill={c.light} opacity="0.92" stroke={c.dark} strokeWidth="0.2" />
        <path d="M-2 -1.5 Q0 -2 2 -1.5" stroke={c.dark} strokeWidth="0.18" fill="none" opacity="0.4" />
        <path d="M-2 0 Q0 -0.5 2 0" stroke={c.dark} strokeWidth="0.15" fill="none" opacity="0.35" />
      </g>

      {/* Page 2 — middle right, rotated more */}
      <g transform="translate(67.5 50) rotate(28)">
        <path d="M-3.5 -4 L3.5 -4 L3.5 4 L-3.5 4 Z" fill={c.light} opacity="0.85" stroke={c.dark} strokeWidth="0.2" />
        <path d="M-2 -1.5 Q0 -2 2 -1.5" stroke={c.dark} strokeWidth="0.15" fill="none" opacity="0.35" />
      </g>

      {/* Page 3 — THE narrative anchor: bright saturated page, mid-air center */}
      <g transform="translate(50 39) rotate(-18)">
        <path d="M-4 -4.5 L4 -4.5 L4 4.5 L-4 4.5 Z" fill={c.main} opacity="0.95" />
        <path d="M-2.5 -2 Q0 -2.5 2.5 -2" stroke={c.dark} strokeWidth="0.25" fill="none" opacity="0.55" />
        <path d="M-2.5 -0.5 Q0 -1 2.5 -0.5" stroke={c.dark} strokeWidth="0.22" fill="none" opacity="0.5" />
        <path d="M-2.5 1 Q0 0.5 2 1" stroke={c.dark} strokeWidth="0.2" fill="none" opacity="0.45" />
        <path d="M-2.5 2.5 Q0 2 2 2.5" stroke={c.dark} strokeWidth="0.18" fill="none" opacity="0.4" />
      </g>

      {/* Page 4 — middle left, rotated heavily */}
      <g transform="translate(27.5 35) rotate(-35)">
        <path d="M-3 -3.5 L3 -3.5 L3 3.5 L-3 3.5 Z" fill={c.light} opacity="0.78" stroke={c.dark} strokeWidth="0.2" />
        <path d="M-1.5 -1 Q0 -1.5 1.5 -1" stroke={c.dark} strokeWidth="0.15" fill="none" opacity="0.32" />
      </g>

      {/* Page 5 — distant upper right */}
      <g transform="translate(75 27.5) rotate(15)">
        <path d="M-2.5 -3 L2.5 -3 L2.5 3 L-2.5 3 Z" fill={c.light} opacity="0.7" stroke={c.dark} strokeWidth="0.18" />
        <path d="M-1.5 -1 Q0 -1.5 1.5 -1" stroke={c.dark} strokeWidth="0.12" fill="none" opacity="0.28" />
      </g>

      {/* Page 6 — most distant, upper left */}
      <g transform="translate(20 19) rotate(-22)">
        <path d="M-2 -2.5 L2 -2.5 L2 2.5 L-2 2.5 Z" fill={c.light} opacity="0.62" stroke={c.dark} strokeWidth="0.15" />
      </g>

      {/* Atmospheric specks */}
      <circle cx="85" cy="20" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="50" r="0.25" fill={c.dark} opacity="0.15" />
      <circle cx="10" cy="50" r="0.3" fill={c.dark} opacity="0.13" />
      <circle cx="10" cy="27.5" r="0.25" fill={c.dark} opacity="0.14" />
    </svg>
  );
}
