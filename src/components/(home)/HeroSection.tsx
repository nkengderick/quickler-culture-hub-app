import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../(ui)/Button';

const HeroSection: React.FC = () => {
  const t = useTranslations("home");

  return (
    <section className="text-center py-16 bg-gray-200">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
        <p className="text-xl mb-6">{t('heroSubtitle')}</p>
        <Button>{t('ctaButton')}</Button>
      </div>
    </section>
  );
};

export default HeroSection;
