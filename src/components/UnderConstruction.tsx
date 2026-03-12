import React from 'react';
import ConnectWithUs from './ConnectWithUs';
import Footer from './Footer';
import Contact from './Contact';




const UnderConstruction: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-graphite overflow-y-auto overflow-x-hidden antialiased selection:bg-studioOrange selection:text-black chalkboard-bg text-white font-body">
      <main className="relative w-full max-w-4xl mx-auto px-6 min-h-screen flex items-center justify-center">
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

          <div className="mt-16 relative w-full max-w-2xl mx-auto flex flex-col items-center">
            <ConnectWithUs />
          </div>

          <div className="w-full">
            <Contact />
          </div>

          <div className="w-full">
            <Footer />
          </div>

        </section>
      </main>
    </div>
  );
};

export default UnderConstruction;
