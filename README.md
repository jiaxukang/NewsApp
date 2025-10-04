# Next.js Routing & Rendering Demo

A demonstration project showcasing advanced Next.js 14 routing and rendering patterns including route groups, parallel routes, intercepting routes, and catch-all routes.

## Features

- **Route Groups** - Separate layouts for marketing and content sections
- **Parallel Routes** - Multiple page segments rendered simultaneously
- **Intercepting Routes** - Modal overlays for image viewing
- **Catch-All Routes** - Dynamic archive filtering by year/month
- **Loading States** - Skeleton UI and Suspense boundaries
- **Error Handling** - Custom error and not-found pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── (marketing)/          # Marketing pages without header
│   ├── layout.js
│   └── page.js
├── (content)/            # Content pages with header
│   ├── layout.js
│   ├── news/
│   │   ├── [slug]/
│   │   │   ├── @modal/         # Parallel route slot
│   │   │   │   ├── (.)image/   # Intercepting route
│   │   │   │   └── default.js
│   │   │   ├── image/          # Full page route
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   └── page.js
│   └── archive/
│       ├── @archive/           # Parallel route slot
│       │   └── [[...filter]]/  # Catch-all route
│       ├── @latest/            # Parallel route slot
│       └── layout.js
├── globals.css
└── api/
    └── route.js

components/
├── main-header.js
├── modal-backdrop.js
├── nav-link.js
└── news-list.js

lib/
└── news.js              # Database queries
```

## Key Concepts Demonstrated

### Route Groups

Route groups `(marketing)` and `(content)` allow different layouts without affecting URL structure.

### Parallel Routes

- News detail pages render both main content and a modal slot
- Archive pages render filtered news and latest news simultaneously

### Intercepting Routes

Clicking an image link shows a modal overlay, while direct navigation shows the full page.

### Catch-All Routes

Archive filtering supports flexible URLs:
- `/archive` - All news
- `/archive/2024` - News from 2024
- `/archive/2024/03` - News from March 2024

## Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **better-sqlite3** - SQLite database
- **TypeScript** - Type definitions (devDependency)

## License

Private project for demonstration purposes.
