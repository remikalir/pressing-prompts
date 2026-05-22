import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { generateFeed } from "./scripts/generate-rss.mjs";

// Absolute base ("/") because the site lives at the root of a custom
// apex domain (pressingprompts.org) on GitHub Pages. Relative base
// would break BrowserRouter on direct hits to nested paths — when the
// SPA-fallback redirect lands a user at /about, asset URLs like
// ./assets/index.js would resolve relative to /about/ and 404. To
// preview a production build locally, use `npm run preview` (HTTP
// server) rather than opening dist/index.html via file://.
//
// The rssDevPlugin below serves /feed.xml during `npm run dev` by
// running the same generator that the prebuild npm hook uses for
// production. Without it, /feed.xml would 404 in dev until the first
// `npm run build` writes the file to public/. Production builds use
// the on-disk public/feed.xml from the prebuild step, not this
// middleware.

function rssDevPlugin() {
  return {
    name: "pressing-prompts-rss-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === "/feed.xml") {
          try {
            const xml = await generateFeed();
            res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
            res.end(xml);
          } catch (err) {
            console.error("[rss] dev plugin failed:", err);
            res.statusCode = 500;
            res.end("RSS generation failed");
          }
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), rssDevPlugin()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
