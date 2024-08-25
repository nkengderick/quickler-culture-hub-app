import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '../(ui)/Card';

const BrowseCategories: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t('home.browseCategories')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example categories */}
          <Card title="Art">
            <p>Explore artistic creations.</p>
          </Card>
          <Card title="Music">
            <p>Discover new music.</p>
          </Card>
          <Card title="Literature">
            <p>Find great reads.</p>
          </Card>
          <Card title="Crafts">
            <p>Shop handmade crafts.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
