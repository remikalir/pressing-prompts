import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Absolute base ("/") because the site lives at the root of a custom
// apex domain (pressingprompts.org) on GitHub Pages. Relative base
// would break BrowserRouter on direct hits to nested paths — when the
// SPA-fallback redirect lands a user at /about, asset URLs like
// ./assets/index.js would resolve relative to /about/ and 404. To
// preview a production build locally, use `npm run preview` (HTTP
// server) rather than opening dist/index.html via file://.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
