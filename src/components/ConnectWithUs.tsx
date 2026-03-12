import React from 'react';
import { siteConfig } from '../config/site';

const ConnectWithUs: React.FC = () => {
  return (
    <div className="bg-white/5 border-2 border-dashed border-white/20 p-8 rounded-2xl rotate-[-1deg] relative w-full">
      <div className="tape-piece -top-4 left-1/2 -translate-x-1/2 rotate-3 scale-75"></div>
      <h3 className="font-script text-4xl text-studioOrange text-center mb-6"># Conecte-se com a gente</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <a
          className="flex flex-col items-center gap-2 group transition-all duration-300 hover:scale-110"
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined !text-5xl text-white group-hover:text-studioOrange">photo_camera</span>
          <span className="font-marker text-sm uppercase tracking-widest group-hover:text-studioOrange">Instagram</span>
        </a>
        <a
          className="flex flex-col items-center gap-2 group transition-all duration-300 hover:scale-110"
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined !text-5xl text-white group-hover:text-studioOrange">play_circle</span>
          <span className="font-marker text-sm uppercase tracking-widest group-hover:text-studioOrange">YouTube</span>
        </a>
      </div>
    </div>
  );
};


export default ConnectWithUs;
