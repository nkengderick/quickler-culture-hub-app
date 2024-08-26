import React from 'react';
import { useTranslations } from 'next-intl';

interface SpecialOfferCardProps {
  imageUrl: string;
  name: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  reviewCount: number;
  available: number;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({
  imageUrl,
  name,
  originalPrice,
  discountPrice,
  rating,
  reviewCount,
  available
}) => {
  const t = useTranslations();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <span className="text-yellow-500">{rating} ★</span>
          <span className="text-gray-600 ml-2">({reviewCount})</span>
        </div>
      </div>
      <div className="text-xl font-bold text-red-600 mb-2">{discountPrice}</div>
      <div className="text-sm text-gray-500 line-through mb-2">{originalPrice}</div>
      <div className="text-sm text-gray-500">{t('available')}: {available}</div>
    </div>
  );
};

export default SpecialOfferCard;
