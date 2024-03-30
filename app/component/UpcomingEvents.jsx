"use client";
import React from "react";
import CarouselButtons from "./CarouselButtons";
import Carousel from "./Carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./CarouselButtons";
import MemoryContainer from "./MemoryContianer";

const UpcomingEvents = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="memories w-full flex my-4 px-2 py-4 flex-col justify-center items-center relative bg-primary text-text_primary_light">
      {/* <div className="w-[37.292vw] h-[800px] bg-secondary absolute top-0 left-0 -z-10"></div> */}
      <div className="section-header w-full flex justify-evenly items-center gap-2 mt-16">
        <h1 className="text-xl lg:text-5xl font-bold text-text_primary_light">
          Upcoming Events
        </h1>
        <div className="w-[49.722vw] border h-[1px] border-gray-800"></div>
        <div className="flex justify-center items-center gap-4">
          <CarouselButtons
            direction="prev"
            disabled={prevBtnDisabled}
            onClick={onPrevButtonClick}
          />
          <CarouselButtons
            direction="next"
            disabled={nextBtnDisabled}
            onClick={onNextButtonClick}
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-6 gap-2">
        <Carousel emblaRef={emblaRef}>
          <div className="embla__slide z-10" key={1}>
            <MemoryContainer star={4} />
          </div>
          <div className="embla__slide z-10" key={2}>
            <MemoryContainer star={5} />
          </div>
          <div className="embla__slide z-10" key={3}>
            <MemoryContainer star={3} />
          </div>
          <div className="embla__slide z-10" key={3}>
            <MemoryContainer star={3} />
          </div>
          <div className="embla__slide z-10" key={3}>
            <MemoryContainer star={3} />
          </div>
          <div className="embla__slide z-10" key={3}>
            <MemoryContainer star={3} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UpcomingEvents;
