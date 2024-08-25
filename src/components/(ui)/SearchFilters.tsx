"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import SearchBar from './SearchBar';

const SearchFilters: React.FC = () => {
  const t = useTranslations('searchFilters');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <div className="bg-background border border-border rounded-lg shadow-md p-4 text-foreground">
      <SearchBar onSearch={handleSearch} />
      <h2 className="text-lg font-semibold mb-4">{t('filtersTitle')}</h2>
      <div className="mb-4">
        <label className="block">{t('categoryLabel')}</label>
        <select className="mt-1 block w-full border border-border rounded-lg p-2 bg-background text-foreground">
          <option value="all">{t('categories.all')}</option>
          <option value="art">{t('categories.art')}</option>
          <option value="music">{t('categories.music')}</option>
          <option value="literature">{t('categories.literature')}</option>
          <option value="crafts">{t('categories.crafts')}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block">{t('priceRangeLabel')}</label>
        <input type="range" min="0" max="1000" className="w-full mt-1 bg-muted text-foreground" />
      </div>
      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg">
        {t('applyFiltersButton')}
      </button>
    </div>
  );
};

export default SearchFilters;
