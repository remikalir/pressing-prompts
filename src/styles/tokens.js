// ─── Shared Design Tokens ───
// The single source of truth for colors, typography, and spacing.
// Topic-specific color palettes live in src/data/topics.js.
// Typography review and WCAG audit landed in Sprint 3; see
// docs/TYPOGRAPHY.md for the full system, scale rationale, and
// accessibility verification.

export const T = {
  // Neutral palette
  bg: "#FAFAF8",
  bgWarm: "#F5F3EE",
  card: "#FFFFFF",

  // Brand chrome — header, footer, hero, and other site shell surfaces.
  // Warm institutionally-neutral dark; sits on the same warm axis as the
  // background. Deliberately not echoing any topic color so no topic
  // reads as "the brand color."
  chrome: "#2E2A28",
  accent: "#2A9D8F",
  accentLight: "#E8F5F3",

  // Text — verified against WCAG 2.1 AA on both bg (#FAFAF8) and bgWarm (#F5F3EE).
  // text1 #1A1A1A: 16.65 / 15.69 (AAA, all sizes)
  // text2 #555555: 7.13  / 6.72  (AAA normal, AAA large)
  // text3 #6A6A6A: 5.13  / 4.88  (AA normal, AAA large) — Sprint 3 darkened from #888888
  //   to pass AA. text3 is for tertiary copy that needs to feel lighter than
  //   text2 but must remain legible at body sizes.
  text1: "#1A1A1A",
  text2: "#555555",
  text3: "#6A6A6A",

  // Borders
  border: "#E5E3DE",
  borderLight: "#F0EDE8",

  // Shadows
  shadow: "0 2px 20px rgba(0,0,0,0.06)",
  shadowHover: "0 4px 30px rgba(0,0,0,0.10)",
  shadowDeep: "0 8px 40px rgba(0,0,0,0.12)",

  // Typography font stacks
  serif: "'Instrument Serif', Georgia, serif",
  sans: "'DM Sans', -apple-system, sans-serif",

  // Type scale — nine semantic roles covering every typographic use in
  // the codebase. Replaces the 24 ad-hoc font sizes that had accumulated
  // pre-Sprint 3. Read the full rationale in docs/TYPOGRAPHY.md before
  // adding new sizes; if you find yourself wanting a 10th step, the
  // existing scale probably has the right value.
  //
  // Each entry is a complete style object — spread into inline styles
  // or component style objects. Letter-spacing, line-height, and font
  // family are tuned per role; weight is excluded (use T.weight.* so
  // emphasis is a separate, explicit decision).
  //
  // Display + Headline use clamp() for responsive scaling. Below that,
  // sizes are fixed — they read consistently at every viewport.
  type: {
    // Hero scale — Instrument Serif italic
    display: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontStyle: "italic",
      fontSize: "clamp(36px, 5.5vw, 56px)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    headline: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontStyle: "italic",
      fontSize: "clamp(36px, 5vw, 52px)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    title: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontStyle: "italic",
      fontSize: "22px",
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
    },

    // Body scale — DM Sans
    subtitle: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "18px",
      lineHeight: 1.4,
    },
    lead: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
    },
    body: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "14px",
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "13px",
      lineHeight: 1.6,
    },
    micro: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "12px",
      lineHeight: 1.6,
    },
    // Eyebrow — UPPERCASE category labels, eyebrows above headlines
    eyebrow: {
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.4,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
  },

  // Font weights — three values cover all emphasis needs.
  // 400: regular body text
  // 500: medium emphasis (subtitles, eyebrows, button text, soft titles)
  // 600: strong emphasis (activity titles, learning-note headers, things
  //      that need to read as bold without the heaviness of 700)
  //
  // 700 is intentionally absent. The original codebase used 700 30+
  // times — too heavy for the project's soft watercolor visual register.
  // 600 carries the same hierarchy at a more sympathetic weight.
  weight: {
    regular: 400,
    medium: 500,
    bold: 600,
  },

  // Long-prose line-height — the only line-height value beyond what's
  // baked into the type scale. Apply to multi-paragraph essay-style
  // copy where 1.65 feels cramped (project intros, About narrative,
  // long-form blog posts).
  lineHeightProse: 1.7,

  // Radii
  radius: "12px",
  radiusLg: "20px",
};

// Helper: given a topic's color palette, merge it into the token object
// so downstream components can reference `tokens.topicColor` uniformly.
export function withTopicColors(colors) {
  return {
    ...T,
    topicColor: colors.main,
    topicColorLight: colors.light,
    topicColorMid: colors.mid,
    topicColorDark: colors.dark,
  };
}
