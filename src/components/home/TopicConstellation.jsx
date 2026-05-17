import { TOPICS } from "../../data/topics.js";
import { TopicIcon } from "../icons/TopicIcon.jsx";

// ─── Topic Constellation ───
// Animated circular arrangement of all topic dots orbiting the project's
// still point. Appears in the homepage hero.
//
// The center treatment is the italic-stop glyph locked in Sprint 3 —
// a small italic full-stop framed by two faint concentric rings,
// punctuating the constellation the way a period punctuates a question.
// See docs/CENTERPIECE.md for the rationale.

export default function TopicConstellation({ size = 280 }) {
  const center = size / 2;
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      {TOPICS.map((t, i) => {
        const angle = (i / TOPICS.length) * Math.PI * 2 - Math.PI / 2;
        const r = 100 + (i % 3) * 15;
        const cx = center + Math.cos(angle) * r;
        const cy = center + Math.sin(angle) * r;
        const s = 14 + (i % 3) * 6;
        return (
          <div
            key={t.id}
            style={{
              position: "absolute",
              left: cx - s / 2,
              top: cy - s / 2,
              width: s,
              height: s,
              borderRadius: "50%",
              background: t.colors.main,
              opacity: 0.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `constellationFloat${i % 3} ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <TopicIcon id={t.id} size={Math.round(s * 0.5)} color="white" opacity={0.85} />
          </div>
        );
      })}
      {/* Center · the italic stop — Sprint 3 locked treatment.
          A small italic full-stop framed by two faint concentric rings,
          rendered at the still point of the constellation. The period
          punctuates a question; the constellation orbits around the
          punctuation that closes one. The downward baseline shift
          (cy = center + 3 rather than cy = center) places the mark
          where italic punctuation actually sits in real typography —
          below the optical center, at the baseline of an unwritten
          line. See docs/CENTERPIECE.md for the full rationale. */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{
          position: "absolute",
          left: center - 20,
          top: center - 20,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {/* Outer framing ring — defines the still-point area */}
        <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
        {/* Inner framing ring — contains the period, half the outer's opacity */}
        <circle cx="20" cy="20" r="12" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
        {/* The italic full-stop — saturated white, rotated -12° (italic), baseline-shifted */}
        <g transform="translate(20 23)">
          <ellipse cx="0" cy="0" rx="3" ry="3.5" fill="white" opacity="0.95" transform="rotate(-12)" />
        </g>
      </svg>
      <style>{`
        @keyframes constellationFloat0 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes constellationFloat1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes constellationFloat2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      `}</style>
    </div>
  );
}
