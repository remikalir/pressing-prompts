// ─── Topic Content Registry ───
// Single source of truth for every activity record (Student-Centered Learning,
// Conversation Starters, Disciplinary Extensions). The flat browse index
// (BROWSE_ACTIVITIES) and the lookup helper (getActivityById) are both
// derived from TOPIC_CONTENT — no parallel data, no drift.
//
// When Sprint 4 content lands, it lands in the topic content modules and
// flows automatically through the browse index, the playlist export, and
// the topic page. No code changes required to integrate new content.

import { biasContent } from "./bias.js";
import { trustContent } from "./trust.js";
import { needContent } from "./need.js";
import { thinkingContent } from "./thinking.js";
import { sustainableContent } from "./sustainable.js";
import { buildsContent } from "./builds.js";
import { benefitsContent } from "./benefits.js";
import { disinfoContent } from "./disinfo.js";
import { theftContent } from "./theft.js";
import { spyContent } from "./spy.js";
import { friendContent } from "./friend.js";

export const TOPIC_CONTENT = {
  bias: biasContent,
  trust: trustContent,
  need: needContent,
  thinking: thinkingContent,
  sustainable: sustainableContent,
  builds: buildsContent,
  benefits: benefitsContent,
  disinfo: disinfoContent,
  theft: theftContent,
  spy: spyContent,
  friend: friendContent,
};

export function getTopicContent(id) {
  return TOPIC_CONTENT[id] || null;
}

// ─── Activity Index ───
// Built once at module load. Maps every activity id → its canonical record
// plus contextual metadata (topic, type). Used by the playlist export, the
// playlist page, and anywhere else that needs to resolve an id to content.

const ACTIVITY_INDEX = {};
for (const [topicId, content] of Object.entries(TOPIC_CONTENT)) {
  (content.activities || []).forEach((act) => {
    ACTIVITY_INDEX[act.id] = { type: "active", topic: topicId, record: act };
  });
  (content.conversationStarters || []).forEach((cs) => {
    ACTIVITY_INDEX[cs.id] = { type: "convo", topic: topicId, record: cs };
  });
  (content.disciplinaryExtensions || []).forEach((de) => {
    ACTIVITY_INDEX[de.id] = { type: "discipline", topic: topicId, record: de };
  });
}

// Returns { type, topic, record } for the activity with the given id, or
// null if no activity has that id. The record's shape varies by type:
//   • active     — full activity object (title, tagline, purpose, steps, …)
//   • convo      — { id, prompt }
//   • discipline — { id, discipline, prompt }
export function getActivityById(id) {
  return ACTIVITY_INDEX[id] || null;
}
