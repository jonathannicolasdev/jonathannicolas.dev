import { ButtonLink } from "../components/ui/button-link";
import { SectionProjects } from "../components/shared/section-projects";

export default function IndexRoute() {
  return (
    <>
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
    </>
  );
}
