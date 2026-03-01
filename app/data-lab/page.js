import { DataLab } from '../components/data-lab';

export default function DataLabPage() {
  return (
    <section className="grid">
      <article className="card">
        <h2>Data Lab</h2>
        <p>
          Demonstrates React Query caching, infinite queries, on-scroll loading, and
          virtualization for large lists.
        </p>
      </article>
      <DataLab />
    </section>
  );
}
