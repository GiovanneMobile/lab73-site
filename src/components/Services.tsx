import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.recording.title'),
      description: t('services.recording.description'),
      icon: '♪' // Musical note for recording
    },
    {
      title: t('services.mixing.title'),
      description: t('services.mixing.description'),
      icon: '⚡' // Lightning for mixing power
    },
    {
      title: t('services.mastering.title'),
      description: t('services.mastering.description'),
      icon: '♫' // Musical notes for mastering
    },
    {
      title: t('services.production.title'),
      description: t('services.production.description'),
      icon: '🎵' // Music note (keeping this as it renders well)
    },
    {
      title: t('services.coaching.title'),
      description: t('services.coaching.description'),
      icon: '●' // Simple circle for coaching/speaking
    },
    {
      title: t('services.live.title'),
      description: t('services.live.description'),
      icon: '▶' // Play button for live sessions
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;