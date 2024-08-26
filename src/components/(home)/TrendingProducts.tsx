"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import DProductCard from '../(cards)/DetailedProductCard';

const TrendingProducts: React.FC = () => {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const categories = ['all', 'art', 'crafts', 'music', 'literature'];
  const productKeys = Object.keys(t.raw('products'));

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? productKeys
    : productKeys.filter(key => t.raw(`products.${key}.category`) === activeCategory);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-6">{t('home.trendingProducts')}</h2>

        {/* Category Selection */}
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
              className={`px-4 py-2 mx-2 ${activeCategory === category ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-700'} rounded-full`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map(productKey => (
            <DProductCard
              key={t.raw(`products.${productKey}.id`)}
              id={t.raw(`products.${productKey}.id`)}
              imageUrl={t.raw(`products.${productKey}.imageUrl`)}
              name={t(`products.${productKey}.name`)}
              price={t(`products.${productKey}.price`)}
              description={t(`products.${productKey}.description`)}
              rating={Number(t.raw(`products.${productKey}.rating`))}
              reviewCount={Number(t.raw(`products.${productKey}.reviewCount`))}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(page => (
            <button
              key={page}
              onClick={() => paginate(page + 1)}
              className={`px-3 py-2 mx-1 ${currentPage === page + 1 ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-700'} rounded`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
