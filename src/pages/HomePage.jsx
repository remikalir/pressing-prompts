import { Link } from "react-router-dom";
import { T } from "../styles/tokens.js";
import { TOPICS } from "../data/topics.js";
import { CLUSTERS } from "../data/clusters.js";
import { TOPIC_CONTENT } from "../data/topicContent/index.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import ClusterIllustration from "../components/home/ClusterIllustration.jsx";
import TopicConstellation from "../components/home/TopicConstellation.jsx";
import ActivityBrowser from "../components/home/ActivityBrowser.jsx";
import { TopicIcon } from "../components/icons/TopicIcon.jsx";

// ─── HomePage ───
// Hero → Topics-by-cluster → Browse Activities, Build Playlists →
// Designed for Your Classroom → About → Footer.
//
// The playlist quick-add prompt is mounted globally in App.jsx so it
// persists across every route, not just the homepage.
//
// Sprint 1 brand/structural updates:
//   • Hero headline replaced with the locked "Pressing Prompts" copy.
//   • Eleven-stripe ribbon replaced with three-stripe cluster ribbon.
//   • Numerical topic-count references removed (the topic set is allowed
//     to grow without copy edits).
//   • "Encounter" layer renamed "The Question" in the Designed for Your
//     Classroom section, with copy rewritten in instructor-action voice.

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar />

      {/* ═══ HERO ═══ */}
      <header style={{ padding: "80px 32px 60px", background: T.chrome, position: "relative", overflow: "hidden" }}>
        {/* Floating topic color dots in the background */}
        {TOPICS.map((t, i) => (
          <div
            key={t.id}
            style={{
              position: "absolute",
              left: `${8 + (i * 8.2) % 90}%`,
              top: `${20 + Math.sin(i * 1.3) * 30}%`,
              width: `${20 + (i % 4) * 10}px`,
              height: `${20 + (i % 4) * 10}px`,
              borderRadius: "50%",
              background: t.colors.main,
              opacity: 0.1 + (i % 3) * 0.04,
              animation: `heroDotFloat${i % 3} ${3 + (i % 2)}s ease-in-out infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes heroDotFloat0 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          @keyframes heroDotFloat1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
          @keyframes heroDotFloat2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        `}</style>

        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap", animation: "heroFadeUp 0.8s ease" }}>
            <div style={{ flex: 1, minWidth: "340px" }}>
              <h1
                style={{
                  fontFamily: T.serif,
                  fontSize: "clamp(36px, 5.5vw, 56px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "white",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                  letterSpacing: "-0.02em",
                }}
              >
                The questions about AI
                <br />
                worth pressing on.
              </h1>
              <p
                style={{
                  fontFamily: T.sans,
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                An open collection of activities, resources, and pedagogical guidance for higher education
                instructors bringing AI ethics into their classrooms.
              </p>
            </div>

            {/* Topic constellation */}
            <TopicConstellation size={280} />
          </div>

          {/* Cluster ribbon — three stripes, one per thematic cluster */}
          <div style={{ display: "flex", gap: "6px", marginTop: "48px" }}>
            {CLUSTERS.map((c) => (
              <div
                key={c.id}
                title={c.label}
                style={{
                  flex: 1,
                  height: "5px",
                  borderRadius: "2.5px",
                  background: c.color,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* ═══ TOPICS BY CLUSTER ═══ */}
      <section id="topics" style={{ padding: "80px 32px 60px", maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: T.serif,
              fontSize: "36px",
              fontWeight: 400,
              fontStyle: "italic",
              color: T.text1,
              marginBottom: "10px",
            }}
          >
            Explore by Theme
          </h2>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: "14px",
              color: T.text3,
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Topics organized into three thematic clusters. Click any topic to explore its activities,
            resources, and learning notes.
          </p>
        </div>

        {CLUSTERS.map((cluster) => {
          const clusterTopics = TOPICS.filter((t) => t.cluster === cluster.id);
          return (
            <div key={cluster.id} style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <ClusterIllustration cluster={cluster.id} size={56} />
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: T.serif,
                      fontSize: "22px",
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: T.text1,
                    }}
                  >
                    {cluster.label}
                  </h3>
                  <p style={{ margin: "2px 0 0", fontFamily: T.sans, fontSize: "13px", color: T.text3 }}>
                    {cluster.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "14px",
                }}
              >
                {clusterTopics.map((t) => (
                  <TopicCard key={t.id} topic={t} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ ACTIVITY BROWSER ═══ */}
      <ActivityBrowser />

      {/* ═══ DESIGNED FOR YOUR CLASSROOM ═══ */}
      {/* Copy is in instructor-action voice — what you DO with each layer
          — to distinguish this section from the Activities layer name
          without renaming the layer itself. */}
      <section style={{ padding: "80px 32px", maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: T.serif,
            fontSize: "36px",
            fontWeight: 400,
            fontStyle: "italic",
            color: T.text1,
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Designed for Your Classroom
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {[
            {
              step: "The Question",
              desc: "Open with a question that earns the room's attention. Use the framing, expert voice, and conversation starters to set up critical engagement before any activity begins.",
            },
            {
              step: "Activities",
              desc: "Run a structured activity in class or online. Each one comes with clear steps, materials, and timing — and most include a no-AI alternative.",
            },
            {
              step: "Learning Notes",
              desc: "Toggle on the instructor layer when you're planning. It surfaces grading criteria, prep notes, and modification suggestions — without crowding the student-facing view.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                background: "white",
                borderRadius: T.radiusLg,
                border: `1px solid ${T.border}`,
                boxShadow: T.shadow,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: T.serif,
                  fontSize: "22px",
                  fontStyle: "italic",
                  color: T.text1,
                  marginBottom: "10px",
                }}
              >
                {item.step}
              </h3>
              <p style={{ fontFamily: T.sans, fontSize: "13px", color: T.text2, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding: "80px 32px", background: T.chrome }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: T.serif,
              fontSize: "36px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "white",
              marginBottom: "16px",
            }}
          >
            About This Project
          </h2>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Pressing Prompts is an independent, openly accessible resource for higher education instructors
            worldwide. The fuller incubation narrative and team credits live on the{" "}
            <Link to="/about" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}>
              About page
            </Link>.
          </p>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
            }}
          >
            We believe it is crucial for educators across all disciplines to engage students in critical
            conversations about AI — to surface hard questions, hold competing perspectives in tension, and
            develop the ethical judgment that no AI tool can replicate.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── Topic Card (cluster grid) ───
function TopicCard({ topic }) {
  const isMigrated = Boolean(TOPIC_CONTENT[topic.id]);
  return (
    <Link
      to={`/topic/${topic.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        background: "white",
        borderRadius: T.radiusLg,
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        boxShadow: T.shadow,
        transition: "all 0.25s ease",
        display: "block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = T.shadowHover;
        e.currentTarget.style.borderColor = topic.colors.mid;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = T.shadow;
        e.currentTarget.style.borderColor = T.border;
      }}
    >
      <div
        style={{
          height: "48px",
          background: `linear-gradient(135deg, ${topic.colors.main}, ${topic.colors.mid})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopicIcon id={topic.id} size={22} color="white" opacity={0.85} />
      </div>
      <div style={{ padding: "16px 18px 14px" }}>
        <h3
          style={{
            margin: "0 0 4px 0",
            fontFamily: T.serif,
            fontSize: "16px",
            fontWeight: 400,
            fontStyle: "italic",
            color: T.text1,
            lineHeight: 1.15,
          }}
        >
          {topic.question}
        </h3>
        <p style={{ margin: 0, fontFamily: T.sans, fontSize: "12px", color: T.text3, lineHeight: 1.4 }}>
          {topic.subtitle}
        </p>
        <div style={{ marginTop: "10px" }}>
          {topic.comingSoon ? (
            <span
              style={{
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                color: T.text3,
                background: T.bgWarm,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Coming Soon
            </span>
          ) : isMigrated ? (
            <span
              style={{
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                color: topic.colors.main,
                background: topic.colors.light,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Explore →
            </span>
          ) : (
            <span
              style={{
                fontSize: "12px",
                fontFamily: T.sans,
                fontWeight: 600,
                color: T.text3,
                background: T.bgWarm,
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              In progress
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
