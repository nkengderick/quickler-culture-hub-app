import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '../(ui)/Button';

const SignInSignUp: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">{t('home.signInSignUp')}</h2>
      <div className="flex justify-center space-x-4">
        <Button>{t('common.learnMore')}</Button>
        <Button>{t('common.buyNow')}</Button>
      </div>
    </section>
  );
};

export default SignInSignUp;
