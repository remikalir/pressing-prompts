import { T } from "../../styles/tokens.js";

// ─── Rich Blocks ───
// Specialty content that appears inside specific activities (not common
// enough to warrant top-level components). Each activity can include a
// `blocks` array with items like:
//
//   { kind: "caseStudy", title, body }
//   { kind: "keyPassage", text, source }
//   { kind: "opposingViews", left: { label, points: [] }, right: { label, points: [] } }
//   { kind: "deepfakeExamples", items: [{ label, url, caption }] }
//   { kind: "roleContext", roles: [{ role, context }] }
//   { kind: "comparisonTable", title, columns: [{ label, fillable }], rows: [{ label, lookFor }] }
//
// Any block can include an `afterStep: N` field to position it after step N
// of the activity (1-indexed). Blocks without `afterStep` render before all
// steps (default behavior). Positioning is handled by ActivityCard, not here.
//
// Unknown kinds are skipped silently so new block types can be added
// without breaking older topic files.

export default function RichBlocks({ blocks, colors }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "caseStudy":
            return <CaseStudy key={i} block={block} />;
          case "keyPassage":
            return <KeyPassage key={i} block={block} colors={colors} />;
          case "opposingViews":
            return <OpposingViews key={i} block={block} colors={colors} />;
          case "deepfakeExamples":
            return <DeepfakeExamples key={i} block={block} colors={colors} />;
          case "roleContext":
            return <RoleContext key={i} block={block} colors={colors} />;
          case "comparisonTable":
            return <ComparisonTable key={i} block={block} colors={colors} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

// ─── Case Study ───
function CaseStudy({ block }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#FFF8E1",
        border: "1px solid #FFE082",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#F57F17",
          marginBottom: "8px",
        }}
      >
        Case Study Scenario
      </div>
      {block.title && (
        <div
          style={{
            fontFamily: T.serif,
            fontSize: "18px",
            fontStyle: "italic",
            color: "#5D4037",
            marginBottom: "8px",
          }}
        >
          {block.title}
        </div>
      )}
      <div style={{ fontFamily: T.sans, fontSize: "14px", lineHeight: 1.7, color: "#5D4037" }}>
        {block.body}
      </div>
    </div>
  );
}

// ─── Key Passage ───
function KeyPassage({ block, colors }) {
  return (
    <blockquote
      style={{
        margin: 0,
        padding: "18px 24px",
        borderLeft: `3px solid ${colors.mid}`,
        background: colors.light,
        borderRadius: "0 10px 10px 0",
      }}
    >
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
          marginBottom: "8px",
        }}
      >
        Key Passage
      </div>
      <p
        style={{
          fontFamily: T.serif,
          fontSize: "14px",
          fontStyle: "italic",
          color: T.text1,
          lineHeight: 1.6,
          margin: "0 0 6px 0",
        }}
      >
        “{block.text}”
      </p>
      {block.source && (
        <cite
          style={{
            fontFamily: T.sans,
            fontSize: "12px",
            fontWeight: 600,
            color: T.text3,
            fontStyle: "normal",
          }}
        >
          — {block.source}
        </cite>
      )}
    </blockquote>
  );
}

