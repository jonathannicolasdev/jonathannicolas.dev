import { Link } from "react-router-dom";

import { ButtonLink } from "../components/ui/button-link";

const navigationItems = [
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "CV" },
];

export default function IndexRoute() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex flex-wrap justify-between gap-2 p-4 shadow-md">
        <span className="text-2xl font-bold">Jonathan Nicolas</span>

        <ul className="flex gap-8 items-center">
          {navigationItems.map((navItem) => {
            return (
              <li key={navItem.to}>
                <Link
                  to={navItem.to}
                  className="text-xl text-semibold text-blue-800 hover:opacity-80"
                >
                  {navItem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="flex-[1]">
        <section className="justify-center items-center flex flex-wrap gap-10 sm:gap-20 bg-indigo-500 py-20 px-10">
          <div className="hero-person flex flex-col gap-8 items-center">
            <img
              src="/images/avatar.jpg"
              alt="Avatar"
              className="rounded-full"
              width={300}
              height={300}
            />
            <h1 className="text-2xl font-semibold max-w-sm text-center text-indigo-100">
              Hello, I'm Jonathan Nicolas, a web developer Contact Me
            </h1>
            <div className="flex gap-4">
              <ButtonLink to="/contact">Contact Me</ButtonLink>
              <ButtonLink to="/projects">Check My Projects</ButtonLink>
            </div>
          </div>

          <div>
            <img
              src="/images/hero-image.svg"
              alt="Hero Image"
              className="max-w-md object-contain"
              width={500}
              height={30}
            />
          </div>
        </section>

        <section className="py-20 px-10">
          <h2>Section Other</h2>
        </section>
      </main>

      <footer className="p-4">
        <div className="flex justify-center">
          <p className="text-slate-500">
            Copyright &copy; {year} Jonathan Nicolas
          </p>
        </div>
      </footer>
    </div>
  );
}
