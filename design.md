# Design System Guardrails

> **Design Philosophy:** Swiss Modern — refined, confident, and quietly precise. A minimalist editorial aesthetic built on a single grotesque type family, anchored by warm dark neutrals and punctuated by vibrant pink and citron accents. Hierarchy comes from **weight, scale, and space** — not from mixing typefaces.

---

## 1. Brand Voice & Visual Principles

The design must always feel:

- **Precise, not sterile** — Swiss-influenced clarity with warmth from off-black/off-white neutrals
- **Confident, not loud** — vibrant accents are used sparingly as punctuation, never as the dominant surface
- **Composed, not busy** — generous whitespace and a single type family do the heavy lifting
- **Legible above all** — every typographic decision prioritizes readability over decoration

---

## 2. Color System

### 2.1 Color Tokens

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--color-text-primary` | `#252321` | `rgb(37, 35, 33)` | Body copy, standard headings |
| `--color-surface-deep` | `#0A112D` | `rgb(10, 17, 45)` | Specialized UI (filters, dark panels) |
| `--color-accent-pink` | `#D14A9B` | `rgb(209, 74, 155)` | Primary brand accent, key CTAs |
| `--color-accent-citron` | `#B9BF33` | `rgb(185, 191, 51)` | Secondary accent, eyebrows, decorative |
| `--color-bg-primary` | `#FDFDFD` | `rgb(253, 253, 253)` | Main page background |
| `--color-bg-pure` | `#FFFFFF` | `rgb(255, 255, 255)` | Container backgrounds, text on dark |
| `--color-ui-muted` | `#5C6771` | `rgb(92, 103, 113)` | UI controls, slider arrows, secondary icons |

### 2.2 Usage Rules

