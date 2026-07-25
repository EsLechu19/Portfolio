---
name: Esaú Lechuga — Portfolio
description: Dark cosmic portfolio for a software engineer — luminous on void, precise as a terminal
colors:
  space-deep: "#0b0721"
  indigo-surface: "#0d0b3a"
  indigo-active: "#21197a"
  navy-card: "#15104d"
  navy-card-hover: "#1e186b"
  neon-blue: "#3b82f6"
  aurora-cyan: "#22d3ee"
  solar-yellow: "#facc15"
  mint-green: "#4ade80"
  text-primary: "#ffffff"
  text-muted: "#a0a0c0"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.8rem, 8vw, 5rem)"
    fontWeight: 900
    lineHeight: 1
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 800
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 800
    letterSpacing: "0.1em"
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
  nav:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
  subhead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
  base:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  kicker:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    letterSpacing: "0.1em"
  display-md:
    fontFamily: "Inter, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 900
    lineHeight: 1
  headline-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
  headline-fluid:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "10px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "30px"
  xxl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.neon-blue}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#2563eb"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  card:
    backgroundColor: "{colors.navy-card}"
    rounded: "{rounded.lg}"
    padding: "25px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  nav-item-active:
    backgroundColor: "{colors.indigo-active}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  skill-bar-fill:
    backgroundColor: "linear-gradient(to right, {colors.neon-blue}, {colors.aurora-cyan})"
    rounded: "10px"
    height: "6px"
  gradient-text:
    backgroundColor: "linear-gradient(to right, {colors.neon-blue}, {colors.aurora-cyan}, {colors.mint-green}, {colors.solar-yellow})"
    textColor: "transparent"
---

# Design System: Esaú Lechuga — Portfolio

## Overview

**Creative North Star: "The Deep Space Terminal"**

This is a portfolio that reads like a terminal session against a deep-space backdrop — precise, luminous, and unmistakably technical. The visual language pairs a near-black indigo void with neon accent strikes (blue, cyan, yellow, green), treating light as a scarce, deliberate resource. Every glowing element earns its brightness.

The layout is split by a persistent sidebar command palette (navigation) and a main content bay. Cards float above the void with subtle borders and background shifts rather than shadows — depth comes from tonal layering, not CSS box-shadows. The laptop animation on the hero doubles as both decoration and a statement of craft: this is someone who builds things.

**Key Characteristics:**
- Deep indigo-black backgrounds with purple-tinged surface layers
- Neon accent palette used sparingly for interactivity and emphasis
- Sidebar-as-command-palette navigation model
- Tonal layering, not shadow-based depth
- Scroll-reveal as the single authored motion moment
- Gradient text reserved for the single hero headline claim ("Software Developer")

## Colors

The palette is a dark-space terminal at night: the void is absolute, and every color arrives like a signal.

