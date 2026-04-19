# The Baptist Network Inc.

A full-stack, faith-centred social networking platform built with Next.js, TypeScript, TailwindCSS, Supabase, and Framer Motion.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
copy .env.example .env.local
```

3. Update `.env.local` with your Supabase project settings.

4. Run development server:

```bash
npm run dev
```

## Project Structure

- `pages/` — Next.js routes
- `src/components/` — UI, dashboard, and content components
- `src/lib/` — Supabase and JWT helpers
- `src/services/` — backend service wrappers
- `src/context/` — auth providers and global stores
- `src/database/` — PostgreSQL schema
- `src/styles/` — Tailwind and global style overrides
