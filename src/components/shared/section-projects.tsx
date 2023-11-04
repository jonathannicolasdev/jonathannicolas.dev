import { Icon } from "@iconify/react";

import { ButtonAnchor } from "../ui/button-anchor";

export function SectionProjects() {
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
                className="rounded object-cover h-[280px] object-top"
                width={448}
                height={280}
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
