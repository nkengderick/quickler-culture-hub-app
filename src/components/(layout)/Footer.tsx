import React from 'react';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">{t('company.title')}</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('company.link1')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('company.link2')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('company.link3')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('company.link4')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('company.link5')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('account.title')}</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link1')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link2')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link3')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link4')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link5')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('account.link6')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('customerService.title')}</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link1')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link2')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link3')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link4')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link5')}</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">{t('customerService.link6')}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
