import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-20 top-0 flex gap-4 text-sm p-4">
      <img
        src="/curefit_logo.png"
        alt="CureFit Logo"
        className="h-10 mt-[-8px]" 
      />
      <nav className="navigation">
        <ul className="flex gap-4">
          <li className="bg-white/50 rounded-full px-4 py-1 hover:bg-purple-500 hover:text-white transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-white/50 rounded-full px-4 py-1 hover:bg-purple-500 hover:text-white transition-colors">
            <Link to="/hospitals">Hospitals</Link>
          </li>
          <li className="bg-white/50 rounded-full px-4 py-1 hover:bg-purple-500 hover:text-white transition-colors">
            <Link to="/doctors">Doctors</Link>
          </li>
          <li className="bg-white/50 rounded-full px-4 py-1 hover:bg-purple-500 hover:text-white transition-colors">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
