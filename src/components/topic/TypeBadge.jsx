import { T } from "../../styles/tokens.js";

// ─── Type Badge ───
// Pill indicator for activity modality.

export default function TypeBadge({ type }) {
  const isInClass = type === "in-class";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontFamily: T.sans,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: isInClass ? "#FFF3E0" : "#E8F5E9",
        color: isInClass ? "#E65100" : "#2E7D32",
      }}
    >
      <span style={{ fontSize: "12px" }}>{isInClass ? "●" : "◐"}</span>
      {isInClass ? "In-Class" : "Online"}
    </span>
  );
}
