import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";

// ─── Blog ───
// Stubbed for Sprint 1 — empty at launch; the team will populate posts
// after launch. The route exists so the header nav link doesn't 404.

export default function BlogPage() {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 32px" }}>
        <Link
          to="/"
          style={{
            fontFamily: T.sans,
            fontSize: "13px",
            color: T.text3,
            textDecoration: "none",
          }}
        >
          ← Home
        </Link>
        <h1
          style={{
            fontFamily: T.serif,
            fontSize: "clamp(36px, 5vw, 52px)",
            fontStyle: "italic",
            fontWeight: 400,
            marginTop: "24px",
            marginBottom: "24px",
            color: T.text1,
            lineHeight: 1.15,
          }}
        >
          Blog
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: T.text2 }}>
          Coming soon...
        </p>
      </section>
      <Footer />
    </div>
  );
}
