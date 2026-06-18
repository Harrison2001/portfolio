# Harrison Wier — Portfolio

A single-page portfolio site for Harrison Wier, a Computer Science student and Data Science Research Assistant at Florida Gulf Coast University. The site showcases featured projects, technical skills, experience, and contact links with a dark, animated UI.

**Live repository:** [github.com/Harrison2001/portfolio](https://github.com/Harrison2001/portfolio)

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Fonts | Geist Sans & Geist Mono (via `next/font`) |
| Tooling | ESLint 9, PostCSS |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm start
```

See [docs/SETUP.md](docs/SETUP.md) for prerequisites, environment details, and troubleshooting.

## Project Structure

```
portfolio/
├── app/              # Next.js App Router (layout, page, global styles)
├── components/       # React section components
├── data/             # Portfolio content (projects, skills, experience)
├── docs/             # Project documentation
└── public/           # Static assets
```

See [docs/STRUCTURE.md](docs/STRUCTURE.md) for a detailed breakdown of each directory and file.

## Portfolio Sections

The homepage (`app/page.tsx`) renders these sections in order:

| Section | Component | Description |
|---------|-----------|-------------|
| Navigation | `Navbar` | Fixed header with anchor links |
| Hero | `Hero` | Name, roles, intro, CTA buttons |
| Technical Universe | `SkillOrbit` | Skill tags from `data/skills.ts` |
| Featured Work | `Projects` | Project cards from `data/projects.ts` |
| Journey | `Timeline` | Experience entries from `data/experience.ts` |
| Engineering Focus | `Domains` | Expertise areas from `data/domains.ts` |
| System Design | `Architecture` | Layered architecture overview |
| Contact | `Footer` | Email, GitHub, LinkedIn links |

See [docs/CONTENT.md](docs/CONTENT.md) for how to update portfolio content and featured projects.

## Deployment

The site is designed for deployment on [Vercel](https://vercel.com) (recommended for Next.js) or any Node.js host that supports Next.js standalone builds.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for step-by-step deployment instructions.

## Documentation

| Document | Purpose |
|----------|---------|
| [docs/SETUP.md](docs/SETUP.md) | Local development setup |
| [docs/STRUCTURE.md](docs/STRUCTURE.md) | Folder and file reference |
| [docs/CONTENT.md](docs/CONTENT.md) | Updating portfolio content |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment guide |
| [docs/KNOWN_ISSUES.md](docs/KNOWN_ISSUES.md) | Known issues and planned improvements |
| [CHANGELOG.md](CHANGELOG.md) | Version history |

## Known Issues

Several items need attention before the site is fully production-ready. Highlights:

- Page metadata still uses the default `create-next-app` title and description
- Navbar anchor links for Experience and Skills may not scroll correctly (missing section IDs)
- Project cards do not link to live demos or repositories

See [docs/KNOWN_ISSUES.md](docs/KNOWN_ISSUES.md) for the full list and TODOs.

## License

Private project. All rights reserved.
