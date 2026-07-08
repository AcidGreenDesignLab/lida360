# Design System Guardrails

> **Design Philosophy:** Modern Professional — trustworthy yet creative. A sophisticated editorial aesthetic that pairs a high-contrast serif with a clean sans-serif, anchored by warm dark neutrals and punctuated by vibrant pink and citron accents.

---

## 1. Brand Voice & Visual Principles

The design must always feel:

- **Editorial, not corporate** — leans into magazine/publishing sensibilities over generic SaaS patterns
- **Confident, not loud** — vibrant accents are used sparingly as punctuation, never as the dominant surface
- **Warm, not cold** — uses off-black and off-white rather than pure black/white to soften the experience
- **Legible above all** — typography decisions prioritize readability; decorative choices never compromise clarity

---

## 2. Color System

### 2.1 Color Tokens

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--color-text-primary` | `#252321` | `rgb(37, 35, 33)` | Body copy, standard headings |
| `--color-surface-deep` | `#0A112D` | `rgb(10, 17, 45)` | Specialized UI (filters, dark panels) |
| `--color-accent-pink` | `#D14A9B` | `rgb(209, 74, 155)` | Primary brand accent, key CTAs |
| `--color-accent-citron` | `#B9BF33` | `rgb(185, 191, 51)` | Secondary accent, subheadings, decorative |
| `--color-bg-primary` | `#FDFDFD` | `rgb(253, 253, 253)` | Main page background |
| `--color-bg-pure` | `#FFFFFF` | `rgb(255, 255, 255)` | Container backgrounds, text on dark |
| `--color-ui-muted` | `#5C6771` | `rgb(92, 103, 113)` | UI controls, slider arrows, secondary icons |

### 2.2 Usage Rules

**DO:**
- Use `--color-text-primary` (#252321) for **all** body text and most headings — never pure black
- Use `--color-bg-primary` (#FDFDFD) as the default page background — never pure white for large surfaces
- Use **pink** as the unmistakable signal for critical interactive elements: mobile menu, skip-to-content, primary CTAs, focus states
- Use **citron green** for secondary emphasis: subheadings, eyebrow text, decorative dividers, hover states on neutral elements
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

### 3.1 Font Families

```css
--font-display: "DM Serif Display", Georgia, "Times New Roman", serif;
--font-body: "Work Sans", -apple-system, "Segoe UI", Roboto, sans-serif;
--font-icon: "Font Awesome 6 Free";
```

### 3.2 Type Scale

| Token | Size | Family | Weight | Usage |
|---|---|---|---|---|
| `--text-hero` | 56px | DM Serif Display | 400 | Hero H1 |
| `--text-h1` | 44px | DM Serif Display | 400 | Page titles |
| `--text-h2` | 36px | DM Serif Display | 400 | Section headings |
| `--text-h3` | 28px | DM Serif Display | 400 | Subsection headings |
| `--text-eyebrow` | 14px | Work Sans | 600 | Uppercase labels above headings (often citron) |
| `--text-body` | 18px | Work Sans | 400 | Default paragraph copy |
| `--text-body-sm` | 16px | Work Sans | 400 | Secondary copy, captions |
| `--text-button` | 16px | Work Sans | 500–600 | Buttons, primary nav |
| `--text-ui-sm` | 14px | Work Sans | 400 | Form labels, metadata |

### 3.3 Typography Rules

**DO:**
- Use **DM Serif Display** exclusively for headings (H1–H6) — it carries the editorial identity
- Use **Work Sans** for everything functional: body, navigation, buttons, forms, labels, captions
- Apply generous line-height to serif headings: `1.15`–`1.25`
- Apply comfortable line-height to body: `1.55`–`1.7`
- Use a wider tracking (`letter-spacing: 0.08em`) and uppercase for eyebrow labels
- Keep measure (line length) between **55–75 characters** for body text

**DON'T:**
- Don't use DM Serif Display for body text, UI labels, or anything under 20px — it's optimized for display sizes
- Don't bold the serif aggressively — its visual weight comes from contrast, not font-weight
- Don't mix in additional typefaces — the two-family system is the identity
- Don't use all-caps on serif headings — reserve caps treatment for sans-serif eyebrows

---

## 4. Spacing & Layout

To complement the editorial aesthetic, use a generous, predictable rhythm:

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
```

- **Section padding (vertical):** minimum 64px on mobile, 96px+ on desktop
- **Container max-width:** ~1200px with comfortable side gutters
- **Grid:** 12-column with 24–32px gutters
- **Cards / surfaces:** subtle radius (`4–8px`); avoid heavily rounded "friendly" shapes
- **Borders:** 1px hairlines in muted gray or very low-opacity primary text color

---

## 5. Component Guidelines

### Buttons
- **Primary:** pink background (`#D14A9B`), white text, 16px Work Sans 500–600, 12–14px vertical padding, 24–32px horizontal padding, ~4px radius
- **Secondary:** transparent background, 1px `#252321` border, `#252321` text, same dimensions as primary
- **Tertiary / text link:** `#252321` with citron or pink underline on hover

### Forms & Filters
- Filter panels and advanced search UI may use the **deep navy** background with white text
- Input fields: white background, 1px muted-gray border, focus state shifts border to pink
- Labels: Work Sans 14px, weight 500

### Navigation
- Primary nav: Work Sans, 16px, weight 500, charcoal text
- Hover state: underline in citron or pink (pick one and stay consistent site-wide)
- Mobile menu toggle: **pink** — this is a defining brand moment

### Icons
- Use **Font Awesome** as the primary icon set
- Default icon color matches surrounding text; interactive icons may shift to pink on hover
- Slider/carousel controls use muted gray (`#5C6771`)

---

## 6. Accessibility Requirements

- Maintain **WCAG 2.1 AA** minimum across all surface/text combinations
- Provide a visible **skip-to-content** link styled in pink (already a brand pattern)
- Focus rings must be clearly visible — recommend a 2px pink outline with 2px offset
- Never convey information through color alone (pair color with icon, label, or position)
- Body text must remain at 18px or larger; do not shrink below 16px for any reading content

---

## 7. What This Design Should NEVER Become

To preserve the identity, the design should avoid:

- ❌ Generic startup look (rounded cards, gradient buttons, illustrated mascots)
- ❌ Heavy use of drop shadows, glassmorphism, or neumorphism
- ❌ Sans-serif headings (this would erase the editorial signature)
- ❌ Pure black (`#000`) or pure white (`#FFF`) as dominant text/background
- ❌ Loud, saturated color blocking — accents stay as accents
- ❌ More than two typefaces in active use
- ❌ Decorative scripts, novelty fonts, or AI-generated stock imagery

---

## 8. Quick Reference Prompt Snippet

When prompting an AI to generate components or pages aligned with this system, include:

> Use DM Serif Display for headings and Work Sans for body and UI. Background `#FDFDFD`, body text `#252321`. Primary accent is vibrant pink `#D14A9B` reserved for key CTAs and critical interactive elements. Secondary accent is citron green `#B9BF33` for eyebrows, subheadings, and decorative touches. Deep navy `#0A112D` is used only for distinct functional panels like filters. Layout is editorial and generous, with serif headings at 28–56px and 18px body text. Avoid pure black/white, gradients, heavy shadows, and any second sans-serif. The feel is modern professional — trustworthy, elegant, and quietly confident.
