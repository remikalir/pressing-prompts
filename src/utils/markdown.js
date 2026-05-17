// ─── Inline markdown rendering ───
// Patterns supported, in the order they're processed:
//   1. HTML escaping (& < >)              — must run first
//   2. Footnote markers   [^N]            — rendered as superscript anchor
//                                            linking to #page-note-N
//   3. Markdown links     [text](url)     — rendered as <a> with target=_blank
//   4. Bold               **text**        — rendered as <strong>
//   5. Italic             *text*          — rendered as <em>
//
// The footnote-marker pattern intentionally runs before the generic link
// pattern so that [^1] never gets misread by the [text](url) regex (which
// requires a paren group anyway, but explicit ordering keeps this safe
// against future regex tweaks).
//
// External links open in a new tab and are decorated with the security
// attributes recommended by WCAG / browsers: rel="noopener noreferrer".

export function renderInlineMarkdown(s) {
  if (typeof s !== "string") return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /\[\^(\d+)\]/g,
      (_match, n) =>
        `<sup class="page-note-ref"><a href="#page-note-${n}" id="page-note-ref-${n}" aria-label="Footnote ${n}, jump to Page Notes">${n}</a></sup>`
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_match, text, url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
    )
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

// ─── Quote-with-trailing-footnote rendering ───
// Scholarly typography puts the footnote marker AFTER the closing quotation
// mark, not inside it: "...digital future."¹ rather than "...digital future.¹"
// Since our quote rendering wraps text with curly quotes, we need to peel any
// trailing [^N] marker off the end of the source text before wrapping, then
// append it after the closing quote. Multi-marker trailing groups (rare but
// possible — e.g., [^1][^2]) are handled as a unit. Markers anywhere other
// than the very end of the string flow through normally via renderInlineMarkdown.
export function renderQuoteHtml(text) {
  if (typeof text !== "string") return "";
  const trailing = text.match(/^([\s\S]*?)\s*((?:\[\^\d+\])+)\s*$/);
  if (trailing) {
    const body = trailing[1];
    const markers = trailing[2];
    return `&ldquo;${renderInlineMarkdown(body)}&rdquo;${renderInlineMarkdown(markers)}`;
  }
  return `&ldquo;${renderInlineMarkdown(text)}&rdquo;`;
}
