import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.recording.title'),
      description: t('services.recording.description'),
      icon: 'microphone' as IconName
    },
    {
      title: t('services.mixing.title'),
      description: t('services.mixing.description'),
      icon: 'sliders' as IconName
    },
    {
      title: t('services.mastering.title'),
      description: t('services.mastering.description'),
      icon: 'volume-high' as IconName
    },
    {
      title: t('services.production.title'),
      description: t('services.production.description'),
      icon: 'music' as IconName
    },
    {
      title: t('services.coaching.title'),
      description: t('services.coaching.description'),
      icon: 'broadcast-tower' as IconName
    },
    {
      title: t('services.live.title'),
      description: t('services.live.description'),
      icon: 'video' as IconName
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
                <FontAwesomeIcon icon={service.icon} />
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