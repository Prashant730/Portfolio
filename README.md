# Portfolio

A personal portfolio built with Vite + React. This repository contains a small, fast frontend showcasing projects, skills, and achievements.

## Features

- Lightweight Vite + React setup
- Simple component structure and data-driven content under `src/data`
- Ready for local development and production build

## Requirements

- Node.js 16 or newer
- npm (or yarn/pnpm)

## Quick Start

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

Lint the codebase:

```
npm run lint
```

## Project Structure

- `index.html` – App entry
- `src/main.jsx` – React bootstrap
- `src/App.jsx` – Main app component
- `src/data` – Project content (projects, skills, achievements)
- `public` – Static assets

## Customize

Edit or extend the data files in `src/data` to add projects, skills, or achievements. Update `src/App.jsx` and components to change layout and styling.

## Deployment

This is a static frontend — deploy the contents of the `dist` folder (after `npm run build`) to any static host (Vercel, Netlify, GitHub Pages, etc.).

## License

Include your preferred license here (e.g., MIT) or remove this section.

---

If you'd like, I can add a live-deploy configuration (Vercel/Netlify) or expand the README with screenshots and contribution guidelines.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
