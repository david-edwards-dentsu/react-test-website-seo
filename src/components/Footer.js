import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-beige text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2023 Your Company Name. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/services" className="hover:text-gray-600">Services</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;