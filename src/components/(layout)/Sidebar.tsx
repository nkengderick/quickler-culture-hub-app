"use client";
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
    <div className="bg-background border-r border-border hidden md:block h-screen">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-6 text-foreground">{t('sidebar.title')}</h2>
        <ul className="grid gap-4">
          {Object.entries(sidebarItems).map(([key, { name, icon, link }]) => (
            <li key={key}>
              <button
                onClick={() => router.push(link)}
                className="grid grid-cols-[auto_1fr] items-center gap-3 text-sm py-3 px-4 hover:text-muted rounded-md w-full text-foreground transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} className="text-lg" />
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
