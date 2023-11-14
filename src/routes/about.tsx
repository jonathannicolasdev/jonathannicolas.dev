export default function AboutRoute() {
  return (
    <div className="pt-10 mx-auto max-w-3xl space-y-10">
      <section className="space-y-4">
        <img
          src="/images/about-quebec.jpeg"
          alt="Quebec Castle"
          height={300}
          className="h-80 w-full object-cover object-top rounded-md"
        />
        <h1 className="text-5xl font-semibold">About Jonathan Nicolas</h1>
        <h2 className="text-xl font-semibold">
          Short highlights how Jonathan went with his life.
        </h2>
      </section>

      <section className="prose">
        <p>
          Jonathan Nicolas loves programming, writing, speaking, traveling, and
          art. He does not love talking about himself in the 3rd Person
        </p>
      </section>
    </div>
  );
}
