"use client";
import React from "react";
import CTAProfiles from "./CTAProfiles";
import ServicesCarousel from "./ServicesCarousel";
import { useStore } from "../store/store";
import Carousel from "./Carousel";
import { usePrevNextButtons } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarouselButtons from "./CarouselButtons";

const CTAForm = () => {
  const { serviceType } = useStore((state) => state);

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    nextBtnDisabled,
    prevBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = usePrevNextButtons(emblaApi);

  const formDetails = [
    {
      title: "Luxury Travel Experiences",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_1.png",
    },
    {
      title: "Corperate Concierge",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_2.png",
    },
    {
      title: "Celebrity Concierge",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_3.jpeg",
    },
    {
      title: "Special Ocassions",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_4.jpeg",
    },
  ];

  const activityList = [
    {
      title: "Desert Activities",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_1.png",
    },
    {
      title: "Water Activites",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_2.jpeg",
    },
    {
      title: "Luxury Car Rentals",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_3.jpeg",
    },
    {
      title: "Night Life Experiences",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_4.jpeg",
    },
    {
      title: "Hotel/Villa Bookings",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_5.jpeg",
    },
    {
      title: "Visa",
      description: "Enjoy the best vacation destinations with your loved ones.",
      image: "/activity_6.jpeg",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mb-[89px]">
      <div className="CTAProfile-container flex flex-col justify-center items-center w-full py-6">
        <div className="CTAProfile-header">
          <h1 className="text-xl lg:text-3xl text-white">
            The Ultimate Luxury Experience
          </h1>
        </div>
        <div className="CTAProfiles mt-10 relative">
          <Carousel emblaRef={emblaRef}>
            {formDetails.map((form, index) => (
              <div className="embla__slide z-10" key={index}>
                <CTAProfiles key={index} {...form} index={index} />
              </div>
            ))}
          </Carousel>
        </div>
        {serviceType && <ServicesCarousel carouselList={activityList} />}
      </div>
    </div>
  );
};

export default CTAForm;
