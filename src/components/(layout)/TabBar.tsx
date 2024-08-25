"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

const TabBar: React.FC = () => {
  const t = useTranslations('tabBar');
  const router = useRouter();

  // Define the tab bar items
  const tabBarItems = {
    home: {
      name: t('home'),
      icon: faHome,
      link: '/'
    },
    explore: {
      name: t('explore'),
      icon: faCompass,
      link: '/explore'
    },
    marketplace: {
      name: t('marketplace'),
      icon: faStore,
      link: '/marketplace'
    },
    profile: {
      name: t('profile'),
      icon: faUser,
      link: '/profile'
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden">
      <div className="grid grid-cols-4 gap-2 p-2 bg-background">
        {Object.entries(tabBarItems).map(([key, { name, icon, link }]) => (
          <button
            key={key}
            onClick={() => router.push(link)}
            className="grid place-items-center text-sm text-foreground hover:text-muted transition-colors duration-200"
          >
            <FontAwesomeIcon icon={icon} className="text-2xl" />
            <span className="mt-1">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
