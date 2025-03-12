import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound404;