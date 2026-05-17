import { Link } from "react-router-dom";
import { T } from "../../styles/tokens.js";
import { TOPICS_BY_ID } from "../../data/topics.js";

// ─── Connected Topics ───
// Cross-topic links with a relationship description for each.
// Accepts an array of { topicId, relation } objects; looks up the full
// topic record to get the question text and slug for the URL.

export default function ConnectedTopics({ connections, colors }) {
  return (
    <div
      style={{
        padding: "28px",
        background: T.bgWarm,
        borderRadius: T.radiusLg,
        border: `1px solid ${T.borderLight}`,
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
        Connected Topics
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {connections.map((c, i) => {
          const t = TOPICS_BY_ID[c.topicId];
          if (!t) return null;
          return (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: colors.mid,
                  marginTop: "7px",
                  flexShrink: 0,
                }}
              />
              <div>
                <Link
                  to={`/topic/${t.slug}`}
                  style={{
                    fontFamily: T.serif,
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: colors.main,
                    textDecoration: "none",
                  }}
                >
                  {t.question}
                </Link>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontFamily: T.sans,
                    fontSize: "13px",
                    color: T.text3,
                    lineHeight: 1.6,
                  }}
                >
                  {c.relation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
