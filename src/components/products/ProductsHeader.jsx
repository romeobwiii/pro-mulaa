import React from 'react';
import { Package } from 'lucide-react';

const ProductsHeader = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom text-center">
        <Package className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Mulaa Company offers five core products, each addressing a distinct market need 
          while sharing our foundational philosophy of emotional intelligence and cultural context.
        </p>
      </div>
    </section>
  );
};

export default ProductsHeader;