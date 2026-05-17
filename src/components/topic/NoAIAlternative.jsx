import { T } from "../../styles/tokens.js";

// ─── No AI Alternative ───
// Warm yellow callout describing a version of the activity that doesn't
// require AI tools.

export default function NoAIAlternative({ alternative }) {
  if (!alternative) return null;
  return (
    <div
      style={{
        margin: "16px 0",
        padding: "16px 20px",
        background: "#FFF8E1",
        border: "1px solid #FFE082",
        borderRadius: "10px",
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
          color: "#F57F17",
        }}
      >
        <span style={{ fontSize: "14px" }}>⊘</span>
        No AI Alternative
      </div>
      <div style={{ fontSize: "13px", lineHeight: 1.6, fontFamily: T.sans, color: "#5D4037" }}>
        {alternative.description}
      </div>
    </div>
  );
}
