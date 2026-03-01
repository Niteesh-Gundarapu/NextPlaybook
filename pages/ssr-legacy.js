export default function LegacySSRPage({ serverTime }) {
  return (
    <section>
      <article className="card">
        <h2>SSR with Pages Router</h2>
        <p>This page runs getServerSideProps on every request.</p>
        <p>Server time: {serverTime}</p>
      </article>
    </section>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      serverTime: new Date().toISOString()
    }
  };
}
