# nicklasskoglund.github.io

One-page portfolio built with Vite + React + Tailwind + Framer Motion.

## Local run

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deploy

Deployment is handled by `.github/workflows/deploy.yml` on push to `main`.

1. Open repository `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or run `Deploy Pages` manually from `Actions`.

The workflow builds Vite and deploys the generated `dist/` artifact to Pages.

Optional secret for contact form:

- `VITE_FORMSPREE_FORM_ID`