// ─── Opposing Views ───
function OpposingViews({ block, colors }) {
  return (
    <div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
          marginBottom: "10px",
        }}
      >
        Opposing Views
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
        {[block.left, block.right].map((side, i) => (
          <div
            key={i}
            style={{
              padding: "16px 20px",
              background: "white",
              border: `1px solid ${colors.mid}`,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontFamily: T.serif,
                fontSize: "16px",
                fontStyle: "italic",
                color: colors.main,
                marginBottom: "10px",
              }}
            >
              {side.label}
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {side.points.map((pt, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily: T.sans,
                    fontSize: "13px",
                    color: T.text2,
                    lineHeight: 1.6,
                    marginBottom: "4px",
                  }}
                >
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Deepfake Examples ───
function DeepfakeExamples({ block, colors }) {
  return (
    <div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
          marginBottom: "10px",
        }}
      >
        Deepfake Examples
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        {block.items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "14px 18px",
              background: "white",
              border: `1px solid ${T.border}`,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontFamily: T.sans,
                fontSize: "12px",
                fontWeight: 600,
                color: colors.main,
                marginBottom: "6px",
              }}
            >
              {item.label}
            </div>
            <p style={{ margin: 0, fontFamily: T.sans, fontSize: "13px", color: T.text2, lineHeight: 1.6 }}>
              {item.caption}
            </p>
            {item.url && item.url !== "#" && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  fontFamily: T.sans,
                  fontSize: "12px",
                  color: colors.main,
                  textDecoration: "none",
                }}
              >
                View example ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Comparison Table ───
// A scaffolding grid for activities that ask students to compare model
// responses across multiple dimensions (e.g., the AI sycophancy activity
// comparing Cynical vs. Friendly modes). The first two columns are
// pre-filled with the dimension and "what to look for" prompt. The
// remaining columns are student fill-in spaces, marked visually with a
// faint topic-tinted background and an em-dash placeholder so the
// affordance is unambiguous.
//
// Schema:
//   {
//     kind: "comparisonTable",
//     title: "Compare responses across modes",
//     columns: [{ label: "Cynical Mode", fillable: true }, { label: "Friendly Mode", fillable: true }],
//     rows: [{ label: "Position Toward User", lookFor: "Does the model agree, disagree...?" }, ...]
//   }
//
// `fillable` columns get the student-fillable styling. Real semantic
// table markup with <thead>, <tbody>, <th scope=...>, <td> ensures
// screen readers announce structure correctly.
function ComparisonTable({ block, colors }) {
  const cols = block.columns || [];
  const rows = block.rows || [];
  return (
    <div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
          marginBottom: "10px",
        }}
      >
        Comparison Table
      </div>
      {block.title && (
        <div
          style={{
            fontFamily: T.serif,
            fontSize: "16px",
            fontStyle: "italic",
            color: T.text1,
            marginBottom: "12px",
          }}
        >
          {block.title}
        </div>
      )}
      {/* Horizontal scroll wrapper handles narrow viewports without
          breaking the grid; on desktop the table fits naturally. */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: T.sans,
            fontSize: "13px",
            background: "white",
            border: `1px solid ${T.border}`,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: colors.light }}>
              <th
                scope="col"
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  fontWeight: 600,
                  color: colors.main,
                  borderBottom: `1px solid ${colors.mid}`,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Dimension
              </th>
              <th
                scope="col"
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  fontWeight: 600,
                  color: colors.main,
                  borderBottom: `1px solid ${colors.mid}`,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                What to Look For
              </th>
              {cols.map((c, i) => (
                <th
                  key={i}
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "10px 14px",
                    fontWeight: 600,
                    color: colors.main,
                    borderBottom: `1px solid ${colors.mid}`,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <th
                  scope="row"
                  style={{
                    padding: "12px 14px",
                    textAlign: "left",
                    verticalAlign: "top",
                    fontWeight: 600,
                    color: T.text1,
                    width: "20%",
                  }}
                >
                  {r.label}
                </th>
                <td
                  style={{
                    padding: "12px 14px",
                    verticalAlign: "top",
                    color: T.text2,
                    fontStyle: "italic",
                    width: "30%",
                  }}
                >
                  {r.lookFor}
                </td>
                {cols.map((c, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "12px 14px",
                      verticalAlign: "top",
                      width: "25%",
                      background: c.fillable ? colors.light : "transparent",
                      color: T.text3,
                      fontStyle: "italic",
                      opacity: 0.6,
                    }}
                  >
                    —
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function RoleContext({ block, colors }) {
  return (
    <div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.main,
          marginBottom: "10px",
        }}
      >
        Assigned Roles &amp; Contexts
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
        {block.roles.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "14px 18px",
              background: colors.light,
              border: `1px solid ${colors.mid}`,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontFamily: T.sans,
                fontSize: "13px",
                fontWeight: 600,
                color: colors.main,
                marginBottom: "4px",
              }}
            >
              {r.role}
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: T.sans,
                fontSize: "13px",
                color: T.text2,
                lineHeight: 1.6,
              }}
            >
              {r.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
