// ─── Thematic Clusters ───
// Three clusters that group topics on the homepage.
//
// Each cluster carries its own deep, atmospheric identity color —
// distinct from any member topic, in the same paintbox as them. The
// cluster colors form a triad of deliberate counterpoints to their
// members: ink-blue against warm Truth members, port-burgundy against
// mostly-cool Power members, aubergine against the warm/cool spread of
// Self members. See docs/PALETTE.md for the framework, including when
// to add a fourth cluster (and the candidate identity colors held in
// reserve for that case).

export const CLUSTERS = [
  {
    id: "truth",
    label: "Trust & Truth",
    description: "How do we evaluate what AI tells us?",
    color: "#324E68",
  },
  {
    id: "power",
    label: "Power & Access",
    description: "Who controls AI and who is affected?",
    color: "#6E2F32",
  },
  {
    id: "self",
    label: "Self & Society",
    description: "How does AI change us and our world?",
    color: "#57385C",
  },
];

export const CLUSTERS_BY_ID = Object.fromEntries(CLUSTERS.map((c) => [c.id, c]));
