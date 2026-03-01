import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Slug:</strong> {post.slug}
      </p>
    </article>
  );
}
