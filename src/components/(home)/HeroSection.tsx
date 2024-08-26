import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../(ui)/Button';

const HeroSection: React.FC = () => {
  const t = useTranslations("home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16 bg-gray-100">
      <div className="p-8 text-left">
        <p className="text-sm text-gray-600 mb-2">{t('heroSubtitle')}</p>
        <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
        <Button>{t('ctaButton')}</Button>
      </div>
      <div className="p-8">
        <img 
          src="https://picsum.photos/id/1/100/100" 
          alt="Cultural clothes" 
          className="rounded-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
