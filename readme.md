# Ping-Pong WebSocket App

A full-stack project demonstrating a simple WebSocket-based "ping-pong" messaging system.

## Table of Contents

- [Overview](#overview)
- [Backend](#backend)
- [Frontend](#frontend)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)

---

## Overview

This project consists of:
- **Backend:** A Node.js WebSocket server using TypeScript and the `ws` library.
- **Frontend:** A React + TypeScript app (built with Vite) that connects to the WebSocket server and exchanges messages.

---

## Backend

- **Location:** `backend/`
- **Main file:** `src/index.ts`
- **Stack:** Node.js, TypeScript, ws

### Features

- Starts a WebSocket server on port `8080`.
- Responds with `"pong"` when it receives `"ping"`.
- Echoes any other message back to the client.

### Scripts

- `npm run build` – Compile TypeScript.
- `npm run start` – Start the server.
- `npm run dev` – Build and start the server.

---

## Frontend

- **Location:** `frontend/`
- **Stack:** React, TypeScript, Vite

### Features

- Connects to the backend WebSocket server at `ws://localhost:8080`.
- Allows users to send messages (e.g., "ping") and displays server responses.
- Modern React setup with strict linting and fast refresh.

### Scripts

- `npm run dev` – Start the Vite dev server.
- `npm run build` – Build for production.
- `npm run preview` – Preview the production build.

---

## How to Run

### 1. Start the Backend

```bash
cd backend
npm install
npm run dev
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
ping-pong/
  backend/
    src/index.ts         # WebSocket server
    package.json
    tsconfig.json
  frontend/
    src/App.tsx          # React client
    src/main.tsx
    index.html
    package.json
    vite.config.ts
    tsconfig.app.json
    tsconfig.node.json
```

---

## License

MIT

---
