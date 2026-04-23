import React, { useState } from 'react';

import Logo from './components/Logo';

import { headerPhrases } from './config/phrases';
import { visitedBands } from './config/bands';
import { servicesConfig } from './config/services';
import Pricing from './components/Pricing';
import UnderConstruction from './components/UnderConstruction';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './components/Gallery';
import { siteConfig } from './config/site';
import Calendar from './components/Calendar';
import ReviewRequest from './components/ReviewRequest';
import FeedbackCarousel from './components/FeedbackCarousel';
import heroImage from './assets/hero.png';

const App: React.FC = () => {
  const isUnderConstruction = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

  const randomPhrase = React.useMemo(() => {

    return headerPhrases[Math.floor(Math.random() * headerPhrases.length)];
  }, []);

  const shuffledBands = React.useMemo(() => {
    return [...visitedBands].sort(() => Math.random() - 0.5);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  return (

    <div className="antialiased selection:bg-studioOrange selection:text-black">
      <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="pointer-events-auto">
            <div className="bg-white text-black p-2 font-marker rotate-[-2deg] border-2 border-black shadow-xl scale-75 md:scale-100 origin-top-left transition-transform">
              <Logo gap="gap-4 md:gap-6" iconHeight="h-10 md:h-15" labHeight="h-6 md:h-10" />
              <div className="text-[12px] md:text-[18px] text-center mt-1 border-t border-black uppercase whitespace-pre-line leading-tight mx-auto">{randomPhrase}</div>
            </div>
          </div>

          <div className="pointer-events-auto flex flex-col items-end gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden bg-white text-black p-3 border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
            >
              <span className="material-symbols-outlined !text-4xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>

            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-2 lg:gap-4 items-end lg:items-center bg-black/90 lg:bg-transparent p-6 lg:p-0 border-2 border-white/20 lg:border-0 rounded-2xl backdrop-blur-md lg:backdrop-blur-none`}>
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[-3deg]" href="#about">Quem Somos</a>
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[2deg]" href="#services">O Que Rola</a>
              {siteConfig.features.showGallery && (
                <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[1deg]" href="#gallery">Fotos</a>
              )}
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[-1deg]" href="#pricing">Preço$</a>
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[3deg]" href="#calendar">Agenda</a>
              <a onClick={() => setIsMenuOpen(false)} className="bg-studioOrange text-black font-marker px-6 py-2 rotate-[-1deg] hover:scale-110 transition-transform shadow-lg border-2 border-black mt-4 lg:mt-0" href="#contact">RESERVA!</a>

            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" id="home">
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              className="w-full h-full object-cover opacity-40 grayscale"
              alt="Studio Atmosphere"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative w-full max-w-5xl z-10">
            <div className="absolute -top-20 -left-20 opacity-10 hidden lg:block">
              <span className="material-symbols-outlined !text-[300px] rotate-[-15deg]">music_note</span>
            </div>
            <div className="relative z-10 border-4 border-dashed border-white/20 p-12 mt-18 md:p-20 rounded-3xl bg-black/40 backdrop-blur-sm">
              <div className="tape-piece -top-6 left-1/4 rotate-6"></div>
              <div className="tape-piece -bottom-6 right-1/4 -rotate-3"></div>
              <h1 className="font-script text-5xl sm:text-7xl md:text-[9rem] leading-[0.8] text-center uppercase tracking-tighter mb-8">
                ELEVE SEU <br />
                <span className="text-studioOrange italic font-hand decoration-4 underline decoration-white/40">SOM</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
                <div className="flex-1">
                  <p className="font-hand text-xl sm:text-2xl md:text-3xl leading-snug">
                    Primeiro estúdio de ensaio da zona sul de Ilhéus, no coração da cidade. <br />
                    Escrito à mão, feito com a alma.
                  </p>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="relative w-64 h-64 flex flex-col items-center justify-center bg-zinc-900/50 rounded-lg border-2 border-white/10 rotate-3">
                    <span className="material-symbols-outlined !text-[120px] text-white/40">settings_input_component</span>
                    <div className="w-32 h-20 bg-zinc-800 border-2 border-white/20 mt-[-20px] rounded flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-studioOrange animate-pulse"></div>
                      <div className="w-16 h-1 bg-white/10 rounded"></div>
                    </div>
                    <p className="font-hand text-center mt-4 text-studioOrange">"Toca o som!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6" id="about">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="font-script text-5xl md:text-7xl text-studioOrange mb-8 rotate-[-2deg]">O que é o Lab 73?</div>
              <div className="space-y-6 text-2xl md:text-3xl font-hand">
                <p className="relative">
                  O Lab 73 não é só um estúdio, é um laboratório. É um santuário criativo feito por músicos e para músicos.
                  <span className="material-symbols-outlined absolute -right-8 top-0 text-white/20 !text-6xl">graphic_eq</span>
                </p>
                <p className="border-l-4 border-studioOrange pl-6 italic">
                  Um abrigo confortável para qualquer artista, do underground ao mainstream.
                </p>


                <div className="inline-block border-2 border-white/40 px-4 py-1 rotate-3 font-marker text-xl uppercase">Foco no Ensaio Musical</div>
              </div>
            </div>
            <div className="relative">
              <div className="torn-paper torn-edge-aggressive notebook-paper p-12 rotate-[-3deg] shadow-2xl">
                <div className="tape-piece -top-4 left-1/3 -rotate-12 opacity-80"></div>
                <img alt="Studio Gear" className="w-full grayscale brightness-90 border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-IUHJcDAo7DIGr32m9Ur4bouy3_J6Ypps2OosRWXhk3Tym7Exn5DVZGtmfNF4mMWzWrEJsM5G5aKqAMeh-fo2YpgWWZ6nJywWIswi-hld47gkJKOrvLDkv7MDlUULOIlqlJoKTsidYTb0i8I_x_OqqHXJLreDvibf6pOsr9POqyZg2eZsKLfmE6DqmrOyrMp8fSix1SXhyMIPprXTvbhfYNb6QRoiEe2w-Dyq5JGyYbkEtIItpZOUaiLwzTfvb5K9HbNGZsHxSrq" />
                <div className="font-hand text-black text-center mt-8 text-2xl font-bold">Nossa bagunça organizada</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-script text-6xl md:text-8xl inline-block border-b-8 border-studioOrange pb-4 rotate-1 text-center">O QUE ROLA</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesConfig.map((s, i) => {
                const isDisabled = (s.title === 'GRAVAÇÃO' && !siteConfig.features.showRecording) ||
                  (s.title === 'MIXAGEM' && !siteConfig.features.showMixing) ||
                  (s.title === 'MASTERIZAÇÃO' && !siteConfig.features.showMastering);

                return (
                  <div key={i} className={`relative transition-transform rotate-[${i % 2 === 0 ? '-2deg' : '3deg'}] hover:rotate-0 group ${isDisabled ? 'card-disabled' : ''}`}>
                    {i === 0 && <div className="tape-piece -top-4 -left-4 rotate-[-45deg] scale-75 z-20"></div>}
                    {i === 1 && <div className="tape-piece -top-4 right-0 rotate-[15deg] scale-75 z-20"></div>}
                    {i === 3 && <div className="tape-piece -bottom-4 left-1/4 rotate-2 scale-75 z-20"></div>}
                    <div className={`${s.dark ? 'bg-studioOrange text-black shadow-2xl' : 'torn-paper'} torn-edge-aggressive p-8 relative z-10 h-full`}>
                      <span className={`material-symbols-outlined !text-6xl ${s.dark ? '' : 'text-studioOrange'} mb-6`}>{s.icon}</span>
                      <h3 className="font-marker text-3xl mb-4">{s.title}</h3>
                      <p className="font-hand text-xl">{s.desc}</p>
                      <div className={`absolute bottom-4 right-4 font-marker text-4xl ${s.dark ? 'text-black/20' : 'text-black/10'}`}>{s.num}</div>
                      {isDisabled && (
                        <div className="coming-soon-overlay">
                          <div className="coming-soon-banner">EM BREVE</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </section>

        {/* Visited Bands Section */}
        <section className="py-16 md:py-32 overflow-hidden ">
          <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-32 relative z-10">
            <h2 className="font-script text-4xl md:text-8xl text-center">
              Quem já tocou por aqui...
            </h2>
          </div>

          <div className="relative flex items-center">
            <div className="scroll-infinite flex gap-2 md:gap-8">
              {[...shuffledBands, ...shuffledBands].map((band, i) => {
                const content = (
                  <div className={`flex flex-col items-center group transition-all duration-300 min-w-[200px] md:min-w-[200px] gap-3 md:gap-0 ${band.url ? 'cursor-pointer' : ''}`}>
                    <div className="relative flex items-center justify-center">
                      {band.image ? (
                        <div className="w-48 h-48 md:w-72 md:h-72 flex items-center justify-center relative bg-white/5 rounded-lg overflow-hidden border border-white/10">
                          <img
                            alt={band.name}
                            className="w-full h-full object-contain p-2 md:grayscale md:invert md:brightness-200 md:opacity-60 md:group-hover:filter-none md:group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 chalk-logo"
                            src={band.image}
                          />
                          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      ) : (
                        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white/5 rounded-lg border border-dashed border-white/20">
                          <span className="font-marker text-xl md:text-3xl text-white/30 md:group-hover:text-studioOrange md:group-hover:scale-110 transition-all tracking-tighter text-center px-2">
                            {band.name}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Name only visible on mobile (below logos) */}
                    <span className="md:hidden font-marker text-xl text-studioOrange text-center uppercase tracking-widest">
                      {band.name}
                    </span>
                  </div>
                );

                return band.url ? (
                  <a key={i} href={band.url} target="_blank" rel="noopener noreferrer" className="block no-underline pointer-events-auto">
                    {content}
                  </a>
                ) : (
                  <div key={i} className="block pointer-events-auto">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
          </div>
        </section>

        {/* Gallery Section */}
        {siteConfig.features.showGallery && (
          <Gallery />
        )}


        {/* Pricing Section */}
        <Pricing />


        {/* Calendar Section */}
        <section className="py-24 md:py-32 px-6" id="calendar">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-script text-6xl md:text-8xl inline-block border-b-8 border-studioOrange pb-4 rotate-1 text-center font-bold uppercase transition-transform hover:scale-105 duration-300">
                NOSSA AGENDA
              </h2>
            </div>

            <div className="relative">
              {/* Decorative tape for the calendar frame */}
              <div className="tape-piece -top-8 right-1/3 rotate-[8deg] z-20 opacity-70"></div>

              <div className="w-full border-8 border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a1a1a] p-1 md:p-3 relative z-10 transition-all duration-500 hover:border-studioOrange/30">
                <Calendar />
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="font-hand text-2xl md:text-3xl italic">
                * Agendamentos devem ser feitos com <span className="text-studioOrange">no mínimo 24 horas de antecedência</span> !
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 px-6" id="connect">
          <div className="max-w-4xl mx-auto">
            <ConnectWithUs />
          </div>
        </section>


        {/* Feedbacks Section */}
        {siteConfig.features.showFeedbacks && (
          <FeedbackCarousel />
        )}

        <ReviewRequest />

        {/* Contact Section */}
        <Contact />



      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
