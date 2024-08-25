import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ExploreCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ id, imageUrl, title, description, link }) => {
  const t = useTranslations('explore');

  return (
    <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Link href={link} legacyBehavior>
          <a className="text-primary mt-4 block">{`${t('explore')} ${title}`}</a>
        </Link>
      </div>
    </div>
  );
};

export default ExploreCard;
