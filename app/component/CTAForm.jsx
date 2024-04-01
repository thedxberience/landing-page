"use client";
import React from "react";
import CTAProfiles from "./CTAProfiles";
import ServicesCarousel from "./ServicesCarousel";
import { useStore, useAPIStore } from "../store/store";
import Carousel from "./Carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useQuery } from "react-query";
import { Skeleton } from "@chakra-ui/react";

const CTAForm = () => {
  const { serviceType, activityList } = useStore((state) => state);

  const { getProfiles } = useAPIStore((store) => store);

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const { isPending, isLoading, isError, data, error } = useQuery({
    queryKey: "getProfiles",
    queryFn: async () => {
      const request = await getProfiles();
      return request?.data;
    },
  });

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
            {data?.map((form, index) => (
              <div className="embla__slide z-10" key={index}>
                <Skeleton
                  startColor="#FFE3C2"
                  endColor="#4d4843"
                  isLoaded={!isLoading}
                  width={["200px", "350px"]}
                >
                  <CTAProfiles key={index} {...form} index={index} />
                </Skeleton>
              </div>
            ))}
          </Carousel>
        </div>

        {activityList.length > 0 && (
          <ServicesCarousel carouselList={activityList} />
        )}
      </div>
    </div>
  );
};

export default CTAForm;
