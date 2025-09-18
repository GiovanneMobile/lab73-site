import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>{t('contact.info.location.title')}</h4>
                <p dangerouslySetInnerHTML={{ __html: t('contact.info.location.address') }} />
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div className="contact-details">
                <h4>{t('contact.info.phone.title')}</h4>
                <p>{t('contact.info.phone.number')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-details">
                <h4>{t('contact.info.email.title')}</h4>
                <p>{t('contact.info.email.address')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-details">
                <h4>{t('contact.info.hours.title')}</h4>
                <p>{t('contact.info.hours.weekdays')}<br />
                   {t('contact.info.hours.weekends')}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.form.service')}</option>
                <option value="recording">{t('contact.form.service.recording')}</option>
                <option value="mixing">{t('contact.form.service.mixing')}</option>
                <option value="mastering">{t('contact.form.service.mastering')}</option>
                <option value="production">{t('contact.form.service.production')}</option>
                <option value="coaching">{t('contact.form.service.coaching')}</option>
                <option value="live">{t('contact.form.service.live')}</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-full">
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;