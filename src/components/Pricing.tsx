import React from 'react';
import { pricingConfig } from '../config/pricing';

const Pricing: React.FC = () => {
  return (
    <section className="py-32 px-6" id="pricing">
      <div className="max-w-4xl mx-auto torn-paper notebook-paper p-12 md:p-20 shadow-[20px_20px_0px_#f97316] rotate-1 relative">
        <div className="tape-piece -top-6 left-10 rotate-[-20deg] opacity-60"></div>
        <div className="tape-piece -top-6 right-10 rotate-[20deg] opacity-60"></div>

        <h2 className="font-script text-6xl md:text-7xl mb-16 text-center underline decoration-studioOrange decoration-8 underline-offset-8 uppercase text-black">
          TABELA DE PREÇO$
        </h2>

        <div className="space-y-10 font-hand text-2xl text-black">
          {pricingConfig.map((item, index) => (
            <div
              key={index}
              className={`${item.highlight
                  ? 'bg-studioOrange/20 p-6 border-4 border-double border-studioOrange rotate-[-1deg]'
                  : 'flex justify-between items-center border-b-2 border-black/10 pb-4'
                } ${item.highlight ? '' : 'flex justify-between items-center'}`}
            >
              <div>
                <div className={`font-marker text-3xl uppercase ${item.highlight ? 'text-studioOrange' : ''}`}>
                  {item.title}
                </div>
                <div className="text-black/60">{item.description}</div>
              </div>
              <div className={`font-marker ${item.highlight ? 'text-6xl' : 'text-5xl text-studioOrange'}`}>
                R$ {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-block border-4 border-red-600 text-red-600 px-6 py-2 font-marker text-2xl rotate-[-3deg] uppercase font-bold">
            Verifique a disponibilidade!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
