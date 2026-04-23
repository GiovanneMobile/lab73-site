import React from 'react';

const ReviewRequest: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="relative group">
        {/* Decorative Tape */}
        <div className="tape-piece -top-4 left-1/2 -translate-x-1/2 rotate-2 opacity-80 group-hover:rotate-0 transition-transform duration-300"></div>
        
        <div className="torn-paper p-8 md:p-12 text-center rotate-[-1deg] hover:rotate-0 transition-all duration-500 shadow-2xl bg-[#fdfdfd] border-2 border-black/5">
          <h3 className="font-script text-4xl md:text-5xl text-graphite mb-4 uppercase tracking-tight">
            Já tocou com a gente?
          </h3>
          <p className="font-hand text-xl md:text-2xl text-graphite/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sua opinião é o que faz o Lab 73 crescer. <br className="hidden md:block" />
            Conta pra gente como foi sua experiência!
          </p>
          
          <a 
            href="https://g.page/r/Cebi30m046SyEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-studioOrange text-black font-marker text-2xl md:text-3xl px-8 py-4 rotate-1 hover:scale-110 hover:-rotate-1 transition-all duration-300 shadow-[4px_4px_0px_#000] border-2 border-black"
          >
            AVALIAR NO GOOGLE
            <span className="material-symbols-outlined !text-3xl">star</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewRequest;
