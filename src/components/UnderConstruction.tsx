import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useLanguage } from '../contexts/LanguageContext';
import Contact from './Contact';
import LanguageSelector from './LanguageSelector';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="under-construction">
      <div className="construction-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Lab 73</h1>
            </div>
            <div className="header-actions">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      <div className="construction-content">
        <div className="container">
          <div className="construction-message">
            <div className="construction-icon">
              <FontAwesomeIcon icon={'cog' as IconName} />
            </div>
            <h1>{t('construction.title')}</h1>
            <p className="construction-description">
              {t('construction.message')}
            </p>
            <p className="construction-contact-text">
              {t('construction.contact')}
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default UnderConstruction;