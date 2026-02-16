import React from 'react';
import ProductDetail from './ProductDetail';
import { products } from '../../data/productsData';

const ProductsGrid = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="space-y-12">
          {products.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;