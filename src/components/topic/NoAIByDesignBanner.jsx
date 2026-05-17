import { T } from "../../styles/tokens.js";

// ─── No AI By Design Banner ───
// Topic-level banner explaining that this topic's activities intentionally
// avoid AI tools as a pedagogical stance. Only used for "Do We Need AI?"

export default function NoAIByDesignBanner({ colors }) {
  return (
    <div
      style={{
        margin: "0 0 32px 0",
        padding: "22px 28px",
        background: `linear-gradient(135deg, ${colors.main}10, ${colors.main}06)`,
        border: `1px solid ${colors.mid}80`,
        borderRadius: T.radiusLg,
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: colors.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "20px", color: "white", fontWeight: 600 }}>⊘</span>
      </div>
      <div>
        <div
          style={{
            fontFamily: T.sans,
            fontSize: "14px",
            fontWeight: 600,
            color: colors.main,
            marginBottom: "4px",
          }}
        >
          No AI, by design
        </div>
        <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text2, lineHeight: 1.6 }}>
          The activities in this topic intentionally avoid AI tools. Asking "Do we need AI?" is
          better explored <em>without</em> reaching for AI to answer the question — this is a
          pedagogical stance, not an omission.
        </div>
      </div>
    </div>
  );
}
