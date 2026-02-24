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

## Contact form setup (Formspree)

1. Create a `.env.local` file in the project root:

```bash
VITE_FORMSPREE_FORM_ID=your_formspree_form_id
```

You can also start from `.env.example`.

2. For GitHub Pages deploy, add this repository secret:

- `VITE_FORMSPREE_FORM_ID`

Note: The value can be either the Form ID (example `mxabc123`) or a full Formspree URL (`https://formspree.io/f/mxabc123`).
