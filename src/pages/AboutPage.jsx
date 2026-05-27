import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";

// ─── About ───
// Final copy from Remi & Hannah (Sprint 5). Five-section structure with a
// clickable section nav at the top (smooth-scrolls to each anchor) and a
// "Back to top" link after each section. Section IDs carry a generous
// scroll-margin-top so the sticky NavBar doesn't cover the heading.
//
// We use buttons (not anchor hash links) for navigation because the app
// runs under HashRouter — updating window.location.hash would interfere
// with the route segment (e.g. #/about). The scroll is purely behavioral.

const SECTIONS = [
  { id: "purpose", label: "Our Purpose" },
  { id: "start", label: "Our Start" },
  { id: "values", label: "Our Values" },
  { id: "design", label: "Our Design" },
  { id: "team", label: "Our Team" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 32px 64px" }}>
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
            marginBottom: "32px",
            color: T.text1,
          }}
        >
          About
        </h1>

        {/* Section nav — clickable labels, separated by middle dots */}
        <nav
          aria-label="On this page"
          className="about-section-nav"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px 14px",
            padding: "16px 20px",
            background: T.bgWarm,
            border: `1px solid ${T.border}`,
            borderRadius: T.radius,
            marginBottom: "56px",
          }}
        >
          {SECTIONS.map((s, i) => (
            <span key={s.id} style={{ display: "inline-flex", alignItems: "center", gap: "10px 14px" }}>
              <button
                type="button"
                onClick={() => scrollToId(s.id)}
                style={navButtonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.text1)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.text2)}
              >
                {s.label}
              </button>
              {i < SECTIONS.length - 1 && (
                <span className="about-section-nav-sep" aria-hidden="true" style={{ color: T.text3, fontSize: "13px" }}>
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* ─── Our Purpose ─── */}
        <Section id="purpose" title="Our Purpose">
          <p style={paragraphStyle}>
            Pressing Prompts invites educators and their students to embrace inquiry and
            complexity as we collectively navigate our relationships with AI.
          </p>
          <p style={paragraphStyle}>
            Whether you're hopeful AI may accelerate our capabilities and scientific
            breakthroughs, or you're fearful AI will exacerbate dehumanization and
            environmental degradation, we believe it's necessary to foreground the urgent
            prompts — the critical questions — about AI worth pressing on.{" "}
            <em>Who benefits from AI? Is AI theft? Can we trust AI?</em> We surface difficult
            questions about topics ranging from the labor exploitation of data workers to the
            environmental costs of AI, and we scaffold those questions with activities and
            resources to guide meaningful dialogue.
          </p>
          <p style={paragraphStyle}>
            As educators, we believe it's a professional responsibility to engender thoughtful
            discussion with our students about AI. Pressing Prompts can help you spark and
            sustain those conversations. Afterall, the most crucial questions about AI aren't
            technical, but human.
          </p>
          <BackToTop />
        </Section>

        {/* ─── Our Start ─── */}
        <Section id="start" title="Our Start">
          <p style={paragraphStyle}>
            Our original project was incubated at Duke University during the 2024–2025
            academic year. That initial collaboration between Duke’s Center for Teaching and Learning and Duke Libraries was titled the AI Ethics Learning Toolkit, and it was
            co-designed by undergraduate students, librarians, faculty, and technologists. We're grateful for the perspectives, contributions, and
            critiques shared with us by many helpful people.
          </p>
          <p style={paragraphStyle}>
            Following feedback and redesign, Pressing Prompts has launched as an openly
            accessible pedagogical experiment that provides educators with thematically-organized
            collections of activities, resources, and guidance. Similar to our first version,
            you can browse Pressing Prompts by topic and adapt what works for your course and
            students.
          </p>
          <BackToTop />
        </Section>

        {/* ─── Our Values ─── */}
        <Section id="values" title="Our Values">
          <p style={paragraphStyle}>
            Our initiative is grounded in a tradition of critical pedagogy that centers values
            of curiosity, dialogue, reflection, and shared humanity. We believe education
            should not merely train students to mindlessly use any technology, including AI;
            rather, it's imperative that we guide our students to question how systems of
            power, labor, authorship, and trust are embedded within everyday uses of all
            technology. Because AI can compress human experience and knowledge into
            algorithmic prediction and optimization, we're committed to expanding pedagogical
            opportunities that favor collective inquiry, human judgment, and even resistance.
          </p>
          <p style={paragraphStyle}>
            Pressing Prompts isn't a static repository of best practices or a prescriptive
            instructional manual. Rather, we've designed for dialogic and experiential
            learning and, we hope, you can further open space for pedagogical possibility,
            experimentation, and human-centered approaches to teaching and learning.
          </p>
          <p style={paragraphStyle}>
            In launching Pressing Prompts, we also value your privacy and have embraced an
            intentional stance toward technical aspects of privacy.{" "}
            <Link to="/privacy" style={linkStyle}>
              Please read our privacy policy
            </Link>
            . By design, this site collects, stores, and shares almost nothing because there
            are no accounts, no sign-ins, and no personal data collected from you when you
            visit. These design decisions are a further reflection of our values.
          </p>
          <BackToTop />
        </Section>

        {/* ─── Our Design ─── */}
        <Section id="design" title="Our Design">
          <p style={paragraphStyle}>
            Our transparency about the use of AI in Pressing Prompts also functions as a
            pedagogical act. Productively wrestling with a question like{" "}
            <em>Do we need AI?</em> means that we should actually use AI technologies
            ourselves to then determine where and how AI-enabled assistance becomes genuinely
            useful.
          </p>
          <p style={paragraphStyle}>
            This stance toward discerning AI use shaped how Pressing Prompts was created both
            collaboratively and technologically. We co-designed Pressing Prompts with Claude
            (specifically Claude Code/Opus 4.7) and received assistance with: the content
            architecture of themes and topics; our visual identity, including topic
            illustrations and icons, as well as typography; a web accessibility audit (this
            site meets{" "}
            <a
              href="https://www.dpi.nc.gov/about-dpi/technology-services/digital-accessibility/wcag-21-level-aa"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              WCAG 2.1 AA standards
            </a>
            ); and technical production. The code produced by Claude for this site is freely
            adaptable under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              CC-BY-NC-SA 4.0
            </a>{" "}
            license.
          </p>
          <p style={paragraphStyle}>
            We believe higher education will benefit from more examples of this kind of AI
            use — not as a proof of concept, but rather as a transparent form of public
            pedagogy that reflects evolving approaches to responsible human-AI craft.
          </p>
          <p style={paragraphStyle}>
            As you explore Pressing Prompts, you'll also notice that some activities are
            designed to actively encourage students' use of AI tools. Other activities do not.
            We reject the assumption that discerning pedagogy and student-centered learning
            about AI will always require AI use. However AI tools are used (or are not), we
            know meaningful learning occurs through processes like dialogue, interpretation,
            contextualization, intentional refusal, and shared meaning-making.
          </p>
          <p style={{ ...paragraphStyle, fontStyle: "italic", color: T.text1 }}>
            Press on, critically, together.
          </p>
          <BackToTop />
        </Section>

        {/* ─── Our Team ─── */}
        <Section id="team" title="Our Team">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <TeamMember
              name="Hannah Rozear"
              descriptor="co-founder, librarian, enjoys Scrabble"
            />
            <TeamMember
              name="Remi Kalir"
              href="https://www.linkedin.com/in/jeremiah-kalir-phd/"
              descriptor="co-founder, researcher, enjoys running"
            />
            <TeamMember
              name="Aria Chernik"
              href="https://www.linkedin.com/in/ariachernik/"
              descriptor="co-founder, educator, enjoys beaches"
            />
          </ul>
          <div style={{ marginTop: "24px" }}>
            <BackToTop />
          </div>
        </Section>
      </section>
      <Footer />
    </div>
  );
}

