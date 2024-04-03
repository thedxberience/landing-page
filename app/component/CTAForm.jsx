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
                <CTAProfiles key={index} {...form} index={index} />
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
