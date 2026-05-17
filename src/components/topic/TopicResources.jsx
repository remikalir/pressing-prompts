import { useState } from "react";
import { T } from "../../styles/tokens.js";
import { renderInlineMarkdown } from "../../utils/markdown.js";

// ─── Topic Resources ───
// One card with two equal-weight subsections:
//   • ACTIVITY RESOURCES — auto-derived from per-activity `resources` arrays
//     (no hand-curated mirror, no drift). Items used by multiple activities
//     are deduplicated by URL with combined attributions ("Activity 1, 3").
//   • FURTHER RECOMMENDATIONS — a curated list of background reading not
//     tied to any single activity. Citation typography (italics, links) is
//     supported in the title field via the shared markdown helper.
//
// Collapse behavior:
// When the combined total exceeds VISIBLE_LIMIT (5), the card collapses by
// default and shows a chevron toggle. The visible-when-collapsed slice walks
// the combined list in render order — Activity Resources first, then Further
// Recommendations — so the visible 5 may be entirely from one subsection or
// span both. Subsection headings render only when at least one of their items
// is currently visible (i.e., in collapsed state with 5 activity resources
// shown, the Further Recommendations heading stays hidden until expansion).

const VISIBLE_LIMIT = 5;

export default function TopicResources({ activities, furtherRecommendations, colors }) {
  const activityResources = deriveActivityResources(activities);
  const furtherRecs = Array.isArray(furtherRecommendations)
    ? furtherRecommendations
    : [];

  const totalCount = activityResources.length + furtherRecs.length;
  if (totalCount === 0) return null;

  const isCollapsible = totalCount > VISIBLE_LIMIT;
  const [expanded, setExpanded] = useState(false);

  // How many items from each subsection are visible in the current state.
  // In collapsed state we walk the combined list and assign the first
  // VISIBLE_LIMIT slots to Activity Resources first, then Further Recs.
  const visibleActivityCount =
    !isCollapsible || expanded
      ? activityResources.length
      : Math.min(activityResources.length, VISIBLE_LIMIT);
  const visibleFurtherCount =
    !isCollapsible || expanded
      ? furtherRecs.length
      : Math.max(0, VISIBLE_LIMIT - activityResources.length);

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
      {visibleActivityCount > 0 && (
        <Subsection
          heading="Activity Resources"
          resources={activityResources.slice(0, visibleActivityCount)}
          colors={colors}
          showAttribution
        />
      )}

      {visibleActivityCount > 0 && visibleFurtherCount > 0 && (
        <div style={{ height: "20px" }} />
      )}

      {visibleFurtherCount > 0 && (
        <Subsection
          heading="Further Recommendations"
          resources={furtherRecs.slice(0, visibleFurtherCount)}
          colors={colors}
          showAttribution={false}
          renderTitleAsMarkdown
        />
      )}

      {isCollapsible && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          hiddenCount={totalCount - (visibleActivityCount + visibleFurtherCount)}
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

// ─── Activity-resource derivation ───
// Walk activities, collecting per-activity resources. Dedupe by URL (or title
// if URL is missing) so a resource cited by multiple activities surfaces once
// with a combined attribution like "Activity 1, 3" rather than repeating.
function deriveActivityResources(activities) {
  if (!Array.isArray(activities)) return [];
  const map = new Map();
  activities.forEach((act) => {
    if (!act.resources || !act.resources.length) return;
    act.resources.forEach((r) => {
      const key = r.url && r.url !== "#" ? r.url : `title:${r.title}`;
      if (!map.has(key)) {
        map.set(key, {
          title: r.title,
          url: r.url,
          activityNumbers: new Set(),
        });
      }
      if (typeof act.number === "number") {
        map.get(key).activityNumbers.add(act.number);
      }
    });
  });
  return Array.from(map.values()).map((entry) => {
    const nums = Array.from(entry.activityNumbers).sort((a, b) => a - b);
    return {
      title: entry.title,
      url: entry.url,
      attribution: nums.length ? `Activity ${nums.join(", ")}` : null,
    };
  });
}
