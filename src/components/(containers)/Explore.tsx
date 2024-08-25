import React from 'react';
import { useTranslations } from 'next-intl';
import ExploreCard from '../(cards)/ExploreCard';

const Explore: React.FC = () => {
  const t = useTranslations('explore');

  // Sample data for explore items
  const exploreItems = [
    {
      id: '1',
      imageUrl: '/images/art.jpg',
      title: t('art.title'),
      description: t('art.description'),
      link: '/category/art',
    },
    {
      id: '2',
      imageUrl: '/images/music.jpg',
      title: t('music.title'),
      description: t('music.description'),
      link: '/category/music',
    },
    {
      id: '3',
      imageUrl: '/images/literature.jpg',
      title: t('literature.title'),
      description: t('literature.description'),
      link: '/category/literature',
    },
    {
      id: '4',
      imageUrl: '/images/crafts.jpg',
      title: t('crafts.title'),
      description: t('crafts.description'),
      link: '/category/crafts',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-foreground">{t('title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exploreItems.map((item) => (
          <ExploreCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
