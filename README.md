# Akshat Patel — Portfolio

Next.js portfolio site. Deploys to:

- **GitHub Pages** (primary): https://akshatpatel555.github.io  
- **Vercel** (optional mirror): connect this repo in the Vercel dashboard for a free `*.vercel.app` URL

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static site in `out/` (`output: "export"`).

## GitHub Pages

Push to `main` runs `.github/workflows/deploy-pages.yml`, which builds and publishes `out/`.

In the repo: **Settings → Pages → Source → GitHub Actions**.
