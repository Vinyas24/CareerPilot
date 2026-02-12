# KodNestCareers Monorepo (Scaffold)

This repository is a local-first, modular monolith for KodNestCareers with a worker-based background processing architecture.

## Stack overview

- Package manager: pnpm (workspace)
- Web app: Next.js (apps/web)
- Worker: TypeScript worker (apps/worker)
- Shared libraries: packages/*
- Infrastructure: Docker Compose (Postgres, Redis, Mailpit)

## Getting started (local, WIP)

1. Install pnpm and Node 20 or newer.
2. Copy `.env.example` to `.env` and adjust values if needed.
3. Start infra and apps (commands to be refined later):
   - `pnpm install`
   - `docker compose -f docker-compose.local.yml up -d`
   - `pnpm dev`

This is only a scaffold. No business logic has been implemented yet.

