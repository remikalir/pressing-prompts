// ─── Playlist exports ───
// Three export paths, all client-side, no network calls:
//   • buildMarkdown(items)  → Markdown document with full activity content
//                             grouped by topic. Type-aware rendering: full
//                             activities get the entire record; conversation
//                             starters group as a numbered list per topic;
//                             disciplinary extensions get their own heading.
//   • buildLinks(items)     → newline-separated topic-page URL list (deduped).
//   • copyToClipboard(text) → wrapper with a textarea fallback for older
//                             browsers / non-secure contexts.
//
// Print-to-PDF uses window.print() against the page itself (the page expands
// all collapsed details on beforeprint and a print stylesheet hides chrome).
//
// Resolution model: every playlist id flows through getActivityById to
// produce a { type, topic, record } triple. There is no title-string
// matching — the join is by stable id. New content added to topic content
// modules flows through automatically with no code changes.

import { TOPICS_BY_ID } from "../data/topics.js";
import { getActivityById } from "../data/topicContent/index.js";

// Public site URL for export links. We use window.location.origin at
// runtime so links work locally during dev and on whichever production
// host the site lands on. HashRouter requires the "/#" before the route.
function topicUrl(topicSlug) {
  if (typeof window === "undefined") return `/#/topic/${topicSlug}`;
  return `${window.location.origin}${window.location.pathname}#/topic/${topicSlug}`;
}

// Resolve a playlist of activity IDs into the full records used by exports
// and the on-page list. Each entry is { id, type, topic, record } where
// `topic` is the full topic metadata object.
export function resolvePlaylistItems(playlistIds) {
  return playlistIds
    .map((id) => {
      const lookup = getActivityById(id);
      if (!lookup) return null;
      const topic = TOPICS_BY_ID[lookup.topic];
      if (!topic) return null;
      return { id, type: lookup.type, topic, record: lookup.record };
    })
    .filter(Boolean);
}

// ─── Markdown export ───
// Document organized by topic; within each topic, activities render in the
// order they appear in the playlist (preserving user intent), but conversation
// starters from the same topic group together regardless of where they
// appear in the playlist (per design discussion: instructors selecting
// multiple CS from one topic want them together).

export function buildMarkdown(items) {
  if (items.length === 0) return "";

  // Group by topic, preserving order of first appearance per topic.
  const topicOrder = [];
  const byTopic = new Map();
  items.forEach((item) => {
    if (!byTopic.has(item.topic.id)) {
      byTopic.set(item.topic.id, []);
      topicOrder.push(item.topic.id);
    }
    byTopic.get(item.topic.id).push(item);
  });

  const lines = [];
  lines.push("# Pressing Prompts — Playlist");
  lines.push("");
  lines.push(
    `${items.length} ${items.length === 1 ? "activity" : "activities"} from Pressing Prompts, an open collection of AI ethics teaching resources.`
  );
  lines.push("");

  for (const topicId of topicOrder) {
    const group = byTopic.get(topicId);
    const topic = group[0].topic;
    lines.push(`## ${topic.question}`);
    lines.push("");
    if (topic.subtitle) {
      lines.push(`*${topic.subtitle}*  `);
    }
    lines.push(`Topic page: ${topicUrl(topic.slug)}`);
    lines.push("");

    // Within a topic: render active and discipline items inline (each its
    // own heading), but collect convo items and render them as one grouped
    // section under a single heading.
    const convoItems = group.filter((i) => i.type === "convo");
    const otherItems = group.filter((i) => i.type !== "convo");

    otherItems.forEach((item) => {
      if (item.type === "active") {
        renderActiveActivity(lines, item.record);
      } else if (item.type === "discipline") {
        renderDisciplinaryExtension(lines, item.record);
      }
    });

    if (convoItems.length > 0) {
      lines.push(`### Conversation Starters`);
      lines.push("");
      convoItems.forEach((item, i) => {
        lines.push(`${i + 1}. ${item.record.prompt}`);
      });
      lines.push("");
    }
  }

  lines.push("---");
  lines.push("");
  lines.push("Pressing Prompts · pressingprompts.org · Content licensed CC BY-NC-SA 4.0");
  lines.push("");
  return lines.join("\n");
}

