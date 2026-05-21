import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { T } from "../styles/tokens.js";
import { TOPICS_BY_SLUG } from "../data/topics.js";
import { CLUSTERS_BY_ID } from "../data/clusters.js";
import { getTopicContent } from "../data/topicContent/index.js";
import NavBar from "../components/layout/NavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import GrainOverlay from "../components/layout/GrainOverlay.jsx";
import LearningNote from "../components/topic/LearningNote.jsx";
import LearningNotesToggle from "../components/topic/LearningNotesToggle.jsx";
import ActivityCard from "../components/topic/ActivityCard.jsx";
import DisciplinaryExtensions from "../components/topic/DisciplinaryExtensions.jsx";
import TopicResources from "../components/topic/TopicResources.jsx";
import ConnectedTopics from "../components/topic/ConnectedTopics.jsx";
import StatCallout from "../components/topic/StatCallout.jsx";
import NoAIByDesignBanner from "../components/topic/NoAIByDesignBanner.jsx";
import { ComingSoonBanner, ActivityPreviews } from "../components/topic/ComingSoon.jsx";
import ConversationStarters from "../components/topic/ConversationStarters.jsx";
import PageNotes from "../components/topic/PageNotes.jsx";
import { renderInlineMarkdown, renderQuoteHtml } from "../utils/markdown.js";

// ─── TopicPage ───
// A single generic template rendered for every topic. All topic-specific
// content (illustration, copy, activities, resources) comes from the
// content module registered in src/data/topicContent/.
//
// The three layers — The Question → Activities → Learning Notes — are
// tracked via `activeLayer` state and reflected in the LayerIndicator
// in the sticky NavBar.

