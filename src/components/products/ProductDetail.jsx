import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const IconComponent = product.icon;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <IconComponent className="h-8 w-8 text-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-secondary font-semibold">{product.tagline}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
        
        <div className="mb-6">
          <h3 className="font-bold text-primary mb-3">Key Features:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-cream p-4 rounded-lg mb-6">
          <p className="text-sm font-semibold text-primary mb-1">Perfect For:</p>
          <p className="text-gray-700 mb-3">{product.perfectFor}</p>
          <p className="text-accent font-bold">{product.pricing}</p>
        </div>
        
        <Link 
          to="/contact" 
          className="btn-primary w-full justify-center"
        >
          {product.cta}
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;