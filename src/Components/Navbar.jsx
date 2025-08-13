import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">BrandLogo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 font-medium">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-blue-600 font-medium">About</Link>
          <Link to="/services" className="block text-gray-600 hover:text-blue-600 font-medium">Services</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
