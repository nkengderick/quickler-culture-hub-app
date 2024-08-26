import React from 'react';
import { useTranslations } from 'next-intl';

const Banner: React.FC = () => {
  const t = useTranslations('banner');

  return (
    <section className="bg-green-100 p-6 rounded-lg flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-4xl font-bold text-green-600">
          {t('discount')}
        </div>
        <div className="text-sm text-green-800 ml-2">
          {t('off')}
        </div>
      </div>
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold text-green-800">{t('title')}</h2>
        <p className="text-sm text-green-600">{t('subtitle')}</p>
      </div>
      <div className="ml-6">
        <img
          src="https://picsum.photos/200/200" 
          alt={t('altText')}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
