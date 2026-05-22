import { T } from "../../styles/tokens.js";

// ─── PostBody ───
// Renders the marked-parsed HTML body of a blog post with full typography
// applied via a scoped CSS block. We can't use inline React styles for
// content that came from markdown — it arrives as an HTML string. The
// scoped style block (selectors all prefixed with .blog-prose) keeps these
// styles from leaking into the rest of the app.
//
// dangerouslySetInnerHTML is the standard React escape hatch for
// HTML-from-markdown. Safe here because the markdown source is
// project-controlled (committed in src/content/blog/), not user input.

export default function PostBody({ html }) {
  return (
    <>
      <style>{`
        .blog-prose {
          font-family: ${T.sans};
          font-size: ${T.type.lead.fontSize};
          line-height: ${T.lineHeightProse};
          color: ${T.text2};
        }
        .blog-prose > * {
          margin-top: 0;
          margin-bottom: 1.25em;
        }
        .blog-prose > *:last-child {
          margin-bottom: 0;
        }

        /* H2 — section heading. Matches AboutPage's 28px serif italic. */
        .blog-prose h2 {
          font-family: ${T.serif};
          font-style: italic;
          font-size: 28px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: ${T.weight.regular};
          color: ${T.text1};
          margin-top: 1.8em;
          margin-bottom: 0.6em;
        }
        .blog-prose h2:first-child {
          margin-top: 0;
        }

        /* H3 — subsection heading. Sans, weight 500, marks a category shift. */
        .blog-prose h3 {
          font-family: ${T.sans};
          font-size: 18px;
          font-weight: ${T.weight.medium};
          line-height: 1.4;
          color: ${T.text1};
          margin-top: 1.6em;
          margin-bottom: 0.5em;
        }

        /* Links — accent color with a subtle underline. */
        .blog-prose a {
          color: ${T.accent};
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .blog-prose a:hover {
          color: ${T.text1};
        }

        /* Strong and em — inline emphasis. */
        .blog-prose strong {
          font-weight: ${T.weight.bold};
          color: ${T.text1};
        }
        .blog-prose em {
          font-style: italic;
        }

        /* Lists — preserve prose rhythm; list items wrap at the same
           line-height as paragraphs. */
        .blog-prose ul,
        .blog-prose ol {
          padding-left: 1.6em;
        }
        .blog-prose li {
          margin-bottom: 0.4em;
        }
        .blog-prose li:last-child {
          margin-bottom: 0;
        }

        /* Blockquote — left-border accent in chrome color, prose stays upright.
           Echoes the LearningNote treatment on topic pages. */
        .blog-prose blockquote {
          border-left: 3px solid ${T.chrome};
          padding: 0.2em 0 0.2em 1.2em;
          margin-left: 0;
          color: ${T.text1};
        }
        .blog-prose blockquote > *:last-child {
          margin-bottom: 0;
        }

        /* Inline code — subtle background, monospace. */
        .blog-prose code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.92em;
          background: ${T.bgWarm};
          padding: 0.1em 0.4em;
          border-radius: 4px;
          color: ${T.text1};
        }

        /* Block code (if a post ever uses fenced code blocks). */
        .blog-prose pre {
          background: ${T.bgWarm};
          border: 1px solid ${T.border};
          border-radius: ${T.radius};
          padding: 16px 20px;
          overflow-x: auto;
          font-size: 13px;
          line-height: 1.5;
        }
        .blog-prose pre code {
          background: transparent;
          padding: 0;
          border-radius: 0;
          font-size: inherit;
        }

        /* Images inline in body — full width of the column, with rounded
           corners and the standard shadow. Captions, if used via the
           markdown image title attribute, are not styled here; for a
           caption, the author writes the figure in HTML. */
        .blog-prose img {
          max-width: 100%;
          height: auto;
          border-radius: ${T.radius};
          margin: 0.5em 0;
        }

        /* Horizontal rule — used very sparingly. */
        .blog-prose hr {
          border: 0;
          border-top: 1px solid ${T.border};
          margin: 2em 0;
        }
      `}</style>
      <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
