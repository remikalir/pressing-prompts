import { T } from "../../styles/tokens.js";

// ─── Stat Callout ───
// Large serif stat with a small label underneath. Used in the
// "The Question" layer when a topic has compelling data to highlight.

export default function StatCallout({ stat, label, colors }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 24px",
        background: "white",
        borderRadius: T.radius,
        border: `1px solid ${T.border}`,
        minWidth: "140px",
      }}
    >
      <span
        style={{
          fontFamily: T.serif,
          fontSize: "36px",
          fontStyle: "italic",
          color: colors.main,
          lineHeight: 1.15,
          marginBottom: "6px",
        }}
      >
        {stat}
      </span>
      <span
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          color: T.text3,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}
