import { createContext, useContext, useState, useCallback } from "react";

// ─── Playlist Context ───
// Session-only state for the activity playlist. Consistent with the
// project's privacy principles: no localStorage, no accounts, no tracking.
// Playlist entries are activity IDs like "bias-1" or "cs-need-1".

const PlaylistContext = createContext(null);

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);

  const toggle = useCallback((id) => {
    setPlaylist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const remove = useCallback((id) => {
    setPlaylist((prev) => prev.filter((x) => x !== id));
  }, []);

  const clear = useCallback(() => setPlaylist([]), []);

  const has = useCallback((id) => playlist.includes(id), [playlist]);

  const value = { playlist, toggle, remove, clear, has, count: playlist.length };

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
}

export function usePlaylist() {
  const ctx = useContext(PlaylistContext);
  if (!ctx) {
    throw new Error("usePlaylist must be used inside a PlaylistProvider");
  }
  return ctx;
}
