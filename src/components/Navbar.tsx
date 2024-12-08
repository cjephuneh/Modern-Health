import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Users, Building2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl">Envisage Multi Media</span>
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/claims"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Activity className="h-5 w-5" />
              <span>Claims Management</span>
            </Link>
            <Link
              to="/support"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>Member Support</span>
            </Link>
            <Link
              to="/telemedicine"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Brain className="h-5 w-5" />
              <span>Telemedicine</span>
            </Link>
            <Link
              to="/hospital"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Building2 className="h-5 w-5" />
              <span>Hospital Management</span>
            </Link>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white shadow-md rounded-lg">
            <Link
              to="/claims"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Activity className="inline-block h-5 w-5 mr-2" />
              Claims Management
            </Link>
            <Link
              to="/support"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Users className="inline-block h-5 w-5 mr-2" />
              Member Support
            </Link>
            <Link
              to="/telemedicine"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Brain className="inline-block h-5 w-5 mr-2" />
              Telemedicine
            </Link>
            <Link
              to="/hospital"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="inline-block h-5 w-5 mr-2" />
              Hospital Management
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
