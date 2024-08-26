"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaStar } from 'react-icons/fa';
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

const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, name, price, rating = 0, reviewCount = 0 }) => {
    const t = useTranslations();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden flex p-4">
            {/* Product Image */}
            <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-md mr-4" />

            {/* Product Details */}
            <div className="flex flex-col justify-between">
                <div>
                    {/* Rating */}
                    <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} color={i < rating ? "#f5c518" : "#e4e5e9"} />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{reviewCount}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-md font-semibold">{name}</h3>
                </div>

                {/* Price */}
                <p className="text-xl font-bold mt-2">{price}</p>

                {/* View Details Link */}
                <div onClick={openModal}>
                    <a className="text-blue-500 mt-4 block">{t('productCard.viewDetails')}</a>
                </div>
            </div>
            {isModalOpen && (
                <ProductModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    product={{ id, imageUrl, name, price, description: "", rating, reviewCount }}
                />
            )}
        </div>
    );
};

export default ProductCard;
