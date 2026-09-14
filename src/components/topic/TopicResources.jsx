import { useState } from "react";
import { T } from "../../styles/tokens.js";
import { renderInlineMarkdown } from "../../utils/markdown.js";

// ─── Topic Resources ───
// One card with up to three equal-weight subsections, rendered in the same
// order the material appears on the topic page:
//   • CONVERSATION STARTERS — auto-derived from per-starter `resources`
//     arrays. Renders only when at least one starter carries a link, so most
//     topics show nothing here. Attributions read "Starter 4".
//   • ACTIVITY RESOURCES — auto-derived from per-activity `resources` arrays
//     (no hand-curated mirror, no drift). Items used by multiple activities
//     are deduplicated by URL with combined attributions ("Activity 1, 3").
//   • FURTHER RECOMMENDATIONS — a curated list of background reading not
//     tied to any single activity. Citation typography (italics, links) is
//     supported in the title field via the shared markdown helper.
//
// Deduplication is per-subsection, not across the card. A resource cited by
// both a starter and an activity appears in both, because each subsection is
// making a separate claim about where that resource is used.
//
// Collapse behavior:
// When the combined total exceeds VISIBLE_LIMIT (5), the card collapses by
// default and shows a chevron toggle. The visible-when-collapsed slice walks
// the combined list in render order — Conversation Starters, then Activity
// Resources, then Further Recommendations — filling each subsection before
// moving to the next, so the visible 5 may sit entirely in one subsection or
// span several. Subsection headings render only when at least one of their
// items is currently visible.

const VISIBLE_LIMIT = 5;

export default function TopicResources({
  conversationStarters,
  activities,
  furtherRecommendations,
  colors,
}) {
  // Hook runs before any early return. Previously the `totalCount === 0`
  // guard sat above this line, which made the hook conditional: a topic with
  // no resources rendered zero hooks where a topic with resources rendered
  // one. React reconciling the same component position across a route change
  // between those two cases throws "Rendered fewer hooks than expected" and
  // white-screens the page. Latent while every topic has resources; not
  // latent the moment a new topic is scaffolded empty.
  const [expanded, setExpanded] = useState(false);

  const starterResources = deriveStarterResources(conversationStarters);
  const activityResources = deriveActivityResources(activities);
  const furtherRecs = Array.isArray(furtherRecommendations)
    ? furtherRecommendations
    : [];

  // Subsections in render order. Empty ones drop out here, so everything
  // downstream — counting, slicing, spacing — only ever sees real content.
  const sections = [
    {
      key: "starters",
      heading: "Conversation Starters",
      resources: starterResources,
      showAttribution: true,
    },
    {
      key: "activities",
      heading: "Activity Resources",
      resources: activityResources,
      showAttribution: true,
    },
    {
      key: "further",
      heading: "Further Recommendations",
      resources: furtherRecs,
      showAttribution: false,
      renderTitleAsMarkdown: true,
    },
  ].filter((s) => s.resources.length > 0);

  const totalCount = sections.reduce((n, s) => n + s.resources.length, 0);
  if (totalCount === 0) return null;

  const isCollapsible = totalCount > VISIBLE_LIMIT;

  // Walk the subsections in order, handing out the available slots. When
  // expanded (or too short to collapse) the budget is unbounded, which keeps
  // this one loop rather than branching per state.
  let budget = !isCollapsible || expanded ? Infinity : VISIBLE_LIMIT;
  const visibleSections = [];
  sections.forEach((s) => {
    const take = Math.min(s.resources.length, budget);
    if (take > 0) {
      visibleSections.push({ ...s, visible: s.resources.slice(0, take) });
      budget -= take;
    }
  });

  const visibleCount = visibleSections.reduce((n, s) => n + s.visible.length, 0);

  return (
    <div
      style={{
        padding: "28px",
        background: "white",
        borderRadius: T.radiusLg,
        border: `1px solid ${T.border}`,
        boxShadow: T.shadow,
      }}
    >
      {visibleSections.map((s, i) => (
        <div key={s.key}>
          {i > 0 && <div style={{ height: "20px" }} />}
          <Subsection
            heading={s.heading}
            resources={s.visible}
            colors={colors}
            showAttribution={s.showAttribution}
            renderTitleAsMarkdown={s.renderTitleAsMarkdown}
          />
        </div>
      ))}

      {isCollapsible && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          hiddenCount={totalCount - visibleCount}
          colors={colors}
        />
      )}
    </div>
  );
}

