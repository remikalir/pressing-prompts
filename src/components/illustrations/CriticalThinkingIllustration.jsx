// ─── Illustration for "Does AI Harm Critical Thinking?" ───
// Atmospheric Muth-register scene: a figure stands centered on soft
// ground, body angled slightly upward, pausing and looking up at a
// single brushy spiral rising above their head. The spiral is the
// saturated narrative anchor in dusty indigo, echoing the topic icon's
// gestural mark at scene scale. The pause is the point — critical
// thinking is what happens when we stop walking and notice what we
// are noticing.
//
// Composition is intentionally minimal: figure + spiral + soft ground.
// The cluster's most contemplative scene.
//
// Locked in Sprint 3 as part of the Self & Society cluster's complete
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `thinking-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function CriticalThinkingIllustration({ size = 72, colors }) {
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
        <filter id="thinking-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="thinking-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — dusty indigo washes top and bottom */}
      <ellipse cx="50" cy="20" rx="70" ry="27.5" fill={c.light} opacity="0.8" filter="url(#thinking-wash-heavy)" />
      <ellipse cx="50" cy="87.5" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#thinking-wash-heavy)" />
      <ellipse cx="50" cy="70" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#thinking-wash-medium)" />

      {/* Distant ground/horizon */}
      <path
        d="M0 72.5 Q25 69 50 70 Q75 71 100 69 L100 82.5 L0 82.5 Z"
        fill={c.dark}
        opacity="0.18"
        filter="url(#thinking-wash-medium)"
      />

      {/* Soft path beneath the figure — atmospheric ground rather than visible road */}
      <ellipse cx="50" cy="80" rx="30" ry="2" fill={c.mid} opacity="0.5" filter="url(#thinking-wash-medium)" />

      {/* Cast shadow under the figure */}
      <ellipse cx="50" cy="82.5" rx="5.5" ry="0.9" fill={c.dark} opacity="0.4" filter="url(#thinking-wash-medium)" />

      {/* Faint ground line at figure's feet */}
      <path
        d="M42.5 81 Q47.5 80.75 50 80.85 Q54 80.9 57.5 81"
        stroke={c.dark}
        strokeWidth="0.2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* The figure — centered, body angled slightly upward, pausing */}
      <path
        d="M48.5 58 Q48.75 56 50 56 Q51.25 56 51.5 57.5 Q51.5 59 50.5 59.25 Q49 59 48.5 58 Z"
        fill={c.dark}
        opacity="0.92"
      />
      <path
        d="M47.5 59.25 Q47 65 47.5 75 Q47.5 79 49.5 79 L51 79 Q52.5 77.5 52.5 74 Q53 65 52.5 59.25 Q51.5 59.5 50 59.5 Q49 59.5 47.5 59.25 Z"
        fill={c.dark}
        opacity="0.92"
      />

      {/* The rising spiral — saturated dusty indigo narrative anchor.
          Single brushy stroke rising from above the figure's head, traveling up. */}
      <path
        d="M50 47.5 Q54 40 55 32.5 Q54 26 48 25 Q41 26 41 32 Q43 37 48 37 Q52 36 52 32 Q50 29 46 31"
        stroke={c.main}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.92"
      />

      {/* Small dispersing motes from the top of the spiral */}
      <circle cx="46" cy="20" r="0.45" fill={c.main} opacity="0.45" filter="url(#thinking-wash-medium)" />
      <circle cx="54" cy="21" r="0.35" fill={c.main} opacity="0.4" filter="url(#thinking-wash-medium)" />
      <circle cx="50" cy="16" r="0.3" fill={c.main} opacity="0.35" filter="url(#thinking-wash-medium)" />

      {/* Atmospheric specks */}
      <circle cx="15" cy="17.5" r="0.45" fill={c.dark} opacity="0.16" />
      <circle cx="85" cy="20" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="50" r="0.25" fill={c.dark} opacity="0.12" />
      <circle cx="12.5" cy="50" r="0.35" fill={c.dark} opacity="0.15" />
    </svg>
  );
}