// Render a full Student-Centered Learning activity. Fields included:
// title, tagline, type (in-class/online), purpose, objectives, steps
// (with instructor notes if present), online version, no-AI alternative,
// grading, resources. Any field absent on a given record is silently
// omitted — no empty headers.
function renderActiveActivity(lines, act) {
  lines.push(`### ${act.title}`);
  lines.push("");
  if (act.tagline) {
    lines.push(`*${act.tagline}*`);
    lines.push("");
  }
  if (act.type) {
    const typeLabel = act.type === "in-class" ? "In-Class" : act.type === "online" ? "Online" : act.type;
    lines.push(`**Format:** ${typeLabel}`);
    lines.push("");
  }
  if (act.purpose) {
    lines.push(`**Purpose**`);
    lines.push("");
    lines.push(act.purpose);
    lines.push("");
  }
  if (act.objectives && act.objectives.length) {
    lines.push(`**Activity Objectives**`);
    lines.push("");
    act.objectives.forEach((o) => lines.push(`- ${o}`));
    lines.push("");
  }
  if (act.steps && act.steps.length) {
    lines.push(`**Steps**`);
    lines.push("");
    act.steps.forEach((step, i) => {
      const heading = step.label || `Step ${i + 1}`;
      const time = step.time ? ` _(${step.time})_` : "";
      lines.push(`${i + 1}. **${heading}**${time}`);
      if (step.detail) {
        // Indent the detail under the numbered item
        lines.push(`   ${step.detail}`);
      }
      if (step.instructorNote) {
        lines.push("");
        lines.push(`   > **Learning Note:** ${step.instructorNote}`);
      }
      lines.push("");
    });
  }
  if (act.onlineVersion?.description) {
    lines.push(`**Online Version**`);
    lines.push("");
    lines.push(act.onlineVersion.description);
    lines.push("");
  }
  if (act.noAIAlternative?.description) {
    lines.push(`**No-AI Alternative**`);
    lines.push("");
    lines.push(act.noAIAlternative.description);
    lines.push("");
  }
  if (act.grading && act.grading.length) {
    lines.push(`**Grading**`);
    lines.push("");
    act.grading.forEach((g) => lines.push(`- ${g}`));
    lines.push("");
  }
  if (act.resources && act.resources.length) {
    lines.push(`**Resources**`);
    lines.push("");
    act.resources.forEach((r) => {
      if (r.url && r.url !== "#") {
        lines.push(`- [${r.title}](${r.url})`);
      } else {
        lines.push(`- ${r.title}`);
      }
    });
    lines.push("");
  }
}

// Render a Disciplinary Extension. Per design discussion, each gets its own
// heading (rather than grouped) because the assumption is an instructor
// typically picks at most one or two DEs per topic, often from different
// topics in their discipline.
function renderDisciplinaryExtension(lines, de) {
  lines.push(`### Disciplinary Extension — ${de.discipline}`);
  lines.push("");
  if (de.prompt) {
    lines.push(de.prompt);
    lines.push("");
  }
}

// ─── Copy Links export ───
// Newline-separated list of topic-page URLs, deduplicated (multiple
// activities from the same topic produce a single URL since activities
// don't have their own anchors yet — that's a future refinement).

export function buildLinks(items) {
  if (items.length === 0) return "";
  const seen = new Set();
  const lines = [];
  items.forEach((item) => {
    const url = topicUrl(item.topic.slug);
    if (seen.has(url)) return;
    seen.add(url);
    lines.push(url);
  });
  return lines.join("\n");
}

// ─── Browser helpers ───

// Trigger a browser download for an arbitrary text string.
export function downloadText(filename, text, mimeType = "text/plain") {
  const blob = new Blob([text], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Copy text to clipboard with a fallback for environments where the
// Clipboard API isn't available. Returns Promise<boolean>.
export async function copyToClipboard(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through
    }
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.setAttribute("readonly", "");
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
