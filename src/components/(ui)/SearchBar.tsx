"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const t = useTranslations('searchFilters');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).search.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-4">
      <input
        type="text"
        name="search"
        placeholder={t('searchPlaceholder')}
        className="border border-border rounded-l-lg p-2 flex-grow text-foreground bg-background"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground rounded-r-lg px-4 py-2"
      >
        {t('applyFiltersButton')}
      </button>
    </form>
  );
};

export default SearchBar;
