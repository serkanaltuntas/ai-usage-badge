import type { Tier } from "./derive";

export const TIER_GLYPHS: Readonly<Record<Tier, string>> = Object.freeze({
  "human-only": "◌",
  "ai-assisted": "◔",
  "co-authored": "◑",
  "ai-led": "◕",
  "ai-generated": "●",
});

export const TIER_LABELS: Readonly<Record<Tier, string>> = Object.freeze({
  "human-only": "Human-Only",
  "ai-assisted": "AI-Assisted",
  "co-authored": "Co-Authored",
  "ai-led": "AI-Led",
  "ai-generated": "AI-Generated",
});
