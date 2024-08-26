import React from 'react';
import { useTranslations } from 'next-intl';
import ProductCard from '../(cards)/ProductCard';

const TopProducts: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-6">{t('home.topProducts')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Image on the Left */}
          <div className="col-span-1">
            <img
              src="https://picsum.photos/id/1/100/100"
              alt="Featured Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Cards on the Right */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {['product1', 'product2', 'product3', 'product4'].map(productKey => (
              <ProductCard
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
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
