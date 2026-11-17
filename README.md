# Video Clipping Playbook

Private static site for **Refael** and **Mateen**. How clipping pays, platform rules, tool costs, and a 7-day plan. Researched Oct 17 – Nov 16, 2026.

Live (GitHub Pages): [https://refaeldoron.github.io/clipping-playbook/](https://refaeldoron.github.io/clipping-playbook/)

## Local

```bash
npm install
npm run dev
```

Dev server: `http://localhost:5173/clipping-playbook/`

```bash
npm run build
npm run preview
```

Preview serves the production build at `http://localhost:4173/clipping-playbook/`.

## GitHub Pages

The production build is committed in `/docs` so Pages can deploy from the `main` branch `/docs` folder.

A GitHub Actions workflow (`.github/workflows/pages.yml`) also builds and deploys on every push to `main`. Enable Pages in the repo settings:

- **Deploy from a branch:** `main` / `/docs`, or
- **GitHub Actions:** use the Pages workflow

The site is built with Vite + React and **hash routing** (`#/tools`, `#/tracker`, …), so refresh and deep links do not 404 under `/clipping-playbook/`. A `404.html` fallback is included if someone hits a path without the hash.

No backend, no analytics, no secrets. Checklist and clip-tracker data stay in the browser (`localStorage`).
