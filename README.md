# PHX Unlock Services

Car lockout service website for the Phoenix metro area.

- **Production URL:** https://phxunlock.com
- **Hosted on:** Cloudflare Pages (project: `phx-unlock`)
- **Stack:** React + TypeScript + Vite

## Deployment

Production is deployed to Cloudflare Pages via `wrangler`. The production branch is `production`.

```bash
# Build
npm run build

# Deploy to production (phxunlock.com)
wrangler pages deploy dist --project-name=phx-unlock --branch=production

# Deploy preview
wrangler pages deploy dist --project-name=phx-unlock
```

If wrangler auth has expired, re-login with:

```bash
wrangler login
```

## Important

- `vite.config.ts` base path must be `/` for Cloudflare Pages (not a subpath)
- GitHub Pages mirror exists at `PixelPotts/sample69deeznutz` but phxunlock.com is served by Cloudflare

## Dev

```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build locally
```
