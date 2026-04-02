import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { galleryImages } from '../config/gallery';

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="font-script text-5xl md:text-7xl rotate-[-2deg] inline-block">Galeria do Laboratório</h2>
            <div className="w-full h-2 bg-studioOrange/30 mt-[-10px] rotate-[-1deg]"></div>
          </div>
          <p className="font-hand text-lg md:text-xl text-studioOrange max-w-xs md:text-right italic">
            Registros do caos criativo no Lab 73. Clique para ampliar!
          </p>
        </div>

        <div className="relative gallery-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16 gallery-swiper"
          >
            {galleryImages.map((image, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center py-8">
                 <div 
                  className={`relative cursor-pointer group transition-all duration-500 hover:scale-[1.03] w-full max-w-[300px]`}
                  onClick={() => setIndex(idx)}
                >
                  <div className={`relative gig-poster overflow-visible ${idx % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'} 
                    group-hover:rotate-0 group-hover:filter-none shadow-xl border-4 border-black bg-white`}>
                    
                    {/* Random tape pieces for that DIY look */}
                    <div className={`tape-piece ${idx % 3 === 0 ? '-top-4 left-1/4 rotate-12' : idx % 3 === 1 ? '-top-3 right-1/4 -rotate-6' : 'top-1/2 -left-6 rotate-90'} bg-white/40 ring-1 ring-black/5`}></div>
                    
                    <div className="overflow-hidden aspect-[3/4]">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Polaroid-style caption */}
                    <div className="p-4 bg-white text-black">
                      <h3 className="font-marker text-xl uppercase tracking-tighter truncate">{image.title || 'Live Session'}</h3>
                      <p className="font-hand text-sm opacity-70 truncate">{image.description || 'Lab 73 Memories'}</p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-studioOrange/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="material-symbols-outlined !text-6xl text-white drop-shadow-lg">zoom_in</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Captions, Thumbnails, Zoom, Fullscreen]}
          slides={galleryImages.map(img => ({ 
            src: img.src, 
            alt: img.alt, 
            title: img.title, 
            description: img.description 
          }))}
          captions={{
            descriptionTextAlign: "center",
          }}
        />
      </div>

      <style>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: var(--color-studioOrange);
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 3px solid black;
          box-shadow: 4px 4px 0px black;
        }
        .gallery-swiper .swiper-button-next:after,
        .gallery-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .gallery-swiper .swiper-button-next:active,
        .gallery-swiper .swiper-button-prev:active {
          transform: translateY(2px);
          box-shadow: 2px 2px 0px black;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: var(--color-studioOrange);
        }
        
        /* Lightbox Theme Customization */
        .yarl__container {
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
        }
        .yarl__caption_title {
          font-family: var(--font-marker, cursive);
          color: var(--color-studioOrange, #f97316);
          font-size: 1.5rem;
        }
        .yarl__caption_description {
          font-family: var(--font-hand, cursive);
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
