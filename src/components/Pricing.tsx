import React from 'react';
import CountdownTimer from './CountdownTimer';
import { pricingConfig } from '../config/pricing';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" id="pricing">
      <div className="max-w-4xl mx-auto torn-paper notebook-paper p-6 md:p-20 shadow-[10px_10px_0px_#f97316] md:shadow-[20px_20px_0px_#f97316] rotate-1 relative">
        <div className="tape-piece -top-6 left-10 rotate-[-20deg] opacity-60"></div>
        <div className="tape-piece -top-6 right-10 rotate-[20deg] opacity-60"></div>

        <h2 className="font-script text-4xl sm:text-5xl md:text-7xl mb-10 md:mb-16 text-center underline decoration-studioOrange decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8 uppercase text-black">
          TABELA DE PREÇO$
        </h2>

        <div className="space-y-10 font-hand text-2xl text-black relative">
          {pricingConfig.map((item, index) => (
            <div
              key={index}
              className={`${item.highlight
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

                <div className="flex items-center gap-3 md:gap-4 whitespace-nowrap">
                  {item.originalPrice && (
                    <div className="scribble-strikethrough text-2xl md:text-4xl text-black/40 font-marker">
                      R$ {item.originalPrice}
                    </div>
                  )}
                  <div className={`font-marker ${item.highlight
                    ? 'text-4xl md:text-6xl bg-white px-2 border-2 border-black rotate-[-2deg]'
                    : `text-3xl md:text-5xl text-studioOrange px-2 border border-black/20 ${index % 2 === 0 ? 'bg-yellow-200 rotate-[-5deg]' : 'bg-yellow-100 rotate-[3deg]'}`
                    }`}>
                    R$ {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CountdownTimer />

        <div className="mt-12 md:mt-16 flex flex-col gap-10">
          <div className="bg-red-50 border-4 border-dashed border-red-500 p-6 md:p-8 md:pt-10 rotate-[1deg] relative shadow-lg w-full">
            <div className="tape-piece -top-4 left-1/4 -translate-x-1/2 w-24 h-8 opacity-60"></div>
            <div className="absolute -top-5 -right-2 md:-top-6 md:-right-6 bg-red-600 text-white font-marker px-4 md:px-6 py-1 md:py-2 rotate-[6deg] text-lg md:text-xl border-4 border-black shadow-xl z-10">
              ATENÇÃO: REGRAS DOS COMBOS
            </div>

            <ul className="font-hand text-lg md:text-2xl text-black space-y-4 mt-6 md:mt-2">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-marker mt-1 text-2xl">»</span>
                <span>Ao contratar, <strong>todas as datas e horários</strong> dos ensaios devem ser definidos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-marker mt-1 text-2xl">»</span>
                <span>O pagamento é feito <strong>50% no primeiro ensaio</strong> e <strong>50% no último ensaio</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-marker mt-1 text-2xl">»</span>
                <span>Remarcações <strong>sem custo</strong> podem ser feitas com até <strong>24 horas de antecedência</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-marker mt-1 text-2xl">»</span>
                <span>Remarcações feitas com <strong>menos de 24h</strong> custam <strong>30% do valor</strong> de um ensaio base.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-marker mt-1 text-2xl">»</span>
                <span>Se a banda chegar mas alguém faltar, o ensaio será <strong>dado como realizado</strong> e não <strong>haverá reembolso</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center rotate-[-2deg]">
            <span className="inline-block border-2 md:border-4 border-red-600 bg-white text-red-600 px-8 py-3 font-marker text-2xl md:text-3xl uppercase font-bold shadow-lg">
              Vagas Limitadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
