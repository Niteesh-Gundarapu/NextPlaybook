import { cookies } from 'next/headers';
import { logout } from '../../actions/auth';

export default function DashboardPage() {
  const isAuthed = cookies().get('session')?.value === 'authenticated';

  return (
    <section className="grid">
      <article className="card">
        <h2>Protected Dashboard</h2>
        <p>
          Middleware already guards this route. Server components can still read cookies
          to personalize content.
        </p>
        <p>Session active: {String(isAuthed)}</p>
      </article>

      <article className="card">
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </article>
    </section>
  );
}
