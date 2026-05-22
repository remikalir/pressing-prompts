import { T } from "../../styles/tokens.js";

// ─── PostMeta ───
// Byline · date · tags. Used on the blog index (per entry) and on
// individual post pages (under the title). Single line on wide screens,
// wraps naturally on narrow. Tags render as quiet eyebrow-style labels
// matching the metadata-label treatment used elsewhere on the site.

export default function PostMeta({ author, dateDisplay, tags, showTags = true }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "8px 14px",
        fontFamily: T.sans,
        fontSize: "12px",
        color: T.text3,
        lineHeight: 1.4,
      }}
    >
      <span style={{ fontWeight: T.weight.medium, color: T.text2 }}>{author}</span>
      <span aria-hidden="true">·</span>
      <time>{dateDisplay}</time>
      {showTags && tags && tags.length > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "10px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  fontWeight: T.weight.medium,
                  color: T.text3,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </span>
            ))}
          </span>
        </>
      )}
    </div>
  );
}
