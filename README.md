# Sritrang Test

A backend server built using **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.

---

## Tech Stack

| Layer     | Technology |
| --------- | ---------- |
| Runtime   | Node.js    |
| Framework | Express.js |
| ORM       | Prisma     |
| Database  | PostgreSQL |

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)
- **PostgreSQL** (local or remote)
- **Prisma CLI** (optional, can run via `npx`)

---

## Environment Setup

Copy `.env.example` to `.env` and update your database connection:

```
DATABASE_URL="postgresql://postgres:your-password@localhost:54335432/your-db?schema=public"
```

---

## Installation

```
npm install
```

---

## Apply Database Migrations

```
npx prisma migrate deploy
```

---

## Start the Server (Development)

```
npm run dev
```

---

## Build the server

```
npm run build
```

---
