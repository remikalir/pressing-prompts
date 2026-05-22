// ─── Blog utility ───
// Loads every markdown file under src/content/blog/*.md at build time
// using Vite's import.meta.glob. Each file is parsed with gray-matter
// for frontmatter and marked for body HTML. The result is a static
// array of post objects that the page components consume.
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

import matter from "gray-matter";
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
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Parse every module once at load time. Cached for the lifetime of the app.
const POSTS = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
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
