import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-selector">
      <button
        className={`language-option ${language === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
        title="Português (Brasil)"
        aria-label="Alterar idioma para Português"
      >
        🇧🇷
      </button>
      <button
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        title="English (United States)"
        aria-label="Change language to English"
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageSelector;