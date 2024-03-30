"use client";
import Image from "next/image";
import React from "react";
import { useStore } from "../store/store";

const CTAProfiles = ({
  index,
  title,
  description,
  image,
  briefDescription,
}) => {
  const { serviceType, setServiceType } = useStore((state) => state);
  const [profile, setProfile] = React.useState(false);

  const handleSelectService = () => {
    setServiceType(title);
  };
  return (
    <div
      onClick={handleSelectService}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(168, 168, 168, 0), rgba(0, 0, 0, 0.8)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        animationDelay: `${index * 100}ms`,
      }}
      className={`"CTACard flex flex-col gap-3 p-4 lg:p-8 text-white justify-end items-start w-full h-[204px] lg:h-[50.239svh] hover:border hover:border-white hover:shadow-lg transition-all duration-100 ease-in cursor-pointer" ${
        serviceType == title ? "border border-white shadow-lg" : ""
      }`}
    >
      {/* <div className="profile-image relative w-full h-[48.165vh]">
        {image && (
          <Image
            src={image}
            alt={title}
            className="object-cover object-center"
            fill
          />
        )}
      </div> */}
      <div className="profile-details flex flex-col items-start gap-2 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-sm lg:text-xl font-bold">{title}</h1>
          {serviceType == title ? (
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
  );
};

export default CTAProfiles;
