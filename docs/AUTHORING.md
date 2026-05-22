# Blog Authoring Guide

A reference for the Pressing Prompts team on producing blog posts. Covers
the writing workflow, frontmatter shape, image practices, and common
gotchas.

This file documents conventions. The infrastructure that consumes these
posts lives in `src/utils/blog.js`, `src/pages/BlogPage.jsx`,
`src/pages/BlogPostPage.jsx`, and `scripts/generate-rss.mjs`.

---

## The writing workflow

Posts move through four stages, with the team handling stages 1 and 2 and
Remi handling stages 3 and 4.

### Stage 1 — Draft (team, in Google Docs)

Draft the post in a shared Google Doc. Use plain text formatting:
headings via the Doc's heading styles, lists, bold and italic where
appropriate. Include placeholder markers where images go:

> [IMAGE: a photo of the team in front of the Duke library, smiling,
> outdoors, warm afternoon light]

Aim for 600–1500 words. Shorter posts (announcements, brief updates) are
fine; longer posts (substantive essays) are also fine. The form follows
the content.

### Stage 2 — Export to markdown (team)

When the draft is ready:

1. In Google Docs, `File → Download → Markdown (.md)`.
2. Send the markdown file to Remi.
3. Send any images separately. Keep their original filenames; Remi will
   rename and resize. Each image needs a brief description of what's in
   it, for alt text.

### Stage 3 — Image prep and frontmatter (Remi)

Remi handles:

- Resizing images to ~1200px wide for inline shots, exactly 1200×675 for
  heroes
- Compressing to under 200KB (inline) or 300KB (hero) using Squoosh.app
- Renaming to lowercase-with-hyphens (e.g. `team-photo.jpg`)
- Placing images in `public/blog/<post-slug>/`
- Replacing `[IMAGE: ...]` placeholders in markdown with proper
  `![alt text](path)` references
- Adding the frontmatter block at the top of the markdown file
- Saving the file as `src/content/blog/YYYY-MM-DD-<slug>.md`

### Stage 4 — Commit and publish (Remi)

```
git add src/content/blog/ public/blog/
git commit -m "Add post: <title>"
git push
```

The push triggers a GitHub Actions build, which generates the RSS feed
and deploys the site. Typically live within five minutes.

---

## Frontmatter shape

Every post starts with a YAML frontmatter block delimited by `---`:

```yaml
---
title: "Pressing Prompts is here"
slug: launch-announcement
date: 2026-06-15
author: Hannah Rozear, Remi Kalir, and Aria Chernik
excerpt: "A short paragraph for index pages and OG cards."
tags: [launch, pedagogy]
hero: /blog/launch-announcement/hero.jpg
heroAlt: "Description of the hero image for accessibility."
---
```

Field-by-field:

- **`title`** — The post title. Sentence case, no period. Quoted because
  it may contain colons or other YAML-meaningful characters.
- **`slug`** — URL identifier. Lowercase, hyphens-not-underscores, no
  date prefix. Must match the slug portion of the filename. The post
  lives at `https://pressingprompts.org/blog/<slug>`.
- **`date`** — `YYYY-MM-DD`. The publication date, not the draft date.
  Used for sort order and RSS timestamps.
- **`author`** — Author name(s). Single string. For co-authored posts,
  format as `"Hannah Rozear, Remi Kalir, and Aria Chernik"`.
- **`excerpt`** — One to two sentences. Appears on the index page below
  the title, and as the description in social cards and RSS feeds. Keep
  under 200 characters; it gets clipped in some contexts.
- **`tags`** — Array of lowercase tag strings. No spaces in tags; use
  hyphens (e.g. `ai-ethics`, not `ai ethics`). Tags don't yet have a
  filtering UI but are rendered on individual posts.
- **`hero`** — Optional. Absolute path from the site root to the hero
  image. If omitted, the post renders without a hero (both on the index
  thumbnail and on the post page itself).
- **`heroAlt`** — Required if `hero` is set. Descriptive alt text for
  the hero image. Describes what's in the image, not "image of...".

---

## Filename conventions

- Markdown files: `src/content/blog/YYYY-MM-DD-<slug>.md`
- Image folders: `public/blog/<slug>/` (no date prefix on the folder)
- Image files: lowercase-with-hyphens (e.g. `hero.jpg`, `team-photo.jpg`)

The date prefix on markdown filenames keeps the folder sorted
chronologically when browsing. The slug in the URL is just `<slug>` —
the date prefix is stripped at build time.

