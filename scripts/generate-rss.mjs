// ─── RSS feed generator ───
// Reads every markdown post in src/content/blog/, parses frontmatter and
// body, and emits an RSS XML file at public/feed.xml. Runs in two places:
//
//   1. At build time via the "prebuild" npm script hook, so the deployed
//      site always ships with a fresh feed.
//   2. At dev time via a small middleware plugin in vite.config.js, so
//      /feed.xml works in `npm run dev` without a production build first.
//
// The runtime utility (src/utils/blog.js) parses the same files at
// browser-load time for the page components. This script duplicates the
// parsing logic because it runs in Node, where import.meta.glob isn't
// available. The duplication is small and contained; both call sites
// use the same front-matter and marked libraries, so output stays
// consistent.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fm from "front-matter";
import { marked } from "marked";
import { Feed } from "feed";

// Project root, regardless of where the script is invoked from.
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Site origin — every link in the feed must be absolute. RSS readers
// don't resolve relatives. Update here if the domain ever changes.
const SITE_URL = "https://pressingprompts.org";
const SITE_TITLE = "Pressing Prompts";
const SITE_DESCRIPTION =
  "Activities, resources, and pedagogical guidance for bringing AI ethics into your higher education classroom.";

const MAX_ENTRIES = 20;

function slugFromPath(filename) {
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export async function generateFeed() {
  const blogDir = path.join(ROOT, "src", "content", "blog");
  const files = (await fs.readdir(blogDir)).filter((f) => f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const raw = await fs.readFile(path.join(blogDir, filename), "utf8");
      const parsed = fm(raw);
      const data = parsed.attributes;
      const date = data.date instanceof Date ? data.date : new Date(data.date);
      return {
        slug: slugFromPath(filename),
        title: data.title || "Untitled",
        date,
        author: data.author || "Pressing Prompts",
        excerpt: data.excerpt || "",
        hero: data.hero || null,
        html: marked.parse(parsed.body),
      };
    }),
  );

  posts.sort((a, b) => b.date - a.date);
  const recent = posts.slice(0, MAX_ENTRIES);

  const feed = new Feed({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    id: SITE_URL + "/",
    link: SITE_URL + "/",
    language: "en",
    copyright: "CC BY-NC-SA 4.0",
    updated: recent.length > 0 ? recent[0].date : new Date(),
    feedLinks: { rss2: SITE_URL + "/feed.xml" },
  });

  for (const post of recent) {
    feed.addItem({
      title: post.title,
      id: SITE_URL + "/blog/" + post.slug,
      link: SITE_URL + "/blog/" + post.slug,
      description: post.excerpt,
      content: post.html,
      author: [{ name: post.author }],
      date: post.date,
      image: post.hero ? SITE_URL + post.hero : undefined,
    });
  }

  return feed.rss2();
}

export async function writeFeed() {
  const xml = await generateFeed();
  const outPath = path.join(ROOT, "public", "feed.xml");
  await fs.writeFile(outPath, xml, "utf8");
  return outPath;
}

// CLI entry: invoked directly as `node scripts/generate-rss.mjs`.
// Skipped when this module is imported (e.g. by the Vite dev plugin).
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  writeFeed()
    .then((p) => {
      console.log(`[rss] wrote ${path.relative(ROOT, p)}`);
    })
    .catch((err) => {
      console.error("[rss] failed:", err);
      process.exit(1);
    });
}
