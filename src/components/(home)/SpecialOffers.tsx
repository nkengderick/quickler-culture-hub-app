import React from 'react';
import { useTranslations } from 'next-intl';
import SpecialOfferCard from '../(cards)/SpeciaOfferCard';

const SpecialOffers: React.FC = () => {
  const t = useTranslations('specialOffers');

  // Sample data to simulate translation
  const specialOffersData = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/100/100?random=1",
      name: "Xiaomi Wireless Buds Pro",
      originalPrice: "$156.00",
      discountPrice: "$129.99",
      rating: 4.5,
      reviewCount: 14,
      available: 112
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/100/100?random=2",
      name: "Smart Watch Series 7, White",
      originalPrice: "$468.00",
      discountPrice: "$429.00",
      rating: 4.8,
      reviewCount: 142,
      available: 45
    },
    // Add more products here
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <a href="#" className="text-blue-600">{t('viewAll')}</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {specialOffersData.map((product) => (
            <SpecialOfferCard
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              originalPrice={product.originalPrice}
              discountPrice={product.discountPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              available={product.available}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
