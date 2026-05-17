// ─── Illustration for "Does AI Spread Mis/Disinfo?" ───
// Atmospheric Muth-register scene that inverts the icon's framing:
// the megaphone is small and distant in the upper-left, mouth opening
// down-right; a single small listener stands right-of-center on the
// horizon, the lone saturated narrative anchor. Three sound arcs
// sweep diagonally across the scene from megaphone to listener —
// roughly 38° from horizontal, sound carrying on air rather than rain
// falling. The composition makes the illustration about being on the
// receiving end of a broadcast rather than about the broadcaster.
//
// Locked in Sprint 3 alongside Bias and Trust as the Trust & Truth
// cluster's first complete pass. See docs/ILLUSTRATIONS.md for the
// shared formula.
//
// Filter IDs are prefixed with `disinfo-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function DisinfoIllustration({ size = 72, colors }) {
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
        <filter id="disinfo-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="disinfo-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground */}
      <ellipse cx="50" cy="20" rx="70" ry="30" fill={c.light} opacity="0.8" filter="url(#disinfo-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#disinfo-wash-heavy)" />
      <ellipse cx="50" cy="67.5" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#disinfo-wash-medium)" />

      {/* Distant horizon-haze suggestions — anchor depth on both sides */}
      <ellipse cx="27.5" cy="65" rx="9" ry="1.5" fill={c.dark} opacity="0.18" filter="url(#disinfo-wash-medium)" />
      <ellipse cx="80" cy="66" rx="7" ry="1.25" fill={c.dark} opacity="0.15" filter="url(#disinfo-wash-medium)" />

      {/* The distant megaphone — small, upper-left, rotated 40° so its mouth
          opens down-right toward the listener. Cone wide-end at right (mouth),
          narrow end + handle at left. */}
      <g transform="translate(24 25)">
        <g transform="rotate(40)">
          <path d="M-1 -1.5 L9 -3.5 L9 3.5 L-1 1.5 Q-2 0 -1 -1.5 Z" fill={c.main} opacity="0.78" />
          <rect x="-3.5" y="-1.5" width="2.5" height="3" rx="0.6" fill={c.dark} opacity="0.7" />
        </g>
      </g>

      {/* Three sound arcs — diagonal sweep from megaphone mouth toward listener.
          Mouth is approximately at (33, 30); listener head approximately (65, 55).
          Span: ~32 horizontal × ~25 vertical at 100×100 scale = roughly 38° from horizontal. */}
      <path
        d="M34 31.5 Q46 35 61 50"
        stroke={c.main}
        strokeWidth="0.7"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M35 30 Q48 33.5 63 48"
        stroke={c.main}
        strokeWidth="0.65"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M36.5 28.5 Q50 32 65 46"
        stroke={c.main}
        strokeWidth="0.6"
        fill="none"
        opacity="0.22"
        strokeLinecap="round"
      />

      {/* Cast shadow under the listener at x=65 */}
      <ellipse cx="65" cy="80" rx="10" ry="1.5" fill={c.dark} opacity="0.32" filter="url(#disinfo-wash-medium)" />

      {/* Faint irregular ground line at the listener's feet — subtle horizon-stroke */}
      <path
        d="M52.5 79.25 Q60 79 65 79.1 Q71 79.2 77.5 79.25"
        stroke={c.dark}
        strokeWidth="0.3"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* The listener — small figure right-of-center, alone in open ground.
          Head + body, no shoulder strokes (those were removed in r2). */}
      <path
        d="M62.5 55 Q63 52.5 65 52.5 Q67 52.75 67.25 55 Q67 56.5 65 56.75 Q63 56.5 62.5 55 Z"
        fill={c.dark}
        opacity="0.85"
      />
      <path
        d="M61.5 56.5 Q61 65 61.5 75 Q61.5 79 64 79 L66.5 79 Q68 77 68 72.5 Q68.5 65 68 56.5 Q66.5 57 65 57 Q63.5 57 61.5 56.5 Z"
        fill={c.dark}
        opacity="0.85"
      />

      {/* Atmospheric specks — drifting motes scattered through the upper space */}
      <circle cx="15" cy="18" r="0.45" fill={c.dark} opacity="0.16" />
      <circle cx="85" cy="19" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="40" r="0.25" fill={c.dark} opacity="0.12" />
      <circle cx="10" cy="50" r="0.35" fill={c.dark} opacity="0.15" />
      <circle cx="80" cy="30" r="0.25" fill={c.dark} opacity="0.13" />
    </svg>
  );
}
