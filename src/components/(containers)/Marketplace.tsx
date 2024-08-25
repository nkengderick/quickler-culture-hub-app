import React from 'react';
import { useTranslations } from 'next-intl';
import SearchFilters from '../(ui)/SearchFilters';
import ProductCard from '../(cards)/ProductCard';

const Marketplace: React.FC = () => {
  const t = useTranslations('marketplace');

  // Sample data for products
  const products = [
    {
      id: '1',
      imageUrl: '/images/product1.jpg',
      name: 'Product 1',
      price: '$10',
      description: 'Short description of Product 1.',
    },
    {
      id: '2',
      imageUrl: '/images/product2.jpg',
      name: 'Product 2',
      price: '$20',
      description: 'Short description of Product 2.',
    },
    {
      id: '3',
      imageUrl: '/images/product3.jpg',
      name: 'Product 3',
      price: '$15',
      description: 'Short description of Product 3.',
    },
    {
      id: '4',
      imageUrl: '/images/product4.jpg',
      name: 'Product 4',
      price: '$25',
      description: 'Short description of Product 4.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar/Search Filters */}
        <aside className="md:col-span-1">
          <SearchFilters />
        </aside>
        
        {/* Main Content Area */}
        <section className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketplace;
