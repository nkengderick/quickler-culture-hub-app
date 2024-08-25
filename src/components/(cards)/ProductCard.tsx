import React from 'react';
import Link from 'next/link';
import Card from '../(ui)/Card';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, name, price, description }) => {
    const t = useTranslations()
    return (
        <Card>
            <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden">
                <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-muted">{description}</p>
                    <p className="text-xl font-bold mt-2">{price}</p>
                    <Link href={`/product/${id}`} legacyBehavior>
                        <a className="text-blue-500 mt-4 block">{t('productCard.viewDetails')}</a>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;
