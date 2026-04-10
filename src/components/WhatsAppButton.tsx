import React from 'react';
import { siteConfig } from '../config/site';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = siteConfig.contact.whatsapp;
  const message = encodeURIComponent('QUERO TOCAAAARRGGH!!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] group flex items-center gap-3 pointer-events-auto"
      aria-label="Contato via WhatsApp"
    >
      {/* Floating Tooltip */}
      <div className="bg-white text-black font-marker px-4 py-2 border-2 border-black shadow-[4px_4px_0px_#000] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none scale-0 group-hover:scale-100 origin-right hidden md:block">
        FALE COM A GENTE!
      </div>

      {/* Button Body */}
      <div className="relative">
        {/* Ring Animation Effects */}
        <div className="rotate-[10deg] absolute inset-0 bg-whatsapp/40 animate-ring z-0"></div>
        <div className="rotate-[10deg] absolute inset-0 bg-whatsapp/20 animate-ring [animation-delay:0.5s] z-0"></div>

        <div className="rotate-[10deg] relative bg-whatsapp p-3 md:p-4 border-2 md:border-4 border-black shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] group-hover:shadow-[4px_4px_0px_#000] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200 z-10">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-black fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.151-3.654c1.556.924 3.09 1.388 4.678 1.389 5.485.002 9.948-4.463 9.95-9.951.001-2.658-1.034-5.156-2.915-7.038-1.881-1.882-4.38-2.918-7.039-2.919-5.484-.002-9.947 4.463-9.949 9.952-.001 1.637.408 3.235 1.183 4.629l-1.066 3.89 3.98-1.044-.242-.108zM17.345 14.123c-.31-.156-1.838-.906-2.124-1.01-.287-.104-.496-.156-.704.156-.208.311-.806 1.01-1.014 1.244-.209.234-.417.264-.727.108-.31-.156-1.312-.484-2.498-1.542-.922-.822-1.545-1.838-1.726-2.149-.181-.311-.019-.479.136-.633.139-.138.31-.363.466-.544.156-.181.208-.311.31-.518.104-.208.052-.389-.026-.544-.078-.156-.704-1.7-.963-2.324-.26-.624-.523-.538-.72-.544l-.612-.008c-.208 0-.546.078-.832.389-.286.311-1.092 1.065-1.092 2.597 0 1.532 1.118 3.012 1.274 3.219.156.208 2.2 3.361 5.33 4.71.744.321 1.325.512 1.777.656.748.238 1.429.204 1.967.124.6-.089 1.838-.751 2.099-1.477.26-.726.26-1.348.181-1.477-.078-.129-.286-.207-.597-.363z" />
          </svg>
        </div>

        {/* Tape piece to match aesthetic */}
        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-8 md:w-12 h-4 md:h-6 bg-white/40 rotate-[-45deg] z-10 pointer-events-none"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
