// ─── Illustration for "Is AI a Friend?" ───
// Atmospheric Muth-register scene: two small birds perch on a single
// curving branch, close but not touching. The right bird (the
// narrative anchor in saturated wine rose) faces slightly toward its
// companion on the left, who sits in dark wine, soft tone. The two
// share the perch but remain distinct beings.
//
// The framing borrows directly from Muth's compositional vocabulary
// — small creatures sharing space without sentimentality. The right
// bird's saturated tone makes it the closer presence; the dark
// companion is the steadier one. Could be read as: companionship
// can be one-sided, more saturated on one side than the other —
// exactly the question the topic raises.
//
// Locked in Sprint 3 as part of the Self & Society cluster's complete
// pass. See docs/ILLUSTRATIONS.md for the shared formula.
//
// Filter IDs are prefixed with `friend-` to avoid collision when
// multiple illustrations render on the same page.
//
// Path coordinates have been scaled from the 200×200 design viewBox
// down by 0.5 to fit the 100×100 codebase viewBox.

export default function FriendIllustration({ size = 72, colors }) {
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
        <filter id="friend-wash-medium" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="friend-wash-heavy" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Atmospheric ground — wine-rose washes top and bottom */}
      <ellipse cx="50" cy="20" rx="70" ry="30" fill={c.light} opacity="0.7" filter="url(#friend-wash-heavy)" />
      <ellipse cx="50" cy="85" rx="75" ry="20" fill={c.main} opacity="0.18" filter="url(#friend-wash-heavy)" />
      <ellipse cx="50" cy="70" rx="70" ry="3" fill={c.main} opacity="0.13" filter="url(#friend-wash-medium)" />

      {/* Distant atmospheric haze suggesting open sky */}
      <ellipse cx="30" cy="30" rx="25" ry="10" fill={c.mid} opacity="0.3" filter="url(#friend-wash-heavy)" />
      <ellipse cx="75" cy="40" rx="20" ry="7.5" fill={c.mid} opacity="0.25" filter="url(#friend-wash-heavy)" />

      {/* The branch — single horizontal form, slight curve, irregular thickness */}
      <path
        d="M15 65 Q30 63 50 62 Q70 61 87.5 63 Q88 63.5 87 64 Q70 62 50 63 Q30 64 16 66 Q14.5 66 15 65 Z"
        fill={c.dark}
        opacity="0.78"
      />

      {/* A few smaller branches/twigs coming off the main branch */}
      <path
        d="M27.5 64 Q25 60 24 56"
        stroke={c.dark}
        strokeWidth="0.35"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M35 63 Q36.5 59 37.5 56"
        stroke={c.dark}
        strokeWidth="0.25"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M75 62 Q76.5 58 78 55"
        stroke={c.dark}
        strokeWidth="0.25"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M82.5 63 Q85 59 87 56"
        stroke={c.dark}
        strokeWidth="0.35"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />

      {/* Small leaves on the branches */}
      <ellipse cx="24" cy="55" rx="1.25" ry="0.75" fill={c.dark} opacity="0.4" filter="url(#friend-wash-medium)" />
      <ellipse cx="78" cy="54" rx="1.25" ry="0.75" fill={c.dark} opacity="0.4" filter="url(#friend-wash-medium)" />
      <ellipse cx="37" cy="55" rx="1" ry="0.6" fill={c.dark} opacity="0.35" filter="url(#friend-wash-medium)" />

      {/* Companion bird (left, in dark wine — soft tone) */}
      <g transform="translate(42.5 58)">
        <path
          fillRule="evenodd"
          d="M-3 -1 Q-3 -3.5 -0.5 -5 Q2 -5.5 4 -4 Q5.5 -1.5 4 1 Q2 2 -1.5 2 Q-3.5 1.5 -3 -1 Z M-1 -1.5 Q1.5 -2 3 -1 Q2.5 0 1 0.25 Q-0.5 0 -1 -0.5 Q-1 -1.25 -1 -1.5 Z"
          fill={c.dark}
          opacity="0.85"
        />
        {/* Beak */}
        <path d="M-3 -1.5 L-4.5 -1.25 L-3 -0.5 Z" fill={c.dark} opacity="0.85" />
        {/* Tail */}
        <path d="M4 -1 L6 -1.5 L5.75 0.5 L4.25 0.75 Z" fill={c.dark} opacity="0.78" />
        {/* Tiny legs */}
        <path d="M-0.5 2 L-0.5 4" stroke={c.dark} strokeWidth="0.3" opacity="0.7" strokeLinecap="round" />
        <path d="M1 2 L1 4" stroke={c.dark} strokeWidth="0.3" opacity="0.7" strokeLinecap="round" />
      </g>

      {/* Narrative-anchor bird (right, saturated wine rose — the closer one) */}
      <g transform="translate(55 58.5)">
        <path
          fillRule="evenodd"
          d="M-2.5 -1 Q-2.5 -3 0 -4.5 Q2.5 -5 4 -3.5 Q5.5 -1.5 4 0.5 Q2 1.5 -1 1.5 Q-3 1 -2.5 -1 Z M-0.5 -1.5 Q1.5 -2 3 -1 Q2.5 0 1 0.25 Q-0.5 0 -1 -0.5 Q-1 -1.25 -0.5 -1.5 Z"
          fill={c.main}
          opacity="0.92"
        />
        {/* Beak — facing left, toward the other bird */}
        <path d="M-2.5 -1.5 L-4 -1.25 L-2.5 -0.5 Z" fill={c.main} opacity="0.92" />
        {/* Tail */}
        <path d="M4 -1 L5.5 -1.5 L5.25 0.5 L4 0.75 Z" fill={c.main} opacity="0.85" />
        {/* Tiny legs */}
        <path d="M-0.5 1.5 L-0.5 3.5" stroke={c.main} strokeWidth="0.3" opacity="0.8" strokeLinecap="round" />
        <path d="M1 1.5 L1 3.5" stroke={c.main} strokeWidth="0.3" opacity="0.8" strokeLinecap="round" />
      </g>

      {/* Atmospheric specks */}
      <circle cx="15" cy="20" r="0.45" fill={c.dark} opacity="0.16" />
      <circle cx="85" cy="20" r="0.35" fill={c.dark} opacity="0.13" />
      <circle cx="85" cy="40" r="0.25" fill={c.dark} opacity="0.12" />
      <circle cx="15" cy="50" r="0.35" fill={c.dark} opacity="0.15" />
      <circle cx="67.5" cy="21" r="0.2" fill={c.dark} opacity="0.12" />
    </svg>
  );
}
