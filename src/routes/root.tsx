import { Link, Outlet } from "react-router-dom";

const navigationItems = [
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "CV" },
];

export default function RootLayoutRoute() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex flex-wrap justify-between gap-2 p-4 shadow-md">
        <Link to="/">
          <span className="text-2xl font-bold">Jonathan Nicolas</span>
        </Link>

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
        <Outlet></Outlet>
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
