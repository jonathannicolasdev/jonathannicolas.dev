import { Link } from "react-router-dom";

const navigationItems = [
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "CV" },
];

export default function IndexRoute() {
  return (
    <div>
      <nav className="flex justify-between gap-2 p-4 shadow-md">
        <span className="text-2xl">Jonathan Nicolas</span>

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

      <main>
        <section>
          <h1>Hello, I'm Jonathan Nicolas, a web developer Contact Me</h1>
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
