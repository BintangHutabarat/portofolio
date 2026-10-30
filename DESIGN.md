# DESIGN.md — Bintang Hutabarat Portfolio

Personal portfolio of a fullstack / systems engineer. Visual language is adapted from the "Onda" design-studio template (black, white, one violet, giant type, a round photo that travels down the page). Content comes only from `public/CV_BintangHutabarat_2026.pdf`; nothing is invented.

Stack: Next.js 16 (App Router), React 19, Tailwind v4 (`@theme` tokens in `app/globals.css`). Motion: GSAP + ScrollTrigger + Lenis (install: `gsap`, `lenis`).

## 1. Overview

- **Mood:** confident, quiet, oversized. Huge tight-tracked headlines on near-black, one violet accent, almost no ornament. Engineering-first, not "creative agency".
- **Signature moves (keep these, they are the identity):**
  1. A one-word giant hero ("Hello") beside a round photo with a thin orbit ring and a violet dot.
  2. Every section heading ends in a violet dot (`.m-dot`), never a typed full stop.
  3. Pill buttons with a leading dot that floods the button with black on hover.
  4. Black bands alternate with white / pale bands; the last content section before the footer is solid violet.
- **Replaced from the old site:** the terminal / glitch / typewriter theme is removed entirely (`TerminalLoader`, `TerminalWindow`, `GlitchText`, `TypewriterText`).

## 2. Colors

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0d0c11` | Near-black bands, text on light |
| `--color-paper` | `#ffffff` | White bands, text on dark |
| `--color-violet` | `#6c3cff` | Dots, primary button, contact band, focus ring |
| `--color-mist` | `#efeef4` | Pale cards (experience, skills, form) |
| `--color-fog` | `#aaa7b4` | Muted text on dark (≥ 4.5:1 on ink) |
| `--color-slate` | `#5d5a67` | Secondary text on light (≥ 4.5:1 on paper/mist) |
| `--color-night` | `#1f1d26` | Dark base under photos, dark cards, hairlines |

Rules: one accent only. No gradients except the violet sphere/photo tint. No pure-black `#000`. Body text must keep 4.5:1.

## 3. Typography

- **Display:** Gabarito (700/800), tracking -0.04 to -0.065em, line-height 0.8–0.96. Fallback `"Arial Black", Arial`.
- **Body/UI:** Onest (400/500/600). Fallback `Arial`.
- Load both via `next/font/google` (no render-blocking `<link>`), with `display: swap`.

| Role | Font | Size | Weight | Line / Tracking |
|---|---|---|---|---|
| Hero word | Gabarito | `min(40vw, (100vw - 2·gutter) / (len·0.47))` where `len` = characters | 800 | 0.8 / -0.065em |
| H2 section | Gabarito | `clamp(50px, 9.2vw, 150px)` | 800 | 0.88 / -0.055em |
| H3 card title | Gabarito | `clamp(30px, 3.9vw, 58px)` | 700 | 0.96 / -0.04em |
| Sub-title | Gabarito | `clamp(22px, 2.05vw, 30px)` | 700 | 1.08 / -0.025em |
| Lead | Onest | `clamp(19px, 1.7vw, 25px)` | 500 | 1.28 / -0.015em |
| Body | Onest | 17px | 400 | 1.55 |
| Badge / meta | Onest | 13px | 600 | 1.3 / +0.01em |

## 4. Layout & Spacing

- Gutter `--space-1: clamp(16px, 3.4vw, 48px)`; section padding-block `--space-2: clamp(96px, 15vh, 200px)`.
- Full-bleed bands; content is left-aligned to the gutter (no centered max-width column). Headings span the full width.
- Radius: `--radius-1: 28px` (cards), `--radius-3: 14px` (inputs, small), `--radius-2: 999px` (buttons, badges, dots).
- Elevation is rare: only `--shadow-1` (a soft upward shadow when a band overlaps the previous one). Separation comes from color bands, not borders.
- Breakpoints: design at 375 and 1440. Below ~768px the layout is a single column and the hero word is sized by character count.

## 5. Components

- **Navbar (fixed):** logo wordmark "Bintang" + violet dot left; links centre; primary pill CTA right ("Let's talk"). On phones, a menu button opens a full-screen ink overlay (focus-trapped, Esc closes, `aria-expanded`).
- **Button (primary `.m-btn`):** violet pill, 48px min height, 8px leading dot, label 16px/600. Hover: a black circle scales from the dot (`scale(60)`, 0.5s `cubic-bezier(.7,0,.2,1)`). Secondary `.m-btn-2`: white pill, violet dot, text turns white on hover.
- **Text link (`.m-link`):** 600 weight, arrow `→` that nudges 4px right, underline grows from the left on hover.
- **Badge (`.m-badge`):** pill, 13px/600, `--color-night` border on dark, `--color-ink` on light. Used for tech tags.
- **Surface card (`.m-surface`):** `--color-mist` background, `--radius-1`, padding ≈ `--space-1`.
- **Round photo:** circle crop, violet tint overlay, 1px orbit ring offset around it, small violet dot on the ring.
- **Form fields:** `--color-mist` fill, `--radius-3`, visible label above, 2px `--color-ink` focus ring (`--shadow-3`), inline error text.

## 6. Pages & Sections

The site is one scrolling home page plus two detail routes. Sections kept from the template are marked ✔, dropped ones ✘.

### Home `/`

