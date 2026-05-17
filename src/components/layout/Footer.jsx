import { Link } from "react-router-dom";
import { T } from "../../styles/tokens.js";

// ─── Footer ───
// The Duke incubation attribution that previously lived here has moved to
// the About page (where the team is drafting an expanded narrative).
// A discreet Privacy link sits alongside the license note. The Privacy
// page (drafted Sprint 5) declares the project's existing stance: no
// accounts, no browser storage, no analytics, session-only playlist.

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 32px",
        background: T.chrome,
        color: "rgba(255,255,255,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: T.serif,
              fontSize: "18px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.01em",
            }}
          >
            Pressing Prompts
          </span>
        </div>
        <div
          style={{
            fontFamily: T.sans,
            fontSize: "12px",
            color: "rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span>Content: CC BY-NC-SA 4.0</span>
          <span aria-hidden="true">·</span>
          <span>Code: MIT License</span>
          <span aria-hidden="true">·</span>
          <Link
            to="/privacy"
            style={{
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
            }}
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
