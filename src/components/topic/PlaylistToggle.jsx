import { T } from "../../styles/tokens.js";
import { usePlaylist } from "../../context/PlaylistContext.jsx";

// ─── Playlist Toggle ───
// Small circular +/✓ button used to add or remove an item from the session
// playlist. Mirrors the visual treatment of the homepage ActivityBrowser row
// so the affordance reads consistently across both surfaces.
//
// Used on topic pages by ActivityCard, ConversationStarters, and
// DisciplinaryExtensions. The id must match the canonical activity id
// projected into BROWSE_ACTIVITIES (e.g. "bias-1", "cs-bias-1", "de-bias-1").

export default function PlaylistToggle({ id, colors, onClick }) {
  const { has, toggle } = usePlaylist();
  const inPlaylist = has(id);

  // The toggle sits inside parent rows that may themselves be clickable
  // (most notably ActivityCard's accordion). Stop propagation so adding to
  // the playlist doesn't also expand the card.
  const handleClick = (e) => {
    e.stopPropagation();
    toggle(id);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={inPlaylist ? "Remove from playlist" : "Add to playlist"}
      aria-label={inPlaylist ? "Remove from playlist" : "Add to playlist"}
      aria-pressed={inPlaylist}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: `1.5px solid ${inPlaylist ? colors.main : T.border}`,
        background: inPlaylist ? colors.main : "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        flexShrink: 0,
        padding: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        {inPlaylist ? (
          <path
            d="M3 6L5.5 8.5L9.5 3.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 2V10M2 6H10"
            stroke={T.text3}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  );
}
