// ─── Illustration for "Can We Trust AI?" ───
// Atmospheric Muth-register scene: an arch bridge spanning soft water,
// mist gathering beneath it, a small figure caught mid-step on the deck.
// The figure is the lone saturated narrative anchor — trust as an act
// in motion: someone choosing to put their weight on a span they can't
// fully inspect.
//
// Locked in Sprint 3 alongside Bias and Disinfo as the Trust & Truth
// cluster's first complete pass. See docs/ILLUSTRATIONS.md for the
// shared formula (atmospheric washes, hand-drawn imperfection, lone
// saturated narrative anchor).
//
// Filter IDs are prefixed with `trust-` to avoid collision when multiple
// illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox shared across all
// topic illustrations.

export default function TrustIllustration({ size = 72, colors }) {
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
        <filter id="trust-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="trust-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="trust-wash-mist" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Atmospheric ground — top wash light, distant warm haze low */}
      <ellipse cx="50" cy="25" rx="65" ry="27.5" fill={c.light} opacity="0.7" filter="url(#trust-wash-heavy)" />
      <ellipse cx="50" cy="75" rx="70" ry="17.5" fill={c.main} opacity="0.18" filter="url(#trust-wash-heavy)" />

      {/* Mist beneath the bridge — heavy blur, multiple overlapping ellipses */}
      <ellipse cx="50" cy="67.5" rx="70" ry="11" fill={c.light} opacity="0.85" filter="url(#trust-wash-mist)" />
      <ellipse cx="30" cy="69" rx="25" ry="7" fill={c.light} opacity="0.7" filter="url(#trust-wash-mist)" />
      <ellipse cx="75" cy="70" rx="25" ry="6" fill={c.light} opacity="0.6" filter="url(#trust-wash-mist)" />

      {/* Distant hills implied behind the bridge */}
      <path
        d="M0 60 Q20 52.5 40 55 Q65 58 100 54 L100 65 L0 65 Z"
        fill={c.main}
        opacity="0.18"
        filter="url(#trust-wash-medium)"
      />

      {/* Bridge deck — irregular path, subtly uneven thickness */}
      <path
        d="M14 55 Q34 53 50 52.5 Q69 52 87 54 Q88 54.5 87 56 Q69 54 50 54.5 Q34 55 15 56.75 Q13 56.5 14 55 Z"
        fill={c.dark}
        opacity="0.85"
      />

      {/* Bridge railing — thin top line plus uneven posts */}
      <path
        d="M15 52.5 Q34 50.75 50 50.25 Q69 49.75 86 51.5"
        stroke={c.dark}
        strokeWidth="0.45"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path d="M24 51 L24 54.5" stroke={c.dark} strokeWidth="0.35" opacity="0.4" strokeLinecap="round" />
      <path d="M35 50.5 L35 54" stroke={c.dark} strokeWidth="0.3" opacity="0.4" strokeLinecap="round" />
      <path d="M65 50.5 L65 54" stroke={c.dark} strokeWidth="0.3" opacity="0.4" strokeLinecap="round" />
      <path d="M76 51 L76 54.5" stroke={c.dark} strokeWidth="0.35" opacity="0.4" strokeLinecap="round" />

      {/* Bridge end-piers / abutments */}
      <path d="M14 56.5 Q13 65 15 71 Q16 72 19 71 Q20 65 19 56.5 Z" fill={c.dark} opacity="0.7" />
      <path d="M81 56.5 Q80 65 82 71 Q84 72 87 71 Q88 65 87 56.5 Z" fill={c.dark} opacity="0.7" />

      {/* Soft water reflections beneath the piers */}
      <path
        d="M15 72 Q20 74 17.5 77 Q16 78 15 76 Q14 74 15 72 Z"
        fill={c.dark}
        opacity="0.25"
        filter="url(#trust-wash-medium)"
      />
      <path
        d="M82.5 72.5 Q87.5 74 85 78 Q83 79 82 77 Q81 75 82.5 72.5 Z"
        fill={c.dark}
        opacity="0.25"
        filter="url(#trust-wash-medium)"
      />
      <ellipse cx="50" cy="75" rx="23" ry="1.5" fill={c.dark} opacity="0.18" filter="url(#trust-wash-medium)" />

      {/* The figure — small, mid-bridge, mid-step. Saturated sienna —
          the lone narrative anchor for the scene. */}
      <path
        d="M46.5 46 Q47 44 48 44 Q49.25 44 49.5 45.75 Q49.5 47 48.5 47.25 Q47.25 47 46.5 46 Z"
        fill={c.main}
        opacity="0.9"
      />
      <path
        d="M46.5 47.25 Q46 49.5 46.25 52 L48.75 52 Q49.25 50 49 48 Q49 47.5 48 47.5 Q47 47.75 46.5 47.25 Z"
        fill={c.main}
        opacity="0.9"
      />
      {/* one slightly forward leg — mid-stride */}
      <path d="M47 52 Q46.75 53.5 47.5 54 L48 54 Q48.25 52.5 48 52 Z" fill={c.main} opacity="0.85" />
      <path d="M48.5 52 Q48.75 53.25 48.25 54 L48 54 Q48.5 52.5 48.25 52 Z" fill={c.main} opacity="0.7" />

      {/* Tiny shadow under the figure on the deck */}
      <ellipse cx="47.5" cy="54.5" rx="1.5" ry="0.3" fill={c.dark} opacity="0.45" filter="url(#trust-wash-medium)" />

      {/* Atmospheric specks — drifting motes */}
      <circle cx="20" cy="17.5" r="0.5" fill={c.dark} opacity="0.18" />
      <circle cx="80" cy="20" r="0.4" fill={c.dark} opacity="0.14" />
      <circle cx="85" cy="29" r="0.3" fill={c.dark} opacity="0.13" />
      <circle cx="25" cy="24" r="0.35" fill={c.dark} opacity="0.16" />
      <circle cx="67.5" cy="16" r="0.25" fill={c.dark} opacity="0.12" />
    </svg>
  );
}
