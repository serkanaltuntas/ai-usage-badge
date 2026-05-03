# AIUS — Astro reference example

Standalone, MIT-licensed Astro implementation of the AI Usage Standard.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321/ to see all five tier examples rendered with
both the full and mini badge variants.

## Files

- `src/lib/aius/derive.ts` — pure tier-derivation function (Article 3).
- `src/lib/aius/glyphs.ts` — frozen glyph and label tables (Article 7).
- `src/components/AIUsage.astro` — full bar-meter component.
- `src/components/AIUsageMini.astro` — one-liner mini variant.
- `src/pages/index.astro` — demo page.

## Adopt

Copy these files into your own Astro project. The components depend only
on the two `lib/aius/` files and the two CSS variables `--fg`, `--fg-dim`,
`--accent`, `--rule`, `--fg-muted` (set them in your global stylesheet).
