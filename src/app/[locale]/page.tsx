import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from '@/components/(home)/HeroSection';
import BrowseCategories from '@/components/(home)/BrowseSection';
import TopProducts from '@/components/(home)/TopProductsSection';
import SignInSignUp from '@/components/(home)/SignInSignUp';
import Header from '@/components/(layout)/Header';
import Footer from '@/components/(layout)/Footer';
import TrendingProducts from '@/components/(home)/TrendingProducts';
import Banner from '@/components/(home)/Banner';
import SpecialOffers from '@/components/(home)/SpecialOffers';
import PartnersSection from '@/components/(home)/Partners';
import ThreeDModelViewer from '@/components/ThreeDModelViewer';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <Header />
      <main>
      <ThreeDModelViewer modelUrl="/threed/one.glb" />
        <HeroSection />
        <BrowseCategories />
        <TopProducts />
        <TrendingProducts />
        <Banner />
        <SpecialOffers />
        <PartnersSection />
        <SignInSignUp />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
