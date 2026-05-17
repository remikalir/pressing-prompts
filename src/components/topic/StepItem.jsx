import { T } from "../../styles/tokens.js";
import LearningNote from "./LearningNote.jsx";

// ─── Step Item ───
// A single step in an activity timeline. Numbered circle, label, detail,
// optional time pill, optional instructor-facing Learning Note.

export default function StepItem({ step, index, showNotes, colors, isLast }) {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "32px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: `2px solid ${colors.mid}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 600,
            fontFamily: T.sans,
            color: colors.main,
            background: "white",
            flexShrink: 0,
          }}
        >
          {index + 1}
        </div>
        {!isLast && (
          <div
            style={{
              width: "2px",
              flex: 1,
              background: colors.mid,
              opacity: 0.3,
              marginTop: "4px",
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : "24px", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: T.sans,
              fontSize: "14px",
              fontWeight: 600,
              color: T.text1,
            }}
          >
            {step.label}
          </span>
          {step.time && (
            <span
              style={{
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                color: T.text3,
                background: T.bgWarm,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              {step.time}
            </span>
          )}
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: 1.7,
            fontFamily: T.sans,
            color: T.text2,
          }}
        >
          {step.detail}
        </p>
        {step.instructorNote && (
          <LearningNote visible={showNotes}>{step.instructorNote}</LearningNote>
        )}
      </div>
    </div>
  );
}
