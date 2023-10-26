import { Icon } from "@iconify/react";

export default function CVRoute() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto max-w-5xl p-4">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="col-span-1 md:col-span-1 space-y-8">
            <div className="shadow bg-white rounded-xl overflow-hidden">
              <div
                className="h-32 bg-cover"
                style={{
                  backgroundImage: "url('/images/cv-cover.jpeg')",
                }}
              ></div>

              <div className="pt-12 p-8 space-y-4 relative">
                <img
                  src="/images/avatar.jpg"
                  alt="Avatar"
                  className="rounded-full absolute -top-10 shadow border-2 border-white border-solid"
                  width={80}
                  height={80}
                />
                <h1 className="card-title">Jonathan Nicolas</h1>
                <p className="text-stone-500 text-sm">Web Developer</p>
              </div>
            </div>

            <div className="card">
              <h1>Information</h1>
            </div>

            <div className="card">
              <h1>Skills</h1>
            </div>
          </section>

          <section className="col-span-1 md:col-span-2">
            <div className="card space-y-4">
              <h1 className="card-title">About me</h1>
              <p>
                Libero quas veritatis nulla distinctio fuga nihil temporibus et.
                Quia dicta sapiente qui porro molestiae nobis incidunt
                voluptatem. Et voluptas sunt nihil. At perferendis voluptatem
                dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut
                quia explicabo voluptates.
              </p>
              <p>
                <a
                  href="mailto:jonathannicolas.dev@gmail.com"
                  className="text-teal-700 font-semibold"
                >
                  jonathannicolas.dev@gmail.com
                </a>
              </p>
              <div className="flex gap-4">
                <Icon icon="tabler:home" className="text-2xl" />
                <Icon icon="logos:linkedin" className="text-xl" />
                <Icon icon="logos:github" className="text-xl" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
