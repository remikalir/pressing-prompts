import { T } from "../../styles/tokens.js";
import PlaylistToggle from "./PlaylistToggle.jsx";

// ─── Disciplinary Extensions ───
// Full-width card listing discipline-specific prompts for the topic.

export default function DisciplinaryExtensions({ extensions, colors }) {
  return (
    <div
      style={{
        padding: "28px",
        background: "white",
        borderRadius: T.radiusLg,
        border: `1px solid ${T.border}`,
        boxShadow: T.shadow,
      }}
    >
      <h4
        style={{
          margin: "0 0 16px 0",
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: T.text3,
        }}
      >
        Disciplinary Extensions
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {extensions.map((ext, i) => (
          <div
            key={ext.id || i}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontFamily: T.sans,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: colors.main,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {ext.discipline}
              </span>
              <p
                style={{
                  margin: "4px 0 0",
                  fontFamily: T.sans,
                  fontSize: "13px",
                  color: T.text2,
                  lineHeight: 1.6,
                }}
              >
                {ext.prompt}
              </p>
            </div>
            {ext.id && <PlaylistToggle id={ext.id} colors={colors} />}
          </div>
        ))}
      </div>
    </div>
  );
}