export default function TopicPage() {
  const { slug } = useParams();
  const topic = TOPICS_BY_SLUG[slug];
  const content = topic ? getTopicContent(topic.id) : null;
  const cluster = topic ? CLUSTERS_BY_ID[topic.cluster] : null;

  // ─── State: Learning Notes toggle, active card, scroll-based layer ───
  const [showNotes, setShowNotes] = useState(false);
  const [expandedActivity, setExpandedActivity] = useState(null);
  const [activeLayer, setActiveLayer] = useState("question");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y < 650) setActiveLayer("question");
      else if (y < 1800 || !showNotes) setActiveLayer("activities");
      else setActiveLayer("notes");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNotes]);

  useEffect(() => {
    if (showNotes) setActiveLayer("notes");
  }, [showNotes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // ─── Bail-outs ───
  if (!topic) return <Navigate to="/" replace />;
  if (!content) {
    return (
      <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans }}>
        <GrainOverlay />
        <NavBar />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 32px" }}>
          <Link to="/" style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3 }}>← All Topics</Link>
          <h1 style={{ fontFamily: T.serif, fontSize: "36px", fontStyle: "italic", marginTop: "24px", color: T.text1 }}>
            {topic.question}
          </h1>
          <p style={{ marginTop: "24px", fontSize: "16px", color: T.text2, lineHeight: 1.7 }}>
            This topic is in development — its content will appear here soon.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const colors = topic.colors;
  const Illustration = content.Illustration;

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.sans, color: T.text1 }}>
      <GrainOverlay />
      <NavBar activeLayer={activeLayer} topicColors={colors} />

      {/* ═══ THE QUESTION ═══ */}
      <header
        style={{
          padding: "80px 32px 60px",
          background: `linear-gradient(180deg, ${colors.light} 0%, ${T.bg} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative atmospheric circles — function as ambient halo
            behind the now-larger illustration rather than as discrete
            shapes. Top-right circle is intentionally larger and softer
            than the illustration; bottom-left adds asymmetric balance. */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: colors.mid,
            opacity: 0.05,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-70px",
            left: "-50px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: colors.main,
            opacity: 0.04,
          }}
        />

        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            animation: "heroFadeUp 0.8s ease",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke={T.text3} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: T.sans, fontSize: "13px", color: T.text3, fontWeight: 500 }}>
              All Topics
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              {/* Cluster badge — replaces the previous "Topic X of 11" pill.
                  Renders in the cluster's own color so each topic visibly
                  belongs to its thematic home rather than a sequence position. */}
              {cluster && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "5px 14px",
                    borderRadius: "20px",
                    background: `${cluster.color}14`,
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: cluster.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: T.sans,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: cluster.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {cluster.label}
                  </span>
                </div>
              )}

              <h1
                style={{
                  fontFamily: T.serif,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: T.text1,
                  lineHeight: 1.15,
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {topic.question}
              </h1>
              <p
                style={{
                  fontFamily: T.sans,
                  fontSize: "16px",
                  color: colors.main,
                  fontWeight: 500,
                  marginBottom: "28px",
                  lineHeight: 1.4,
                }}
              >
                {topic.subtitle}
              </p>

              {content.expertQuote && (
                <blockquote
                  style={{
                    margin: 0,
                    padding: "20px 24px",
                    borderLeft: `3px solid ${colors.mid}`,
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "0 12px 12px 0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: T.serif,
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: T.text1,
                      lineHeight: 1.6,
                      margin: "0 0 8px 0",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: renderQuoteHtml(content.expertQuote.text),
                    }}
                  />
                  <cite
                    style={{
                      fontFamily: T.sans,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: T.text3,
                      fontStyle: "normal",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `— ${renderInlineMarkdown(content.expertQuote.source)}`,
                    }}
                  />
                </blockquote>
              )}
            </div>

            {Illustration && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 4s ease-in-out infinite",
                  // Radial fade mask — dissolves the illustration's
                  // rectangular SVG boundary into the hero gradient so the
                  // scene sits as a soft watercolor moment rather than a
                  // boxed image. Mask is fully opaque through the central
                  // 55% (where the principal subject lives) and fades to
                  // transparent at 95%, which catches the corners where
                  // the SVG's atmospheric ground is densest.
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 50%, black 55%, transparent 95%)",
                  maskImage:
                    "radial-gradient(circle at 50% 50%, black 55%, transparent 95%)",
                }}
              >
                <Illustration size={340} colors={colors} />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ═══ INTRODUCTION ═══ */}
      <section style={{ padding: "60px 32px", maxWidth: "960px", margin: "0 auto" }}>
        {content.introduction && (
          <div style={{ maxWidth: "680px" }}>
            {content.introduction.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: T.sans,
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: T.text1,
                  marginBottom: i < content.introduction.length - 1 ? "20px" : 0,
                }}
                dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(para) }}
              />
            ))}
          </div>
        )}

        {/* Stat callouts */}
        {content.stats && content.stats.length > 0 && (
          <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {content.stats.map((s, i) => (
              <StatCallout key={i} stat={s.value} label={s.label} colors={colors} />
            ))}
          </div>
        )}

        {/* Key Terms */}
        {content.keyTerms && content.keyTerms.length > 0 && (
          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {content.keyTerms.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  background: "white",
                  borderRadius: T.radius,
                  border: `1px solid ${T.border}`,
                  boxShadow: T.shadow,
                }}
              >
                <div
                  style={{
                    fontFamily: T.sans,
                    fontSize: "13px",
                    fontWeight: 600,
                    color: colors.main,
                    marginBottom: "6px",
                  }}
                >
                  {item.term}
                </div>
                <div style={{ fontFamily: T.sans, fontSize: "13px", lineHeight: 1.6, color: T.text2 }}>
                  {item.definition}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Objectives */}
        {content.learningObjectives && content.learningObjectives.length > 0 && (
          <div
            style={{
              marginTop: "40px",
              padding: "28px 32px",
              background: "white",
              borderRadius: T.radiusLg,
              border: `1px solid ${T.border}`,
              boxShadow: T.shadow,
            }}
          >
            <h3
              style={{
                fontFamily: T.sans,
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: colors.main,
                marginBottom: "16px",
              }}
            >
              Learning Objectives
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {content.learningObjectives.map((obj, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                      border: `1.5px solid ${colors.mid}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: colors.main }}>✦</span>
                  </div>
                  <span style={{ fontFamily: T.sans, fontSize: "14px", lineHeight: 1.6, color: T.text1 }}>
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {content.questionLearningNote && (
          <LearningNote visible={showNotes}>{content.questionLearningNote}</LearningNote>
        )}
      </section>

      {/* ═══ ACTIVITIES ═══ */}
      <section style={{ padding: "20px 32px 60px", maxWidth: "960px", margin: "0 auto" }}>
        {/* Topic-level banners */}
        {topic.noAIByDesign && <NoAIByDesignBanner colors={colors} />}
        {topic.comingSoon && <ComingSoonBanner colors={colors} message={content.comingSoonMessage} />}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: T.serif,
                fontSize: "36px",
                fontWeight: 400,
                fontStyle: "italic",
                color: T.text1,
                marginBottom: "4px",
              }}
            >
              Activities
            </h2>
            <p style={{ fontFamily: T.sans, fontSize: "14px", color: T.text3 }}>
              {content.activities.length > 0
                ? "Facilitate student-centered learning — expand any to explore, build your playlist"
                : "Activities in development — previews below"}
            </p>
          </div>
          {content.activities.length > 0 && (
            <LearningNotesToggle active={showNotes} onToggle={() => setShowNotes(!showNotes)} />
          )}
        </div>

        {/* Conversation starters — light-weight prompts before the deeper activities */}
        {content.conversationStarters && content.conversationStarters.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <ConversationStarters starters={content.conversationStarters} colors={colors} />
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {content.activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              expanded={expandedActivity === activity.id}
              onToggle={() =>
                setExpandedActivity(expandedActivity === activity.id ? null : activity.id)
              }
              showNotes={showNotes}
              colors={colors}
            />
          ))}
        </div>

        {/* Activity previews (for coming-soon topics) */}
        {content.activityPreviews && content.activityPreviews.length > 0 && (
          <div style={{ marginTop: "24px" }}>
            <ActivityPreviews previews={content.activityPreviews} colors={colors} />
          </div>
        )}
      </section>

      {/* ═══ EXTENSIONS, RESOURCES, CROSS-LINKS, PAGE NOTES ═══ */}
      <section style={{ padding: "0 32px 60px", maxWidth: "960px", margin: "0 auto" }}>
        {content.disciplinaryExtensions && (
          <div style={{ marginBottom: "20px" }}>
            <DisciplinaryExtensions extensions={content.disciplinaryExtensions} colors={colors} />
          </div>
        )}

        {/* Stacked, full-width: Resources card grew with Further Recommendations,
            so the side-by-side grid was leaving Connected Topics looking starved.
            Stacking gives both sections the same horizontal weight and lets
            Resources collapse-by-default when long. */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TopicResources
            activities={content.activities}
            furtherRecommendations={content.furtherRecommendations}
            colors={colors}
          />
          {content.connectedTopics && (
            <ConnectedTopics connections={content.connectedTopics} colors={colors} />
          )}
        </div>

        {content.belowActivitiesLearningNote && (
          <LearningNote visible={showNotes}>{content.belowActivitiesLearningNote}</LearningNote>
        )}

        {/* Page Notes — citations referenced by [^N] markers in the quote, intro, etc. */}
        {content.pageNotes && content.pageNotes.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <PageNotes notes={content.pageNotes} colors={colors} />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
