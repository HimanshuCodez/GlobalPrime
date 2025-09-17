import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-2xl mx-auto mt-4 max-w-6xl px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://globalprimeinvest.org/public/images/logo/logo.png"
          alt="Logo"
          className="h-10 w-10"
        />
        <span className="font-bold text-blue-700">GLOBAL PRIME INVEST</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li className="relative group">
          <button className="flex items-center space-x-1">
            <span>Account</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown */}
          <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-32">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Register</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
