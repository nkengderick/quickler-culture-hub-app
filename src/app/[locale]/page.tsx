import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from '@/components/(home)/HeroSection';
import BrowseCategories from '@/components/(home)/BrowseSection';
import TopProducts from '@/components/(home)/TopProductsSection';
import SignInSignUp from '@/components/(home)/SignInSignUp';
import Header from '@/components/(layout)/Header';
import Footer from '@/components/(layout)/Footer';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <BrowseCategories />
        <TopProducts />
        <SignInSignUp />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
