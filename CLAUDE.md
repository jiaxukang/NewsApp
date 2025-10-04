# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application demonstrating advanced routing and rendering patterns, including route groups, parallel routes, intercepting routes, and catch-all routes. The project uses better-sqlite3 for data storage and implements a news browsing system.

## Commands

**Development:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run Next.js linter
```

## Architecture

### Route Groups and Layouts

The app uses Next.js route groups to separate marketing and content layouts:

- `(marketing)/` - Marketing pages without the main header
- `(content)/` - Content pages with the main header (shared via `app/(content)/layout.js`)

Both route groups have separate root layouts that define the HTML structure.

### Parallel Routes

The application implements parallel routes in two places:

1. **News Detail Pages** (`app/(content)/news/[slug]/layout.js`):
   - `@modal` slot for intercepted image modals
   - `children` slot for the main content
   - Default slot handler: `@modal/default.js`

2. **Archive Pages** (`app/(content)/archive/layout.js`):
   - `@archive` slot for filtered news navigation and display
   - `@latest` slot for latest news
   - Default slot handler: `@latest/default.js`

### Intercepting Routes

The app uses route interception for modal image views:
- Pattern: `@modal\(.)image\page.js` intercepts `/news/[slug]/image` when navigating from within the app
- Full route: `app/(content)/news/[slug]/image/page.js` serves the standalone image page on direct navigation
- Uses `ModalBackdrop` component for modal overlay

### Catch-All Routes

Archive filtering uses optional catch-all routes:
- `app/(content)/archive/@archive/[[...filter]]/page.js`
- Supports `/archive`, `/archive/2024`, `/archive/2024/12` patterns
- Implements error boundary at this level for invalid filters

### Data Layer

**Database:** SQLite via better-sqlite3 (`data.db`)

**API Module:** `lib/news.js` provides data access functions:
- All functions include artificial 2s delays (for demonstration)
- `getAllNews()`, `getNewsItem(slug)`, `getLatestNews()`
- `getAvailableNewsYears()`, `getAvailableNewsMonths(year)`
- `getNewsForYear(year)`, `getNewsForYearAndMonth(year, month)`

### Loading States

The app demonstrates loading UI patterns:
- `loading.js` files in news and archive routes
- Suspense boundaries with fallback loading messages (e.g., in filtered news)

### Error Handling

- `not-found.js` at both root and news detail levels
- `error.js` in archive filter route for invalid year/month combinations
- `notFound()` function called when news items don't exist
