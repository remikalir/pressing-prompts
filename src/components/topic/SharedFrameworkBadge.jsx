import { Link } from "react-router-dom";
import { T } from "../../styles/tokens.js";
import { TOPICS_BY_ID } from "../../data/topics.js";

// ─── Shared Framework Badge ───
// Callout for frameworks (SNIFF Test, Jigsaw, Confirmation Bias) that are
// used in multiple topics. Links to the other topics that also use it.

export default function SharedFrameworkBadge({ framework, colors }) {
  if (!framework) return null;
  return (
    <div
      style={{
        margin: "16px 0",
        padding: "14px 18px",
        background: `linear-gradient(135deg, ${colors.main}06, ${colors.main}03)`,
        border: `1px dashed ${colors.mid}`,
        borderRadius: "10px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: colors.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1V15M1 8H15M3 3L13 13M13 3L3 13"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontFamily: T.sans,
            fontSize: "13px",
            fontWeight: 600,
            color: colors.main,
            marginBottom: "3px",
          }}
        >
          Shared Framework: {framework.name}
        </div>
        <div style={{ fontFamily: T.sans, fontSize: "12px", color: T.text3, lineHeight: 1.6 }}>
          {framework.description}
          {framework.alsoUsedIn && framework.alsoUsedIn.length > 0 && (
            <>
              {" · Also used in: "}
              {framework.alsoUsedIn.map((topicId, i) => {
                const t = TOPICS_BY_ID[topicId];
                if (!t) return null;
                return (
                  <span key={topicId}>
                    <Link
                      to={`/topic/${t.slug}`}
                      style={{
                        color: colors.main,
                        fontStyle: "italic",
                        textDecoration: "none",
                      }}
                    >
                      {t.question}
                    </Link>
                    {i < framework.alsoUsedIn.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
