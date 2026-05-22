import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaylistProvider } from "./context/PlaylistContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import TopicPage from "./pages/TopicPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import PlaylistPage from "./pages/PlaylistPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PlaylistPanel from "./components/home/PlaylistPanel.jsx";

// ─── App ───
// BrowserRouter for clean URLs (e.g. /about rather than /#/about) now
// that we're hosted at a custom apex domain on GitHub Pages. GitHub
// Pages doesn't natively support SPA routing, so direct hits to
// /about or /topic/<slug> would 404 by default. The fallback is
// handled by public/404.html, which redirects unknown paths back to
// "/" with the original path encoded in a query string; an inline
// script in index.html unwraps that query string before React Router
// boots so the address bar shows the original URL.
//
// PlaylistPanel is mounted globally so the quick-add prompt persists
// across every route. It hides itself on /playlist (where it'd be
// redundant) and on print.

export default function App() {
  return (
    <PlaylistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:slug" element={<TopicPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <PlaylistPanel />
      </BrowserRouter>
    </PlaylistProvider>
  );
}
