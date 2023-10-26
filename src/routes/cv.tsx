export default function CVRoute() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto max-w-5xl p-4">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="col-span-1 md:col-span-1 space-y-8">
            <div className="card">
              <h1>Name</h1>
            </div>

            <div className="card">
              <h1>Information</h1>
            </div>

            <div className="card">
              <h1>Skills</h1>
            </div>
          </section>

          <section className="col-span-1 md:col-span-2">
            <div className="card">
              <h1>About me</h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
