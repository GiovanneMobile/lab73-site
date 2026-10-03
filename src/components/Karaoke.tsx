import React from 'react';
import { karaokeConfig } from '../config/karaoke';
import { siteConfig } from '../config/site';

const MicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
  </svg>
);

const PeopleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const BeerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 13c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-3zm-5 6H5V5h10v14zm3-2h-1v-4h1v4z" />
  </svg>
);

const Karaoke: React.FC = () => {
  const { sessionPricePerHour, beerPrice, maxPeople, tagline, cards, photos } =
    karaokeConfig;

  const karaokeWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('QUERO SOLTAR A VOZ NO KARAOKÊ')}`;

  const rotations = ['-rotate-[3deg]', 'rotate-[2deg]', '-rotate-[2deg]'];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" id="karaoke">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-script text-6xl md:text-8xl text-white rotate-[1deg] leading-none mb-4">
            SESSÃO DE KARAOKÊ
          </h2>
          <p className="font-hand text-2xl md:text-3xl text-studioOrange italic max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="tape-piece -top-4 left-1/4 rotate-12 opacity-70" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {/* Session price */}
          <div className="torn-paper torn-edge-aggressive notebook-paper p-8 rotate-[-2deg] hover:rotate-0 transition-transform relative flex flex-col justify-between shadow-2xl">
            <div className="tape-piece -top-4 left-6 rotate-[-15deg] scale-75 opacity-80" />
            <div>
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-2 mb-4">
                <span className="font-marker text-sm uppercase text-black/60 tracking-wider">
                  {cards.session.badge}
                </span>
                <MicIcon className="w-7 h-7 text-studioOrange" />
              </div>
              <h3 className="font-marker text-2xl text-black mb-2">{cards.session.title}</h3>
              <div className="my-4">
                <div className="font-marker text-5xl text-studioOrange rotate-[-3deg] inline-block bg-yellow-200 px-3 py-1 border-2 border-black/20">
                  R$ {sessionPricePerHour},00
                </div>
                <div className="font-hand text-xl text-black/70 mt-2">{cards.session.subtitle}</div>
              </div>
              <p className="font-hand text-lg text-black/80 leading-relaxed">
                {cards.session.description}
              </p>
              {cards.session.alert && (
                <div className="mt-4 bg-red-600 text-white font-marker p-2 text-center text-sm border-2 border-black shadow-sm transform -rotate-1">
                  {cards.session.alert}
                </div>
              )}
            </div>
          </div>

          {/* Capacity */}
          <div className="torn-paper torn-edge-aggressive bg-yellow-100 p-8 rotate-[2deg] hover:rotate-0 transition-transform relative flex flex-col justify-between shadow-2xl">
            <div className="tape-piece -top-4 right-8 rotate-[20deg] scale-75 opacity-80" />
            <div>
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-2 mb-4">
                <span className="font-marker text-sm uppercase text-black/60 tracking-wider">
                  {cards.capacity.badge}
                </span>
                <PeopleIcon className="w-7 h-7 text-studioOrange" />
              </div>
              <h3 className="font-marker text-2xl text-black mb-2">{cards.capacity.title}</h3>
              <div className="my-4">
                <div className="font-marker text-4xl text-black rotate-[2deg] inline-block bg-white px-3 py-2 border-2 border-black shadow-md">
                  Máximo de {maxPeople} pessoas
                </div>
                <div className="font-hand text-xl text-black/70 mt-2">
                  {cards.capacity.subtitle}
                </div>
              </div>
              <p className="font-hand text-lg text-black/80 leading-relaxed">
                {cards.capacity.description}
              </p>
              {cards.capacity.alert && (
                <div className="mt-4 bg-red-600 text-white font-marker p-2 text-center text-sm border-2 border-black shadow-sm transform rotate-1">
                  {cards.capacity.alert}
                </div>
              )}
            </div>
          </div>

          {/* Beer price */}
          <div className="torn-paper torn-edge-aggressive p-8 rotate-[-1deg] hover:rotate-0 transition-transform relative flex flex-col justify-between shadow-2xl">
            <div className="tape-piece -top-4 left-1/3 rotate-[-8deg] scale-75 opacity-80" />
            <div>
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-2 mb-4">
                <span className="font-marker text-sm uppercase text-black/60 tracking-wider">
                  {cards.beer.badge}
                </span>
                <BeerIcon className="w-7 h-7 text-studioOrange" />
              </div>
              <h3 className="font-marker text-2xl text-black mb-2">{cards.beer.title}</h3>
              <div className="my-4">
                <div className="font-marker text-5xl text-studioOrange rotate-[-2deg] inline-block bg-yellow-200 px-3 py-1 border border-black/20">
                  R$ {beerPrice},00
                </div>
                <div className="font-hand text-xl text-black/70 mt-2">{cards.beer.subtitle}</div>
              </div>
              <p className="font-hand text-lg text-black/80 leading-relaxed">
                {cards.beer.description}
              </p>
              {cards.beer.alert && (
                <div className="mt-4 bg-red-600 text-white font-marker p-2 text-center text-sm border-2 border-black shadow-sm transform -rotate-1">
                  {cards.beer.alert}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Polaroid gallery */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-studioOrange animate-pulse" />
              <h3 className="font-marker text-3xl md:text-4xl text-white rotate-[-1deg]">
                O QUE TE ESPERA
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`bg-white text-black p-4 pb-6 shadow-2xl ${rotations[i]} hover:rotate-0 hover:scale-105 transition-transform relative border-2 border-black`}
              >
                <div className="tape-piece -top-4 left-1/3 rotate-[-12deg] opacity-75" />
                <div className="overflow-hidden border-2 border-black bg-black mb-3">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full aspect-[4/3] object-cover brightness-95 contrast-[1.1]"
                  />
                </div>
                <p className="font-marker text-center text-lg text-black">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-white/5 border-2 border-dashed border-white/30 p-6 rounded-2xl rotate-[-1deg] shadow-xl relative">
            <div className="tape-piece -top-3 left-1/2 -translate-x-1/2 rotate-1 scale-75 opacity-80" />
            <p className="font-hand text-2xl text-white mb-6 leading-snug">
              Garanta sua sala privativa com a galera. Horários concorridos nas sextas e sábados!
            </p>
            <a
              href={karaokeWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-studioOrange text-black font-marker text-3xl px-8 py-4 inline-flex items-center gap-3 rotate-[-1deg] hover:scale-105 transition-transform shadow-xl border-2 border-black uppercase"
            >
              SOLTAR A VOZ{' '}
              <span className="material-symbols-outlined !text-3xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Karaoke;
