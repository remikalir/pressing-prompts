// ─── Topic Metadata ───
// Lightweight index of every topic. The full content for each topic
// (the question copy, activities, resources, etc.) lives in
// ./topicContent/<id>.js and is loaded lazily by the topic page.
//
// Topic numbering reflects the original Duke toolkit ordering; thematic
// clusters (truth / power / self) are how the homepage groups them.
// The architecture is built to grow — adding a topic is a metadata
// entry plus a content module; nothing site-wide assumes a fixed count.
//
// ─── Palette ───
// The color values below are the locked v2 palette (Sprint 3, visual
// identity). They are atmospheric, muted, and watercolor-tonal —
// designed to support Muth-inspired illustration without competing.
// Before changing any color or adding a topic, read docs/PALETTE.md.
// That doc covers the atmospheric band (lightness/saturation guardrails),
// the hue map and available zones for future topics, the cluster system,
// and the decision algorithm for new topics.
//
// ─── Icons ───
// Each topic's icon is resolved from its `id` by the <TopicIcon /> component
// at src/components/icons/TopicIcon.jsx. To add a new topic, register a
// new SVG path entry there keyed by the same id you add here.

export const TOPICS = [
  {
    id: "need",
    slug: "do-we-need-ai",
    number: 1,
    question: "Do We Need AI?",
    subtitle: "AI criticism & the common good",
    cluster: "self",
    colors: { main: "#95433A", light: "#F0DAD5", mid: "#CC9890", dark: "#5F271F" },
    noAIByDesign: true,
  },
  {
    id: "trust",
    slug: "can-we-trust-ai",
    number: 2,
    question: "Can We Trust AI?",
    subtitle: "Hallucinations, deepfakes & AI slop",
    cluster: "truth",
    colors: { main: "#A55B36", light: "#F2E1D6", mid: "#D4A48C", dark: "#6E3920" },
  },
  {
    id: "bias",
    slug: "is-ai-biased",
    number: 3,
    question: "Is AI Biased?",
    subtitle: "Bias & monoculture",
    cluster: "truth",
    colors: { main: "#5A8268", light: "#DDEAE0", mid: "#98C2A4", dark: "#36573F" },
  },
  {
    id: "thinking",
    slug: "does-ai-harm-critical-thinking",
    number: 4,
    question: "Does AI Harm Critical Thinking?",
    subtitle: "Cognitive load & overreliance",
    cluster: "self",
    colors: { main: "#5A6FA6", light: "#DFE3EE", mid: "#ABB3D0", dark: "#3D4F7C" },
  },
  {
    id: "sustainable",
    slug: "is-ai-sustainable",
    number: 5,
    question: "Is AI Sustainable?",
    subtitle: "Environmental impacts",
    cluster: "power",
    colors: { main: "#347E5C", light: "#DAE7DD", mid: "#8BBD9F", dark: "#1F4F38" },
  },
  {
    id: "builds",
    slug: "who-builds-our-ai",
    number: 6,
    question: "Who Builds Our AI?",
    subtitle: "Hidden labor & ghost work",
    cluster: "power",
    colors: { main: "#4D5A63", light: "#DEE2E5", mid: "#95A4AE", dark: "#2F3B43" },
  },
  {
    id: "benefits",
    slug: "who-benefits-from-ai",
    number: 7,
    question: "Who Benefits from AI?",
    subtitle: "AI divide & information privilege",
    cluster: "power",
    colors: { main: "#2A7569", light: "#DAE7E4", mid: "#87BCB2", dark: "#154A42" },
  },
  {
    id: "disinfo",
    slug: "does-ai-spread-disinfo",
    number: 8,
    question: "Does AI Spread Mis/Disinfo?",
    subtitle: "Deepfakes & disinformation campaigns",
    cluster: "truth",
    colors: { main: "#AE5226", light: "#F4DFD0", mid: "#DCA483", dark: "#6E2F12" },
  },
  {
    id: "theft",
    slug: "is-ai-theft",
    number: 9,
    question: "Is AI Theft?",
    subtitle: "Copyright & intellectual property",
    cluster: "power",
    colors: { main: "#A47B27", light: "#EFE5CC", mid: "#D4BC7C", dark: "#6E5119" },
  },
  {
    id: "spy",
    slug: "is-ai-a-spy",
    number: 10,
    question: "Is AI a Spy?",
    subtitle: "Privacy & surveillance",
    cluster: "self",
    colors: { main: "#6F4283", light: "#E8DFEC", mid: "#B79CC2", dark: "#4A2A57" },
  },
  {
    id: "friend",
    slug: "is-ai-a-friend",
    number: 11,
    question: "Is AI a Friend?",
    subtitle: "Companionship & sycophancy",
    cluster: "self",
    colors: { main: "#964966", light: "#EFDFE5", mid: "#C99AAE", dark: "#5F2D44" },
  },
];

// Convenience lookups
export const TOPICS_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const TOPICS_BY_SLUG = Object.fromEntries(TOPICS.map((t) => [t.slug, t]));
