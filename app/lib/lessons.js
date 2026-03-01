export const lessons = [
  {
    slug: 'ssg-isr',
    title: 'SSG + ISR (Course Catalog)',
    feature: 'Static Site Generation with incremental updates',
    shownAt: '/posts',
    howItWorks:
      'The page is pre-rendered and served as static HTML. The `revalidate` export refreshes it in the background so content can stay mostly static but still update.',
    files: ['app/(public)/posts/page.js', 'app/(public)/posts/[slug]/page.js']
  },
  {
    slug: 'ssr',
    title: 'SSR (Live Session Board)',
    feature: 'Server-side rendering on every request',
    shownAt: '/ssr-legacy',
    howItWorks:
      'The page uses `getServerSideProps`, so each request gets fresh data generated on the server.',
    files: ['pages/ssr-legacy.js']
  },
  {
    slug: 'auth-middleware',
    title: 'Authentication + Protected Route',
    feature: 'Server action auth + middleware route guard',
    shownAt: '/dashboard',
    howItWorks:
      'Signing in runs a server action that sets a session cookie. Middleware checks that cookie before allowing access to dashboard routes.',
    files: ['app/actions/auth.js', 'middleware.js', 'app/(protected)/dashboard/page.js']
  },
  {
    slug: 'react-19-hydration',
    title: 'Hydration + React 19 hooks',
    feature: 'Client-side interactivity and modern hooks',
    shownAt: '/client-lab',
    howItWorks:
      'The server sends initial HTML, then React hydrates in the browser. The page demonstrates `useActionState`, `useOptimistic`, and `useTransition`.',
    files: ['app/components/client-lab.js']
  },
  {
    slug: 'react-query-performance',
    title: 'React Query + Infinite Scroll + Virtualization',
    feature: 'Efficient data loading patterns for large lists',
    shownAt: '/data-lab',
    howItWorks:
      'React Query caches paginated data. IntersectionObserver triggers loading the next page. react-window renders only visible rows for performance.',
    files: ['app/components/data-lab.js', 'app/api/feed/route.js', 'app/providers.js']
  }
];

export function getLessonBySlug(slug) {
  return lessons.find((lesson) => lesson.slug === slug);
}