// ─── Section ───
function Section({ id, title, children }) {
  return (
    <div style={{ marginBottom: "56px" }}>
      <h2
        id={id}
        style={{
          fontFamily: T.serif,
          fontStyle: "italic",
          fontSize: "28px",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          fontWeight: T.weight.regular,
          color: T.text1,
          marginTop: 0,
          marginBottom: "20px",
          scrollMarginTop: "80px",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

// ─── BackToTop ───
function BackToTop() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
      }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          fontFamily: T.sans,
          fontSize: "12px",
          color: T.text3,
          cursor: "pointer",
          letterSpacing: "0.02em",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = T.text1)}
        onMouseLeave={(e) => (e.currentTarget.style.color = T.text3)}
      >
        ↑ Back to top
      </button>
    </div>
  );
}

// ─── TeamMember ───
function TeamMember({ name, href, descriptor }) {
  const nameNode = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={teamNameLinkStyle}>
      {name}
    </a>
  ) : (
    <span style={teamNameStyle}>{name}</span>
  );

  return (
    <li
      style={{
        fontFamily: T.sans,
        fontSize: "16px",
        lineHeight: 1.6,
        color: T.text2,
      }}
    >
      {nameNode}
      <span style={{ color: T.text3 }}> — </span>
      {descriptor}
    </li>
  );
}

const paragraphStyle = {
  fontFamily: T.sans,
  fontSize: "16px",
  lineHeight: T.lineHeightProse,
  color: T.text2,
  marginTop: 0,
  marginBottom: "20px",
};

const linkStyle = {
  color: T.accent,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

const navButtonStyle = {
  background: "none",
  border: "none",
  padding: 0,
  fontFamily: T.sans,
  fontSize: "13px",
  fontWeight: T.weight.medium,
  color: T.text2,
  cursor: "pointer",
  letterSpacing: "0.01em",
  transition: "color 150ms ease",
};

const teamNameStyle = {
  fontFamily: T.sans,
  fontSize: "16px",
  fontWeight: T.weight.bold,
  color: T.text1,
};

const teamNameLinkStyle = {
  ...teamNameStyle,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  textDecorationColor: T.border,
};
