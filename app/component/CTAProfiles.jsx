"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useStore } from "../store/store";
import { Skeleton } from "@chakra-ui/react";

const CTAProfiles = ({
  index,
  name,
  description,
  image,
  activities,
  briefDescription,
}) => {
  const { serviceType, setServiceType, setActivityList } = useStore(
    (state) => state
  );

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSelectService = () => {
    setServiceType(name);
    setActivityList(activities);
  };

  const handleServiceTitle = () => {
    let word_split = name.split(" ");

    let title = "";
    word_split.forEach((word) => {
      title += `${word.charAt(0).toUpperCase() + word.slice(1)} `;
    });

    return title;
  };
  return (
    <Skeleton
      startColor="#927E68"
      endColor="#4d4843"
      isLoaded={imageLoaded}
      width={["200px", "350px"]}
    >
      <div
        onClick={handleSelectService}
        style={{
          // backgroundImage: `linear-gradient(to bottom, rgba(168, 168, 168, 0), rgba(0, 0, 0, 0.8)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`"CTACard rounded-lg flex flex-col gap-3 p-4 lg:p-8 text-white justify-end relative items-start w-full h-[204px] lg:h-[406px] hover:border hover:border-white hover:shadow-lg transition-all duration-100 ease-in cursor-pointer" ${
          serviceType == name ? "border border-white shadow-lg" : ""
        }`}
      >
        <Image
          src={image && image}
          alt={name}
          width={350}
          height={486}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className="object-cover rounded-lg w-full h-[204px] lg:h-[406px] absolute top-0 left-0"
        />
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(200, 200, 200, 0.1), rgba(0, 0, 0, 0.9))`,
          }}
          className="w-full h-[204px] lg:h-[406px] absolute top-0 left-0 z-10"
        ></div>
        <div className="profile-details z-50 flex flex-col items-start gap-2 w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-sm lg:text-xl font-bold">
              {handleServiceTitle()}
            </h1>
            {serviceType == name ? (
              <Image
                src="/heart_bold.svg"
                alt="heart selected"
                width={24}
                height={24}
                onClick={handleSelectService}
              />
            ) : (
              <Image
                src="/heart.svg"
                alt="heart"
                width={24}
                height={24}
                onClick={handleSelectService}
              />
            )}
          </div>
          <p className="text-sm font-light font-poppins hidden lg:flex">
            {description}
          </p>
          {/* <p className="text-sm font-poppins uppercase">{briefDescription}</p> */}
        </div>
      </div>
    </Skeleton>
  );
};

export default CTAProfiles;
