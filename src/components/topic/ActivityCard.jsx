import { useState, Fragment } from "react";
import { T } from "../../styles/tokens.js";
import TypeBadge from "./TypeBadge.jsx";
import ActivityNumber from "./ActivityNumber.jsx";
import StepItem from "./StepItem.jsx";
import LearningNote from "./LearningNote.jsx";
import NoAIAlternative from "./NoAIAlternative.jsx";
import SharedFrameworkBadge from "./SharedFrameworkBadge.jsx";
import RichBlocks from "./RichBlocks.jsx";

// ─── Activity Card ───
// Expandable accordion for a single activity. When expanded, shows:
// Purpose → Activity Objectives → (optional modality toggle) → Steps
// or Online Version → No AI Alternative → Grading (in Learning Notes)
// → Resources.

export default function ActivityCard({ activity, expanded, onToggle, showNotes, colors }) {
  const [showOnline, setShowOnline] = useState(false);
  const hasOnlineVersion = Boolean(activity.onlineVersion);

  return (
    <div
      style={{
        background: "white",
        borderRadius: T.radiusLg,
        border: `1px solid ${expanded ? colors.mid : T.border}`,
        boxShadow: expanded ? T.shadowDeep : T.shadow,
        transition: "all 0.35s ease",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "24px 28px",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <ActivityNumber n={activity.number} colors={colors} />
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "6px",
              flexWrap: "wrap",
            }}
          >
            <TypeBadge type={activity.type} />
            {activity.multiSession && (
              <MiniPill background="#EDE7F6" color="#5E35B1">Multi-Session</MiniPill>
            )}
            {activity.addOn && (
              <MiniPill background="#E0F7FA" color="#00838F">Add-On</MiniPill>
            )}
            {hasOnlineVersion && activity.type === "in-class" && (
              <span style={{ fontSize: "12px", fontFamily: T.sans, color: T.text3, fontWeight: 500 }}>
                + online version
              </span>
            )}
            {activity.noAIAlternative && (
              <span style={{ fontSize: "12px", fontFamily: T.sans, color: "#F57F17", fontWeight: 600 }}>
                ⊘ no-AI option
              </span>
            )}
          </div>
          <h3
            style={{
              margin: "0 0 4px 0",
              fontFamily: T.serif,
              fontSize: "22px",
              fontWeight: 400,
              color: T.text1,
              fontStyle: "italic",
            }}
          >
            {activity.title}
          </h3>
          <p style={{ margin: 0, fontFamily: T.sans, fontSize: "14px", color: T.text2, lineHeight: 1.6 }}>
            {activity.tagline}
          </p>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            flexShrink: 0,
            marginTop: "4px",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <path d="M5 8L10 13L15 8" stroke={T.text3} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {expanded && (
        <div style={{ padding: "0 28px 28px", animation: "fadeIn 0.3s ease" }}>
          <div style={{ height: "1px", background: T.border, marginBottom: "24px" }} />

          <SectionHeader color={colors.main}>Purpose</SectionHeader>
          <p style={{ margin: "8px 0 28px", fontFamily: T.sans, fontSize: "14px", lineHeight: 1.7, color: T.text1 }}>
            {activity.purpose}
          </p>

          <SectionHeader color={colors.main}>Activity Objectives</SectionHeader>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", marginBottom: "28px" }}>
            {activity.objectives.map((obj, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ color: T.accent, fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: T.sans, fontSize: "13px", lineHeight: 1.6, color: T.text2 }}>{obj}</span>
              </div>
            ))}
          </div>

          {/* Shared framework badge (SNIFF / Jigsaw / Confirmation Bias) */}
          {activity.sharedFramework && (
            <SharedFrameworkBadge framework={activity.sharedFramework} colors={colors} />
          )}

          {/* Specialty rich blocks (case study, key passage, opposing views, etc).
              Blocks WITHOUT `afterStep` render here, before the steps. Blocks WITH
              `afterStep: N` are interleaved between steps below. */}
          {activity.blocks && (
            <RichBlocks
              blocks={activity.blocks.filter((b) => !b.afterStep)}
              colors={colors}
            />
          )}

          {/* Modality toggle */}
          {hasOnlineVersion && (
            <div
              style={{
                display: "flex",
                gap: "0",
                marginBottom: "24px",
                background: T.bgWarm,
                borderRadius: "8px",
                padding: "3px",
              }}
            >
              <ModalityButton active={!showOnline} onClick={() => setShowOnline(false)}>
                ● In-Class Version
              </ModalityButton>
              <ModalityButton active={showOnline} onClick={() => setShowOnline(true)}>
                ◐ Online Version
              </ModalityButton>
            </div>
          )}

          {(!showOnline || !hasOnlineVersion) ? (
            <div style={{ marginBottom: "24px" }}>
              <SectionHeader color={colors.main}>Activity Steps</SectionHeader>
              <div style={{ marginTop: "16px" }}>
                {activity.steps.map((step, i) => {
                  // Blocks targeting "after step N" (1-indexed in the data,
                  // matched against i+1 here). Multiple blocks at the same
                  // anchor render in their declared order.
                  const stepBlocks = (activity.blocks || []).filter(
                    (b) => b.afterStep === i + 1
                  );
                  return (
                    <Fragment key={i}>
                      <StepItem
                        step={step}
                        index={i}
                        showNotes={showNotes}
                        colors={colors}
                        isLast={i === activity.steps.length - 1}
                      />
                      {stepBlocks.length > 0 && (
                        <div style={{ margin: "16px 0 16px 52px" }}>
                          <RichBlocks blocks={stepBlocks} colors={colors} />
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ marginBottom: "24px" }}>
              <SectionHeader color={colors.main}>Online Version</SectionHeader>
              <p
                style={{
                  margin: "12px 0 0",
                  fontFamily: T.sans,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: T.text1,
                  padding: "16px 20px",
                  background: T.bgWarm,
                  borderRadius: "10px",
                }}
              >
                {activity.onlineVersion.description}
              </p>
            </div>
          )}

          <NoAIAlternative alternative={activity.noAIAlternative} />

          <LearningNote visible={showNotes} title="Grading Criteria">
            {activity.grading.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "4px" }}>
                <span style={{ opacity: 0.5, fontSize: "12px", marginTop: "1px" }}>✓</span>
                <span style={{ fontSize: "13px", lineHeight: 1.6 }}>{c}</span>
              </div>
            ))}
          </LearningNote>

          {activity.resources.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <SectionHeader color={colors.main}>Resources</SectionHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px" }}>
                {activity.resources.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: T.sans,
                      fontSize: "13px",
                      color: colors.main,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {r.title} <span style={{ fontSize: "12px", opacity: 0.6 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ children, color }) {
  return (
    <h4
      style={{
        margin: "0 0 0 0",
        fontFamily: T.sans,
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color,
      }}
    >
      {children}
    </h4>
  );
}

function ModalityButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        fontFamily: T.sans,
        fontSize: "13px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        background: active ? "white" : "transparent",
        color: active ? T.text1 : T.text3,
        boxShadow: active ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function MiniPill({ children, background, color }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontFamily: T.sans,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background,
        color,
      }}
    >
      {children}
    </span>
  );
}
