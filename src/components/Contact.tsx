import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
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
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to create something amazing? Let's start the conversation.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Studio Location</h4>
                <p>123 Music Street<br />Sound City, SC 12345</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>hello@lab73studio.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h4>Studio Hours</h4>
                <p>Mon - Fri: 9:00 AM - 10:00 PM<br />
                   Sat - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
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
                <option value="">Select a Service</option>
                <option value="recording">Recording</option>
                <option value="mixing">Mixing</option>
                <option value="mastering">Mastering</option>
                <option value="production">Production</option>
                <option value="coaching">Vocal Coaching</option>
                <option value="live">Live Sessions</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;