# Changelog

All notable changes to this standard will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] — 2026-05-08

### Fixed

- `schema.json`: rename `"comment"` annotation to the canonical
  `"$comment"` per JSON Schema 2020-12. Validators silently ignored the
  previous form; this aligns with the spec's reserved keyword.
- `examples/astro/`: tokenize the empty bar-meter segment background
  via a new `--track-empty` CSS variable instead of hard-coding
  `rgba(0, 0, 0, 0.06)`. Adopters now control the unfilled-segment
  color through one variable. README updated with the full required
  CSS variable list.

Spec semantics unchanged. No constitution or contract changes.

## [1.0.0] — 2026-05-03

### Added

- Initial public release.
- Six dimensions: ideation, research, drafting, editing, code, visuals.
- Four levels per dimension: none, assist, collab, lead.
- Five tiers derived deterministically: human-only, ai-assisted,
  co-authored, ai-led, ai-generated.
- Two variants: full bar meter and mini one-liner.
- Glyph and label table (Article 7).
- Mandatory model attribution when `max(dims) >= 1` (Article 5).
- Tier-override prohibition via strict-mode validation (Article 6).
- JSON Schema for adopter frontmatter validation.
- Reference Astro implementation under `examples/astro/`.
- Canonical hosting at https://serkan.ai/standards/ai-usage.
- Spec under CC-BY-4.0; reference code under MIT.
