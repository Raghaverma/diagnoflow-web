import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        DiagnoFlow
      </Link>
      <div className="space-x-4 hidden md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
