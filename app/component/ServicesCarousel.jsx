"use client";
/* eslint react/no-unescaped-entities: 0 */
import React from "react";
import ServiceCard from "./ServiceCard";
import CarouselButtons, { usePrevNextButtons } from "./CarouselButtons";
import Carousel from "./Carousel";
import useEmblaCarousel from "embla-carousel-react";

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="services flex flex-col justify-start items-center mt-24 h-[530px] w-full bg-primary mb-80">
      <div className="section-header pb-8 w-full border-b text-center flex flex-col gap-3 border-white">
        <h1 className="text-5xl font-bold text-text_primary_light mt-20">
          Unlock Dubai's Luxury: Your Personal Concierge
        </h1>
        <p className="text-text_primary_light">SERVICES OFFERED</p>
      </div>
      <div className="services-container flex h-fit justify-center relative items-center gap-8 mt-8">
        <Carousel emblaRef={emblaRef}>
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="embla__slide z-10" key={index}>
                  <ServiceCard background={`/service-${index + 1}.jpg`} />
                </div>
              );
            })}
        </Carousel>

        {/* <ServiceCard background="/service-4.jpg" /> */}
        <div className="carousel-btns flex justify-between items-center w-[90svw] absolute top-1/2 transform -translate-y-1/2">
          <CarouselButtons
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            direction="prev"
          />
          <CarouselButtons
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            direction="next"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
