import React from 'react';
import CountdownTimer from './CountdownTimer';
import * as pricingModule from '../config/pricing';

interface PricingProps {
  forceOfferActive?: boolean;
}

const renderWithBold = (text: string) => {
  const parts = text.split(/<strong>(.*?)<\/strong>/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="text-red-600">{part}</strong>;
    }
    return part;
  });
};

const Pricing: React.FC<PricingProps> = ({ forceOfferActive }) => {
  const [isOfferActive, setIsOfferActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (forceOfferActive) {
      setIsOfferActive(true);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const offerEndDate = (pricingModule as any).OFFER_END_DATE;

    if (!offerEndDate) {
      setIsOfferActive(false);
      return;
    }

    const checkOffer = () => {
      setIsOfferActive(new Date(offerEndDate).getTime() > new Date().getTime());
    };

    checkOffer();
    const interval = setInterval(checkOffer, 1000);
    return () => clearInterval(interval);
  }, [forceOfferActive]);

  return (
    <section className="px-4 md:px-6 relative" id="pricing">
      <div id="precos" className="absolute top-0"></div>
      <div id="preco" className="absolute top-0"></div>
      <div className="max-w-4xl mx-auto torn-paper notebook-paper p-6 md:p-20 shadow-[10px_10px_0px_#f97316] md:shadow-[20px_20px_0px_#f97316] rotate-1 relative">
        <div className="tape-piece -top-6 left-10 rotate-[-20deg] opacity-60"></div>
        <div className="tape-piece -top-6 right-10 rotate-[20deg] opacity-60"></div>

        <h2 className="font-script text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-10 text-center underline decoration-studioOrange decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8 uppercase text-black">
          TABELA DE PREÇO$
        </h2>

        <div className="space-y-10 font-hand text-2xl text-black relative">
          {pricingModule.pricingConfig.map((item, index) => {
            const displayPrice = isOfferActive ? item.price : (item.originalPrice || item.price);
            const showStrikethrough = isOfferActive && item.originalPrice;

            return (
              <div
                key={index}
                className={`group transition-all duration-300 cursor-default ${item.highlight
                  ? 'bg-studioOrange/20 hover:bg-studioOrange/30 p-6 border-4 border-double border-studioOrange rotate-[-1deg] hover:rotate-[1deg] hover:scale-[1.02] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.2)] flex flex-col gap-4'
                  : 'flex flex-col md:flex-row justify-between items-center pb-4 gap-4 hover:scale-[1.02] hover:bg-black/5 px-4 -mx-4 rounded-xl'
                  }`}
              >
                <div className={`text-center md:text-left ${item.highlight ? 'w-full' : 'flex-1'}`}>
                  <div className={`font-marker text-3xl uppercase transition-colors duration-300 ${item.highlight ? 'text-studioOrange mb-1' : 'group-hover:text-studioOrange'}`}>
                    {item.title}
                  </div>
                  {!item.highlight && <div className="text-black/60 group-hover:text-black/80 transition-colors duration-300">{item.description}</div>}
                </div>

                <div className={`${item.highlight ? 'flex flex-col md:flex-row justify-between items-center w-full gap-4' : 'flex items-center gap-4'}`}>
                  {item.highlight && <div className="text-black/60 text-center md:text-left flex-1">{item.description}</div>}

                  <div className="flex items-center gap-3 md:gap-4 whitespace-nowrap">
                    {showStrikethrough && (
                      <div className="scribble-strikethrough text-2xl md:text-4xl text-black/40 font-marker transition-opacity duration-300 group-hover:opacity-70">
                        R$ {item.originalPrice}
                      </div>
                    )}
                    <div className={`font-marker transition-transform duration-300 group-hover:scale-110 ${item.highlight
                      ? 'text-4xl md:text-6xl bg-white px-2 border-2 border-black rotate-[-2deg] group-hover:rotate-[2deg]'
                      : `text-3xl md:text-5xl text-studioOrange px-2 border border-black/20 group-hover:shadow-md ${index % 2 === 0 ? 'bg-yellow-200 rotate-[-5deg] group-hover:rotate-0' : 'bg-yellow-100 rotate-[3deg] group-hover:rotate-0'}`
                      }`}>
                      R$ {displayPrice}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CountdownTimer />

        <div className="my-16 md:mb-16 w-full max-w-3xl mx-auto px-2">
          <div className="bg-orange-50 border-4 border-dashed border-studioOrange p-6 md:p-8 pt-12 rotate-[-1deg] relative shadow-[8px_8px_0px_rgba(249,115,22,0.3)] w-full">
            <div className="absolute -top-5 -left-2 md:-top-6 md:-left-4 bg-studioOrange text-white font-marker px-4 md:px-6 py-1 md:py-2 rotate-[-4deg] text-lg md:text-xl border-4 border-black shadow-xl z-10">
              AVISOS IMPORTANTES
            </div>

            <ul className="font-hand text-xl md:text-2xl text-black/90 space-y-4 mt-6 sm:mt-2">
              {pricingModule.importantNotices.map((notice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-studioOrange font-marker mt-1 text-2xl">»</span>
                  <span>{renderWithBold(notice)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
