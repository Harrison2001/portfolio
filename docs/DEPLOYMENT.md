# Deployment Guide

## Recommended: Vercel

[Vercel](https://vercel.com) is the recommended host. It is built by the creators of Next.js and supports zero-config deployments.

### First-time setup

1. Push the repository to GitHub ([github.com/Harrison2001/portfolio](https://github.com/Harrison2001/portfolio))
2. Sign in to [vercel.com](https://vercel.com) with your GitHub account
3. Click **Add New Project** and import the `portfolio` repository
4. Vercel auto-detects Next.js settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (default — leave blank)
   - **Install Command:** `npm install`
5. Click **Deploy**

### Custom domain

1. In the Vercel project dashboard, go to **Settings → Domains**
2. Add your domain (e.g. `harrisonwier.com`)
3. Follow Vercel's DNS instructions to point your registrar to Vercel

> **TODO:** Document the production URL once a custom domain or Vercel subdomain is configured.

### Automatic deployments

Every push to `main` triggers a production deployment. Pull requests create preview deployments.

## Alternative: Node.js Server

For self-hosted or other cloud providers (AWS, DigitalOcean, Railway, etc.):

```bash
# Build the production bundle
npm run build

# Start the production server (default port 3000)
npm start
```

### Environment

- Node.js 20+
- No environment variables required for the current build
- Ensure the host allows outbound network for font loading (Geist via Google Fonts CDN)

### Docker (optional)

> **TODO:** Add a `Dockerfile` if containerized deployment is needed. A basic multi-stage Next.js Docker setup would use `node:20-alpine` with standalone output.

To enable standalone output, add to `next.config.ts`:

```typescript
const nextConfig = {
  output: "standalone",
};
```

## Pre-deployment Checklist

- [ ] Run `npm run build` locally and confirm zero errors
- [ ] Run `npm run lint` and resolve warnings
- [ ] Update page metadata in `app/layout.tsx` (title, description)
- [ ] Verify all navbar anchor links scroll to the correct sections
- [ ] Test contact links (email, GitHub, LinkedIn) open correctly
- [ ] Confirm project descriptions and experience entries are current
- [ ] Add favicon if a custom one is desired (replace `app/favicon.ico`)

## Post-deployment Verification

1. Visit the deployed URL
2. Check all sections render: Hero, Skills, Projects, Timeline, Domains, Architecture, Contact
3. Test navigation links on desktop and mobile
4. Verify animations load (Framer Motion in Hero)
5. Check browser console for errors
6. Test on mobile viewport sizes

## Rollback

On Vercel, go to **Deployments**, find a previous successful deployment, and click **Promote to Production**.
