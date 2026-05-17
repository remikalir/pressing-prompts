import { HashRouter, Routes, Route } from "react-router-dom";
import { PlaylistProvider } from "./context/PlaylistContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import TopicPage from "./pages/TopicPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import PlaylistPage from "./pages/PlaylistPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PlaylistPanel from "./components/home/PlaylistPanel.jsx";

// ─── App ───
// HashRouter while we deploy to GitLab Pages (works on any static host
// without server rewrite rules). Switch to BrowserRouter later if we
// land on a host that supports SPA rewrites.
//
// PlaylistPanel is mounted globally so the quick-add prompt persists
// across every route. It hides itself on /playlist (where it'd be
// redundant) and on print.

export default function App() {
  return (
    <PlaylistProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:slug" element={<TopicPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <PlaylistPanel />
      </HashRouter>
    </PlaylistProvider>
  );
}
