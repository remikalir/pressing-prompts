import { T } from "../../styles/tokens.js";

// ─── Activity Number ───
// Circular badge showing the activity's number (1, 2, or 3).

export default function ActivityNumber({ n, colors }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: colors.main,
        color: "white",
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: T.sans,
        flexShrink: 0,
      }}
    >
      {n}
    </span>
  );
}
