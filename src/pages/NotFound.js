import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-beige flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-5">
            <Link to="/" className="text-base font-medium text-yellow-600 hover:text-yellow-500">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;