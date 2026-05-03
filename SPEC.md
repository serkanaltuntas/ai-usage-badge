# AI Usage Standard (AIUS) v1.0

**Canonical spec page:** https://serkan.ai/standards/ai-usage
**License:** CC-BY-4.0 (this document) / MIT (reference code)
**Updated:** 2026-05-03

## TL;DR

AIUS is a small, rule-driven standard for declaring AI involvement in a
written artifact. Every artifact declares six dimensions of contribution
at four levels each. A fixed derivation rule turns those declarations into
one of five tiers, rendered as a glance-readable bar-meter badge. The same
input always produces the same badge, regardless of who or what implements
the spec.

## The Constitution

### Article 1 — Dimensions (fixed, six)

1. `ideation` — topic and scope generation
2. `research` — sources, literature, fact-finding
3. `drafting` — first-pass prose production
4. `editing` — polish, tone, grammar
5. `code` — code snippets, scripts, programs
6. `visuals` — diagrams, illustrations, generated imagery

Adding or removing a dimension constitutes a v2.0 break.

### Article 2 — Levels (fixed, four)

| Label    | Integer | Meaning                                                  |
| -------- | ------- | -------------------------------------------------------- |
| `none`   | 0       | Human only; no AI involvement                            |
| `assist` | 1       | AI offered suggestions; human accepted or rejected each  |
| `collab` | 2       | Human and AI iterated jointly                            |
| `lead`   | 3       | AI produced; human approved or refined                   |

### Article 3 — Tier Derivation (deterministic function)

```
input:  dims = {ideation, research, drafting, editing, code, visuals} ∈ {0,1,2,3}^6
intermediate:
  m       = max(dims)
  n_lead  = count(d ∈ dims | d == 3)
  n_none  = count(d ∈ dims | d == 0)

rule (apply in order, first match wins):
  n_none == 6                       → human-only
  m == 1                            → ai-assisted
  m == 2                            → co-authored
  m == 3 and n_lead <  4            → ai-led
  m == 3 and n_lead >= 4            → ai-generated
```

### Article 4 — Mandatory Dimension Declaration

Every artifact declares all six dimensions explicitly. No defaults. A missing
dimension is a build error.

### Article 5 — Mandatory Model Attribution

If `max(dims) ≥ 1`, the `models[]` list MUST be non-empty. Each entry is an
official model version identifier (e.g., `claude-opus-4-7`, `gpt-5`,
`gemini-2.5-pro`). If `max(dims) == 0`, `models[]` is optional and ignored.

### Article 6 — Tier Override Prohibition

The author MUST NOT set the tier manually. Tier is always the output of the
derivation function in Article 3. A frontmatter `tier` field is a build error.

### Article 7 — Glyph and Label Mapping (fixed)

| Tier            | Glyph | Label           |
| --------------- | ----- | --------------- |
| `human-only`    | ◌     | "Human-Only"    |
| `ai-assisted`   | ◔     | "AI-Assisted"   |
| `co-authored`   | ◑     | "Co-Authored"   |
| `ai-led`        | ◕     | "AI-Led"        |
| `ai-generated`  | ●     | "AI-Generated"  |

Canonical labels are the English strings exactly as listed. Localized variants
are out of scope for v1.0; future versions may add them without breaking
adopters.

### Article 8 — Variants

Two variants are recognized: `full` (the bar meter, intended for post body or
project header) and `mini` (single-line summary, intended for cards and list
pages). Adding a third variant is a v2.0 break.

### Article 9 — Licenses

- Spec text: **CC-BY-4.0**. Cite as: `Disclosure follows AIUS v1.0 (https://serkan.ai/standards/ai-usage)`.
- Reference component code: **MIT**.

### Article 10 — Versioning

- Backward-compatible additions → minor (`v1.x`).
- Backward-incompatible changes → major (`v2.0`).

Adopters may declare `aius_version` in their frontmatter to pin to a version.
Default is `1.0`.

## Reference frontmatter

```yaml
ai:
  ideation: collab
  research: assist
  drafting: lead
  editing: lead
  code: lead
  visuals: none
  models:
    - claude-opus-4-7
    - gpt-5
```

## Adopting AIUS

1. Read this spec.
2. Validate your frontmatter against `schema.json`.
3. Implement `deriveTier()` per Article 3, or copy the reference
   implementation in `examples/astro/`.
4. Render a badge per Article 7's glyph and label table.
5. Cite as: `Disclosure follows AIUS v1.0 (https://serkan.ai/standards/ai-usage)`.
