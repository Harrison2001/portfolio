# Setup Instructions

## Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | 20.x or later | Required by Next.js 16 |
| npm | 10.x or later | Comes with Node.js |

Verify your environment:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harrison2001/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page hot-reloads when you edit files in `app/`, `components/`, or `data/`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server with Turbopack |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint across the project |

## Environment Variables

No environment variables are required for local development. The portfolio is a static content site with no API keys or database connections.

> **TODO:** If analytics, contact forms, or CMS integration are added later, document required variables here (e.g. `NEXT_PUBLIC_GA_ID`).

## Troubleshooting

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### `npm install` fails

- Ensure Node.js 20+ is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- On Windows, run the terminal as Administrator if permission errors occur

### Build errors after upgrading dependencies

```bash
rm -rf .next
npm run build
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm run build
```

### OneDrive sync issues

If the project lives inside a OneDrive folder, sync conflicts can create phantom directories or lock files. If you see unexpected empty folders at the workspace root, the actual project root is this directory (where `package.json` lives).
