import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from './components/Logo';
import { pricingPlans } from './config/pricing';
import { calendarConfig } from './config/calendar';
import { headerPhrases } from './config/phrases';

const App: React.FC = () => {
  const randomPhrase = React.useMemo(() => {
    return headerPhrases[Math.floor(Math.random() * headerPhrases.length)];
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    service: 'ENSAIAR',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="antialiased selection:bg-studioOrange selection:text-black">
      <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="pointer-events-auto">
            <div className="tape-piece -top-2 -left-4 rotate-[-12deg] opacity-60"></div>
            <div className="bg-white text-black p-2 font-marker rotate-[-2deg] border-2 border-black shadow-xl scale-75 md:scale-100 origin-top-left transition-transform">
              <Logo gap="gap-4 md:gap-6" iconHeight="h-10 md:h-15" labHeight="h-6 md:h-10" />
              <div className="text-[12px] md:text-[18px] text-center mt-1 border-t border-black uppercase truncate max-w-[150px] md:max-w-none mx-auto">{randomPhrase}</div>
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
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[-1deg]" href="#gallery">Fotos</a>
              <a onClick={() => setIsMenuOpen(false)} className="font-script text-white hover:text-studioOrange text-2xl px-3 py-1 rotate-[3deg]" href="#calendar">Agenda</a>
              <a onClick={() => setIsMenuOpen(false)} className="bg-studioOrange text-black font-marker px-6 py-2 rotate-[-1deg] hover:scale-110 transition-transform shadow-lg border-2 border-black mt-4 lg:mt-0" href="#contact">RESERVA!</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="min-h-screen flex items-center justify-center p-6" id="home">
          <div className="relative w-full max-w-5xl">
            <div className="absolute -top-20 -left-20 opacity-20 hidden lg:block">
              <span className="material-symbols-outlined !text-[300px] rotate-[-15deg]">music_note</span>
            </div>
            <div className="relative z-10 border-4 border-dashed border-white/20 p-12 md:p-20 rounded-3xl bg-black/40 backdrop-blur-sm">
              <div className="tape-piece -top-6 left-1/4 rotate-6"></div>
              <div className="tape-piece -bottom-6 right-1/4 -rotate-3"></div>
              <h1 className="font-script text-5xl sm:text-7xl md:text-[9rem] leading-[0.8] text-center uppercase tracking-tighter mb-8">
                ELEVE SEU <br />
                <span className="text-studioOrange italic font-hand decoration-4 underline decoration-white/40">SOM</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
                <div className="flex-1">
                  <p className="font-hand text-xl sm:text-2xl md:text-3xl leading-snug">
                    Ensaio Profissional, Gravação, Mixagem e Masterização no coração da cidade. Escrito à mão, feito com a alma.
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

        <section className="py-32 px-6" id="about">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="font-script text-5xl md:text-7xl text-studioOrange mb-8 rotate-[-2deg]">O que é o Lab 73?</div>
              <div className="space-y-6 text-2xl md:text-3xl font-hand">
                <p className="relative">
                  O Lab 73 é um santuário criativo para músicos, produtores e engenheiros de áudio.
                  <span className="material-symbols-outlined absolute -right-8 top-0 text-white/20 !text-6xl">graphic_eq</span>
                </p>
                <p className="border-l-4 border-studioOrange pl-6 italic">
                  Equilibrando tecnologia de ponta com uma vibe inspiradora de walkmans e fitas cassete.
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
              <div className="absolute -bottom-10 -right-4 bg-white text-black p-4 rotate-6 shadow-2xl border-2 border-black font-marker">
                <div className="text-6xl leading-none">10+</div>
                <div className="text-sm">anos de estrada</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-script text-6xl md:text-8xl inline-block border-b-8 border-studioOrange pb-4 rotate-1 text-center">O QUE ROLA</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'speaker', title: 'ENSAIO', desc: 'Salas tratadas acusticamente com backline profissional.', num: '01' },
                { icon: 'mic', title: 'GRAVAÇÃO', desc: 'Preamps e microfones de alta fidelidade para seu projeto.', num: '02', dark: true },
                { icon: 'instant_mix', title: 'MIXAGEM', desc: 'Equilibrando e aprimorando faixas para som comercial.', num: '03' },
                { icon: 'album', title: 'MASTERIZAÇÃO', desc: 'O polimento final para garantir que sua música soe bem.', num: '04' }
              ].map((s, i) => (
                <div key={i} className={`${s.dark ? 'bg-studioOrange text-black shadow-2xl' : 'torn-paper'} torn-edge-aggressive p-8 rotate-[${i % 2 === 0 ? '-2deg' : '3deg'}] hover:rotate-0 transition-transform relative`}>
                  {i === 0 && <div className="tape-piece -top-4 -left-4 rotate-[-45deg] scale-75"></div>}
                  {i === 1 && <div className="tape-piece -top-4 right-0 rotate-[15deg] scale-75"></div>}
                  {i === 3 && <div className="tape-piece -bottom-4 left-1/4 rotate-2 scale-75"></div>}
                  <span className={`material-symbols-outlined !text-6xl ${s.dark ? '' : 'text-studioOrange'} mb-6`}>{s.icon}</span>
                  <h3 className="font-marker text-3xl mb-4">{s.title}</h3>
                  <p className="font-hand text-xl">{s.desc}</p>
                  <div className={`absolute bottom-4 right-4 font-marker text-4xl ${s.dark ? 'text-black/20' : 'text-black/10'}`}>{s.num}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 px-6 overflow-hidden" id="gallery">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4">
              <h2 className="font-script text-5xl md:text-7xl rotate-[-2deg]">Gig Poster & Flyer Collection</h2>
              <p className="font-hand text-lg md:text-xl text-studioOrange max-w-xs md:text-right italic">Memórias de palco coladas no fanzine</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="relative rotate-[-5deg] gig-poster">
                <div className="tape-piece -top-2 left-10 rotate-12 bg-gray-500/30"></div>
                <img alt="Gig Poster 1" className="w-full grayscale sepia brightness-75 aspect-[3/4] object-cover border-4 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-IUHJcDAo7DIGr32m9Ur4bouy3_J6Ypps2OosRWXhk3Tym7Exn5DVZGtmfNF4mMWzWrEJsM5G5aKqAMeh-fo2YpgWWZ6nJywWIswi-hld47gkJKOrvLDkv7MDlUULOIlqlJoKTsidYTb0i8I_x_OqqHXJLreDvibf6pOsr9POqyZg2eZsKLfmE6DqmrOyrMp8fSix1SXhyMIPprXTvbhfYNb6QRoiEe2w-Dyq5JGyYbkEtIItpZOUaiLwzTfvb5K9HbNGZsHxSrq" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 text-black font-marker text-center py-2 text-sm uppercase">LIVE AT LAB73</div>
              </div>
              <div className="relative rotate-[3deg] mt-12 gig-poster">
                <div className="tape-piece -top-4 right-4 -rotate-6 bg-gray-500/30"></div>
                <img alt="Gig Poster 2" className="w-full grayscale brightness-50 contrast-150 aspect-[3/4] object-cover border-4 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-IUHJcDAo7DIGr32m9Ur4bouy3_J6Ypps2OosRWXhk3Tym7Exn5DVZGtmfNF4mMWzWrEJsM5G5aKqAMeh-fo2YpgWWZ6nJywWIswi-hld47gkJKOrvLDkv7MDlUULOIlqlJoKTsidYTb0i8I_x_OqqHXJLreDvibf6pOsr9POqyZg2eZsKLfmE6DqmrOyrMp8fSix1SXhyMIPprXTvbhfYNb6QRoiEe2w-Dyq5JGyYbkEtIItpZOUaiLwzTfvb5K9HbNGZsHxSrq" />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-marker px-2 rotate-12">SOLD OUT</div>
              </div>
              <div className="relative rotate-[-2deg] gig-poster">
                <div className="tape-piece bottom-0 left-1/2 -translate-x-1/2 rotate-3 bg-gray-500/30"></div>
                <img alt="Gig Poster 3" className="w-full grayscale invert brightness-110 aspect-[3/4] object-cover border-4 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-IUHJcDAo7DIGr32m9Ur4bouy3_J6Ypps2OosRWXhk3Tym7Exn5DVZGtmfNF4mMWzWrEJsM5G5aKqAMeh-fo2YpgWWZ6nJywWIswi-hld47gkJKOrvLDkv7MDlUULOIlqlJoKTsidYTb0i8I_x_OqqHXJLreDvibf6pOsr9POqyZg2eZsKLfmE6DqmrOyrMp8fSix1SXhyMIPprXTvbhfYNb6QRoiEe2w-Dyq5JGyYbkEtIItpZOUaiLwzTfvb5K9HbNGZsHxSrq" />
                <div className="absolute bottom-0 w-full bg-black text-white font-hand text-center py-2 text-xs">SESSÃO DE DOMINGO</div>
              </div>
              <div className="relative rotate-[7deg] mt-8 gig-poster">
                <div className="tape-piece top-1/2 -left-4 rotate-90 bg-gray-500/30"></div>
                <img alt="Gig Poster 4" className="w-full grayscale contrast-125 brightness-75 aspect-[3/4] object-cover border-4 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-IUHJcDAo7DIGr32m9Ur4bouy3_J6Ypps2OosRWXhk3Tym7Exn5DVZGtmfNF4mMWzWrEJsM5G5aKqAMeh-fo2YpgWWZ6nJywWIswi-hld47gkJKOrvLDkv7MDlUULOIlqlJoKTsidYTb0i8I_x_OqqHXJLreDvibf6pOsr9POqyZg2eZsKLfmE6DqmrOyrMp8fSix1SXhyMIPprXTvbhfYNb6QRoiEe2w-Dyq5JGyYbkEtIItpZOUaiLwzTfvb5K9HbNGZsHxSrq" />
                <div className="absolute inset-0 border-8 border-dashed border-white/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 px-6" id="pricing">
          <div className="max-w-4xl mx-auto torn-paper notebook-paper p-8 md:p-20 shadow-[10px_10px_0px_#f97316] md:shadow-[20px_20px_0px_#f97316] rotate-1 relative">
            <div className="tape-piece -top-6 left-10 rotate-[-20deg] opacity-60"></div>
            <div className="tape-piece -top-6 right-10 rotate-[20deg] opacity-60"></div>
            <h2 className="font-script text-5xl md:text-7xl mb-12 md:mb-16 text-center underline decoration-studioOrange decoration-8 underline-offset-8 uppercase leading-tight">TABELA DE PREÇO$</h2>
            <div className="space-y-10 font-hand text-2xl">
              {pricingPlans.map((p, i) => (
                <div key={i} className={`${p.highlight ? 'bg-studioOrange/20 p-4 md:p-6 border-4 border-double border-studioOrange rotate-[-1deg]' : 'border-b-2 border-black/10 pb-4'} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
                  <div className="w-full sm:w-auto">
                    <div className={`font-marker text-2xl md:text-3xl uppercase ${p.highlight ? 'text-studioOrange' : ''}`}>{p.title}</div>
                    <div className="text-black/60 text-lg md:text-2xl">{p.desc}</div>
                  </div>
                  <div className={`font-marker ${p.highlight ? 'text-4xl md:text-6xl text-studioOrange' : 'text-4xl md:text-5xl text-studioOrange'}`}>{p.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <span className="inline-block border-4 border-red-600 text-red-600 px-6 py-2 font-marker text-2xl rotate-[-3deg] uppercase font-bold">Verifique a disponibilidade!</span>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-32 px-6" id="calendar">
          <div className="max-w-7xl mx-auto">
            <div className="whiteboard-grid p-8 shadow-2xl relative rotate-[-1deg]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-700 h-6 w-32 rounded-full border-4 border-zinc-600"></div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="font-marker text-2xl md:text-4xl text-black flex items-center gap-3">
                  <span className="material-symbols-outlined text-studioOrange !text-2xl md:!text-4xl">calendar_month</span>
                  AGENDA: {calendarConfig.title}
                </h2>
                <div className="text-black font-hand text-xl italic mt-4 md:mt-0 underline decoration-studioOrange decoration-2">
                  * Atualizado agora mesmo
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {calendarConfig.periods.map((period, pIdx) => (
                  <div key={pIdx}>
                    <h3 className="font-marker text-2xl text-black/60 mb-4 text-center">{period.label}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-black border-collapse border-2 border-black/10">
                        <thead>
                          <tr className="font-marker text-lg border-b-4 border-black/20">
                            <th className="p-2 border-r-2 border-black/10">HORA</th>
                            {calendarConfig.days.map(d => <th key={d} className="p-2 border-r-2 border-black/10">{d}</th>)}
                          </tr>
                        </thead>
                        <tbody className="font-hand text-sm">
                          {calendarConfig.times.map((time, tIdx) => (
                            <tr key={time} className={`border-b border-black/5 h-16 ${tIdx === 10 ? 'h-16' : ''}`}>
                              <td className="p-1 font-bold border-r-2 border-black/10 text-center">{time}</td>
                              {calendarConfig.days.map(day => {
                                const isBooked = period.bookedSlots.some(slot => {
                                  const parts = slot.split('-');
                                  if (parts.length === 2) return parts[0] === day && parts[1] === time;
                                  if (parts.length === 3) {
                                    const [sDay, start, end] = parts;
                                    return sDay === day && time >= start && time < end;
                                  }
                                  return false;
                                });
                                return (
                                  <td key={day} className={`p-1 text-center ${isBooked ? 'erased-slot' : 'bg-studioOrange text-white font-bold cursor-pointer'}`}>
                                    {isBooked ? 'BOOK' : 'LIVRE'}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 px-6" id="connect">
          <div className="max-w-4xl mx-auto border-4 border-dashed border-white/10 p-12 rounded-[50px] relative bg-zinc-900/30 backdrop-blur-sm shadow-2xl">
            <div className="tape-piece -top-4 left-1/2 -translate-x-1/2 rotate-1 opacity-80 w-32 h-10"></div>

            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-hand text-4xl md:text-6xl text-studioOrange">
                <span className="font-marker mr-4 text-white/40">#</span>
                se conecte com a gente
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-20 md:gap-40">
              <a
                href={import.meta.env.VITE_YOUTUBE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                  <span className="material-symbols-outlined !text-5xl font-bold">smart_display</span>
                </div>
                <span className="font-marker text-2xl tracking-widest text-white/70 group-hover:text-studioOrange">YOUTUBE</span>
              </a>

              <a
                href={import.meta.env.VITE_INSTAGRAM_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                  <span className="material-symbols-outlined !text-5xl font-bold">nest_cam_wired_stand</span>
                </div>
                <span className="font-marker text-2xl tracking-widest text-white/70 group-hover:text-studioOrange">INSTAGRAM</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6" id="contact">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 torn-paper torn-edge-aggressive notebook-paper p-10 rotate-[-2deg] shadow-2xl relative z-10">
              <div className="tape-piece -top-6 -left-6 rotate-[-45deg] scale-75 opacity-70"></div>
              <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mb-8 md:mb-12 border-b-4 border-black uppercase">CONTATO</h2>
              <div className="space-y-8 md:space-y-10 font-hand text-xl md:text-2xl">
                <div>
                  <h4 className="font-marker text-xl text-studioOrange">ONDE?</h4>
                  <a href={import.meta.env.VITE_GOOGLE_MAPS_URL || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-studioOrange transition-colors">
                    <p>{import.meta.env.VITE_STUDIO_ADDRESS || "Rua do Som, 73, Bairro Áudio, São Paulo, SP"}</p>
                  </a>
                </div>
                <div>
                  <h4 className="font-marker text-xl text-studioOrange">EMAIL</h4>
                  <p>{import.meta.env.VITE_STUDIO_EMAIL || "#"}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 w-full border-4 border-dashed border-white/20 p-12 md:p-16 rounded-[40px] relative bg-white/5">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="font-marker text-xl text-white/60">COMO TE CHAMAM?</label>
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
                  <label className="font-marker text-xl text-white/60">SEU E-MAIL</label>
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
                  <label className="font-marker text-xl text-white/60">QUE TU QUER?</label>
                  <select
                    className="bg-transparent border-b-2 border-white/30 p-2 font-hand text-2xl focus:outline-none focus:border-studioOrange text-white cursor-pointer appearance-none"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option className="bg-zinc-900">ENSAIAR</option>
                    <option className="bg-zinc-900">GRAVAR O HIT</option>
                    <option className="bg-zinc-900">MIX / MASTER</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-marker text-xl text-white/60">CONTA MAIS...</label>
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
                    className={`w-full font-marker text-4xl py-6 hover:scale-105 transition-transform flex items-center justify-center gap-4 shadow-xl border-2 border-black ${status === 'SUCCESS' ? 'bg-green-500' : status === 'ERROR' ? 'bg-red-500' : 'bg-studioOrange'
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
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="border-8 border-white/10 rounded-3xl overflow-hidden shadow-2xl grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3861.944208226019!2d-39.03504108516086!3d-14.82810408975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ5JzQxLjIiUyAzOcKwMDInMDAuNCJX!5e0!3m2!1sen!2sbr!4v1710188200000!5m2!1sen!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="p-4 rotate-3 mb-8 shadow-xl bg-white text-black">
            <Logo gap="gap-6" iconHeight="h-15" labHeight="h-10" />
          </div>
          <div className="text-center font-hand text-xl md:text-2xl">
            <p className="font-marker text-2xl md:text-3xl mb-4">© 2025 ESTÚDIO LAB73</p>
            <p className="opacity-50 text-sm md:text-base">Feito para o som que ressoa no peito.</p>
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
          <div className="border-2 border-white px-4 py-1 font-marker rotate-12">DIY FANZINE VOL 73</div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined !text-[150px]">album</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
