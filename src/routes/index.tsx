import { Link } from "react-router-dom";

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

      <main className="flex-[1]">
        <section id="section-hero">
          <h1>Hello, I'm Jonathan Nicolas, a web developer Contact Me</h1>
        </section>

        <section id="section-other">
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
