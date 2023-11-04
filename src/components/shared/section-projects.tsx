import { Icon } from "@iconify/react";

import { ButtonAnchor } from "../ui/button-anchor";
import { dataProjects } from "../../data/projects";

export function SectionProjects() {
  return (
    <section className="py-20 px-10 space-y-16 mx-auto max-w-5xl w-full">
      <h2 className="text-4xl font-bold">Projects</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {dataProjects.map((project) => {
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
