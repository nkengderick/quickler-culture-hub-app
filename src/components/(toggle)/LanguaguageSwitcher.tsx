// components/LanguageSwitcher.tsx
'use client'; // Ensure the component is rendered on the client-side

import { useRouter } from 'next/router'; // Correct import from 'next/router'
import { useTranslations } from 'next-intl';

const LanguageSwitcher = () => {
  const router = useRouter(); // Correctly use the router hook
  const { locale, asPath } = router; // Use locale and asPath from the router
  const t = useTranslations();

  const handleChangeLanguage = (newLocale: string) => {
    // Navigate to the current path with the new locale
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>Français</button>
      {/* Add more languages as needed */}
    </div>
  );
};

export default LanguageSwitcher;
