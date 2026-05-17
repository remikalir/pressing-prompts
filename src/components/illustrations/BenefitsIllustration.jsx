// ─── Illustration for "Who Benefits from AI?" ───
// Atmospheric Muth-register scene: a wall stretches across the frame,
// punched through by a single opening on the right. Two distinct
// atmospheric registers — dark/shadowed on the left, light/open
// through the opening on the right. A single small figure stands on
// the dark side, alone, looking toward the light. The figure is the
// lone narrative anchor in a deliberately lifted teal — between main
// and mid — to give it just enough contrast against the dark wall
// while preserving its saturated presence.
//
// The composition reads spatially: there is a divide, and there are
// people on the wrong side of it. The wall takes up most of the frame
// because the *barrier* is what the topic is mostly about — not what's
// behind it. The thin wedge of spilled light reaching the dark-side
// floor says: light crosses the threshold, but the figure hasn't.
//
// Locked in Sprint 3 as part of the Power & Access cluster's first
// pass. Note: this illustration uses a custom mid-tone color value
// (#5A998D) for the figure — between palette `main` and `mid` — to
// achieve specific contrast against the dark wall. This is the only
// illustration in the system that introduces an off-palette value;
// see docs/ILLUSTRATIONS.md for the rationale.
//
// Filter IDs are prefixed with `benefits-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function BenefitsIllustration({ size = 72, colors }) {
  const c = colors;
  // Custom figure color: midpoint between main and mid for proper
  // contrast against the c.dark wall. See header comment.
  const figureColor = "#5A998D";
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
        <filter id="benefits-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="benefits-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="benefits-wash-x" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* Near side (foreground) — in shadow, deeper teal */}
      <rect x="0" y="0" width="100" height="100" fill={c.dark} opacity="0.18" />
      <ellipse cx="25" cy="50" rx="60" ry="60" fill={c.dark} opacity="0.22" filter="url(#benefits-wash-heavy)" />

      {/* Far side (through the doorway) — bright atmospheric light */}
      <ellipse cx="77.5" cy="50" rx="40" ry="50" fill={c.light} opacity="0.7" filter="url(#benefits-wash-heavy)" />

      {/* Left wall section (large, to the left of the opening) */}
      <path
        d="M0 20 Q2 19 6 20 L50 19 Q51 19 51 21 L51 79 Q51 81 50 81 L2 79 Q0 78 0 76 Z"
        fill={c.dark}
        opacity="0.85"
      />

      {/* Wall texture — irregular brushstroke variations */}
      <path d="M15 40 Q30 39 45 41" stroke={c.dark} strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M14 55 Q30 56 46 54" stroke={c.dark} strokeWidth="0.25" fill="none" opacity="0.35" />
      <path d="M15 70 Q30 71 45 69" stroke={c.dark} strokeWidth="0.25" fill="none" opacity="0.3" />

      {/* Right wall section (smaller, to the right of the opening) */}
      <path
        d="M79 20 Q83 19 88 20 L100 21 L100 79 L88 81 Q84 81 79 80 Q78 50 79 20 Z"
        fill={c.dark}
        opacity="0.85"
      />

      {/* Doorway opening edges — slight irregular curve */}
      <path
        d="M51 20 Q52 50 51 80"
        stroke={c.dark}
        strokeWidth="0.6"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M79 20 Q78 50 79 80"
        stroke={c.dark}
        strokeWidth="0.6"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* Light spilling through the opening onto the dark-side floor */}
      <path d="M51 79 L79 79 L75 84 Q65 86 55 84 Z" fill={c.light} opacity="0.55" filter="url(#benefits-wash-medium)" />
      <ellipse cx="65" cy="81" rx="15" ry="1.25" fill={c.light} opacity="0.6" filter="url(#benefits-wash-medium)" />

      {/* Threshold line at the doorway base */}
      <path
        d="M51 79 Q60 78.5 70 78.5 Q78 79 79 79"
        stroke={c.dark}
        strokeWidth="0.5"
        fill="none"
        opacity="0.85"
        strokeLinecap="round"
      />

      {/* Cast shadow under the figure (on the dark side) */}
      <ellipse cx="30" cy="79" rx="5.5" ry="1" fill={c.dark} opacity="0.5" filter="url(#benefits-wash-medium)" />

      {/* Faint ground line at figure's feet */}
      <path
        d="M24 78.25 Q29 78 30 78.1 Q35 78.2 40 78.25"
        stroke={c.dark}
        strokeWidth="0.25"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* The figure — on the dark side, facing the doorway, lifted teal narrative anchor */}
      <path
        d="M27.5 55 Q28 52.5 30 52.5 Q32 52.75 32.25 55 Q32 56.5 30 56.75 Q28 56.5 27.5 55 Z"
        fill={figureColor}
        opacity="0.92"
      />
      <path
        d="M26.5 56.5 Q26 65 26.5 75 Q26.5 78 29 78 L31.5 78 Q33 76 33 72.5 Q33.5 65 33 56.5 Q31.5 57 30 57 Q28.5 57 26.5 56.5 Z"
        fill={figureColor}
        opacity="0.92"
      />

      {/* Atmospheric specks — mostly on the dark side */}
      <circle cx="15" cy="25" r="0.35" fill={c.dark} opacity="0.18" />
      <circle cx="35" cy="30" r="0.25" fill={c.dark} opacity="0.15" />
      <circle cx="20" cy="45" r="0.25" fill={c.dark} opacity="0.14" />
      <circle cx="90" cy="30" r="0.2" fill={c.dark} opacity="0.1" />
      <circle cx="85" cy="60" r="0.2" fill={c.dark} opacity="0.1" />
    </svg>
  );
}
