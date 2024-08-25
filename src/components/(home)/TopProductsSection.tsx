import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '../(ui)/Card';
import Button from '../(ui)/Button';

const TopProducts: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t('home.topProducts')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example products */}
          <Card title="Product 1">
            <img src="/path/to/product1.jpg" alt="Product 1" className="w-full mb-4" />
            <p>Description of Product 1</p>
            <Button>{t('common.viewMore')}</Button>
          </Card>
          <Card title="Product 2">
            <img src="/path/to/product2.jpg" alt="Product 2" className="w-full mb-4" />
            <p>Description of Product 2</p>
            <Button>{t('common.viewMore')}</Button>
          </Card>
          {/* Add more products here */}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
