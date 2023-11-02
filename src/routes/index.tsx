import { Link } from "react-router-dom";

import { ButtonLink } from "../components/ui/button-link";
import { Anchor } from "../components/ui/anchor";

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

        <SectionProjects />
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

function SectionProjects() {
  const projects = [
    {
      imageURL: "/projects/superdupergallery.jpg",
      title: "Super Duper Gallery",
      description:
        "Website of contemporary art gallery based in 🇵🇭 QC, Philippines for super duper interesting artworks.",
      url: "https://superdupergallery.com",
    },
    {
      imageURL: "/projects/sancayaindonesia.jpg",
      title: "Sancaya Indonesia",
      description: "Inclusive learning center for children.",
      url: "https://sancayaindonesia.com",
    },
    {
      imageURL: "/projects/nawaart.jpg",
      title: "Nawaart",
      description: "Website of Myanmar art gallery.",
      url: "https://github.com/jonathannicolasdev",
    },
  ];

  return (
    <section className="py-20 px-10 space-y-16 mx-auto max-w-5xl w-full">
      <h2 className="text-4xl font-bold">Projects</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => {
          return (
            <li key={project.title} className="space-y-4">
              <img src={project.imageURL} alt={project.title} />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <Anchor
                  href={project.url}
                  className="font-bold text-indigo-600"
                >
                  Visit Project
                </Anchor>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
