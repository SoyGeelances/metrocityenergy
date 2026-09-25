# Metro City Energy

Corporate website for Metro City Energy — built with TanStack Start, React 19,
TypeScript, Tailwind CSS v4 and Vite. Pages: Home, About Us, What We Do, Contact.

## Run locally

Requirements: Node.js 20+ (or [Bun](https://bun.sh) 1.3+).

Using npm:

```sh
npm install
npm run dev
```

Using Bun (faster, matches the committed lockfile):

```sh
bun install
bun run dev
```

The dev server starts at http://localhost:8080.

## Scripts

- `dev` — start the Vite dev server
- `build` — production build
- `preview` — preview the production build
- `lint` — run ESLint
- `format` — format with Prettier

## Project structure

```
public/              static assets (favicon, robots)
src/
  assets/            images and logo
  components/        site chrome + shadcn/ui components
  hooks/
  lib/
  routes/            file-based routes (index, about, what-we-do, contact)
  styles.css         Tailwind v4 theme + design tokens
  router.tsx
  server.ts          SSR entry
  start.ts
```

## Notes

- All imagery (hero, section images, logo) is bundled locally via ES6 imports.
- The contact form is a visual prototype and does not yet submit anywhere.
- No real company data (address, phone, certifications) has been added —
  replace the placeholder copy with verified information before publishing.
