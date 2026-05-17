import { T } from "../../styles/tokens.js";

// ─── Layer Indicator ───
// Shows where the reader is in the The Question → Activities → Learning
// Notes flow. Takes topic colors as a prop so it works for any topic.
//
// Layer ids are referenced by TopicPage's scroll-position logic.

const LAYERS = [
  { id: "question", label: "The Question" },
  { id: "activities", label: "Activities" },
  { id: "notes", label: "Learning Notes" },
];

export default function LayerIndicator({ activeLayer, colors }) {
  const dotColor = (layerId) => {
    if (activeLayer === layerId) return colors.main;
    if (activeLayer === "notes" && layerId !== "notes") return colors.mid;
    if (activeLayer === "activities" && layerId === "question") return colors.mid;
    return T.border;
  };

  return (
    <div className="layer-indicator" style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {LAYERS.map((l, i) => (
        <div key={l.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: dotColor(l.id),
              transition: "all 0.3s ease",
            }}
          />
          <span
            className="layer-indicator-label"
            style={{
              fontFamily: T.sans,
              fontSize: "12px",
              fontWeight: 600,
              color: activeLayer === l.id ? colors.main : "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              transition: "color 0.3s ease",
            }}
          >
            {l.label}
          </span>
          {i < LAYERS.length - 1 && (
            <div className="layer-indicator-sep" style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.2)", margin: "0 2px" }} />
          )}
        </div>
      ))}
    </div>
  );
}
