"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../(ui)/Button';
import { useRouter } from 'next/navigation';

const SignUpForm: React.FC = () => {
  const t = useTranslations();
  const [userType, setUserType] = useState<'creator' | 'customer' | 'institution'>('creator');
  const [step, setStep] = useState(1);
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle final form submission
      console.log('Form submitted');
      router.push('/marketplace')
    }
  };

  const renderStep1 = () => (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">{t('signup.name')}</label>
        <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">{t('signup.email')}</label>
        <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-2">{t('signup.password')}</label>
        <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">{t('signup.userType')}</p>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" value="creator" checked={userType === 'creator'} onChange={() => setUserType('creator')} />
            <span className="ml-2">{t('signup.creator')}</span>
          </label>
          <label className="flex items-center">
            <input type="radio" value="customer" checked={userType === 'customer'} onChange={() => setUserType('customer')} />
            <span className="ml-2">{t('signup.customer')}</span>
          </label>
          <label className="flex items-center">
            <input type="radio" value="institution" checked={userType === 'institution'} onChange={() => setUserType('institution')} />
            <span className="ml-2">{t('signup.institution')}</span>
          </label>
        </div>
      </div>
    </>
  );

  const renderStep2 = () => {
    switch (userType) {
      case 'creator':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium mb-2">{t('signup.step2.creator.bio')}</label>
              <textarea id="bio" name="bio" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="portfolio" className="block text-sm font-medium mb-2">{t('signup.step2.creator.portfolio')}</label>
              <input type="url" id="portfolio" name="portfolio" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="genres" className="block text-sm font-medium mb-2">{t('signup.step2.creator.genres')}</label>
              <input type="text" id="genres" name="genres" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </>
        );
      case 'customer':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="preferences" className="block text-sm font-medium mb-2">{t('signup.step2.customer.preferences')}</label>
              <input type="text" id="preferences" name="preferences" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="interests" className="block text-sm font-medium mb-2">{t('signup.step2.customer.interests')}</label>
              <input type="text" id="interests" name="interests" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </>
        );
      case 'institution':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="organizationName" className="block text-sm font-medium mb-2">{t('signup.step2.institution.organizationName')}</label>
              <input type="text" id="organizationName" name="organizationName" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">{t('signup.step2.institution.contactPerson')}</label>
              <input type="text" id="contactPerson" name="contactPerson" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="website" className="block text-sm font-medium mb-2">{t('signup.step2.institution.website')}</label>
              <input type="url" id="website" name="website" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">
        {step === 1 ? t('signup.title') : t(`signup.step2.${userType}.title`)}
      </h2>
      
      {step === 1 ? renderStep1() : renderStep2()}
      
      <Button type="submit">
        {step === 1 ? t('signup.submit') : t(`signup.step2.${userType}.submit`)}
      </Button>
    </form>
  );
};

export default SignUpForm;
