import { T } from "../../styles/tokens.js";

// ─── Coming Soon Banner ───
// Shown at the top of topics whose activities are still in development.

export function ComingSoonBanner({ colors, message }) {
  return (
    <div
      style={{
        margin: "0 0 32px 0",
        padding: "20px 28px",
        background: `linear-gradient(135deg, ${colors.main}08, ${colors.main}04)`,
        border: `1px solid ${colors.mid}50`,
        borderRadius: T.radiusLg,
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${colors.main}, ${colors.mid})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 2L11 7H16L12 10L13.5 15L9 12L4.5 15L6 10L2 7H7L9 2Z"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontFamily: T.sans,
            fontSize: "14px",
            fontWeight: 600,
            color: colors.main,
            marginBottom: "3px",
          }}
        >
          Activities Coming Soon
        </div>
        <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text2, lineHeight: 1.6 }}>
          {message ||
            "Full activities for this topic are currently in development. In the meantime, explore the conversation starters, resources, and disciplinary extensions below."}
        </div>
      </div>
    </div>
  );
}

// ─── Activity Previews ───
// Faded dashed-border cards showing planned activities.

export function ActivityPreviews({ previews, colors }) {
  if (!previews || previews.length === 0) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {previews.map((p, i) => (
        <div
          key={i}
          style={{
            background: "white",
            borderRadius: T.radiusLg,
            border: `1px dashed ${T.border}`,
            padding: "20px 24px",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: colors.mid,
                color: "white",
                fontSize: "12px",
                fontWeight: 600,
                fontFamily: T.sans,
                opacity: 0.6,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: p.type === "in-class" ? "#FFF3E0" : "#E8F5E9",
                color: p.type === "in-class" ? "#E65100" : "#2E7D32",
                opacity: 0.7,
              }}
            >
              <span style={{ fontSize: "12px" }}>{p.type === "in-class" ? "●" : "◐"}</span>
              {p.type === "in-class" ? "In-Class" : "Online"}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                color: colors.mid,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Preview
            </span>
          </div>
          <h3
            style={{
              margin: "0 0 4px 0",
              fontFamily: T.serif,
              fontSize: "20px",
              fontWeight: 400,
              color: T.text2,
              fontStyle: "italic",
            }}
          >
            {p.title}
          </h3>
          <p style={{ margin: 0, fontFamily: T.sans, fontSize: "13px", color: T.text3, lineHeight: 1.6 }}>
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
