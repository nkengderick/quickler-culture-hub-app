"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();

  // Define the sidebar items
  const sidebarItems = {
    home: {
      name: t('sidebar.home'),
      icon: faHome,
      link: '/'
    },
    explore: {
      name: t('sidebar.explore'),
      icon: faCompass,
      link: '/explore'
    },
    marketplace: {
      name: t('sidebar.marketplace'),
      icon: faStore,
      link: '/marketplace'
    },
    profile: {
      name: t('sidebar.profile'),
      icon: faUser,
      link: '/profile'
    }
  };

  return (
    <div className="bg-background border-r border-border hidden md:block">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">{t('sidebar.title')}</h2>
        <ul>
          {Object.entries(sidebarItems).map(([key, { name, icon, link }]) => (
            <li key={key}>
              <button
                onClick={() => router.push(link)}
                className="flex items-center text-sm py-2 hover:bg-muted rounded-md w-full text-foreground"
              >
                <FontAwesomeIcon icon={icon} className="mr-3 text-lg" />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
