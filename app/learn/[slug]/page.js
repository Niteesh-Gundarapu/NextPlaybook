import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLessonBySlug, lessons } from '../../lib/lessons';

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export default function LessonNotebookPage({ params }) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) notFound();

  return (
    <section className="grid">
      <article className="card">
        <h2>{lesson.title}</h2>
        <p><strong>Feature:</strong> {lesson.feature}</p>
        <p><strong>Shown at:</strong> <Link href={lesson.shownAt}>{lesson.shownAt}</Link></p>
      </article>

      <article className="card">
        <h3>How this is executed</h3>
        <p>{lesson.howItWorks}</p>
      </article>

      <article className="card">
        <h3>Files to revise</h3>
        <ul>
          {lesson.files.map((file) => (
            <li key={file}><code>{file}</code></li>
          ))}
        </ul>
      </article>
    </section>
  );
}