// ─── Subsection ───
function Subsection({ heading, resources, colors, showAttribution, renderTitleAsMarkdown }) {
  return (
    <div>
      <h4
        style={{
          margin: "0 0 16px 0",
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: T.text3,
        }}
      >
        {heading}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {resources.map((r, i) => (
          <ResourceRow
            key={i}
            resource={r}
            colors={colors}
            showAttribution={showAttribution}
            renderTitleAsMarkdown={renderTitleAsMarkdown}
          />
        ))}
      </div>
    </div>
  );
}

function ResourceRow({ resource, colors, showAttribution, renderTitleAsMarkdown }) {
  const titleNode = renderTitleAsMarkdown ? (
    <span
      dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(resource.title) }}
    />
  ) : (
    <span>{resource.title}</span>
  );

  const linkContent = (
    <>
      {titleNode} <span style={{ fontSize: "12px", opacity: 0.5 }}>↗</span>
    </>
  );

  const baseStyle = {
    fontFamily: T.sans,
    fontSize: "13px",
    color: colors.main,
    lineHeight: 1.6,
    textDecoration: "none",
    // Long-token containment, same reasoning as ConversationStarters.jsx.
    // This row is a flex container and the title is a flex child, so its
    // automatic minimum size would floor it at min-content width — one bare
    // URL or long DOI in a resource title would push the row past a phone
    // viewport and overflow the document. Defensive: no current title needs
    // it, but titles are author-written and this list keeps growing.
    minWidth: 0,
    overflowWrap: "anywhere",
    wordBreak: "break-word",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      {resource.url && resource.url !== "#" ? (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          style={baseStyle}
        >
          {linkContent}
        </a>
      ) : (
        <span style={{ ...baseStyle, color: T.text1 }}>{titleNode}</span>
      )}
      {showAttribution && resource.attribution && (
        <span
          style={{
            fontFamily: T.sans,
            fontSize: "12px",
            color: T.text3,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {resource.attribution}
        </span>
      )}
    </div>
  );
}

// ─── Expand / collapse toggle ───
// Mirrors the chevron pattern used on Activity cards: a centered button with
// a downward chevron that rotates when expanded. The visible-state label is
// kept short ("Show all N" / "Show fewer").
function ExpandToggle({ expanded, onToggle, hiddenCount, colors }) {
  return (
    <div
      style={{
        marginTop: "20px",
        paddingTop: "16px",
        borderTop: `1px solid ${T.border}`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: T.sans,
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: colors.main,
        }}
      >
        {expanded ? "Show fewer" : `Show all (${hiddenCount} more)`}
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            transition: "transform 0.2s ease",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            fontSize: "10px",
          }}
        >
          ▼
        </span>
      </button>
    </div>
  );
}

// ─── Resource derivation ───
// Shared by both auto-derived subsections. Walk a list of owners (activities,
// conversation starters), collect their `resources` arrays, and dedupe by URL
// (or title if URL is missing) so a resource cited by two owners surfaces once
// with a combined attribution — "Activity 1, 3" — rather than repeating.
//
// `numberOf(owner, index)` returns the number shown in the attribution, or
// null to omit it. Activities carry an explicit `number` field; starters are
// numbered by position, matching the numerals ConversationStarters.jsx
// renders from the array index.
function deriveOwnedResources(owners, label, numberOf) {
  if (!Array.isArray(owners)) return [];
  const map = new Map();
  owners.forEach((owner, index) => {
    if (!owner || !owner.resources || !owner.resources.length) return;
    owner.resources.forEach((r) => {
      const key = r.url && r.url !== "#" ? r.url : `title:${r.title}`;
      if (!map.has(key)) {
        map.set(key, { title: r.title, url: r.url, numbers: new Set() });
      }
      const n = numberOf(owner, index);
      if (typeof n === "number") map.get(key).numbers.add(n);
    });
  });
  return Array.from(map.values()).map((entry) => {
    const nums = Array.from(entry.numbers).sort((a, b) => a - b);
    return {
      title: entry.title,
      url: entry.url,
      attribution: nums.length ? `${label} ${nums.join(", ")}` : null,
    };
  });
}

function deriveActivityResources(activities) {
  return deriveOwnedResources(activities, "Activity", (act) =>
    typeof act.number === "number" ? act.number : null
  );
}

function deriveStarterResources(starters) {
  return deriveOwnedResources(starters, "Starter", (_starter, index) => index + 1);
}
