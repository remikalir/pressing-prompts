// ─── Activity Browse Index ───
// Flat, tagged list of every activity across all topics. Used by the
// homepage activity browser. As of Sprint 2 Pass 2, this is DERIVED from
// the canonical topic content modules — no longer hand-maintained. To add
// a new activity, add it to the relevant topic content module; the entry
// shows up here automatically.

import { TOPIC_CONTENT } from "./topicContent/index.js";

// Build-time projection: walk every topic, project each canonical record
// down to the flat shape the browser needs.
const built = [];

for (const [topicId, content] of Object.entries(TOPIC_CONTENT)) {
  // Student-Centered Learning activities
  (content.activities || []).forEach((act) => {
    built.push({
      id: act.id,
      topic: topicId,
      title: act.title,
      type: "active",
      discipline: "All/Interdisciplinary",
    });
  });
  // Conversation Starters — title is the prompt itself
  (content.conversationStarters || []).forEach((cs) => {
    built.push({
      id: cs.id,
      topic: topicId,
      title: cs.prompt,
      type: "convo",
      discipline: "All/Interdisciplinary",
    });
  });
  // Disciplinary Extensions — title is the discipline label
  (content.disciplinaryExtensions || []).forEach((de) => {
    built.push({
      id: de.id,
      topic: topicId,
      title: de.discipline,
      type: "discipline",
      discipline: de.discipline,
    });
  });
}

export const BROWSE_ACTIVITIES = built;

// Type metadata for the browse cards on the homepage
export const TYPE_META = {
  convo: {
    label: "Conversation Starters",
    description: "No-prep prompts for quick classroom discussions",
    badge: "💬",
    badgeColor: "#E3F2FD",
    badgeText: "#1565C0",
  },
  active: {
    label: "Student-Centered Learning",
    description: "Structured activities with step-by-step guidance",
    badge: "⚡",
    badgeColor: "#FFF3E0",
    badgeText: "#E65100",
  },
  discipline: {
    label: "Disciplinary Extensions",
    description: "Discipline-specific explorations for advanced courses",
    badge: "🎓",
    badgeColor: "#F3E5F5",
    badgeText: "#7B1FA2",
  },
};
