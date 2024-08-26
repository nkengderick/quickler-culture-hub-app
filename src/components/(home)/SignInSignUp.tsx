import React from 'react';
import { useTranslations } from 'next-intl';

const SubscribeSection: React.FC = () => {
  const t = useTranslations('subscribe');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">{t('title')}</h3>
          <p className="text-gray-600 mb-6">{t('description')}</p>
          <form className="flex">
            <input
              type="email"
              placeholder={t('placeholder')}
              className="p-3 rounded-l-lg border border-gray-300"
            />
            <button className="bg-red-500 text-white p-3 rounded-r-lg">
              {t('subscribe')}
            </button>
          </form>
        </div>
        <div className="flex space-x-4">
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
          <a href="#"><img src="/icons/telegram.svg" alt="Telegram" /></a>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
