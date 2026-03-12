import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