---

## Image practices

### Format

- **JPEG** for photos
- **PNG** for diagrams, screenshots with text, illustrations with hard
  edges
- **SVG** for vector illustrations

WebP and AVIF have rough patches in social-card scraper compatibility;
stick to JPEG and PNG for anything that might be shared.

### Dimensions

- **Hero images:** exactly 1200×675 pixels (16:9 aspect ratio). Sized
  for both the post page and Open Graph social cards.
- **Inline images:** up to ~1200px wide. Smaller is fine if the source
  is smaller; never upscale.

Anything significantly larger than these targets is wasted bandwidth.

### File size

- **Inline images:** under 200KB
- **Hero images:** under 300KB

[Squoosh.app](https://squoosh.app) is the easiest tool — drag image in,
adjust quality slider, download. JPEG quality 80 usually hits the
target with no visible quality loss.

### Alt text

Every image needs descriptive alt text. The convention:

- In markdown body: `![alt text in the brackets](path)`
- For hero images: `heroAlt: "..."` in frontmatter

Describe what's *in* the image, not the fact that it's an image.

- ✓ "A photograph of three people seated around a table covered in
     printed activity guides."
- ✗ "Image of the team meeting."

If an image is purely decorative — adds no information — use empty alt
text: `![]( path )`. This is rare for editorial content; usually images
have meaningful content.

### Safe zone for heroes

Keep important visual content away from the outer 5% of the image. Open
Graph scrapers may crop slightly when displaying as social cards.
Don't put faces or critical text right at the edge.

### Filename hygiene

- Lowercase
- Hyphens, not spaces or underscores
- Descriptive: `team-photo-summer-2026.jpg`, not `IMG_4823.jpeg`

Spaces in filenames cause URL-encoding ugliness (`%20` in paths) and
break in places you don't expect.

---

## What markdown supports

The blog renderer handles standard markdown elements. Some authoring
notes:

- **Headings:** `##` for section headings, `###` for subsections. Don't
  use `#` — that's reserved for the post title, which comes from
  frontmatter.
- **Bold and italic:** `**bold**` and `*italic*`.
- **Links:** `[text](url)`. Internal links (to other parts of the site)
  use absolute paths starting with `/`, e.g. `[About](/about)`.
  External links should use full URLs starting with `https://`.
- **Lists:** unordered with `-`, ordered with `1.`. Items can wrap
  across multiple lines if indented consistently.
- **Blockquotes:** lines starting with `>`. Renders with a left-border
  accent.
- **Images:** `![alt](path)`. Inline images display at full column
  width.
- **Inline code:** backticks around `code`. Renders in monospace with a
  subtle background tint.

---

## Common gotchas

### Date timezone

Dates in frontmatter are interpreted as midnight UTC. This means
posting on `2026-06-15` shows up correctly as June 15 in any timezone.
Don't add a time component.

### Missing hero on index thumbnails

If `hero` is set but the image file doesn't exist at the specified
path, the index page renders a blank thumbnail box. Always verify the
image is in `public/blog/<slug>/` before committing.

### Slug mismatches

If the frontmatter `slug` doesn't match the slug portion of the
filename, the build logs a warning to the browser console and uses the
filename's slug. Easier to just make sure they match.

### Long titles

Very long titles wrap on the index but can look awkward in social cards
(OG cards crop at ~70 characters). Aim for titles under 70 characters
when possible.

### Drafts

There's no "draft" state. A markdown file in `src/content/blog/`
appears on the live site as soon as it's committed and pushed. To work
on a draft without publishing:

- Keep it in Google Docs until ready, or
- Create a branch (`git checkout -b draft-post-name`) and commit
  there; merge to main when ready to publish.

---

## Previewing before commit

Always preview a post locally before committing:

```
cd ~/projects/pressing-prompts
npm run dev
```

Then visit `http://localhost:5173/blog` to see the index, and click
through to your post. Check:

- Frontmatter parses (no missing title or broken metadata)
- Hero image loads
- Inline images load
- Links work
- Section headings render at the right size
- Lists, blockquotes, etc. all look right

If anything looks broken, fix it before committing.

---

## When this guide is wrong

If you find yourself doing something this guide doesn't cover, or
working around something it says, that's a signal the guide needs
updating. Edit `docs/AUTHORING.md` directly and commit the change
alongside whatever else you're working on. The guide is meant to
reflect actual practice, not aspirational practice.
