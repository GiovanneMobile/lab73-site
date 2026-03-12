import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    service: 'ENSAIAR',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    const templateParams = {
      ...formData,
      to_name: 'Lab 73 Studio'
    };

    emailjs.send('service_k7eumnn', 'template_dspowka', templateParams, 'W9at6a7npiud_zM9z')
      .then(() => {
        setStatus('SUCCESS');
        setFormData({ from_name: '', from_email: '', service: 'ENSAIAR', message: '' });
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('ERROR');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="w-full border-4 border-dashed border-white/20 p-8 md:p-16 rounded-[40px] relative bg-white/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-marker text-xl text-white/60 text-left uppercase">Como te chamam?</label>
              <input
                className="bg-transparent border-b-2 border-white/30 p-2 font-hand text-2xl focus:outline-none focus:border-studioOrange text-white placeholder-white/20"
                name="from_name"
                placeholder="Seu nome..."
                required
                type="text"
                value={formData.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-marker text-xl text-white/60 text-left uppercase">Seu e-mail</label>
              <input
                className="bg-transparent border-b-2 border-white/30 p-2 font-hand text-2xl focus:outline-none focus:border-studioOrange text-white placeholder-white/20"
                name="from_email"
                placeholder="voce@exemplo.com"
                required
                type="email"
                value={formData.from_email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-marker text-xl text-white/60 text-left uppercase">O que tu quer?</label>
              <select
                className="bg-transparent border-b-2 border-white/30 p-2 font-hand text-2xl focus:outline-none focus:border-studioOrange text-white cursor-pointer appearance-none"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option className="bg-zinc-900">ENSAIAR</option>
                <option className="bg-zinc-900">GRAVAR</option>
                <option className="bg-zinc-900">MIX / MASTER</option>
                <option className="bg-zinc-900">TÁ MOLE (OUTROS)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-marker text-xl text-white/60 text-left uppercase">Conta mais...</label>
              <textarea
                className="bg-transparent border-b-2 border-white/30 p-2 font-hand text-2xl focus:outline-none focus:border-studioOrange h-32 text-white placeholder-white/20"
                name="message"
                placeholder="Diz aí o que você precisa..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button
                className={`w-full font-marker text-2xl md:text-4xl py-4 md:py-6 hover:scale-105 transition-transform flex items-center justify-center gap-4 shadow-xl border-2 border-black ${status === 'SUCCESS' ? 'bg-green-500' : status === 'ERROR' ? 'bg-red-500' : 'bg-studioOrange'
                  } text-black`}
                disabled={status === 'SENDING'}
                type="submit"
              >
                {status === 'SENDING' ? 'ENVIANDO...' : status === 'SUCCESS' ? 'VALEU! ENVIADO!' : status === 'ERROR' ? 'OPS! ERRO...' : 'ENVIAR'}
                <span className="material-symbols-outlined !text-4xl">
                  {status === 'SUCCESS' ? 'check_circle' : status === 'ERROR' ? 'error' : 'send'}
                </span>
              </button>
            </div>
          </form>
          <span className="material-symbols-outlined absolute bottom-5 right-10 !text-8xl text-white/5 -rotate-12 pointer-events-none">edit_note</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
          <div className="space-y-2">
            <h4 className="font-marker text-2xl text-studioOrange uppercase tracking-widest">Onde?</h4>
            <a href={import.meta.env.VITE_GOOGLE_MAPS_URL || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-studioOrange transition-colors">
              <p className="font-hand text-2xl md:text-3xl max-w-sm">{import.meta.env.VITE_STUDIO_ADDRESS || "Rua do Som, 73, Bairro Áudio, São Paulo, SP"}</p>
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="font-marker text-2xl text-studioOrange uppercase tracking-widest">Email</h4>
            <a href={`mailto:${import.meta.env.VITE_STUDIO_EMAIL}`} className="hover:text-studioOrange transition-colors">
              <p className="font-hand text-2xl md:text-3xl">{import.meta.env.VITE_STUDIO_EMAIL || "#"}</p>
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full mt-8 border-8 border-white/10 rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3861.944208226019!2d-39.03504108516086!3d-14.82810408975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ5JzQxLjIiUyAzOcKwMDInMDAuNCJX!5e0!3m2!1sen!2sbr!4v1710188200000!5m2!1sen!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

      </div>
    </section>

  );
};

export default Contact;
