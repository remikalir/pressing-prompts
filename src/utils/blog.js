// ─── Blog utility ───
// Loads every markdown file under src/content/blog/*.md at build time
// using Vite's import.meta.glob. Each file is parsed with front-matter
// for frontmatter and marked for body HTML. The result is a static
// array of post objects that the page components consume.
//
// front-matter is used instead of the more common gray-matter because
// gray-matter depends on Node's Buffer global, which isn't defined in
// the browser and would throw at module-load time. front-matter has
// the same YAML-frontmatter capabilities with no Node dependencies.
//
// Because import.meta.glob runs at build time with eager: true, all
// posts are bundled into the JS output. No runtime fetches, no async
// loading, no network dependency. Consistent with the project's
// static-site posture.
//
// Each post object has the shape:
//   {
//     slug:        "hello-world",
//     title:       "Hello, world",
//     date:        Date object (for sorting/computation),
//     dateDisplay: "May 22, 2026" (pre-formatted for UI),
//     author:      "Pressing Prompts",
//     excerpt:     "...",
//     tags:        ["meta", "infrastructure"],
//     hero:        "/blog/hello-world/hero.jpg" | null,
//     heroAlt:     "..." | null,
//     html:        "<p>...</p>" (rendered body),
//   }

import fm from "front-matter";
import { marked } from "marked";

// Eagerly import every markdown file as a raw string. The shape of
// `modules` is { "../content/blog/2026-05-22-hello-world.md": "---\ntitle..." }.
const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Derive slug from filename: "2026-05-22-hello-world.md" → "hello-world".
function slugFromPath(path) {
  const filename = path.split("/").pop().replace(/\.md$/, "");
  // Strip leading YYYY-MM-DD- if present.
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function formatDate(date) {
  // Format in UTC to avoid timezone-shift artifacts. A frontmatter date
  // like "2026-05-22" is parsed as midnight UTC, which would display as
  // May 21 in any timezone west of UTC if we let the formatter use the
  // local timezone. Posts have a calendar date, not an instant in time.
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Parse every module once at load time. Cached for the lifetime of the app.
const POSTS = Object.entries(modules)
  .map(([path, raw]) => {
    const parsed = fm(raw);
    const data = parsed.attributes;
    const content = parsed.body;
    const slugFromFile = slugFromPath(path);

    // Sanity check: frontmatter slug should match filename-derived slug.
    if (data.slug && data.slug !== slugFromFile) {
      console.warn(
        `[blog] Slug mismatch in ${path}: frontmatter "${data.slug}" vs filename "${slugFromFile}". Using filename.`,
      );
    }

    const date = data.date instanceof Date ? data.date : new Date(data.date);

    return {
      slug: slugFromFile,
      title: data.title || "Untitled",
      date,
      dateDisplay: formatDate(date),
      author: data.author || "Pressing Prompts",
      excerpt: data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      hero: data.hero || null,
      heroAlt: data.heroAlt || null,
      html: marked.parse(content),
    };
  })
  .sort((a, b) => b.date - a.date); // Newest first.

export function getAllPosts() {
  return POSTS;
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getAllTags() {
  const tagSet = new Set();
  for (const post of POSTS) {
    for (const tag of post.tags) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}
