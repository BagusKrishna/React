// context/LanguageContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'id' : 'en'));
  };

  const translations = {
    en: {
      title: 'Hands-on React Context',
      currentTheme: 'Current Theme',
      changeTheme: 'Change Theme',
      currentFontSize: 'Current Font Size',
      increaseFontSize: 'Increase Font Size',
      decreaseFontSize: 'Decrease Font Size',
      changeLanguage: 'Change Language',
    },
    id: {
      title: 'Praktik React Context',
      currentTheme: 'Tema Saat Ini',
      changeTheme: 'Ubah Tema',
      currentFontSize: 'Ukuran Font Saat Ini',
      increaseFontSize: 'Perbesar Ukuran Font',
      decreaseFontSize: 'Perkecil Ukuran Font',
      changeLanguage: 'Ubah Bahasa',
    },
  };

  const t = translations[language]; // Translator function based on current language

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
