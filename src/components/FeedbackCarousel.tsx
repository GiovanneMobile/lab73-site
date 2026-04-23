import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { feedbacks } from '../config/feedbacks';

const FeedbackCarousel: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-1 overflow-hidden" id="feedbacks">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-script text-5xl md:text-8xl text-center mb-16 rotate-[-1deg] px-6">
          O que dizem os feras
        </h2>

        <div className="relative feedbacks-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16 feedback-swiper !px-4"
          >
            {feedbacks.map((f, i) => {
              // Using a stable random rotation based on index for the carousel
              const stableRotation = ((i * 13) % 10 - 5).toFixed(2);
              
              return (
                <SwiperSlide key={i} className="flex justify-center items-start py-8">
                  <div 
                    className="sticky-note p-8 md:p-10 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between w-full mx-auto"
                    style={{ transform: `rotate(${stableRotation}deg)` }}
                  >
                    <div>
                      <span className="material-symbols-outlined !text-4xl md:!text-5xl text-black/20 mb-4 block">format_quote</span>
                      <p className="font-hand text-lg md:text-2xl leading-relaxed text-black">
                        "{f.text}"
                      </p>
                    </div>
                    <div className="mt-8 text-right">
                      <span className="font-marker text-lg text-black/60 border-t border-black/10 pt-2 inline-block">
                        - {f.author}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style>{`
        .feedback-swiper .swiper-button-next,
        .feedback-swiper .swiper-button-prev {
          color: var(--color-studioOrange);
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 3px solid black;
          box-shadow: 4px 4px 0px black;
          z-index: 50;
        }
        
        @media (max-width: 768px) {
          .feedback-swiper .swiper-button-next,
          .feedback-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
            border-width: 2px;
          }
          .feedback-swiper .swiper-button-next:after,
          .feedback-swiper .swiper-button-prev:after {
            font-size: 16px;
          }
        }

        .feedback-swiper .swiper-button-next:after,
        .feedback-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .feedback-swiper .swiper-button-next:active,
        .feedback-swiper .swiper-button-prev:active {
          transform: translateY(2px);
          box-shadow: 2px 2px 0px black;
        }
        .feedback-swiper .swiper-pagination-bullet-active {
          background: var(--color-studioOrange);
        }
      `}</style>
    </section>
  );
};

export default FeedbackCarousel;
