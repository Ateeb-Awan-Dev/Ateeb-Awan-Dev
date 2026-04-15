# Muhammad Ateeb Awan — Portfolio

Personal portfolio site: React, Vite, TypeScript, Tailwind CSS, and shadcn-style UI. Contact form uses a small Express API (`server/index.mjs`) with Nodemailer.

## Requirements

- Node.js 18+ and npm

## Setup

```sh
npm install
```

Copy `.env.example` to `.env.local` and add Gmail SMTP (App Password) if you want the contact form to send email locally.

## Scripts

| Command | Description |
| -------- | ----------- |
| `npm run dev` | Runs the contact API (port 5050) and Vite dev server (port 8080) together |
| `npm run dev:client` | Vite only (no `/api/contact` unless you run `dev:server` separately) |
| `npm run dev:server` | Express contact API only |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Deploy notes

- Static hosting (e.g. Netlify, Vercel) serves the built SPA; host the contact API separately or replace it with a serverless function / third-party form service so production submissions still work.

## Assets

- **`public/og-image.png`** — Open Graph / Twitter preview image (referenced in `index.html`).
- **`public/ateeb-logo.png`** — Favicon and Apple touch icon.
