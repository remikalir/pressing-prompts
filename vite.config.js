import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using relative base so the build works on any subpath —
// crucial for GitLab Pages where the site lives at /<project>/.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
