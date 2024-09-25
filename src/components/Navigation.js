import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-beige py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-black font-bold text-xl">Logo</Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/contact" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;