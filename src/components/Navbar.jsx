import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", emoji: "🏠" },
    { path: "/duty-time", label: "Duty Time", emoji: "⏱️" },
    { path: "/per-diem", label: "Per Diem", emoji: "💸" },
    { path: "/schedule", label: "Schedule", emoji: "📅" }
  ];

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">Cat’sKit 🐾</div>
        <ul className="flex space-x-4">
          {navItems.map(({ path, label, emoji }) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-3 py-1 rounded-md ${
                  location.pathname === path
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span className="mr-1">{emoji}</span>{label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;