| # | Template section | Portfolio section | Content (from CV) |
|---|---|---|---|
| 1 | navigation ✔ | Navbar | Work · Experience · Skills · Contact, CTA "Let's talk" |
| 2 | hero ✔ | **Hello** | Giant "Hello" + round photo (`public/bujang.png`, optimised). Intro: *"I'm Bintang Hutabarat, a fullstack and systems engineer. I build web platforms, industrial IoT and secure backends."* CTA "See the work →" |
| 3 | statement ✔ | Statement | One short statement line + index counter. Photo shrinks and travels into the next section. |
| 4 | work ✔ | **Selected work** | Horizontal-scroll case track, 3 cards: **Seedrym.io** (Web3 RWA tokenization · Next.js, Rust/Axum, Solana, Supabase), **FireCo** (industrial fire-alarm monitoring · Next.js, Tauri, RS-485, PLC; deployed at PT PLN UP2B DKI Jakarta & Banten, Baker Hughes, PT Surya Rengo Container), **DDS Central-App** (SHA-256 token + remote monitoring · Next.js, NestJS, MySQL). Card = media, badge, title, one-line result. Seedrym links to `https://seedrym.io`. |
| 5 | again ✔ (reworked) | **Experience** | Vertical timeline replaces the wheel. Five roles, newest first: CV. Citra Fire Alarm — System Integration Engineer (Nov 2025 – Present, Cisauk); CV. Miftah Digital Solusi — Fullstack Developer (Jun – Nov 2025, Jakarta); PT Menara Indonesia / Kampus Gratis — Cybersecurity intern (Feb – Jun 2025); PT Kensington Teknologi — Backend intern (Sep 2024 – Feb 2025). Each row: role, company, dates, 2–3 CV bullets condensed. Full list on `/experience`. |
| 6 | capabilities ✔ | **What I do** | Stacked mist cards, one per skill group, each with badges: Languages (TypeScript, JavaScript, Rust, SQL) · Frameworks (Next.js, NestJS, Node.js, TailwindCSS, Laravel, Tauri, Axum) · Data & Infra (MongoDB, MySQL, PostgreSQL, Firebase, Prisma) · Tools (Git, WebSockets, MCP Servers, Postman, K6). |
| 7 | method ✔ (optional) | **How I work** | Ring + 4 stations. Only if copy stays grounded in the CV: *Scope → Build → Harden → Monitor* (project scoping, engineering, Linux/Nginx/UFW hardening, Prometheus/Grafana/K6). Drop it if it feels padded. |
| 8 | studio ✘ | — | No team/collage. |
| 9 | journal ✘ | — | No blog. |
| 10 | faq ✘ | — | Not needed. |
| 11 | contact ✔ | **Let's talk** | Violet band. Giant "Let's talk" title. Email, GitHub, LinkedIn, website (`0xw4rd.site`). Mailto button + "Download CV" (`/CV_BintangHutabarat_2026.pdf`). Optional form only if wired to a real endpoint; otherwise omit it. |
| 12 | footer ✔ | Footer | Giant "Bye" with round photo, nav links, socials, "© 2026 Bintang Hutabarat". No newsletter. |

### `/experience`
Full CV detail: every bullet per role, plus education (Indonesian Institute of Technology — B.Eng. Informatics, 2022–, GPA 3.10/4.0; SMK Letris Indonesia 2 — Network Engineering, 2019–2022). Same type scale, mist cards on paper, black footer.

### `/projects`
Expanded case view for the three projects above (stack, role, what was built, deployments). Reuse the case card; no new components.

## 7. Data & Contact Facts (single source: CV)

- Name: Bintang Bennaya Hasiholan Hutabarat (display: Bintang Hutabarat)
- Email: `bintanghutabarat02024@gmail.com` (as printed in the CV; confirm it before launch, since the git config uses a different address)
- Web: `0xw4rd.site` · GitHub: `github.com/BintangHutabarat` · LinkedIn: `linkedin.com/in/bintang-hutabarat0204/`
- Location: South Tangerang / Cisauk, Indonesia
- Keep structured content in `app/data/` (`identity`, `experience`, `projects`, `skills`); components never hardcode CV copy.

## 8. Motion

- Lenis smooth scroll; GSAP ScrollTrigger scenes. Easing `cubic-bezier(.7, 0, .2, 1)` (`expo-in-out`), durations 0.45–0.5s for hovers, scrubbed for scroll scenes.
- Scenes: hero → statement photo handoff; work horizontal track pinned; experience rows rise on enter; capabilities cards stack; method arc draws; contact title rises; footer "Bye" photo lands.
- Headings use a `rise` (translateY + opacity) reveal, once.
- `prefers-reduced-motion`: disable Lenis and all scrubbed scenes; the page must read in full with static layout.
- Animate only `transform` and `opacity`.

## 9. Accessibility

- Semantic landmarks, one `h1` (the hero word with an accessible full name via `aria-label`), `aria-labelledby` on every section.
- Skip link, visible focus ring on every interactive element, 44×44px minimum targets.
- Decorative dots/rings/spheres are `aria-hidden`. Every photo has real `alt`.
- Without JS the nav links still work (menu overlay is progressive enhancement).

## 10. Do's and Don'ts

**Do**
- Use the one violet only for the dot, primary button, focus and the contact band.
- Keep headings huge and tightly tracked; let whitespace do the work.
- Optimise `bujang.png` (5.8 MB) to ≤ 200 KB WebP/AVIF with `next/image`, explicit `width`/`height`.

**Don't**
- No terminal, glitch, neon, gradient-text or glassmorphism.
- No invented clients, metrics, quotes or blog posts.
- Don't type a full stop after a heading; use the dot span.
- Don't add a second accent colour or a third font.

## 11. Decisions

1. Hero and footer photo: `public/bujang.png` (pixel portrait), cropped by `next/image`.
2. Contact: `mailto:` only, no form.
3. "How I work" ring: dropped.
4. Older projects (Mandala, Lentera, Artasaku, ...) stay in the work track after the 3 CV projects, since the ATS CV has no room for them. They carry no invented detail beyond the old data.
