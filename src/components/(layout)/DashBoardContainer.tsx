import React from 'react';
import { useTranslations } from 'next-intl';
import TabBar from '../(layout)/TabBar';
import Sidebar from './Sidebar';

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = useTranslations('layout');

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen">
      {/* Sidebar on the left */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content on the right */}
      <div className="flex flex-col">
        <main className="flex-1 p-4">{children}</main>
        <div className="md:hidden">
          <TabBar />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
