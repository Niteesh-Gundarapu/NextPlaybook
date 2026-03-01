import { ClientLab } from '../components/client-lab';

export default function ClientLabPage() {
  return (
    <section>
      <article className="card">
        <h2>Client Lab</h2>
        <p>This page focuses on hydration, hooks, and modern React 19 client features.</p>
      </article>
      <ClientLab />
    </section>
  );
}
