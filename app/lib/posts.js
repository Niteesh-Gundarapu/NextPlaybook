export const posts = [
  {
    slug: 'ssg-basics',
    title: 'SSG Basics',
    summary: 'Pre-render static pages at build time for speed.',
    content: 'Static Site Generation creates HTML ahead of time. Great for mostly-static content.'
  },
  {
    slug: 'isr-basics',
    title: 'ISR Basics',
    summary: 'Incremental Static Regeneration updates stale static pages.',
    content: 'With ISR you can revalidate pages in the background on a schedule.'
  }
];

export async function getPosts() {
  return posts;
}

export async function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
