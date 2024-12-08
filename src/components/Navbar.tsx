import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Users, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl">Envisage Multi Media</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/claims" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Claims Management</span>
            </Link>
            <Link to="/support" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
              <Users className="h-5 w-5" />
              <span>Member Support</span>
            </Link>
            <Link to="/telemedicine" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
              <Brain className="h-5 w-5" />
              <span>Telemedicine</span>
            </Link>
            <Link to="/hospital" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
              <Building2 className="h-5 w-5" />
              <span>Hospital Management</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;