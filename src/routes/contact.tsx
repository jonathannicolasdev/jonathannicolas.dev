import { Icon } from "@iconify/react/dist/iconify.js";
import { ButtonAnchor } from "../components/ui/button-anchor";

const contactButtons = [
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://linkedin.com/in/jonathansnicolas",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
    href: "https://github.com/jonathannicolasdev",
  },
];

export default function ContactRoute() {
  return (
    <div className="site-container">
      <section className="space-y-4">
        <img
          src="/images/contact-mountain.jpeg"
          alt="Mountain"
          height={300}
          className="h-80 w-full object-cover object-top rounded-md"
        />
        <h1 className="text-3xl sm:text-5xl font-semibold">
          <span>Contact and socialize with </span>
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent sm:whitespace-nowrap">
            Jonathan
          </span>
        </h1>
        <h2 className="text-xl font-semibold">
          Reach me on these social media
        </h2>
      </section>

      <section>
        {Array.isArray(contactButtons) && (
          <ul className="flex flex-wrap gap-4">
            {contactButtons.map((contact) => (
              <li key={contact.name}>
                <ButtonAnchor
                  href={contact.href}
                  className="inline-flex items-center gap-2"
                >
                  <Icon icon={contact.icon}></Icon>
                  <span>{contact.name}</span>
                </ButtonAnchor>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
