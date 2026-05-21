import { T } from "../../styles/tokens.js";
import PlaylistToggle from "./PlaylistToggle.jsx";

// ─── Conversation Starters ───
// No-prep discussion prompts. Each topic can optionally include a list of
// conversation starter strings; this component renders them as numbered cards.

export default function ConversationStarters({ starters, colors }) {
  if (!starters || starters.length === 0) return null;
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
          margin: "0 0 4px 0",
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
        }}
      >
        Conversation Starters
      </h4>
      <p style={{ margin: "0 0 16px 0", fontFamily: T.sans, fontSize: "12px", color: T.text3 }}>
        No-prep prompts for quick discussions, think-pair-share, or reflective writing
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {starters.map((s, i) => (
          <div
            key={s.id || i}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              padding: "12px 16px",
              background: T.bgWarm,
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                fontFamily: T.serif,
                fontSize: "18px",
                fontStyle: "italic",
                color: colors.mid,
                flexShrink: 0,
                lineHeight: 1.15,
                alignSelf: "flex-start",
              }}
            >
              {i + 1}
            </span>
            <p
              style={{
                margin: 0,
                fontFamily: T.sans,
                fontSize: "13px",
                lineHeight: 1.6,
                color: T.text1,
                flex: 1,
              }}
            >
              {s.prompt}
            </p>
            {s.id && <PlaylistToggle id={s.id} colors={colors} />}
          </div>
        ))}
      </div>
    </div>
  );
}
