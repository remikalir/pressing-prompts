// ─── Illustration for "Is AI a Spy?" ───
// Atmospheric Muth-register scene: a large irregular eye-shape painted
// in stacked brushy strokes dominates the frame. Inside the eye, six
// small figures cluster slightly off-center — a small crowd being
// surveilled. One figure (left of center) is in saturated dusty
// violet — the lone narrative anchor. The others are in dark violet,
// soft tones.
//
// The viewer reads the scene as both *looking through the eye* and
// *being inside it*. The doubled position is exactly the topic's
// question: who is watching, and who is being watched, and where is
// the line between the two? Surveillance is collective.
//
// The eye boundary uses three stacked strokes at varied thicknesses
// (3.5 / 2.8 / 1.6 in the design viewBox, scaled to 100×100) plus
// reinforcement passes — the same brushy-stacked technique that gives
// it a hand-painted quality.
//
// Locked in Sprint 3 as part of the Self & Society cluster's complete
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `spy-` to avoid collision when multiple
// illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function SpyIllustration({ size = 72, colors }) {
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
        <filter id="spy-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="spy-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — dusty violet washes */}
      <ellipse cx="50" cy="25" rx="70" ry="30" fill={c.light} opacity="0.7" filter="url(#spy-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#spy-wash-heavy)" />

      {/* Inner wash inside where the eye sits — lighter, like being lit from within */}
      <ellipse cx="50" cy="52.5" rx="34" ry="31" fill={c.light} opacity="0.7" filter="url(#spy-wash-heavy)" />

      {/* THE GREAT EYE — three stacked strokes of varying thickness */}
      <path
        d="M15 52.5 Q20 25 50 21 Q80 24 85 51 Q82.5 79 50 84 Q17.5 81 15 52.5 Z"
        fill="none"
        stroke={c.dark}
        strokeWidth="1.75"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M16 50 Q21 26 51 22 Q79 25 84 50 Q82 77 50 82 Q19 79 16 50"
        fill="none"
        stroke={c.dark}
        strokeWidth="1.4"
        opacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M17 52.5 Q22 28 51 24 Q78 27 83 52 Q81 76 50 80 Q20 77 17 52.5"
        fill="none"
        stroke={c.dark}
        strokeWidth="0.8"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Reinforcement strokes — additional brushy passes in places */}
      <path d="M30 25 Q40 22 50 21.5" stroke={c.dark} strokeWidth="0.6" fill="none" opacity="0.45" strokeLinecap="round" />
      <path d="M70 28 Q77.5 35 81 45" stroke={c.dark} strokeWidth="0.7" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M25 65 Q20 57.5 18 50" stroke={c.dark} strokeWidth="0.5" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M75 75 Q65 79 55 81" stroke={c.dark} strokeWidth="0.55" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* CROWD INSIDE THE EYE — six small figures positioned within the iris.
          Scaled down to fit the 100×100 viewBox; each figure ~6px tall. */}

      {/* Figure 1: left, slightly back (smaller) */}
      <g transform="translate(35 65)">
        <path
          d="M-1 -4 Q-0.75 -5 0 -5 Q0.75 -5 1 -4 Q0.75 -3.25 0 -3.25 Q-0.75 -3.25 -1 -4 Z"
          fill={c.dark}
          opacity="0.85"
        />
        <path
          d="M-1.5 -3.25 Q-1.75 0 -1.5 3 L1.5 3 Q1.75 0 1.5 -3.25 Q0.75 -3 0 -3 Q-0.75 -3 -1.5 -3.25 Z"
          fill={c.dark}
          opacity="0.85"
        />
      </g>

      {/* Figure 2: center-left — narrative anchor in saturated dusty violet */}
      <g transform="translate(43 62)">
        <path
          d="M-1.25 -5 Q-1 -6.25 0 -6.25 Q1 -6.25 1.25 -5 Q1 -4 0 -4 Q-1 -4 -1.25 -5 Z"
          fill={c.main}
          opacity="0.95"
        />
        <path
          d="M-2 -4 Q-2.25 0 -2 4 L2 4 Q2.25 0 2 -4 Q1 -3.75 0 -3.75 Q-1 -3.75 -2 -4 Z"
          fill={c.main}
          opacity="0.95"
        />
      </g>

      {/* Figure 3: center, slightly back */}
      <g transform="translate(51 64)">
        <path
          d="M-1 -4 Q-0.75 -5 0 -5 Q0.75 -5 1 -4 Q0.75 -3.25 0 -3.25 Q-0.75 -3.25 -1 -4 Z"
          fill={c.dark}
          opacity="0.85"
        />
        <path
          d="M-1.5 -3.25 Q-1.75 0 -1.5 3 L1.5 3 Q1.75 0 1.5 -3.25 Q0.75 -3 0 -3 Q-0.75 -3 -1.5 -3.25 Z"
          fill={c.dark}
          opacity="0.85"
        />
      </g>

      {/* Figure 4: right of center */}
      <g transform="translate(59 61)">
        <path
          d="M-1.25 -5 Q-1 -6.25 0 -6.25 Q1 -6.25 1.25 -5 Q1 -4 0 -4 Q-1 -4 -1.25 -5 Z"
          fill={c.dark}
          opacity="0.85"
        />
        <path
          d="M-1.75 -4 Q-2 0 -1.75 3.5 L1.75 3.5 Q2 0 1.75 -4 Q0.75 -3.75 0 -3.75 Q-0.75 -3.75 -1.75 -4 Z"
          fill={c.dark}
          opacity="0.85"
        />
      </g>

      {/* Figure 5: far right, slightly back */}
      <g transform="translate(66 65)">
        <path
          d="M-1 -4 Q-0.75 -5 0 -5 Q0.75 -5 1 -4 Q0.75 -3.25 0 -3.25 Q-0.75 -3.25 -1 -4 Z"
          fill={c.dark}
          opacity="0.78"
        />
        <path
          d="M-1.5 -3.25 Q-1.75 0 -1.5 3 L1.5 3 Q1.75 0 1.5 -3.25 Q0.75 -3 0 -3 Q-0.75 -3 -1.5 -3.25 Z"
          fill={c.dark}
          opacity="0.78"
        />
      </g>

      {/* Figure 6: foreground left, slightly larger (closer) */}
      <g transform="translate(40 71)">
        <path
          d="M-1.25 -5 Q-1 -6.25 0 -6.25 Q1 -6.25 1.25 -5 Q1 -4 0 -4 Q-1 -4 -1.25 -5 Z"
          fill={c.dark}
          opacity="0.85"
        />
        <path
          d="M-1.75 -4 Q-2 0 -1.75 3.5 L1.75 3.5 Q2 0 1.75 -4 Q0.75 -3.75 0 -3.75 Q-0.75 -3.75 -1.75 -4 Z"
          fill={c.dark}
          opacity="0.85"
        />
      </g>

      {/* Soft cast shadow beneath the figure cluster */}
      <ellipse cx="50" cy="76" rx="20" ry="1.5" fill={c.dark} opacity="0.2" filter="url(#spy-wash-medium)" />

      {/* Atmospheric specks — both inside and outside the eye */}
      <circle cx="10" cy="15" r="0.35" fill={c.dark} opacity="0.18" />
      <circle cx="90" cy="17.5" r="0.3" fill={c.dark} opacity="0.15" />
      <circle cx="10" cy="90" r="0.25" fill={c.dark} opacity="0.16" />
      <circle cx="90" cy="90" r="0.25" fill={c.dark} opacity="0.16" />
      <circle cx="50" cy="40" r="0.2" fill={c.dark} opacity="0.13" />
      <circle cx="30" cy="50" r="0.175" fill={c.dark} opacity="0.15" />
      <circle cx="70" cy="52.5" r="0.175" fill={c.dark} opacity="0.15" />
    </svg>
  );
}
