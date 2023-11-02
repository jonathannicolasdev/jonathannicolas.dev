import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { ButtonLink } from "../components/ui/button-link";
import { ButtonAnchor } from "../components/ui/button-anchor";

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
  const projects: {
    url: string;
    imageURL: string;
    title: string;
    description: string;
    technologies?: { name: string; icon: string }[];
  }[] = [
    {
      url: "https://superdupergallery.com",
      imageURL: "/projects/superdupergallery.jpg",
      title: "Super Duper Gallery",
      description:
        "Website of contemporary art gallery based in 🇵🇭 QC, Philippines for super duper interesting artworks.",
      technologies: [
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Remix", icon: "logos:remix-icon" },
        { name: "Prisma ORM", icon: "logos:prisma" },
        { name: "MySQL on PlanetScale", icon: "logos:mysql-icon" },
        { name: "Vercel", icon: "logos:vercel-icon" },
      ],
    },
    {
      url: "https://sancayaindonesia.com",
      imageURL: "/projects/sancayaindonesia.jpg",
      title: "Sancaya Indonesia",
      description: "Inclusive learning center for children.",
      technologies: [
        { name: "WordPress", icon: "logos:wordpress-icon" },
        { name: "", icon: "logos:jquery" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "Apache HTTP Server", icon: "logos:apache" },
        { name: "Rumahweb VPS", icon: "logos:serverless" },
      ],
    },
    {
      url: "https://github.com/jonathannicolasdev/nawaart",
      imageURL: "/projects/nawaart.jpg",
      title: "Nawaart",
      description: "Website of Myanmar art gallery.",
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "React Router", icon: "logos:react-router" },
        { name: "Styled Components", icon: "noto:nail-polish" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Mongoose ORM", icon: "noto:open-book" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Netlify", icon: "logos:netlify-icon" },
      ],
    },
    {
      url: "https://github.com/jonathannicolasdev/sneakergram-client",
      imageURL: "/projects/sneakergram.jpg",
      title: "Sneakergram",
      description: "Sneaker social media like Instagram",
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "React Router", icon: "logos:react-router" },
        { name: "Styled Components", icon: "noto:nail-polish" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Mongoose ORM", icon: "noto:open-book" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Netlify", icon: "logos:netlify-icon" },
      ],
    },
  ];

  return (
    <section className="py-20 px-10 space-y-16 mx-auto max-w-5xl w-full">
      <h2 className="text-4xl font-bold">Projects</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {projects.map((project) => {
          return (
            <li key={project.title} className="space-y-4">
              <img
                src={project.imageURL}
                alt={project.title}
                className="rounded"
              />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              {Array.isArray(project.technologies) && (
                <ul className="flex flex-wrap gap-4">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex gap-2 items-center"
                    >
                      <Icon icon={technology.icon}></Icon>
                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p>
                <ButtonAnchor
                  href={project.url}
                  className="font-bold text-indigo-600"
                >
                  Visit Project
                </ButtonAnchor>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
