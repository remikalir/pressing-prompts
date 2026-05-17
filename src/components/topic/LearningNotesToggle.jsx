import { T } from "../../styles/tokens.js";

// ─── Learning Notes Toggle ───
// Star-icon button that globally shows/hides Learning Notes.

export default function LearningNotesToggle({ active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        borderRadius: "10px",
        border: active ? `2px solid ${T.chrome}` : `2px solid ${T.border}`,
        background: active ? T.chrome : "white",
        color: active ? "white" : T.text2,
        fontFamily: T.sans,
        fontSize: "13px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: active ? "0 2px 12px rgba(0,26,87,0.2)" : "none",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1L10 5.5H14.5L11 8.5L12.5 13L8 10.5L3.5 13L5 8.5L1.5 5.5H6L8 1Z"
          fill={active ? "#FFD54F" : "none"}
          stroke={active ? "#FFD54F" : "currentColor"}
          strokeWidth="1.2"
        />
      </svg>
      Learning Notes {active ? "On" : "Off"}
    </button>
  );
}
