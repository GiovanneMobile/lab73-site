import React, { useState, useEffect } from 'react';
import * as pricingConfig from '../config/pricing';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const offerEndDate = (pricingConfig as any).OFFER_END_DATE;

  useEffect(() => {
    if (!offerEndDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(offerEndDate) - +new Date();

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
  }, [offerEndDate]);

  if (!offerEndDate || !timeLeft) return null;

  return (
    <div className="mt-8 flex flex-col items-center w-full overflow-hidden">
      <p className="font-marker text-sm md:text-lg text-studioOrange mb-2">PROMOÇÃO ACABA EM:</p>
      <div className="flex gap-1 md:gap-4 font-marker text-xl sm:text-3xl md:text-4xl text-black justify-center w-full">
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 min-w-[55px] sm:min-w-[70px] md:min-w-[90px] flex justify-center py-1 border-2 border-black/10 rounded shadow-sm">
            {timeLeft.days}d
          </span>
        </div>
        <span className="self-center">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 min-w-[55px] sm:min-w-[70px] md:min-w-[90px] flex justify-center py-1 border-2 border-black/10 rounded shadow-sm">
            {timeLeft.hours.toString().padStart(2, '0')}h
          </span>
        </div>
        <span className="self-center">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 min-w-[55px] sm:min-w-[70px] md:min-w-[90px] flex justify-center py-1 border-2 border-black/10 rounded shadow-sm">
            {timeLeft.minutes.toString().padStart(2, '0')}m
          </span>
        </div>
        <span className="self-center">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-zinc-100 min-w-[55px] sm:min-w-[70px] md:min-w-[90px] flex justify-center py-1 border-2 border-black/10 rounded shadow-sm">
            {timeLeft.seconds.toString().padStart(2, '0')}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
