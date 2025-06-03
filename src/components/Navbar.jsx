import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500";

  return (
    <nav className="bg-white shadow p-4 mb-4">
      <ul className="flex justify-around">
        <li><Link className={linkClass("/")} to="/">Home</Link></li>
        <li><Link className={linkClass("/duty-time")} to="/duty-time">Duty Time</Link></li>
        <li><Link className={linkClass("/per-diem")} to="/per-diem">Per Diem</Link></li>
        <li><Link className={linkClass("/schedule")} to="/schedule">Schedule</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;