import Link from 'next/link';

export function FeatureCard({ lesson }) {
  return (
    <article className="card">
      <h3>{lesson.title}</h3>
      <p><strong>Feature:</strong> {lesson.feature}</p>
      <p><strong>Where shown:</strong> <Link href={lesson.shownAt}>{lesson.shownAt}</Link></p>
      <p><strong>How executed:</strong> {lesson.howItWorks}</p>
      <p>
        <Link href={`/learn/${lesson.slug}`}>Open notebook explanation</Link>
      </p>
    </article>
  );
}
