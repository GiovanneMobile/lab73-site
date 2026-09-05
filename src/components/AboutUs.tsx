import React from 'react';
import { aboutConfig } from '../config/about';

const AboutUs: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="inline-block border-2 border-studioOrange text-studioOrange px-4 py-1 rotate-[-2deg] font-marker text-lg uppercase mb-3">
              {aboutConfig.header.badge}
            </div>
            <h2 className="font-script text-7xl md:text-8xl rotate-[-1deg] leading-none">{aboutConfig.header.title}</h2>
          </div>

          <div className="relative torn-paper notebook-paper p-6 md:p-10 shadow-2xl rotate-[-1deg]">
            <div className="tape-piece -top-4 left-10 rotate-[-15deg] opacity-80"></div>
            <div className="tape-piece -top-4 right-10 rotate-[12deg] opacity-80"></div>
            <div className="tape-piece -bottom-4 left-1/3 rotate-[6deg] opacity-70"></div>
            <div className="relative overflow-hidden border-4 border-black bg-black">
              <img
                alt={aboutConfig.groupPhoto.alt}
                className="w-full aspect-video object-cover brightness-95 contrast-[1.10]"
                src={aboutConfig.groupPhoto.src}
              />
              <div className="absolute top-4 right-4 bg-studioOrange text-black font-marker text-sm px-3 py-1 rotate-3 border border-black shadow-md uppercase">
                {aboutConfig.groupPhoto.badge}
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-black font-hand">
              <span className="font-marker text-2xl md:text-3xl text-studioOrange tracking-wide">
                {aboutConfig.groupPhoto.footerLeft}
              </span>
              <span className="italic text-lg text-black/60 font-script text-xl">{aboutConfig.groupPhoto.footerRight}</span>
            </div>
          </div>

          <p className="font-hand text-2xl text-white/70 max-w-md italic border-l-4 border-studioOrange pl-4">
            {aboutConfig.header.description}
          </p>
        </div>


        {/* Grid de membros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutConfig.team.map((member) => (
            member.image != "" && (
              <div key={member.id} className={`torn-paper torn-edge-aggressive p-6 ${member.cardRotation} hover:rotate-0 transition-transform relative flex flex-col justify-between shadow-2xl ${member.bgColor || ''}`}>
                <div className={`tape-piece -top-4 ${member.tapePosition} scale-75 opacity-80`}></div>
                <div>
                  <div className="border-4 border-black bg-black p-2 mb-6 shadow-md">
                    <img
                      alt={member.alt}
                      className="w-full aspect-square object-cover"
                      src={member.image}
                    />
                  </div>
                  <div className={`inline-block ${member.bgColor ? 'bg-black text-white' : 'bg-studioOrange text-black'} font-marker text-xs px-2 py-0.5 rotate-[-1deg] uppercase mb-2`}>
                    {member.badge}
                  </div>
                  <h3 className="font-marker text-3xl text-black mb-1">{member.name}</h3>
                  <h4 className="font-script text-xl text-black/70 font-bold mb-4">{member.role}</h4>
                  <p className="font-hand text-lg text-black/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-black/10 flex justify-between items-center font-marker text-xs text-black/40">
                  <span>{member.footerLeft}</span>
                  <span>{member.footerRight}</span>
                </div>
              </div>
            )))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
