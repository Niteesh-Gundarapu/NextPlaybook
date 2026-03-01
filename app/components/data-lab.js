'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';

async function fetchFeed({ pageParam = 0 }) {
  const response = await fetch(`/api/feed?cursor=${pageParam}`);
  if (!response.ok) throw new Error('Failed to fetch feed');
  return response.json();
}

export function DataLab() {
  const loadMoreRef = useRef(null);

  const query = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: fetchFeed,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  });

  const rows = useMemo(() => query.data?.pages.flatMap((page) => page.items) ?? [], [query.data]);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && query.hasNextPage && !query.isFetchingNextPage) {
        query.fetchNextPage();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [query]);

  return (
    <div className="grid">
      <article className="card">
        <h3>Infinite Query + infinite scroll</h3>
        <p>Status: {query.status}</p>
        <p>Total rows: {rows.length}</p>
        {query.error ? <p>{query.error.message}</p> : null}
        <button onClick={() => query.refetch()}>Refetch</button>
      </article>

      <article className="card">
        <h3>Virtualized list (react-window)</h3>
        <List
          height={320}
          itemCount={rows.length}
          itemSize={42}
          width={'100%'}
          style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
        >
          {({ index, style }) => (
            <div style={{ ...style, padding: '10px', borderBottom: '1px solid #f3f4f6' }}>
              #{rows[index]?.id} — {rows[index]?.title}
            </div>
          )}
        </List>
        <div ref={loadMoreRef} style={{ padding: '16px', textAlign: 'center' }}>
          {query.hasNextPage ? 'Scroll to load more…' : 'No more data'}
        </div>
      </article>
    </div>
  );
}
