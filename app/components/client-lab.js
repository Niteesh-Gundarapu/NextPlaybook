'use client';

import { useActionState, useEffect, useMemo, useOptimistic, useState, useTransition } from 'react';

async function saveNoteAction(previousState, formData) {
  const note = formData.get('note');
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!note?.trim()) {
    return { status: 'error', message: 'Note cannot be empty.' };
  }

  return { status: 'success', message: `Saved: ${note}` };
}

export function ClientLab() {
  const [count, setCount] = useState(0);
  const [mountedAt, setMountedAt] = useState('pending hydration...');
  const [items, setItems] = useState(['Read docs']);
  const [optimisticItems, addOptimisticItem] = useOptimistic(items, (state, newItem) => [...state, newItem]);
  const [isPending, startTransition] = useTransition();
  const [formState, formAction] = useActionState(saveNoteAction, { status: 'idle', message: '' });

  useEffect(() => {
    setMountedAt(new Date().toLocaleTimeString());
  }, []);

  const doubled = useMemo(() => count * 2, [count]);

  return (
    <div className="grid">
      <article className="card">
        <h3>Hydration signal</h3>
        <p>Rendered on server first, then hydrated in browser.</p>
        <p>Client mounted at: {mountedAt}</p>
      </article>

      <article className="card">
        <h3>Core hooks</h3>
        <p>Count: {count}</p>
        <p>Doubled with useMemo: {doubled}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </article>

      <article className="card">
        <h3>React 19 patterns: useTransition + useOptimistic</h3>
        <button
          onClick={() => {
            const optimistic = `Task ${optimisticItems.length + 1}`;
            addOptimisticItem(optimistic);
            startTransition(() => {
              setItems((prev) => [...prev, optimistic]);
            });
          }}
        >
          Add task
        </button>
        {isPending ? <p>Transition running...</p> : null}
        <ul>
          {optimisticItems.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="card">
        <h3>React 19 pattern: useActionState</h3>
        <form action={formAction} className="grid">
          <input name="note" placeholder="Write a note" />
          <button type="submit">Save note</button>
        </form>
        <p>Status: {formState.status}</p>
        <p>{formState.message}</p>
      </article>
    </div>
  );
}
