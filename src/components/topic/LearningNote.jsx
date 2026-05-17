import { T } from "../../styles/tokens.js";

// ─── Learning Note ───
// Navy-bordered instructor-facing note. Rendered conditionally based on
// the global `showNotes` toggle.

export default function LearningNote({ children, visible, title }) {
  if (!visible) return null;
  return (
    <div
      style={{
        margin: "16px 0",
        padding: "16px 20px",
        background: `linear-gradient(135deg, ${T.chrome}08, ${T.chrome}04)`,
        borderLeft: `3px solid ${T.chrome}`,
        borderRadius: "0 10px 10px 0",
        animation: "fadeSlideIn 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
          fontSize: "12px",
          fontWeight: 600,
          fontFamily: T.sans,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: T.chrome,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1L10 5.5H14.5L11 8.5L12.5 13L8 10.5L3.5 13L5 8.5L1.5 5.5H6L8 1Z"
            fill="#FFD54F"
            stroke="#FFD54F"
            strokeWidth="1"
          />
        </svg>
        {title || "Learning Notes"}
      </div>
      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.6,
          fontFamily: T.sans,
          color: T.chrome,
          opacity: 0.85,
        }}
      >
        {children}
      </div>
    </div>
  );
}
