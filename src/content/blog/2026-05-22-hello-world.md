---
title: "Hello, world"
slug: hello-world
date: 2026-05-22
author: Pressing Prompts
excerpt: "A placeholder post used to validate the blog pipeline end-to-end before the real launch post replaces it."
tags: [meta, infrastructure]
hero: /blog/hello-world/hero.jpg
heroAlt: "A constellation of small colored circles, each bearing a topic icon, floating against a dark chrome background — visual shorthand for the eleven pressing questions about AI that anchor this site."
---

This is a placeholder post. It exists to exercise every part of the blog
rendering pipeline — frontmatter parsing, markdown rendering, the typography
system, the index page, the RSS feed, and the social card metadata — before
the real launch post written by Hannah, Remi, and Aria replaces it.

If you're reading this on the live site, something has gone wrong; the launch
post should have shipped first.

## A section heading

Section headings render at 28px in Instrument Serif italic, matching the
treatment used on the About page. They mark structural breaks within a post
without competing with the post title above.

Body paragraphs use the `lead` role from the type scale — 16px DM Sans — with
a prose line-height of 1.7. This pairing was added to the design system
specifically for sustained reading: long-form essays, the About narrative,
and now blog posts.

### A subsection heading

Subsection headings step down to 18px DM Sans, weight 500. The shift from
serif to sans signals a different level in the hierarchy without requiring
another italic-serif size.

## Elements that posts may use

Some posts will lean on **bold text** or *italic text* for emphasis. Inline
links to other parts of the site, like the [About page](/about) or external
references like the [WCAG 2.1 standard](https://www.w3.org/TR/WCAG21/), use
the accent color and a subtle underline.

Lists work too — unordered:

- One thing
- A second thing
- A third thing that runs a little longer to show how list items wrap when
  they exceed a single line of text

And ordered, when sequence matters:

1. First, draft the post in a shared Google Doc
2. Export to markdown when ready
3. Hand the markdown file and any images to Remi for prep and commit

> Blockquotes get a left-border accent in the chrome color and keep the
> body's upright weight, echoing the LearningNote treatment used on topic
> pages. The intent is to mark a quote as set-apart without breaking the
> reading rhythm.

Inline `code` spans appear in monospace and pick up a subtle background tint
so they read as distinct from the surrounding prose.

## What happens next

This file gets replaced by the real launch post when Hannah, Remi, and Aria
have written it together. The hero image gets replaced with whatever they
choose for the launch. The frontmatter shape stays the same — title, slug,
date, author, excerpt, tags, hero, heroAlt — and that becomes the convention
every subsequent post follows.

Until then, this post is the canary: if anything in the pipeline breaks, it
breaks here first.
