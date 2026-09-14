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
              minWidth: 0,
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
                // ─── Long-token containment ───
                // Prompt text is author-written and can contain URLs, DOIs, or
                // other unbreakable tokens. Three properties, each load-bearing:
                //
                // minWidth: 0 — flex children default to `min-width: auto`,
                //   which floors them at their min-content width. A 44-char URL
                //   pushes that floor past a phone viewport, the row grows, and
                //   the whole document overflows horizontally. `flex: 1` does
                //   not prevent this; the zero flex-basis is overridden by the
                //   automatic minimum size. This is the actual fix.
                // overflowWrap: "anywhere" — permits a break inside the token
                //   and, unlike `break-word`, also reduces the min-content size
                //   so the flex floor stays small.
                // wordBreak: "break-word" — legacy fallback for Safari < 15.4,
                //   which predates `overflow-wrap: anywhere`.
                minWidth: 0,
                overflowWrap: "anywhere",
                wordBreak: "break-word",
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
