# Pressing Prompts

An independently-branded, openly accessible learning experience focused on AI ethics for higher education.

> Pressing Prompts was incubated at Duke University during the 2024–25 academic year through a collaboration between Duke University Libraries and the Center for Teaching and Learning.

## Quick start

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

To build for production:

```bash
npm run build
```

The output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
├── main.jsx                    entry point
├── App.jsx                     routes (BrowserRouter; see "Routing" below)
├── styles/
│   ├── tokens.js               shared design tokens (the T object)
│   └── global.css              fonts, resets, keyframes
├── data/
│   ├── topics.js               topic metadata (colors, slugs, clusters)
│   ├── clusters.js             the three thematic clusters
│   ├── browseActivities.js     flat activity index, derived from topicContent
│   └── topicContent/           full content modules, one per topic
│       └── index.js            registry
├── content/
│   └── blog/                   blog posts as YYYY-MM-DD-<slug>.md
├── components/
│   ├── layout/                 NavBar, Footer, GrainOverlay
│   ├── topic/                  LearningNote, ActivityCard, StepItem, etc.
│   ├── home/                   homepage components, incl. TopicConstellation
│   ├── blog/                   PostBody, PostMeta
│   ├── icons/                  TopicIcon — one SVG icon per topic, keyed by id
│   └── illustrations/          one SVG component per topic
├── context/
│   └── PlaylistContext.jsx     session-only playlist state
├── lib/
│   └── playlistExport.js       client-side playlist exports (Markdown, links, copy)
├── utils/
│   ├── blog.js                 loads and parses posts at build time
│   └── markdown.js             inline markdown helpers
└── pages/
    ├── HomePage.jsx
    ├── TopicPage.jsx           generic data-driven template
    ├── AboutPage.jsx
    ├── PrivacyPage.jsx
    ├── BlogPage.jsx            blog index
    ├── BlogPostPage.jsx        single post
    ├── PlaylistPage.jsx        standalone playlist with export and print
    └── NotFoundPage.jsx
```

Outside `src/`: `public/` holds static assets (including `404.html`, the SPA fallback, and `CNAME`, which keeps the custom domain), `scripts/generate-rss.mjs` writes `public/feed.xml` before each build, and `docs/` holds the design system and project documentation.

## Routing

The site uses `BrowserRouter` for clean URLs. GitHub Pages has no SPA routing, so `public/404.html` redirects unknown paths to `/` with the original path encoded in a query string, and an inline script in `index.html` restores it before React Router boots. Keep `base: "/"` in `vite.config.js`.

## Blog

Posts live in `src/content/blog/` and are bundled at build time — no runtime fetching. See `docs/AUTHORING.md` for the authoring workflow, frontmatter, and image conventions. The RSS feed is generated at build time and is not committed.

## Adding a topic

1. Add the topic's metadata (id, slug, number, question, subtitle, cluster, colors) to `src/data/topics.js`. Read `docs/PALETTE.md` before choosing colors.
2. Create the illustration component at `src/components/illustrations/<Name>Illustration.jsx`. See `docs/ILLUSTRATIONS.md`, and add a change-log entry there.
3. Register the topic's icon in `src/components/icons/TopicIcon.jsx`, keyed by the same id.
4. Create the content module at `src/data/topicContent/<id>.js` — use `bias.js` as the reference shape — and set its `Illustration` property to the new component.
5. Register the content in `src/data/topicContent/index.js`.
6. Check the homepage constellation. `TopicConstellation.jsx` lays out topics generatively from `TOPICS.length`, cycling radius, size, and animation by `i % 3`. When the topic count is a multiple of three, that cycle repeats evenly around the circle and the scatter turns visibly symmetric — decide how to handle that before shipping.

The generic `TopicPage` template, the activity browser, and the playlist pick up the new topic automatically. The static share images (`public/og-image.png` and the launch blog hero) draw the constellation by hand and need to be regenerated separately.

## Vocabulary

- **Topic** — a thematic unit (e.g., "Is AI Biased?"). Each topic is one page.
- **Prompt** — the question a topic poses, and the conversation starters within it.
- **The Question / Activities / Learning Notes** — the three layers of every topic page.
- **Student-Centered Learning** — the activity type for full structured activities (distinct from Conversation Starters and Disciplinary Extensions).
- **Cluster** — Trust & Truth, Power & Access, or Self & Society. Topics belong to clusters; clusters are how the homepage groups them.

## Privacy principles

No localStorage, sessionStorage, cookies, accounts, analytics, or tracking. Playlist state exists only in React state during the session. Export features generate files client-side.

## License

- **Content**: CC BY-NC-SA 4.0
- **Code**: MIT
