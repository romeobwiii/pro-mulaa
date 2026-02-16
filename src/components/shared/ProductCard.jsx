import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Card from './Card';
import Button from './Button';

const ProductCard = ({ product }) => {
  const IconComponent = Icons[product.icon] || Icons.Box;

  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-lg mr-4">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">{product.name}</h3>
          <p className="text-secondary font-semibold text-sm">{product.tagline}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-primary">Perfect For:</p>
        <p className="text-gray-600 text-sm">{product.perfectFor}</p>
      </div>
      
      <div className="mb-6">
        <p className="text-accent font-bold">{product.pricing}</p>
      </div>
      
      <Button to={`/products#${product.id}`} variant="outline" className="w-full">
        {product.cta}
      </Button>
    </Card>
  );
};

export default ProductCard;