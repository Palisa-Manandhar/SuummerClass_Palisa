import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-slate-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl md:text-3xl font-bold tracking-tight"
        >
          Note Summarizer
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-medium transition ${
              location.pathname === "/"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/notes"
            className={`px-4 py-2 rounded-lg font-medium transition ${
              location.pathname === "/notes"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            My Notes
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
