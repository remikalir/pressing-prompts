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
├── App.jsx                     routes (HashRouter)
├── styles/
│   ├── tokens.js               shared design tokens (the T object)
│   └── global.css              fonts, resets, keyframes
├── data/
│   ├── topics.js               topic metadata (colors, slugs, clusters)
│   ├── clusters.js             the three thematic clusters
│   ├── browseActivities.js     flat activity index for the activity browser
│   └── topicContent/           full content modules, one per topic
│       └── index.js            registry
├── components/
│   ├── layout/                 NavBar, Footer, GrainOverlay
│   ├── topic/                  LearningNote, ActivityCard, StepItem, etc.
│   ├── home/                   homepage-specific components
│   └── illustrations/          one SVG component per topic
├── context/
│   └── PlaylistContext.jsx     session-only playlist state
└── pages/
    ├── HomePage.jsx
    ├── TopicPage.jsx           generic data-driven template
    ├── AboutPage.jsx
    ├── BlogPage.jsx            stubbed; populated post-launch
    ├── PlaylistPage.jsx        standalone playlist; export controls land in Sprint 2
    └── NotFoundPage.jsx
```

## Adding a topic

1. Add the topic's metadata (id, slug, colors, cluster) to `src/data/topics.js`.
2. Create the illustration component at `src/components/illustrations/<Name>Illustration.jsx`.
3. Create the content module at `src/data/topicContent/<id>.js` — use `bias.js` as the reference shape.
4. Register the content in `src/data/topicContent/index.js`.

The generic `TopicPage` template picks up the new topic automatically.

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
