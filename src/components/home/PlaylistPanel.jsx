import { Link, useLocation } from "react-router-dom";
import { T } from "../../styles/tokens.js";
import { usePlaylist } from "../../context/PlaylistContext.jsx";

// ─── Playlist Quick-Add Prompt ───
// Floating bottom-right pill that appears site-wide whenever the playlist
// has at least one item. Acts as a quick affordance to jump to the
// standalone Playlist page where the list view and export controls live.
//
// Sprint 1 had this as a self-contained widget with its own list and
// (placeholder) export buttons. Sprint 2 reshapes it: single source of
// truth for list view + exports is now the standalone /playlist page.
//
// Hides itself on the Playlist page itself, where it'd be redundant.
// Hides itself on print, since it's chrome.

export default function PlaylistPanel() {
  const { count, clear } = usePlaylist();
  const location = useLocation();

  // The hash router puts the route in location.pathname (without the #).
  const onPlaylistPage = location.pathname === "/playlist";

  if (count === 0 || onPlaylistPage) return null;

  return (
    <div
      className="playlist-quickadd"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 200,
        display: "flex",
        alignItems: "stretch",
        background: "white",
        borderRadius: "999px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
        border: `1px solid ${T.border}`,
        animation: "slideUp 0.3s ease",
        overflow: "hidden",
      }}
    >
      <Link
        to="/playlist"
        aria-label={`View playlist — ${count} ${count === 1 ? "activity" : "activities"}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 18px 12px 16px",
          textDecoration: "none",
          color: T.text1,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: T.accent,
            color: "white",
            fontFamily: T.sans,
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {count}
        </span>
        <span className="playlist-quickadd-label" style={{ fontFamily: T.sans, fontSize: "13px", fontWeight: 600 }}>
          {count === 1 ? "activity" : "activities"} in your playlist
        </span>
        <span className="playlist-quickadd-view" style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, marginLeft: "2px" }}>
          View →
        </span>
      </Link>
      <button
        onClick={() => {
          if (window.confirm("Clear all activities from your playlist?")) clear();
        }}
        title="Clear playlist"
        aria-label="Clear playlist"
        style={{
          background: "none",
          border: "none",
          borderLeft: `1px solid ${T.borderLight}`,
          padding: "0 14px",
          cursor: "pointer",
          color: T.text3,
          fontFamily: T.sans,
          fontSize: "16px",
          lineHeight: 1.15,
        }}
      >
        ×
      </button>
    </div>
  );
}
