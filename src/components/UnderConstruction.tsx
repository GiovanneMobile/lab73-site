import React, { useState, useEffect } from 'react';
import ConnectWithUs from './ConnectWithUs';
import Footer from './Footer';
import Contact from './Contact';
import { siteConfig } from '../config/site';
import WhatsAppButton from './WhatsAppButton';
import Calendar from './Calendar';
import ReviewRequest from './ReviewRequest';
import { preLaunchPricing } from '../config/preLaunch';

const CountdownUnit: React.FC<{ value: number | string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-graphite/5 border-2 border-dashed border-graphite/20 p-4 md:p-6 rounded-xl">
    <span className="font-hand text-5xl md:text-7xl text-studioOrange leading-none">{value}</span>
    <span className="font-marker text-sm md:text-lg text-graphite/60 mt-2 uppercase tracking-wide">{label}</span>
  </div>
);

const PricingCard: React.FC<{
  title: string;
  duration: string;
  oldPrice?: string;
  price: string;
  features?: string[];
  isPopular?: boolean;
}> = ({ title, duration, oldPrice, price, features, isPopular }) => (
  <div className={`relative flex flex-col items-center text-center p-10 md:p-12 bg-[#1a1a1a] border-2 border-dashed border-white/20 rounded-[40px] transition-all duration-300 hover:scale-105 group h-full`}>
    {isPopular && (
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-studioOrange text-black font-marker px-6 py-4 rotate-2 shadow-2xl z-30 text-xl leading-none uppercase flex flex-col items-center justify-center">
        <span>MAIS</span>
        <span>POPULAR</span>
      </div>
    )}
    <h4 className="font-marker text-xl text-studioOrange mb-2 uppercase tracking-widest">{title}</h4>
    <p className="font-hand text-4xl md:text-5xl text-white mb-6 uppercase tracking-tighter whitespace-nowrap">{duration}</p>

    <div className="mb-6 flex flex-col items-center whitespace-nowrap">
      {oldPrice && (
        <span className="font-marker text-3xl md:text-4xl text-white/30 line-through decoration-red-500/50 mb-1">{oldPrice}</span>
      )}
      <span className="font-hand text-6xl md:text-7xl text-white tracking-tighter">R$ {price}</span>
    </div>

    {features && features.length > 0 && (
      <ul className="font-hand text-lg md:text-xl space-y-4 text-white/80 mt-auto">
        {features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(siteConfig.launchDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <section className="py-12 w-full max-w-4xl mx-auto px-6 relative" id="countdown-timer">
      <div className="flex flex-col items-center">
        <div className="torn-paper bg-[#fcfcfc] p-8 md:p-12 rotate-[0.5deg] shadow-2xl w-full relative">
          <div className="tape-piece -top-4 left-1/4 -rotate-12 opacity-90"></div>
          <div className="tape-piece -top-6 right-1/4 rotate-6 opacity-90"></div>

          <h3 className="font-script text-4xl md:text-5xl text-graphite text-center mb-10 uppercase tracking-tight">
            Inauguração em:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <CountdownUnit value={timeLeft.days.toString().padStart(2, '0')} label="Dias" />
            <CountdownUnit value={timeLeft.hours.toString().padStart(2, '0')} label="Horas" />
            <CountdownUnit value={timeLeft.minutes.toString().padStart(2, '0')} label="Minutos" />
            <CountdownUnit value={timeLeft.seconds.toString().padStart(2, '0')} label="Segundos" />
          </div>

          <div className="mt-10 text-center">
            <p className="font-hand text-2xl md:text-3xl text-graphite/80 italic">
              O som que você sempre buscou está chegando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const UnderConstruction: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-graphite overflow-y-auto overflow-x-hidden antialiased selection:bg-studioOrange selection:text-black chalkboard-bg text-white font-body">
      <main className="relative w-full max-w-5xl mx-auto px-6 py-20 min-h-screen flex flex-col items-center">
        <section className="w-full py-12 flex flex-col items-center text-center">

          {/* Animated peeking note at the top */}
          <div className="relative inline-block mb-12">
            <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-red-600 text-white font-marker px-4 md:px-6 py-1 md:py-2 rotate-12 text-lg md:text-2xl border-4 border-black shadow-2xl z-40">
              WORK IN PROGRESS
            </div>

            <div className="relative w-64 h-40 md:w-80 md:h-52 bg-zinc-800 rounded-xl border-4 border-white/20 shadow-2xl flex flex-col overflow-hidden rotate-[-2deg]">

              <div className="h-1/3 bg-zinc-900 border-b-4 border-white/10 flex items-center justify-between px-6">
                <div className="w-8 h-8 rounded-full border-2 border-white/20"></div>
                <div className="w-24 h-4 bg-studioOrange/40 rounded-full"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white/20"></div>
              </div>
              <div className="flex-1 flex items-center justify-center gap-12 p-4">
                <div className="w-20 h-20 rounded-full border-8 border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/5"></div>
                </div>
                <div className="w-20 h-20 rounded-full border-8 border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/5"></div>
                </div>
              </div>
              <div className="h-8 bg-zinc-900 flex justify-center items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>

              <div className="absolute inset-0 pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M10 10 Q 50 5, 90 10" fill="none" stroke="white" strokeWidth="0.5"></path>
                  <path d="M15 90 Q 50 95, 85 90" fill="none" stroke="white" strokeWidth="0.5"></path>
                </svg>
              </div>
            </div>

            <div className="tape-piece -top-4 left-10 rotate-[-15deg] opacity-80"></div>
            <div className="tape-piece -bottom-4 right-10 rotate-[10deg] opacity-80"></div>
          </div>

          <h1 className="font-script text-5xl md:text-8xl leading-[0.8] uppercase tracking-tighter mb-4 text-studioOrange">
            SITE EM <br />
            <span className="text-white italic font-hand decoration-4 underline decoration-studioOrange/60">CONSTRUÇÃO</span>
          </h1>

          <p className="font-hand text-2xl md:text-3xl max-w-2xl mx-auto leading-snug mt-6 opacity-80">
            Estamos afinando os instrumentos e rabiscando o layout. Volte logo para ver o novo Lab 73!
          </p>

          <Countdown />

          {/* New Pricing Section */}
          <section className="pt-24 w-full max-w-6xl mx-auto relative" id="pricing">
            <div className="text-center mb-16">
              <h2 className="font-script text-6xl md:text-7xl text-white mb-4 uppercase tracking-tighter">PREÇOS PRÉ-INAUGURAÇÃO</h2>
              <p className="font-hand text-3xl text-studioOrange">Tá com pressa pra conhecer logo o pico? Chega aí!</p>
            </div>

            <div className="relative">
              {/* Decorative tape pieces for the whole section */}
              <div className="absolute tape-piece rotate-[-45deg] opacity-60 hidden md:block"></div>
              <div className="absolute -right-12 tape-piece rotate-[45deg] opacity-60 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
                {preLaunchPricing.map((item, index) => (
                  <PricingCard
                    key={index}
                    title={item.title}
                    duration={item.duration}
                    oldPrice={`R$ ${item.originalPrice}`}
                    price={item.price}
                    isPopular={item.isPopular}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="font-hand text-3xl">* preços promocionais de pré-inauguração.</p>
              <p className="font-hand text-3xl mt-2">Vão durar <span className="text-studioOrange">SOMENTE ATÉ A INAUGURAÇÃO</span>.</p>
            </div>
          </section>

          {/* Calendar Section */}
          <section className="py-24 w-full max-w-full mx-auto relative" id="calendar">
            <div className="text-center mb-16">
              <h2 className="font-script text-6xl md:text-7xl text-white mb-4 uppercase tracking-tighter">AGENDA DE ENSAIOS</h2>
              <p className="font-hand text-3xl text-studioOrange">Veja os horários livres e garanta o seu!</p>
            </div>

            <div className="relative">
              <div className="tape-piece -top-6 left-1/4 rotate-[-6deg] z-20"></div>
              <div className="w-full border-8 border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-[#1a1a1a] p-1 md:p-3 relative z-10">
                <Calendar />
              </div>
            </div>
          </section>

          <ReviewRequest />

          <div className="mt-8 relative w-full max-w-2xl mx-auto flex flex-col items-center">
            <ConnectWithUs />
          </div>

          <div className="w-full mt-12">
            <Contact />
          </div>

          <div className="w-full">
            <Footer />
          </div>

        </section>
      </main>
      <WhatsAppButton />
    </div >
  );
};

export default UnderConstruction;
