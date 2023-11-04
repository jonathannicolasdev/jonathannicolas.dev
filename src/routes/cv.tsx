import { Icon } from "@iconify/react";

import { ButtonAnchor } from "../components/ui/button-anchor";
import { ExperienceList } from "../components/shared/experience-list";

export default function CVRoute() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto max-w-5xl p-4">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="col-span-1 md:col-span-1 space-y-8">
            <div
              id="profile"
              className="shadow bg-white rounded-xl overflow-hidden"
            >
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
                <p className="text-stone-400">Web Developer</p>
                <div className="flex flex-col">
                  <ButtonAnchor
                    href="https://example.com/pdf"
                    className="text-center"
                  >
                    <span className="inline-flex gap-2 items-center">
                      <Icon icon="tabler:download" className="text-xl" />
                      Download CV
                    </span>
                  </ButtonAnchor>
                </div>
              </div>
            </div>

            <div id="information" className="card">
              <h1>Information</h1>
            </div>

            <div id="skills" className="card">
              <h1>Skills</h1>
            </div>
          </section>

          <section className="col-span-1 md:col-span-2 space-y-8">
            <div id="about-me" className="card space-y-4">
              <h1 className="card-title">About me</h1>
              <p>
                Libero quas veritatis nulla distinctio fuga nihil temporibus et.
                Quia dicta sapiente qui porro molestiae nobis incidunt
                voluptatem. Et voluptas sunt nihil. At perferendis voluptatem
                dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut
                quia explicabo voluptates.
              </p>
              <p>
                <span>Email: </span>
                <a
                  href="mailto:jonathannicolas.dev@gmail.com"
                  className="text-teal-700 font-semibold"
                >
                  jonathannicolas.dev@gmail.com
                </a>
              </p>
              <p>
                <span>Website: </span>
                <a href="https://jonathannicolas.dev" className="text-teal-700">
                  jonathannicolas.dev
                </a>
              </p>
              <div className="flex gap-4">
                <Icon icon="logos:linkedin" className="text-xl" />
                <Icon icon="logos:github" className="text-xl" />
              </div>
            </div>

            <ExperienceList />
          </section>
        </main>
      </div>
    </div>
  );
}
