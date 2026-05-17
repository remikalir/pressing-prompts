import { T } from "../../styles/tokens.js";
import { renderInlineMarkdown } from "../../utils/markdown.js";

// ─── Page Notes ───
// Citations and notes referenced by [^N] markers elsewhere on the topic page
// (the expert quote, the introduction, etc.). Renders as a numbered list at
// the bottom of the topic, just above the footer.
//
// Each note's `text` is run through the shared inline markdown helper, which
// supports italics, bold, and Markdown links — the standard citation
// typography we need for scholarly attribution.
//
// The id="page-note-N" anchors here are the targets for the superscript
// markers' href="#page-note-N" anchors elsewhere on the page.

export default function PageNotes({ notes, colors }) {
  if (!Array.isArray(notes) || notes.length === 0) return null;

  return (
    <div
      className="pp-page-notes"
      style={{
        padding: "28px",
        background: "white",
        borderRadius: T.radiusLg,
        border: `1px solid ${T.border}`,
        boxShadow: T.shadow,
      }}
    >
      {/* Scoped link styling — embedded [text](url) links inside note bodies
          are rendered via dangerouslySetInnerHTML, so we can't apply inline
          styles directly. A scoped <style> block is the cleanest way to make
          those links visibly clickable (underline + topic accent color)
          without leaking to other components. */}
      <style>{`
        .pp-page-notes li a {
          color: ${colors.main};
          text-decoration: underline;
          text-underline-offset: 2px;
          text-decoration-thickness: 1px;
        }
        .pp-page-notes li a:hover {
          text-decoration-thickness: 2px;
        }
      `}</style>
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
        Page Notes
      </h4>
      <ol
        style={{
          margin: 0,
          paddingLeft: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          counterReset: "page-note",
        }}
      >
        {notes.map((note) => (
          <li
            key={note.id}
            id={`page-note-${note.id}`}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              scrollMarginTop: "80px",
            }}
          >
            <span
              style={{
                fontFamily: T.serif,
                fontSize: "14px",
                fontStyle: "italic",
                color: colors.mid,
                flexShrink: 0,
                lineHeight: 1.7,
                minWidth: "20px",
              }}
              aria-hidden="true"
            >
              {note.id}.
            </span>
            <p
              style={{
                margin: 0,
                fontFamily: T.sans,
                fontSize: "13px",
                lineHeight: 1.7,
                color: T.text2,
              }}
              dangerouslySetInnerHTML={{
                __html: renderInlineMarkdown(note.text),
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
