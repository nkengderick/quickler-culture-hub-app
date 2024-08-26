import React from 'react';
import { useTranslations } from 'next-intl';

const PartnersSection: React.FC = () => {
  const t = useTranslations('partners');

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto flex justify-between items-center space-x-4">
        <img src={t('partner1')} alt="Partner 1" className="h-12 mx-4" />
        <img src={t('partner2')} alt="Partner 2" className="h-12 mx-4" />
        <img src={t('partner3')} alt="Partner 3" className="h-12 mx-4" />
        <img src={t('partner4')} alt="Partner 4" className="h-12 mx-4" />
        <img src={t('partner5')} alt="Partner 5" className="h-12 mx-4" />
        <a href="#" className="text-sm text-gray-700 font-semibold text-lg">{t('viewAll')}</a>
      </div>
    </section>
  );
};

export default PartnersSection;
