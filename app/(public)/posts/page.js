import Link from 'next/link';
import { getPosts } from '../../lib/posts';

export const revalidate = 60;

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className="grid">
      <article className="card">
        <h2>SSG + ISR Posts</h2>
        <p>This page is statically generated and revalidated every 60 seconds.</p>
      </article>
      {posts.map((post) => (
        <article className="card" key={post.slug}>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <Link href={`/posts/${post.slug}`}>Read post</Link>
        </article>
      ))}
    </section>
  );
}
