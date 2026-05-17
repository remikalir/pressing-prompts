import { Link } from "react-router-dom";
import { T } from "../../styles/tokens.js";
import LayerIndicator from "../topic/LayerIndicator.jsx";
import { usePlaylist } from "../../context/PlaylistContext.jsx";

// ─── NavBar ───
// Sticky top navigation. Renders a LayerIndicator on topic pages when
// `activeLayer` and `topicColors` are passed; otherwise renders the
// site-wide nav links: About · Blog · Playlist.

export default function NavBar({ activeLayer, topicColors }) {
  const isTopicPage = Boolean(activeLayer && topicColors);
  const { count: playlistCount } = usePlaylist();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: T.chrome,
        padding: "0 32px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: T.serif,
            fontSize: "20px",
            fontStyle: "italic",
            color: "white",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Pressing Prompts
        </Link>

        {isTopicPage ? (
          <LayerIndicator activeLayer={activeLayer} colors={topicColors} />
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link to="/about" style={navLinkStyle}>About</Link>
            <Link to="/blog" style={navLinkStyle}>Blog</Link>
            <Link
              to="/playlist"
              style={{
                ...navLinkStyle,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Playlist
              {playlistCount > 0 && (
                <span
                  style={{
                    fontFamily: T.sans,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "white",
                    background: T.accent,
                    padding: "1px 7px",
                    borderRadius: "10px",
                    minWidth: "16px",
                    textAlign: "center",
                  }}
                >
                  {playlistCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

const navLinkStyle = {
  fontFamily: T.sans,
  fontSize: "13px",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontWeight: 500,
};
