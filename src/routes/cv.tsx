export default function CVRoute() {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <main className="grid grid-cols-1 md:grid-cols-3">
        <section className="col-span-1 md:col-span-1">
          <h1>Personal column</h1>
        </section>

        <section className="col-span-1 md:col-span-2">
          <h1>Work Column</h1>
        </section>
      </main>
    </div>
  );
}