### Primary
- **Neon Blue** (#3b82f6): The action color. Primary buttons, active tab states, hover badges, skill bar gradients, and the loading spinner. It is the anchor accent — the one color that must mean "interactive."

### Secondary
- **Aurora Cyan** (#22d3ee): The atmospheric partner. Gradients alongside Neon Blue (skill bars, profile avatar), and a lighter accent for secondary highlights. It brings air to the deep indigo.

### Tertiary
- **Solar Yellow** (#facc15): The attention color. Greeting text ("Hello, I am Esau Lechuga"), section numbers, contact sublabels. Used sparingly to create entry points.
- **Mint Green** (#4ade80): The gradient endpoint. Completes the hero gradient sweep and appears in the rainbow text treatment.

### Neutral
- **Space Deep** (#0b0721): The void — primary page background.
- **Indigo Surface** (#0d0b3a): Sidebar and secondary surface background. Slightly different from the void to signal a panel change.
- **Indigo Active** (#21197a): Navigation hover and active state. Brighter indigo that steps toward accent territory.
- **Navy Card** (#15104d): Card surface for project cards and skill containers.
- **Navy Card Hover** (#1e186b): Card hover state — shifts brighter.
- **Text Primary** (#ffffff): All body copy, headings, and navigation labels.
- **Text Muted** (#a0a0c0): Secondary prose, descriptions, non-active nav items.

### Named Rules
**The Signal Rule.** The four accent colors (blue, cyan, yellow, green) always appear together in gradients or alone as solid fills. They never mix as two solids on the same surface without being bridged by a gradient — the palette treats them as a single multicolored instrument.

**The Only-Gradient Rule.** Gradient text is used exactly once — on the headline claim "Software Developer" in the hero. No other text receives a gradient treatment.

## Typography

**Display & Body Font:** Inter (with system sans-serif fallback)

Inter was chosen for its hybrid personality — technical enough for a developer portfolio, refined enough for a professional credential. The type system relies on weight steps (400 → 700 → 800 → 900) rather than size jumps to create hierarchy, keeping the interface dense and readable.

**Character:** Clean, unapologetically technical, with a slight editorial polish from tight letter-spacing on labels.

### Hierarchy
- **Display** (900, clamp(2.8rem, 8vw, 5rem), 1): Hero headline only. The single largest statement — "Software Developer" in gradient text and "Esau Lechuga" in solid white.
- **Headline** (800, 1.8rem, 1.2): Section titles like "01. Selected Projects" and "About Me." Pair with the yellow section-number prefix.
- **Title** (700, 1.4rem, 1.3): Project card titles. The largest text inside a container.
- **Body** (400, 1.1rem, 1.6): Primary reading text. Paragraphs in the hero, about section, project descriptions. Max line length ~65ch.
- **Label** (700, 0.75rem, 0.1em letter-spacing): Small uppercase text for availability badges, section-number prefixes, skill-level labels.
- **Caption** (800, 0.7rem, 0.1em letter-spacing): The smallest size. Used for the badge header label ("AVAILABLE FOR").
- **Button** (600, 0.95rem): Primary and secondary action buttons, tab labels.
- **Nav** (500, 0.9rem): Sidebar navigation links.
- **Subhead** (800, 1.2rem): Section number prefixes, hero description, contact description, card link icons.

### Named Rules
**The Weight Hierarchy Rule.** Hierarchy is achieved through font-weight steps (400 → 700 → 800 → 900) before size changes. Never skip a weight step between nested content — for example, a card title (700) inside a section whose headline is 800.

## Layout

The layout follows a fixed-sidebar + fluid-main model:

- **Sidebar:** 260px fixed left column. Contains profile header, nav menu, and availability badge. Persists across all pages. Collapses to 80px icon-only at 1024px; becomes off-canvas overlay at 768px with a toggle button.
- **Main content:** Margin-left 260px matching the sidebar, max-width 1200px, auto right margin. Internal padding 0 50px (desktop), 0 30px (tablet), 0 20px (mobile).
- **Section padding:** 100px vertical padding per section.
- **Hero split:** Two-column layout (text left, laptop animation right) at ≥1200px. Stacks vertically below that.

### Spacing rhythm
- Tight group: 8–12px (icon to label, tag gaps, avatar to name)
- Section separation: 40–60px (heading to content zone)
- Page-level: 100px between major sections

## Elevation & Depth

The system uses **tonal layering** rather than CSS box-shadows. Depth is expressed through background color steps — surfaces get brighter as they approach interactivity:

**Surface hierarchy (darkest → lightest):**
1. Space Deep (#0b0721) — page background (furthest back)
2. Indigo Surface (#0d0b3a) — sidebar
3. Navy Card (#15104d) — card surfaces
4. Indigo Active (#21197a) — hover/lift state

The only shadows in the system are the mobile sidebar overlay (`10px 0 30px rgba(0,0,0,0.5)`) and the about image (`0 20px 40px rgba(0,0,0,0.4)`). Neither is a recurring pattern.

### Named Rules
**The Flat-By-Default Rule.** Surfaces at rest have no shadow. Elevation is communicated exclusively through background lightness shifts and border presence. A shadow appears only when a surface must separate from the page stack entirely (mobile overlay, image lift).

## Shapes

- **Buttons:** Gently curved (8px radius). The primary action shape.
- **Project cards:** Rounded corners (20px radius). A softer, more enveloping shape for content containers.
- **Tab container:** Pill-grouped (12px radius on the outer container, 8px on the active tab).
- **Profile avatar:** Perfect circle (50% radius) with the accent gradient.
- **Skill icons:** Subtle rounding (10px radius) on icon containers.
- **Tags/Chips:** Fully rounded (20px) pill shapes for project technology labels.
- **Feature image on about page:** 20px radius. Uses `grayscale(100%)` at rest, revealing color on hover.

No borders are used on shapes beyond the faint `1px solid rgba(255, 255, 255, 0.05)` that defines card edges against the void. Active/hover states intensify this slightly to `rgba(255, 255, 255, 0.1)`.

## Components

### Buttons
- **Shape:** Gently curved edges (8px radius)
- **Primary** (`btn-primary`): Neon Blue (#3b82f6) background, white text, 14px 28px padding. Strong definition.
- **Hover / Focus:** Background deepens to #2563eb, lifts 2px (`translateY(-2px)`), 0.3s ease transition.
- **Secondary** (`btn-secondary`): Transparent background with `rgba(255, 255, 255, 0.05)` fill and `1px solid rgba(255, 255, 255, 0.1)` border. Hover fills to `rgba(255, 255, 255, 0.1)`.
- **Email** (`btn-email`): White background, space-deep (#0b0721) text. Hover lifts 5px with a white shadow glow.

### Chips / Tags
- **Style:** Fully rounded pill shape (20px radius), `rgba(59, 130, 246, 0.1)` background, Neon Blue (#3b82f6) text, 5px 12px padding, 0.75rem weight-600.
- **State:** Static only (no interactive state).

### Cards / Project Cards
- **Corner Style:** Generous rounding (20px radius)
- **Background:** Navy Card (#15104d) at rest, Navy Card Hover (#1e186b) on hover
- **Shadow Strategy:** None. Elevation from background shift + `translateY(-10px)` on hover.
- **Border:** `1px solid rgba(255, 255, 255, 0.05)` at rest, `rgba(255, 255, 255, 0.1)` on hover.
- **Internal Padding:** 25px on all sides.
- **Image treatment:** 240px height, `object-fit: cover`, scale 1.05 on hover.

### Navigation
- **Style:** Vertical sidebar list with icon + label pairs.
- **Default:** Text Muted (#a0a0c0) color, no background.
- **Hover / Active:** Indigo Active (#21197a) background, white text, rounded 8px, 12px 20px padding.
- **Mobile (≤768px):** Sidebar becomes an overlay sliding from left, triggered by a floating Neon Blue hamburger button.
- **Tablet (1024px):** Sidebar collapses to 80px — labels hidden, icons centered.

### Skill Bars
- **Structure:** Label row (skill name + percentage, though percentage is currently commented out) + level label (commented out) + bar track.
- **Track:** 6px height, `rgba(255, 255, 255, 0.1)` background, 10px radius, overflow hidden.
- **Fill:** Linear gradient from Neon Blue to Aurora Cyan, width set inline per skill. Animates on scroll reveal (1s ease-in-out width transition).

### Skills Tabs
- **Container:** Pill-bar with 8px padding, 12px radius, `rgba(0, 0, 0, 0.2)` background.
- **Tabs (default):** Transparent background, Text Muted color, 10px 24px padding, 8px radius.
- **Active tab:** Neon Blue (#3b82f6) background, white text, `0 4px 15px rgba(59, 130, 246, 0.3)` glow shadow.
- **Transition:** 0.3s ease on all, plus fadeIn animation on content swap (0.5s, translateY 10px to 0).

### Loader
- **Container:** Full-viewport fixed overlay, Space Deep background, z-index 9999.
- **Spinner:** 70px double-ring: outer ring pulses (scale 0.6→1.2→0.6, opacity fade), inner ring rotates 360deg continuously. Neon Blue (#3b82f6) color.
- **Text:** "Loading..." in uppercase, 18px, Neon Blue, 2px letter-spacing.
- **Dismiss:** After window load + 1500ms delay, `loaded` class fades the loader out (0.5s opacity).

## Do's and Don'ts

### Do:
- **Do** use Neon Blue as the single interactive anchor — primary buttons, active nav, active tabs, loading indicators.
- **Do** use tonal layering (brighter indigos for closer surfaces) instead of box-shadows for depth.
- **Do** keep gradient text restricted to the hero headline — it is the one decorative flourish in an otherwise restrained system.
- **Do** let the laptop animation play through on page load — it is the system's single authored motion moment.
- **Do** use the full four-color gradient (blue → cyan → green → yellow) as a unified instrument, never split across disconnected elements.

### Don't:
- **Don't** add box-shadows to cards or surfaces at rest. Elevation comes from background color, not shadows.
- **Don't** use more than one gradient text treatment per page. The hero claim earns the only one.
- **Don't** place two solid accent colors on the same surface without a gradient bridge — they belong together as a sweep.
- **Don't** add new entrance animations. The single scroll-reveal (opacity + translateY) is the vocabulary.
- **Don't** introduce a second font family. Inter carries the full hierarchy through weight alone.
