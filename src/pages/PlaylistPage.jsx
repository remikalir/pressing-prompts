import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import { usePlaylist } from "../context/PlaylistContext.jsx";
import {
  resolvePlaylistItems,
  buildMarkdown,
  buildLinks,
  downloadText,
  copyToClipboard,
} from "../lib/playlistExport.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";

// ─── Playlist (standalone page) ───
// Three export paths and a content-rich list view. The on-screen list,
// the print output, and the Markdown export all share the same structure:
// items grouped by topic, with active activities and Disciplinary
// Extensions rendered as per-item collapsible cards, and Conversation
// Starters grouped per topic into a single card containing the prompts
// inline (since each prompt is short enough not to need its own expand).
//
// Print: uses window.print(). Before print fires, all <details> elements
// open so the printed handout contains the full content. After print,
// they restore to whatever expand state the user had set.

export default function PlaylistPage() {
  const { playlist, remove, clear } = usePlaylist();
  const items = resolvePlaylistItems(playlist);

  // Group items by topic, preserving order of first appearance.
  // Within a topic: active and discipline items render inline; convos
  // collect into one grouped card per topic.
  const topicGroups = [];
  const topicMap = new Map();
  items.forEach((item) => {
    if (!topicMap.has(item.topic.id)) {
      const group = { topic: item.topic, active: [], discipline: [], convo: [] };
      topicMap.set(item.topic.id, group);
      topicGroups.push(group);
    }
    const g = topicMap.get(item.topic.id);
    g[item.type].push(item);
  });

  // Transient feedback state for Copy Links — flips to "Copied!" briefly.
  const [copyState, setCopyState] = useState("idle"); // idle | copied | failed

  // ─── Print expansion ───
  // Before print, force every <details class="pp-row"> open. After print,
  // restore the prior open/closed state. This keeps the user's chosen
  // expand state intact while still printing the full content.
  const detailsRef = useRef(null);
  useEffect(() => {
    const beforePrint = () => {
      const all = document.querySelectorAll("details.pp-row");
      // Stash prior state on each element
      all.forEach((d) => {
        d.dataset.priorOpen = d.open ? "1" : "0";
        d.open = true;
      });
    };
    const afterPrint = () => {
      const all = document.querySelectorAll("details.pp-row");
      all.forEach((d) => {
        if (d.dataset.priorOpen === "0") d.open = false;
        delete d.dataset.priorOpen;
      });
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);

  const handleCopy = async () => {
    const text = buildLinks(items);
    const ok = await copyToClipboard(text);
    setCopyState(ok ? "copied" : "failed");
    setTimeout(() => setCopyState("idle"), 2000);
  };

  const handleMarkdown = () => {
    const md = buildMarkdown(items);
    const date = new Date().toISOString().slice(0, 10);
    downloadText(`pressing-prompts-playlist-${date}.md`, md, "text/markdown");
  };

  const handlePrint = () => {
    window.print();
  };

  const empty = items.length === 0;

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      {/* Print stylesheet — hides chrome/UI, leaves the title and the
          (now fully-expanded) item content. */}
      <style>{`
        @media print {
          @page { margin: 0.6in; }
          body { background: white !important; }
          .playlist-page { background: white !important; }
          .playlist-page-chrome,
          .playlist-page-actions,
          .playlist-page-clear,
          .playlist-quickadd,
          nav, footer { display: none !important; }
          details.pp-row { break-inside: avoid; box-shadow: none !important; border: 1px solid #DDD !important; }
          details.pp-row > summary { cursor: default; list-style: none; }
          details.pp-row > summary::-webkit-details-marker { display: none; }
          details.pp-row .pp-row-controls { display: none !important; }
          details.pp-row .pp-row-chevron { display: none !important; }
          .pp-topic-group { break-inside: avoid-page; }
          .playlist-page h1 { font-size: 28px !important; }
          .playlist-page-section { padding: 0 !important; max-width: 100% !important; }
        }
      `}</style>

      <div className="playlist-page-chrome">
        <GrainOverlay />
        <NavBar />
      </div>

      <section
        className="playlist-page playlist-page-section"
        ref={detailsRef}
        style={{ maxWidth: "820px", margin: "0 auto", padding: "60px 32px 80px" }}
      >
        <Link
          to="/"
          className="playlist-page-chrome"
          style={{
            fontFamily: T.sans,
            fontSize: "13px",
            color: T.text3,
            textDecoration: "none",
          }}
        >
          ← Home
        </Link>

        <h1
          style={{
            fontFamily: T.serif,
            fontSize: "clamp(36px, 5vw, 52px)",
            fontStyle: "italic",
            fontWeight: 400,
            marginTop: "24px",
            marginBottom: "12px",
            color: T.text1,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Your Playlist
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: T.text2, marginBottom: "40px" }}>
          {empty
            ? "Your playlist is empty. Browse the activities on any topic page or the homepage and click the + button to add them here."
            : `${items.length} ${items.length === 1 ? "activity" : "activities"} ready to take into your classroom.`}
        </p>

        {!empty && (
          <>
            {/* ─── Export controls ─── */}
            <div
              className="playlist-page-actions"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              <ExportCard
                title="Download Markdown"
                description="A .md file with the full content of every activity — drops cleanly into an LMS."
                buttonLabel="Download .md"
                onClick={handleMarkdown}
              />
              <ExportCard
                title="Copy Links"
                description="Topic page URLs copied to your clipboard, one per line."
                buttonLabel={
                  copyState === "copied" ? "Copied ✓" : copyState === "failed" ? "Try again" : "Copy"
                }
                buttonVariant={copyState === "copied" ? "success" : "default"}
                onClick={handleCopy}
              />
              <ExportCard
                title="Print or Save PDF"
                description="Opens your browser's print dialog with the full content of every activity expanded for a clean handout."
                buttonLabel="Print…"
                onClick={handlePrint}
              />
            </div>

            {/* ─── Topic groups ─── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {topicGroups.map((group) => (
                <TopicGroup
                  key={group.topic.id}
                  group={group}
                  onRemove={remove}
                />
              ))}
            </div>

            {/* ─── Clear-all ─── */}
            <div
              className="playlist-page-clear"
              style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}
            >
              <button
                onClick={() => {
                  if (window.confirm("Clear all activities from your playlist?")) clear();
                }}
                style={{
                  fontFamily: T.sans,
                  fontSize: "13px",
                  color: T.text3,
                  background: "none",
                  border: `1px solid ${T.border}`,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Clear playlist
              </button>
            </div>
          </>
        )}
      </section>

      <div className="playlist-page-chrome">
        <Footer />
      </div>
    </div>
  );
}

// ─── Topic Group ───
// Renders one topic's worth of playlist items: a small topic header,
// then the active activities, the disciplinary extensions, and a single
// grouped Conversation Starters card.
function TopicGroup({ group, onRemove }) {
  const { topic, active, discipline, convo } = group;
  return (
    <div className="pp-topic-group">
      {/* Topic header */}
      <div style={{ marginBottom: "14px" }}>
        <Link
          to={`/topic/${topic.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: topic.colors.main,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: T.serif,
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 400,
              color: T.text1,
              lineHeight: 1.15,
            }}
          >
            {topic.question}
          </span>
        </Link>
        {topic.subtitle && (
          <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, marginTop: "4px", marginLeft: "20px" }}>
            {topic.subtitle}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {active.map((item) => (
          <ActiveRow key={item.id} item={item} onRemove={onRemove} />
        ))}
        {discipline.map((item) => (
          <DisciplineRow key={item.id} item={item} onRemove={onRemove} />
        ))}
        {convo.length > 0 && (
          <ConvoGroupRow topic={topic} convo={convo} onRemove={onRemove} />
        )}
      </div>
    </div>
  );
}

// ─── ActiveRow ───
// A Student-Centered Learning activity — collapsed shows title + tagline +
// type badge; expanded shows the full content (purpose, objectives, steps,
// online version, grading, resources).
function ActiveRow({ item, onRemove }) {
  const { topic, record } = item;
  const typeLabel = record.type === "in-class" ? "In-Class" : record.type === "online" ? "Online" : record.type;
  return (
    <details className="pp-row" style={rowStyle}>
      <summary style={summaryStyle}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={titleStyle}>{record.title}</div>
          {record.tagline && <div style={taglineStyle}>{record.tagline}</div>}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
            <Badge label="Student-Centered Learning" color={topic.colors.main} />
            {typeLabel && <Badge label={typeLabel} muted />}
          </div>
        </div>
        <RowControls onRemove={() => onRemove(item.id)} />
      </summary>
      <div style={detailBodyStyle}>
        {record.purpose && (
          <Section heading="Purpose">{paragraph(record.purpose)}</Section>
        )}
        {record.objectives && record.objectives.length > 0 && (
          <Section heading="Activity Objectives">
            <ul style={ulStyle}>
              {record.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </Section>
        )}
        {record.steps && record.steps.length > 0 && (
          <Section heading="Steps">
            <ol style={olStyle}>
              {record.steps.map((step, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  <div style={{ fontWeight: 600 }}>
                    {step.label || `Step ${i + 1}`}
                    {step.time && (
                      <span style={{ fontWeight: 400, color: T.text3, marginLeft: "8px" }}>
                        ({step.time})
                      </span>
                    )}
                  </div>
                  {step.detail && <div style={{ marginTop: "4px" }}>{step.detail}</div>}
                  {step.instructorNote && (
                    <div style={instructorNoteStyle}>
                      <strong>Learning Note:</strong> {step.instructorNote}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Section>
        )}
        {record.onlineVersion?.description && (
          <Section heading="Online Version">{paragraph(record.onlineVersion.description)}</Section>
        )}
        {record.noAIAlternative?.description && (
          <Section heading="No-AI Alternative">{paragraph(record.noAIAlternative.description)}</Section>
        )}
        {record.grading && record.grading.length > 0 && (
          <Section heading="Grading">
            <ul style={ulStyle}>
              {record.grading.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </Section>
        )}
        {record.resources && record.resources.length > 0 && (
          <Section heading="Resources">
            <ul style={ulStyle}>
              {record.resources.map((r, i) => (
                <li key={i}>
                  {r.url && r.url !== "#" ? (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      {r.title}
                    </a>
                  ) : (
                    r.title
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </details>
  );
}

// ─── DisciplineRow ───
function DisciplineRow({ item, onRemove }) {
  const { topic, record } = item;
  return (
    <details className="pp-row" style={rowStyle}>
      <summary style={summaryStyle}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={titleStyle}>Disciplinary Extension — {record.discipline}</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
            <Badge label="Disciplinary Extension" color={topic.colors.main} />
          </div>
        </div>
        <RowControls onRemove={() => onRemove(item.id)} />
      </summary>
      <div style={detailBodyStyle}>
        {record.prompt && paragraph(record.prompt)}
      </div>
    </details>
  );
}

// ─── ConvoGroupRow ───
// All Conversation Starters for one topic, presented as a single non-collapsing
// card with a numbered list. Each prompt has its own × to remove.
function ConvoGroupRow({ topic, convo, onRemove }) {
  return (
    <div
      className="pp-row"
      style={{
        ...rowStyle,
        padding: "16px 20px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <Badge label="Conversation Starters" color={topic.colors.main} />
      </div>
      <ol style={{ ...olStyle, marginTop: "8px", marginBottom: 0 }}>
        {convo.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
            <div style={{ flex: 1 }}>{item.record.prompt}</div>
            <button
              onClick={() => onRemove(item.id)}
              title="Remove from playlist"
              aria-label={`Remove conversation starter from playlist`}
              style={smallRemoveBtnStyle}
            >
              ×
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Small reusables ───

function Section({ heading, children }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: T.text3,
          marginBottom: "6px",
        }}
      >
        {heading}
      </div>
      <div style={{ fontFamily: T.sans, fontSize: "14px", color: T.text1, lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
}

function paragraph(text) {
  return <p style={{ margin: 0 }}>{text}</p>;
}

function Badge({ label, color, muted }) {
  return (
    <span
      style={{
        fontFamily: T.sans,
        fontSize: "12px",
        fontWeight: 600,
        color: muted ? T.text3 : color,
        background: muted ? T.bgWarm : (color ? `${color}14` : T.bgWarm),
        padding: "3px 8px",
        borderRadius: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {label}
    </span>
  );
}

function RowControls({ onRemove }) {
  return (
    <div className="pp-row-controls" style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
      <span
        className="pp-row-chevron"
        style={{
          fontFamily: T.sans,
          fontSize: "12px",
          color: T.text3,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginRight: "4px",
        }}
      >
        Expand
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove();
        }}
        title="Remove from playlist"
        aria-label="Remove from playlist"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          color: T.text3,
          padding: "0 8px",
          lineHeight: 1.15,
        }}
      >
        ×
      </button>
    </div>
  );
}

// ─── Export Card ───
function ExportCard({ title, description, buttonLabel, onClick, buttonVariant = "default" }) {
  return (
    <div
      style={{
        padding: "20px",
        background: "white",
        borderRadius: T.radius,
        border: `1px solid ${T.borderLight}`,
        boxShadow: T.shadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div>
        <div style={{ fontFamily: T.sans, fontSize: "14px", fontWeight: 600, color: T.text1, marginBottom: "6px" }}>
          {title}
        </div>
        <div style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, lineHeight: 1.6 }}>
          {description}
        </div>
      </div>
      <button
        onClick={onClick}
        style={{
          padding: "9px 14px",
          borderRadius: "8px",
          border: "none",
          background: buttonVariant === "success" ? T.accent : T.chrome,
          color: "white",
          fontFamily: T.sans,
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

// ─── Styles ───

const rowStyle = {
  background: "white",
  borderRadius: T.radius,
  border: `1px solid ${T.borderLight}`,
  boxShadow: T.shadow,
};

const summaryStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  padding: "16px 20px",
  cursor: "pointer",
  listStyle: "none",
};

const titleStyle = {
  fontFamily: T.sans,
  fontSize: "14px",
  fontWeight: 600,
  color: T.text1,
  lineHeight: 1.4,
};

const taglineStyle = {
  fontFamily: T.sans,
  fontSize: "13px",
  color: T.text2,
  lineHeight: 1.6,
  marginTop: "4px",
};

const detailBodyStyle = {
  padding: "0 20px 18px 20px",
  borderTop: `1px solid ${T.borderLight}`,
  paddingTop: "18px",
  marginTop: "4px",
};

const ulStyle = {
  margin: 0,
  paddingLeft: "20px",
};

const olStyle = {
  margin: 0,
  paddingLeft: "20px",
};

const instructorNoteStyle = {
  marginTop: "8px",
  padding: "10px 12px",
  background: T.bgWarm,
  borderLeft: `3px solid ${T.accent}`,
  borderRadius: "4px",
  fontSize: "13px",
  color: T.text2,
  lineHeight: 1.6,
};

const linkStyle = {
  color: T.accent,
  textDecoration: "underline",
};

const smallRemoveBtnStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  color: T.text3,
  padding: "0 4px",
  lineHeight: 1.15,
  flexShrink: 0,
};
