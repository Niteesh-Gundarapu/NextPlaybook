# NextPlaybook

A notebook-style **Next.js + React** reference project designed like a mini **e-learning platform demo**.

> Each module explicitly answers:
> 1) **What feature is this?**
> 2) **Where is it shown?**
> 3) **How is it executed in code?**

## Features covered

- ✅ App Router basics (layouts, server components, route groups)
- ✅ Pages Router compatibility (legacy SSR/API examples)
- ✅ SSG + ISR (`generateStaticParams`, `revalidate`)
- ✅ SSR (`getServerSideProps`)
- ✅ Hydration and client components
- ✅ React hooks (`useState`, `useEffect`, `useMemo`)
- ✅ React 19 hooks (`useActionState`, `useOptimistic`, `useTransition`)
- ✅ Route Handlers (`app/api/.../route.js`)
- ✅ Legacy API routes (`pages/api/...`)
- ✅ Middleware + cookie-based route protection
- ✅ Authentication demo with server actions
- ✅ React Query for async data + caching
- ✅ Infinite scrolling + list virtualization (`react-window`)
- ✅ Request validation with `zod`

## Learning flow

- `/` : feature index cards (what/where/how summary)
- `/learn/[slug]` : notebook explanation pages for each feature
- `/posts` : SSG + ISR module
- `/ssr-legacy` : SSR module
- `/dashboard` : auth + middleware module
- `/client-lab` : hydration + hooks module
- `/data-lab` : React Query + performance module

## Project structure

```txt
app/
  learn/[slug]/                # Notebook explanation pages
  (public)/posts/              # SSG + ISR demos
  (protected)/dashboard/       # Protected route
  api/                         # Route handlers (app router)
  actions/                     # Server actions (auth)
  client-lab/                  # Hydration + hooks + React 19 hooks
  data-lab/                    # React Query + virtualized list
  components/                  # Reusable components
  lib/                         # Local data + lesson metadata
pages/
  api/legacy-time.js           # Legacy API route
  ssr-legacy.js                # Legacy SSR page (getServerSideProps)
middleware.js                  # Route protection
```

## Quick start

```bash
npm install
npm run dev
```

## Notes

- Auth is intentionally simple (cookie + middleware) for learning flow.
- Replace mock APIs with real backend/auth providers as your next step.
