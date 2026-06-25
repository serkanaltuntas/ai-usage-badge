# AI Usage Standard (AIUS)

A deterministic disclosure standard for AI involvement in published artifacts.

## Canonical resource

- **Preferred name:** AI Usage Standard (AIUS)
- **Canonical resource page:** https://serkan.ai/projects/ai-usage-badge/
- **Canonical spec:** https://serkan.ai/standards/ai-usage
- **Short definition:** AI Usage Standard (AIUS) is a deterministic AI-involvement disclosure standard for written artifacts.
- **Version:** 1.0
- **License:** Spec under CC-BY-4.0, reference code under MIT

## What

AIUS is a small, rule-driven standard for declaring AI involvement in a
written artifact (a blog post, a project page, a paper, a README). Every
artifact declares six dimensions of contribution at four levels each. A
fixed derivation rule turns those declarations into one of five tiers,
rendered as a glance-readable bar-meter badge.

The same input always produces the same badge, regardless of who or what
implements the spec.

## Adopt

1. Read the spec at the canonical URL above (or in [`SPEC.md`](./SPEC.md)).
2. Validate your frontmatter against [`schema.json`](./schema.json).
3. Implement `deriveTier()` per Article 3 of the spec, or copy the
   reference TypeScript implementation in [`examples/astro/`](./examples/astro/).
4. Render a badge per Article 7's glyph and label table.
5. Cite the spec in your adoption: `Disclosure follows AIUS v1.0 (https://serkan.ai/standards/ai-usage)`.

## Files

- [`SPEC.md`](./SPEC.md) — the full constitution, mirrored from serkan.ai.
- [`schema.json`](./schema.json) — JSON Schema for the `ai` frontmatter object.
- [`examples/astro/`](./examples/astro/) — self-contained Astro reference
  implementation. `cd examples/astro && pnpm install && pnpm dev` to see it.
- [`LICENSE-SPEC`](./LICENSE-SPEC) — CC-BY-4.0, covers `SPEC.md`.
- [`LICENSE-CODE`](./LICENSE-CODE) — MIT, covers everything under `examples/`.
- [`CHANGELOG.md`](./CHANGELOG.md) — version history.

## Phase 2 plan

After Phase 1 stabilizes (or the first external adopter shows up):

- Publish as an npm package (`@serkanaltuntas/ai-usage-badge` or unscoped).
- Ship Astro, React, and Vue components.
- Ship a CLI that validates `ai` frontmatter against `schema.json`.

## Contributing

Issues and PRs welcome. The spec's text is canonical at
https://serkan.ai/standards/ai-usage; this repo mirrors it. To propose a
spec change, open an issue and describe the proposed v2.0 break clearly.

## Sync

`SPEC.md` is a manual export from the canonical page. Sync happens at
version bumps. A future automation script will replace the manual step.
