"use client";
/* eslint react/no-unescaped-entities: 0 */
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import CarouselButtons, { usePrevNextButtons } from "./CarouselButtons";
import Carousel from "./Carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useStore } from "../store/store";
import ReusableButton from "./ReusableButton";
import { useRouter } from "next/navigation";

const ServicesCarousel = ({ carouselList }) => {
  const { interestedActivities } = useStore((state) => state);
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleNext = () => {
    router.push("/submit_form");
  };

  return (
    <section className="services flex flex-col justify-center items-center mt-24 w-full">
      <div
        className={`${
          carouselList.length == 1 && "single"
        } services-container flex h-fit justify-center relative items-center gap-8 mt-8 w-full`}
      >
        <Carousel emblaRef={emblaRef}>
          {carouselList.map((activity, index) => {
            return (
              <div className="embla__slide z-10" key={index}>
                <ServiceCard
                  index={index}
                  background={activity.coverImage}
                  description={activity.description}
                  serviceTitle={activity.name}
                  video={activity.video}
                />
              </div>
            );
          })}
        </Carousel>

        {/* <ServiceCard background="/service-4.jpg" /> */}
        {/* <div className="carousel-btns flex justify-between items-center w-[90svw] absolute top-1/2 transform -translate-y-1/2"> */}
        <div className="carousel-btns flex justify-between items-center absolute top-1/2 transform left-5 ">
          <CarouselButtons
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            direction="prev"
          />
        </div>

        <div className="carousel-btns flex justify-between items-center absolute top-1/2 transform right-5 ">
          <CarouselButtons
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            direction="next"
          />
        </div>

        {/* </div> */}
      </div>
      <div className="submit_button mt-6">
        {interestedActivities.length > 0 && (
          <ReusableButton
            btnText={"Make an enquiry"}
            filled={false}
            background="bg-white"
            onClick={handleNext}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesCarousel;
