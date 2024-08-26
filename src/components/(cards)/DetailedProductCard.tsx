"use client"
import React, { useState } from 'react';
import Card from '../(ui)/Card';
import { useTranslations } from 'next-intl';
import ProductModal from '../(ui)/ProductModal';

interface ProductCardProps {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  rating?: number;
  reviewCount?: number;
}

const DProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, name, price, description, rating, reviewCount }) => {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-muted">{description}</p>
          <p className="text-xl font-bold mt-2">{price}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{rating} ★</span>
            <span className="ml-2 text-sm text-gray-600">({reviewCount} reviews)</span>
          </div>
          <button onClick={openModal} className="text-blue-500 mt-4 block">
            {t('productCard.viewDetails')}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          product={{ id, imageUrl, name, price, description, rating, reviewCount }}
        />
      )}
    </Card>
  );
};

export default DProductCard;
