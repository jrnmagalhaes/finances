# Finances

Personal finance management app. React + Vite frontend, Express + TypeScript backend, MySQL database — all running in Docker.

## Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React 19, Vite, TypeScript, Bun |
| Backend  | Express 5, TypeScript, Node 20 |
| Database | MySQL 8                       |
| Runtime  | Docker Compose                |

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)

No need to install Node, Bun, or MySQL locally.

---

## First-time setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd finances

# 2. Create your local environment file
cp .env.example .env
```

Open `.env` and set your passwords:

```env
DB_ROOT_PASSWORD=choose-a-root-password
DB_NAME=finances
DB_USER=finances_user
DB_PASSWORD=choose-a-password
PORT=3000
```

```bash
# 3. Build images and start all services
docker compose up --build
```

First run takes a few minutes while Docker pulls images and installs dependencies.

| Service  | URL                   |
|----------|-----------------------|
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:3000 |
| MySQL    | localhost:3306        |

---

## Day-to-day development

```bash
# Start all services (after the first build)
docker compose up

# Start in the background
docker compose up -d

# Stop all services
docker compose down

# View logs for all services
docker compose logs -f

# View logs for a specific service
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f mysql
```

### Hot reload

- **Frontend** — Vite HMR is active. Edit any file under `frontend/src/` and the browser updates instantly.
- **Backend** — `tsx watch` is active. Edit any file under `backend/src/` and the server restarts automatically.

---

## Managing dependencies

Dependencies are installed inside containers and kept in named Docker volumes (`backend_node_modules`, `frontend_node_modules`). The host `node_modules` directories are ignored by containers.

### Adding a package

**Option A — rebuild the image** (cleanest, picks up lock file changes):

```bash
# After adding the package to package.json
docker compose up --build backend   # or frontend
```

**Option B — install directly into the running container** (faster):

```bash
# Backend
docker compose exec backend npm install <package>

# Frontend
docker compose exec frontend bun add <package>
```

> After option B, commit the updated `package.json` and lock file. Other developers will get the package on their next `--build`.

### Removing a package

```bash
# Backend
docker compose exec backend npm uninstall <package>

# Frontend
docker compose exec frontend bun remove <package>
```

---

## Database

MySQL data is stored in the `mysql_data` Docker volume and persists across restarts.

### Connect with a DB client

Use any MySQL client (TablePlus, DBeaver, MySQL Workbench) with these settings:

| Field    | Value                          |
|----------|--------------------------------|
| Host     | `localhost`                    |
| Port     | `3306`                         |
| User     | value of `DB_USER` in `.env`   |
| Password | value of `DB_PASSWORD` in `.env` |
| Database | value of `DB_NAME` in `.env`   |

### Connect via CLI

```bash
docker compose exec mysql mysql -u${DB_USER} -p${DB_PASSWORD} ${DB_NAME}
```

### Reset the database

```bash
# Stop services and delete the database volume
docker compose down -v

# Start fresh
docker compose up --build
```

> `-v` removes **all** named volumes including `mysql_data`. All data will be lost.

---

## Useful commands

```bash
# Open a shell in a running container
docker compose exec backend sh
docker compose exec frontend sh

# Rebuild a single service without restarting the others
docker compose build backend

# Check container status
docker compose ps

# Remove containers, networks, and volumes (full reset)
docker compose down -v --remove-orphans
```

---

## Project structure

```
finances/
├── backend/               Express + TypeScript API
│   ├── src/
│   │   └── index.ts       Entry point
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/              React + Vite app
│   ├── src/
│   │   └── main.tsx       Entry point
│   ├── Dockerfile
│   ├── vite.config.ts
│   └── package.json
├── docker-compose.yml
├── .env.example           Template — copy to .env
└── README.md
```
