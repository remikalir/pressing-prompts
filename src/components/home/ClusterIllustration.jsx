import { TOPICS } from "../../data/topics.js";
import { CLUSTERS_BY_ID } from "../../data/clusters.js";

// ─── Cluster Illustration ───
// Small radial constellation showing the topics in a cluster arranged around
// a central dot of the cluster's color. Used in cluster headers on the homepage.

export default function ClusterIllustration({ cluster, size = 64 }) {
  const c = CLUSTERS_BY_ID[cluster];
  const topics = TOPICS.filter((t) => t.cluster === cluster);
  if (!c) return null;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill={c.color} opacity="0.06" />
      {topics.map((t, i) => {
        const angle = (i / topics.length) * Math.PI * 2 - Math.PI / 2;
        const r = 16;
        const cx = 32 + Math.cos(angle) * r;
        const cy = 32 + Math.sin(angle) * r;
        return (
          <g key={t.id}>
            <circle cx={cx} cy={cy} r={7} fill={t.colors.main} opacity={0.7} />
            <line x1={32} y1={32} x2={cx} y2={cy} stroke={t.colors.main} strokeWidth="1" opacity="0.15" />
          </g>
        );
      })}
      <circle cx="32" cy="32" r="4" fill={c.color} opacity="0.25" />
    </svg>
  );
}
