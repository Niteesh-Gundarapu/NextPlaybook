import Link from 'next/link';
import { login } from './actions/auth';
import { lessons } from './lib/lessons';
import { FeatureCard } from './components/feature-card';

export default async function Home({ searchParams }) {
  const message = searchParams?.message;

  return (
    <section className="grid">
      <article className="card">
        <h2>E-learning platform style demo</h2>
        <p>
          This project is now organized like a mini learning portal: each module shows
          <strong> what feature is being demonstrated</strong>, <strong>where it is shown</strong>, and
          <strong> how it is executed in code</strong>.
        </p>
        <p>
          Use <Link href="/learn/ssg-isr">/learn/*</Link> pages as notebook explanations.
        </p>
      </article>

      {message ? (
        <article className="card">
          <strong>{message}</strong>
        </article>
      ) : null}

      <article className="card">
        <h3>Authentication demo</h3>
        <p>Sign in to test middleware + protected routes.</p>
        <form action={login}>
          <button type="submit">Sign in</button>
        </form>
      </article>

      {lessons.map((lesson) => (
        <FeatureCard lesson={lesson} key={lesson.slug} />
      ))}

      <article className="card">
        <h3>API demo links</h3>
        <ul>
          <li><Link href="/api/hello">/api/hello</Link> (Route Handler)</li>
          <li><Link href="/api/legacy-time">/api/legacy-time</Link> (Pages API Route)</li>
          <li><Link href="/api/profile">/api/profile</Link> (Protected API route)</li>
        </ul>
      </article>
    </section>
  );
}
