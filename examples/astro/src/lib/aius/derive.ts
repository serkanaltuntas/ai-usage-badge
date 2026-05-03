export const DIMS = [
  "ideation",
  "research",
  "drafting",
  "editing",
  "code",
  "visuals",
] as const;
export type Dimension = (typeof DIMS)[number];

export const LEVELS = ["none", "assist", "collab", "lead"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_TO_INT: Record<Level, 0 | 1 | 2 | 3> = {
  none: 0,
  assist: 1,
  collab: 2,
  lead: 3,
};

export const TIERS = [
  "human-only",
  "ai-assisted",
  "co-authored",
  "ai-led",
  "ai-generated",
] as const;
export type Tier = (typeof TIERS)[number];

export type AIUsageData = Record<Dimension, Level>;

export function deriveTier(dims: AIUsageData): Tier {
  const ints = DIMS.map((d) => LEVEL_TO_INT[dims[d]]);
  const m = Math.max(...ints);
  const nLead = ints.filter((x) => x === 3).length;
  const nNone = ints.filter((x) => x === 0).length;

  if (nNone === 6) return "human-only";
  if (m === 1) return "ai-assisted";
  if (m === 2) return "co-authored";
  if (m === 3 && nLead < 4) return "ai-led";
  return "ai-generated";
}
