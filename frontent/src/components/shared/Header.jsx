import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <header className="shadow-lg sticky top-0 bg-white">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Morning</span>
            <span className="text-slate-900">Dispatch</span>
          </h1>
        </Link>

        {/* Search Bar (Static) */}
        <form className="p-3 bg-slate-100 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-20 sm:w-60"
            disabled
          />
          <button type="button" disabled>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden lg:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/news">
            <li className="hidden lg:inline text-slate-700 hover:underline">
              News Articles
            </li>
          </Link>
        </ul>

        {/* Sign In Button */}
        <Link to="/sign-in">
          <Button className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign In
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
