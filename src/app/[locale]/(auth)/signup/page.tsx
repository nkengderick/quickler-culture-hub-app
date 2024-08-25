import React from 'react';
import { useTranslations } from 'next-intl';
import SignUpForm from '@/components/(form)/SignUpForm';

const SignUpPage: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <main className="py-16">
        <div className="container mx-auto">
          <SignUpForm />
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
