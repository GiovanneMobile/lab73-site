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
        <span className="flag-fallback">BR</span>
      </button>
      <button
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        title="English (United States)"
        aria-label="Change language to English"
      >
        <span className="flag-fallback">EN</span>
      </button>
    </div>
  );
};

export default LanguageSelector;