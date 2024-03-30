"use client";
import React, { useCallback, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ServiceCard from "../component/ServiceCard";
import { useStore } from "../store/store";
import TextInput from "../component/TextInput";
import { useForm } from "react-hook-form";
import ReusableButton from "../component/ReusableButton";
import { useRouter } from "next/navigation";
import Carousel from "../component/Carousel";
import useEmblaCarousel from "embla-carousel-react";

const Page = () => {
  const { selectedactivityList } = useStore((state) => state);
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleRedirect = useCallback(() => {
    if (selectedactivityList.length === 0) {
      router.push("/");
    }
    console.log("redirecting to home");
  }, [selectedactivityList]);

  useEffect(() => {
    handleRedirect();
  }, [selectedactivityList]);

  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="flex pb-4 flex-col items-center justify-center gap-8">
        {/* <h1 className="text-2xl lg:text-5xl  text-text_primary pb-16">
          Hello there, How can we help you?
        </h1> */}
        <div className="selected-activities flex flex-col justify-start items-center">
          <h2 className="text-xl lg:text-3xl pb-2">Activities you selected</h2>
          <div className="services-container flex h-fit justify-center relative items-center gap-8 mt-8 w-full">
            <Carousel emblaRef={emblaRef}>
              {selectedactivityList.map((activity, index) => {
                return (
                  <div className="embla__slide z-10" key={index}>
                    <ServiceCard
                      index={index}
                      background={activity.image}
                      description={activity.description}
                      serviceTitle={activity.title}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <p className="text-lg font-poppins pt-5">
            want to select more activites{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => router.push("/")}
            >
              Go Back Home
            </span>
          </p>
        </div>
        <form className="grid w-[70vw] gap-6 gap-y-8 grid-cols-1 lg:grid-cols-2 mb-10">
          <TextInput
            register={register}
            name={"firstName"}
            label="First Name"
          />
          <TextInput register={register} name={"lastName"} label="Last Name" />
          <TextInput register={register} name={"email"} label="Email" />
          <TextInput
            register={register}
            name={"phoneNumber"}
            label="Phone Number"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