**DO:**
- Use `--color-text-primary` (#252321) for **all** body text and most headings — never pure black
- Use `--color-bg-primary` (#FDFDFD) as the default page background — never pure white for large surfaces
- Use **pink** as the unmistakable signal for critical interactive elements: mobile menu, skip-to-content, primary CTAs, focus states
- Use **citron green** for secondary emphasis: eyebrow labels, decorative dividers, hover accents
- Reserve **deep navy** for distinct functional zones (search filters, advanced UI panels) that benefit from visual separation
- Maintain WCAG AA contrast minimums (4.5:1 for body, 3:1 for large text)

**DON'T:**
- Don't use pink and citron in the same component as competing equals — pick one accent per surface
- Don't apply accent colors to large fills (>20% of viewport) — they are accents, not backgrounds
- Don't introduce gradients, neon glows, or saturated tertiary colors — the palette is deliberately restrained
- Don't use the deep navy for body text — it's a surface color, not a text color

### 2.3 Color Pairing Cheatsheet

| Foreground | Background | Use Case |
|---|---|---|
| `#252321` | `#FDFDFD` | Default body / headings |
| `#FFFFFF` | `#252321` | Dark CTAs, footer text |
| `#FFFFFF` | `#D14A9B` | Primary button |
| `#252321` | `#B9BF33` | Citron tag / pill |
| `#FFFFFF` | `#0A112D` | Filter panel text |

---

## 3. Typography System

The entire system runs on **one type family in two optical cuts**. Hierarchy is built through weight, scale, tracking, and color — never by introducing a second typeface.

### 3.1 Font Families

```css
--font-display: "Neue Haas Grotesk Display Pro", "Helvetica Neue", Arial, sans-serif;
--font-body: "Neue Haas Grotesk Text Pro", "Helvetica Neue", Arial, sans-serif;
--font-icon: "Font Awesome 6 Free";
```

**Why this pairing:** Neue Haas Grotesk Display is drawn for large sizes (tighter spacing, finer detail). Neue Haas Grotesk Text is the same design re-cut for small sizes (slightly wider, more open apertures, optimized rendering at 14–18px). They are designed to coexist — perfect harmony with zero typeface clash.

**Licensing note:** Both cuts are commercial fonts (Monotype / Linotype). If self-hosting isn't viable, the strongest open-source substitutes are **Inter** (display + text) or **IBM Plex Sans** — but the fallback chain above will gracefully degrade to Helvetica Neue or Arial.

### 3.2 Type Scale

| Token | Size | Family | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| `--text-hero` | 64px | Display | 600 (Bold) | -0.02em | Hero H1 |
| `--text-h1` | 48px | Display | 600 (Bold) | -0.02em | Page titles |
| `--text-h2` | 36px | Display | 500 (Medium) | -0.015em | Section headings |
| `--text-h3` | 28px | Display | 500 (Medium) | -0.01em | Subsection headings |
| `--text-h4` | 22px | Display | 500 (Medium) | 0 | Card titles |
| `--text-eyebrow` | 13px | Text | 600 (Bold) | 0.12em UPPERCASE | Labels above headings (often citron) |
| `--text-body-lg` | 20px | Text | 400 (Regular) | 0 | Lead paragraphs, hero subcopy |
| `--text-body` | 18px | Text | 400 (Regular) | 0 | Default paragraph copy |
| `--text-body-sm` | 16px | Text | 400 (Regular) | 0 | Secondary copy, captions |
| `--text-button` | 16px | Text | 500 (Medium) | 0.01em | Buttons, primary nav |
| `--text-ui-sm` | 14px | Text | 500 (Medium) | 0 | Form labels, metadata |

### 3.3 Typography Rules

**DO:**
- Use the **Display** cut **only at 22px and above** — anything smaller should use the Text cut
- Use the **Text** cut for everything functional: body, navigation, buttons, forms, labels, captions
- Apply **negative tracking** (`-0.01em` to `-0.02em`) on headings 28px and larger — Haas Grotesk benefits from tighter spacing at scale
- Apply tight line-height to display sizes: `1.05`–`1.15`
- Apply comfortable line-height to body: `1.55`–`1.7`
- Use **uppercase + wide tracking** (`letter-spacing: 0.12em`) for eyebrow labels — this is the single moment where wide tracking is correct
- Keep measure (line length) between **55–75 characters** for body text
- Build hierarchy with **weight contrast** (400 → 500 → 600) rather than adding more sizes

**DON'T:**
- Don't introduce a second typeface — the single-family system **is** the identity
- Don't use the Display cut below 22px — it will look anemic and over-spaced
- Don't use the Text cut above 28px — it will look soft and under-defined
- Don't use weights heavier than 600 (Bold) — Black/Heavy weights break the refined feel
- Don't use italics for emphasis in UI — use weight (Medium/Bold) or color instead
- Don't apply positive (wide) tracking to anything except uppercase eyebrow labels

---

## 4. Spacing & Layout

The Swiss-modern aesthetic depends on **generous, mathematical whitespace**. Crowding kills this design.

```
--space-1:  4px
--space-2:  8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

- **Section padding (vertical):** minimum 80px on mobile, 128px+ on desktop
- **Container max-width:** ~1200px with comfortable side gutters
- **Grid:** 12-column with 24–32px gutters; consider a stricter 8-column grid for editorial layouts
- **Cards / surfaces:** minimal radius (`2–4px`); sharper corners reinforce the Swiss feel
- **Borders:** 1px hairlines in muted gray or very low-opacity primary text color
- **Alignment:** prefer left-aligned text and consistent baseline grids — avoid center-aligned body copy

---

## 5. Component Guidelines

### Buttons
- **Primary:** pink background (`#D14A9B`), white text, Text cut 16px Medium (500), 14px vertical padding, 28px horizontal padding, ~2–4px radius
- **Secondary:** transparent background, 1px `#252321` border, `#252321` text, same dimensions as primary
- **Tertiary / text link:** `#252321` with citron or pink underline on hover; consider an animated underline that draws on hover

### Forms & Filters
- Filter panels and advanced search UI may use the **deep navy** background with white text
- Input fields: white background, 1px muted-gray border, focus state shifts border to pink (2px) with no glow
- Labels: Text cut 14px Medium (500), sit directly above inputs with 8px spacing

### Navigation
- Primary nav: Text cut 16px Medium (500), charcoal text
- Hover state: underline in citron or pink (pick one and stay consistent site-wide)
- Mobile menu toggle: **pink** — this is a defining brand moment

### Icons
- Use **Font Awesome** as the primary icon set; consider a thinner weight (Light or Regular) to match the refined feel
- Default icon color matches surrounding text; interactive icons may shift to pink on hover
- Slider/carousel controls use muted gray (`#5C6771`)
- Avoid filled/duotone icon styles — they fight the typographic restraint

---

## 6. Accessibility Requirements

- Maintain **WCAG 2.1 AA** minimum across all surface/text combinations
- Provide a visible **skip-to-content** link styled in pink (already a brand pattern)
- Focus rings must be clearly visible — recommend a 2px pink outline with 2px offset
- Never convey information through color alone (pair color with icon, label, or position)
- Body text must remain at 18px or larger; do not shrink below 16px for any reading content
- When using negative tracking on headings, verify it doesn't compromise readability for users with dyslexia — never go below `-0.025em`

---

## 7. What This Design Should NEVER Become

To preserve the Swiss-modern identity, the design should avoid:

- ❌ Multiple typeface families — the one-family discipline **is** the design
- ❌ Serif anything (headings, pull quotes, blockquotes) — would break the entire system
- ❌ Decorative or display fonts in any role
- ❌ Generic startup look (rounded cards, gradient buttons, illustrated mascots)
- ❌ Heavy drop shadows, glassmorphism, or neumorphism
- ❌ Pure black (`#000`) or pure white (`#FFF`) as dominant text/background
- ❌ Loud, saturated color blocking — accents stay as accents
- ❌ Black or Heavy font weights (700+) — Bold (600) is the ceiling
- ❌ Italics used for UI emphasis
- ❌ Center-aligned body copy or "playful" layouts
- ❌ AI-generated stock imagery, novelty illustration, or busy hero collages

---

## 8. Quick Reference Prompt Snippet

When prompting an AI to generate components or pages aligned with this system, include:

> Use Neue Haas Grotesk Display Pro for headings (22px and above) and Neue Haas Grotesk Text Pro for body and UI. Single type family — never introduce a second typeface. Background `#FDFDFD`, body text `#252321`. Primary accent is vibrant pink `#D14A9B` reserved for key CTAs and critical interactive elements. Secondary accent is citron green `#B9BF33` for eyebrow labels and decorative touches. Deep navy `#0A112D` is used only for distinct functional panels like filters. Headings use Medium (500) or Bold (600) weight with slightly negative tracking (-0.01 to -0.02em) and tight line-height (1.05–1.15). Body is 18px Regular with 1.6 line-height. Eyebrow labels are 13px uppercase with +0.12em tracking. Layouts are generous, left-aligned, and Swiss-grid-disciplined; section padding is at least 96px on desktop. Avoid pure black/white, gradients, heavy shadows, serif anything, and weights above 600. The feel is Swiss modern — precise, confident, and quietly refined.
