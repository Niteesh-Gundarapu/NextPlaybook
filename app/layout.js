import './globals.css';
import Link from 'next/link';
import { Providers } from './providers';

export const metadata = {
  title: 'NextPlaybook',
  description: 'Notebook-style reference project for Next.js + React features.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <header className="card">
              <h1>NextPlaybook</h1>
              <p>E-learning style notebook for modern Next.js + React patterns.</p>
              <nav className="grid grid-2">
                <Link href="/">Home</Link>
                <Link href="/learn/ssg-isr">Notebook lessons</Link>
                <Link href="/posts">SSG post demo</Link>
                <Link href="/ssr-legacy">SSR (pages router)</Link>
                <Link href="/dashboard">Protected route</Link>
                <Link href="/client-lab">React hooks + hydration</Link>
                <Link href="/data-lab">React Query + infinite + virtualization</Link>
              </nav>
            </header>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
