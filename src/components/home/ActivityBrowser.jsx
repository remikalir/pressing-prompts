import { useState } from "react";
import { Link } from "react-router-dom";
import { T } from "../../styles/tokens.js";
import { TOPICS_BY_ID } from "../../data/topics.js";
import { BROWSE_ACTIVITIES, TYPE_META } from "../../data/browseActivities.js";
import { usePlaylist } from "../../context/PlaylistContext.jsx";

// ─── Activity Browser ───
// Three-card type selector; clicking one expands to show all activities of
// that type across every topic. Each row has a +/✓ toggle to add/remove from
// the playlist.

export default function ActivityBrowser() {
  const [browseType, setBrowseType] = useState(null);
  const { has, toggle } = usePlaylist();

  const browseActivities = browseType
    ? BROWSE_ACTIVITIES.filter((a) => a.type === browseType)
    : [];

  return (
    <section
      id="browse"
      style={{ padding: "60px 32px 80px", background: T.bgWarm, borderTop: `1px solid ${T.borderLight}` }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: T.serif,
              fontSize: "36px",
              fontWeight: 400,
              fontStyle: "italic",
              color: T.text1,
              marginBottom: "16px",
            }}
          >
            Browse Activities, Build Playlists
          </h2>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: "14px",
              color: T.text2,
              maxWidth: "720px",
              margin: "0 auto 22px",
              lineHeight: 1.7,
            }}
          >
            Browse activities and add the ones you want to your playlist using the{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: `1.5px solid ${T.border}`,
                fontSize: "12px",
                verticalAlign: "middle",
                margin: "0 2px",
              }}
            >
              +
            </span>{" "}
            button. When you're ready, export as PDF, copy shareable links, or download as Markdown
            for your LMS. <strong>No account required — no data stored.</strong>
          </p>
          {/* Quiet metadata labels — borderless, transparent, eyebrow-style.
              The two informational items overlapping with the bold prose
              above (login, data collection) were removed in Sprint 7; the
              remaining two add information the prose does not. */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            {["Export anytime", "CC BY-NC-SA 4.0"].map((label, i) => (
              <span
                key={i}
                style={{
                  fontFamily: T.sans,
                  fontSize: "11px",
                  fontWeight: 500,
                  color: T.text3,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Type selector cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "32px" }}>
          {Object.entries(TYPE_META).map(([key, meta]) => {
            const isActive = browseType === key;
            return (
              <button
                key={key}
                onClick={() => setBrowseType(isActive ? null : key)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.boxShadow = T.shadowHover;
                    e.currentTarget.style.borderColor = T.text3;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.boxShadow = T.shadow;
                    e.currentTarget.style.borderColor = T.border;
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "24px",
                  background: "white",
                  borderRadius: T.radiusLg,
                  border: `2px solid ${isActive ? T.chrome : T.border}`,
                  boxShadow: isActive ? T.shadowHover : T.shadow,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: T.sans, fontSize: "14px", fontWeight: 600, color: T.text1, marginBottom: "6px" }}>
                    {meta.label}
                  </div>
                  <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, lineHeight: 1.6 }}>
                    {meta.description}
                  </div>
                </div>
                {/* Affordance arrow — rotates 90° when expanded so the card
                    reads as a disclosure control rather than a navigation link. */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    color: isActive ? T.chrome : T.text3,
                    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease, color 0.25s ease",
                  }}
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Expanded activity list */}
        {browseType && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3 }}>
                Showing <strong style={{ color: T.text1 }}>{browseActivities.length}</strong>{" "}
                {TYPE_META[browseType].descriptor.toLowerCase()} across all topics
              </div>
              <button
                onClick={() => setBrowseType(null)}
                style={{
                  fontFamily: T.sans,
                  fontSize: "12px",
                  color: T.text3,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Close
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {browseActivities.map((act) => {
                const topic = TOPICS_BY_ID[act.topic];
                if (!topic) return null;
                return (
                  <ActivityRow
                    key={act.id}
                    activity={act}
                    topic={topic}
                    isInPlaylist={has(act.id)}
                    onToggle={() => toggle(act.id)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Activity Row ───
// Compact row shown in the expanded browse list.
function ActivityRow({ activity, topic, isInPlaylist, onToggle }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "14px 18px",
        background: "white",
        borderRadius: T.radius,
        border: `1px solid ${isInPlaylist ? topic.colors.mid : T.borderLight}`,
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: topic.colors.main,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 500, color: T.text1, lineHeight: 1.4 }}>
          {activity.title}
        </div>
        <div style={{ fontFamily: T.sans, fontSize: "12px", color: T.text3, marginTop: "2px" }}>
          <Link
            to={`/topic/${topic.slug}`}
            style={{ color: topic.colors.main, fontWeight: 600, textDecoration: "none" }}
          >
            {topic.question}
          </Link>
          {activity.discipline !== "All/Interdisciplinary" && <span> · {activity.discipline}</span>}
        </div>
      </div>
      <button
        onClick={onToggle}
        title={isInPlaylist ? "Remove from playlist" : "Add to playlist"}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: `1.5px solid ${isInPlaylist ? topic.colors.main : T.border}`,
          background: isInPlaylist ? topic.colors.main : "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          {isInPlaylist ? (
            <path d="M3 6L5.5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M6 2V10M2 6H10" stroke={T.text3} strokeWidth="1.3" strokeLinecap="round" />
          )}
        </svg>
      </button>
    </div>
  );
}
