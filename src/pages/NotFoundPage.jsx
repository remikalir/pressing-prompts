import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";

// ─── Not Found ───

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "120px 32px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: T.serif,
            fontSize: "72px",
            fontStyle: "italic",
            fontWeight: 400,
            color: T.text1,
            marginBottom: "12px",
          }}
        >
          Not found
        </h1>
        <p style={{ fontSize: "16px", color: T.text3, marginBottom: "32px" }}>
          The page you were looking for doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: T.chrome,
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Back to home
        </Link>
      </section>
      <Footer />
    </div>
  );
}
