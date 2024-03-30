"use client";
import React from "react";
import CarouselButtons from "./CarouselButtons";
import RatingsCard from "./RatingsCard";
import Carousel from "./Carousel";
import { usePrevNextButtons } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";

const RatingsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const ratings = [
    {
      star: 5,
      ratingAuthor: "Craylin",
      ratingDescription:
        " I had an amazing experience travelling with the team at DXberience. The flight was on point and the location was absolutely beautiful",
    },
    {
      star: 4,
      ratingAuthor: "Emma",
      ratingDescription:
        " I had an amazing experience travelling with the team at DXberience. The flight was on point and the location was absolutely beautiful",
    },
  ];

  return (
    <section className="review-section flex justify-center items-center lg:px-20 w-full mb-8">
      <div className="flex flex-col justify-center items-center border-t border-b border-gray-800 w-full h-full my-20 py-16 gap-12">
        <div className="section-header w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-5xl font-bold text-text_primary">
            Our clients share their experiences.
          </h1>
        </div>
        <div className="review-container w-full flex justify-center items-center gap-8">
          <Carousel emblaRef={emblaRef}>
            {ratings.map((rating, index) => {
              return (
                <div className="embla__slide z-10" key={index}>
                  <RatingsCard
                    star={rating.star}
                    ratingAuthor={rating.ratingAuthor}
                    ratingDescription={rating.ratingDescription}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
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
    </section>
  );
};

export default RatingsSection;
