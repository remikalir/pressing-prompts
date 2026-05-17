import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";

// ─── Privacy ───
// Final copy from Remi (Sprint 5). The stance described here matches the
// code as shipped: no accounts, no browser storage APIs, no analytics,
// no tracking, session-only playlist state, client-side export. If a
// future feature would change any of this, the Privacy page must be
// updated in the same release.

export default function PrivacyPage() {
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
            ...T.type.headline,
            fontWeight: T.weight.regular,
            marginTop: "24px",
            marginBottom: "12px",
            color: T.text1,
          }}
        >
          Privacy
        </h1>
        <p
          style={{
            ...T.type.subtitle,
            color: T.text2,
            marginBottom: "40px",
          }}
        >
          What Pressing Prompts collects, stores, and shares — which is, by design, almost nothing.
        </p>

        <Section heading="The short version">
          <p style={paragraphStyle}>
            Pressing Prompts is a static, openly accessible learning resource. There are no
            accounts, no sign-ins, and no personal data collected from you when you visit. The
            site does not track you across pages or across visits, and it does not share
            information with advertisers or analytics services. Anything you build during a
            session, like a playlist of activities, exists only in your browser tab and
            disappears when you close it.
          </p>
        </Section>

        <Section heading="No accounts, no sign-ins">
          <p style={paragraphStyle}>
            There is nothing to sign up for and nothing to log into. The full project — every
            topic, activity, conversation starter, and resource — is openly available and
            access does not require any identifying information from you.
          </p>
        </Section>

        <Section heading="No browser storage">
          <p style={paragraphStyle}>
            Pressing Prompts does not use{" "}
            <code style={codeStyle}>localStorage</code>,{" "}
            <code style={codeStyle}>sessionStorage</code>, cookies, or any other browser storage
            mechanism. This is our deliberate design choice. The site keeps no record of what
            you visit, what you read, or what you add to a playlist.
          </p>
        </Section>

        <Section heading="No analytics, no tracking">
          <p style={paragraphStyle}>
            The site does not load Google Analytics, advertising pixels, social-media trackers,
            session-replay tools, heatmap services, or any third-party analytics. No data
            about your visit is sent anywhere for measurement or marketing purposes.
          </p>
        </Section>

        <Section heading="Playlists are session-only">
          <p style={paragraphStyle}>
            Our Playlist feature lets you assemble individual conversation starters,
            activities, and disciplinary extensions across topics, and then export the result
            as a Markdown file or a printable PDF. While curating, the playlist lives in your
            browser's working memory for the current tab. If you close the tab or navigate
            away, it's gone; no data associated with a playlist are ever sent to a server.
            Export files are generated entirely in your browser.
          </p>
        </Section>

        <Section heading="What the page does load">
          <p style={paragraphStyle}>
            When you open a page, your browser fetches the site's code and content from the
            host and the project's typefaces from{" "}
            <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Google Fonts
            </a>
            . That's the entire network footprint at runtime. Resources linked from a topic
            page — to recommended articles, videos, PDFs hosted elsewhere — load only if you
            click through to them, and at that point you are subject to the privacy practices
            of those sites.
          </p>
        </Section>

        <Section heading="If any of this changes">
          <p style={paragraphStyle}>
            The privacy stance described here matches how the site works today (updated May
            17, 2026). If we ever add a feature that would change it (like persisted playlists
            or anonymous usage analytics), the change will be reflected on this page in the
            same release.
          </p>
        </Section>
      </section>
      <Footer />
    </div>
  );
}

// ─── Section ───
function Section({ heading, children }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2
        style={{
          fontFamily: T.sans,
          fontSize: "16px",
          fontWeight: T.weight.medium,
          color: T.text1,
          marginBottom: "10px",
        }}
      >
        {heading}
      </h2>
      {children}
    </div>
  );
}

const paragraphStyle = {
  fontFamily: T.sans,
  fontSize: "15px",
  lineHeight: T.lineHeightProse,
  color: T.text2,
  margin: 0,
};

const codeStyle = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: "13px",
  background: T.bgWarm,
  padding: "1px 6px",
  borderRadius: "4px",
  border: `1px solid ${T.border}`,
  color: T.text1,
};

const linkStyle = {
  color: T.accent,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};
