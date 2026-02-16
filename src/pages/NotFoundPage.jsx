import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-secondary mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;