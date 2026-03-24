import React, { useState, useEffect } from 'react';
import { pricingConfig, OFFER_END_DATE } from '../config/pricing';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(OFFER_END_DATE) - +new Date();
      
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
    <div className="mt-8 flex flex-col items-center">
      <p className="font-marker text-lg text-studioOrange mb-2">PROMOÇÃO ACABA EM:</p>
      <div className="flex gap-4 font-marker text-3xl md:text-4xl text-black">
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 px-3 py-1 border-2 border-black/10 rounded shadow-sm">{timeLeft.days}d</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 px-3 py-1 border-2 border-black/10 rounded shadow-sm">{timeLeft.hours.toString().padStart(2, '0')}h</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 px-3 py-1 border-2 border-black/10 rounded shadow-sm">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 px-3 py-1 border-2 border-black/10 rounded shadow-sm">{timeLeft.seconds.toString().padStart(2, '0')}s</span>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-32 px-6" id="pricing">
      <div className="max-w-4xl mx-auto torn-paper notebook-paper p-12 md:p-20 shadow-[20px_20px_0px_#f97316] rotate-1 relative">
        <div className="tape-piece -top-6 left-10 rotate-[-20deg] opacity-60"></div>
        <div className="tape-piece -top-6 right-10 rotate-[20deg] opacity-60"></div>

        <h2 className="font-script text-6xl md:text-7xl mb-16 text-center underline decoration-studioOrange decoration-8 underline-offset-8 uppercase text-black">
          TABELA DE PREÇO$
        </h2>

        <div className="space-y-10 font-hand text-2xl text-black relative">
          {pricingConfig.map((item, index) => (
            <div
              key={index}
              className={`${
                item.highlight
                  ? 'bg-studioOrange/20 p-6 border-4 border-double border-studioOrange rotate-[-1deg] flex flex-col gap-4'
                  : 'flex flex-col md:flex-row justify-between items-center border-b-2 border-black/10 pb-4 gap-4'
              }`}
            >
              <div className={`${item.highlight ? 'w-full' : 'text-center md:text-left flex-1'}`}>
                <div className={`font-marker text-3xl uppercase ${item.highlight ? 'text-studioOrange w-full mb-1' : ''}`}>
                  {item.title}
                </div>
                {!item.highlight && <div className="text-black/60">{item.description}</div>}
              </div>
              
              <div className={`${item.highlight ? 'flex flex-col md:flex-row justify-between items-center w-full gap-4' : 'flex items-center gap-4'}`}>
                {item.highlight && <div className="text-black/60 text-center md:text-left flex-1">{item.description}</div>}
                
                <div className="flex items-center gap-4 whitespace-nowrap">
                  {item.originalPrice && (
                    <div className="scribble-strikethrough text-4xl text-black/40 font-marker">
                      R$ {item.originalPrice}
                    </div>
                  )}
                  <div className={`font-marker ${
                    item.highlight 
                      ? 'text-6xl bg-white px-2 border-2 border-black rotate-[-2deg]' 
                      : `text-5xl text-studioOrange px-2 border border-black/20 ${index % 2 === 0 ? 'bg-yellow-200 rotate-[-5deg]' : 'bg-yellow-100 rotate-[3deg]'}`
                  }`}>
                    R$ {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CountdownTimer />

        <div className="flex flex-col md:flex-row items-center mt-16 gap-10 md:justify-between">
          <div className="sticky-note bg-yellow-100 rotate-[-1.5deg] max-w-sm relative shadow-lg p-6 flex-1 text-center md:text-left">
            <div className="tape-piece -top-3 left-1/4 -translate-x-1/2 w-16 h-6 opacity-40"></div>
            <p className="font-hand text-xl text-black">
              Esta oferta especial é exclusiva para o seu <span className="underline decoration-studioOrange decoration-2">primeiro ensaio</span>! Não perca tempo!
            </p>
          </div>
          
          <div className="rotate-[2deg] shrink-0">
            <span className="inline-block border-4 border-red-600 text-red-600 px-8 py-3 font-marker text-2xl uppercase font-bold shadow-lg">
              Vagas Limitadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
