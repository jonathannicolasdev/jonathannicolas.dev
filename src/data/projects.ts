export const dataProjects: {
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
