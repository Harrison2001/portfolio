# Folder Structure

This document describes the layout of the portfolio project. All paths are relative to the project root (the directory containing `package.json`).

```
portfolio/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles, Tailwind import, theme variables
│   ├── layout.tsx           # Root layout, fonts, page metadata
│   └── page.tsx             # Homepage — composes all section components
│
├── components/
│   ├── Architecture.tsx     # System design / layered architecture section
│   ├── Domains.tsx          # Areas of expertise cards
│   ├── Footer.tsx           # Contact section with social links
│   ├── Hero.tsx             # Full-screen hero with animated background
│   ├── Navbar.tsx           # Fixed navigation header
│   ├── ProjectCard.tsx      # Reusable card for a single project
│   ├── Projects.tsx         # Featured projects grid
│   ├── SkillOrbit.tsx       # Technical skills display
│   └── Timeline.tsx         # Experience timeline
│
├── data/
│   ├── domains.ts           # Engineering focus areas and related skills
│   ├── experience.ts        # Work and education timeline entries
│   ├── projects.ts          # Featured project definitions
│   └── skills.ts            # List of technical skills
│
├── docs/                    # Project documentation (this folder)
│
├── public/                  # Static files served at the root URL
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── AGENTS.md                # AI agent rules for Next.js 16
├── CLAUDE.md                # Claude agent pointer to AGENTS.md
├── CHANGELOG.md             # Version history
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── next-env.d.ts            # Next.js TypeScript declarations (auto-generated)
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS / Tailwind configuration
├── README.md                # Project overview
└── tsconfig.json            # TypeScript configuration (@/* path alias)
```

## Key Conventions

### Path alias

TypeScript maps `@/*` to the project root:

```typescript
import { projects } from "@/data/projects";
import Hero from "@/components/Hero";
```

### Content vs. presentation

Portfolio text and structured data live in `data/`. Visual components in `components/` read from those files. To update what the site says, start in `data/` — see [CONTENT.md](CONTENT.md).

### Client vs. server components

| Component | Type | Reason |
|-----------|------|--------|
| `Hero.tsx` | Client (`"use client"`) | Framer Motion animations |
| `Navbar.tsx` | Client | Scroll state listener |
| `SkillOrbit.tsx` | Client | Marked client (hover interactions) |
| All others | Server | Static content, no browser APIs |

### Styling

- Tailwind CSS 4 via `@import "tailwindcss"` in `app/globals.css`
- Dark theme enforced through component classes (`bg-black`, `text-white`, cyan accents)
- Geist fonts loaded in `app/layout.tsx` and referenced via CSS variables

## Adding a New Section

1. Create a component in `components/`
2. Add any new content to a file in `data/` if needed
3. Import and render it in `app/page.tsx`
4. Add a navigation link in `components/Navbar.tsx` with a matching `id` on the section element
5. Update [CONTENT.md](CONTENT.md) and [README.md](../README.md)
