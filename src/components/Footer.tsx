import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>LAB 73</h3>
              <p>{t('footer.logo.subtitle')}</p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
                <FontAwesomeIcon icon={['fab', 'soundcloud']} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <FontAwesomeIcon icon={['fab', 'spotify']} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><button onClick={() => scrollToSection('hero')}>{t('nav.home')}</button></li>
              <li><button onClick={() => scrollToSection('services')}>{t('nav.services')}</button></li>
              <li><button onClick={() => scrollToSection('about')}>{t('nav.about')}</button></li>
              <li><button onClick={() => scrollToSection('contact')}>{t('nav.contact')}</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><button type="button">{t('services.recording.title')}</button></li>
              <li><button type="button">{t('services.mixing.title')}</button></li>
              <li><button type="button">{t('services.mastering.title')}</button></li>
              <li><button type="button">{t('services.production.title')}</button></li>
            </ul>
          </div>

          {/* Contact info removed during construction phase */}
          {/*
          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={'map-marker-alt' as IconName} /> {t('footer.address')}
              </p>
              <p>
                <FontAwesomeIcon icon={'phone' as IconName} /> {t('contact.info.phone.number')}
              </p>
              <p>
                <FontAwesomeIcon icon={'envelope' as IconName} /> {t('contact.info.email.address')}
              </p>
            </div>
          </div>
          */}
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
            <div className="footer-bottom-links">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">{t('footer.privacy')}</a>
              <a href="/terms" target="_blank" rel="noopener noreferrer">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;