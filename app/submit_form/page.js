"use client";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ServiceCard from "../component/ServiceCard";
import { useStore, useAPIStore } from "../store/store";
import TextInput from "../component/TextInput";
import { useForm } from "react-hook-form";
import ReusableButton from "../component/ReusableButton";
import { useRouter } from "next/navigation";
import Carousel from "../component/Carousel";
import useEmblaCarousel from "embla-carousel-react";
import CustomPhoneInput from "../component/PhoneInput";
import { useMutation, useQueryClient } from "react-query";
import BrandLogo from "../component/BrandLogo";

const Page = () => {
  const { selectedactivityList, serviceType, interestedActivities } = useStore(
    (state) => state
  );
  const { submitLead } = useAPIStore((state) => state);
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isLoading, error } = useMutation({
    mutationKey: "submit_lead",
    mutationFn: async (data) => {
      const request = await submitLead(data);
      return request;
    },
  });

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

  const handleSubmitForm = async (data) => {
    const apiData = {
      ...data,
      phoneNumber: phone,
      profile: serviceType,
      activities: interestedActivities.toString(),
    };

    try {
      console.log(apiData);
      await mutateAsync(apiData);
      router.push("/submit_form/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-secondary">
      <Navbar logoColor="black" />
      <div className="flex pb-4 flex-col items-center justify-center gap-8">
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
                      serviceTitle={activity.name}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <p className="text-lg font-poppins pt-5">
            want to select more activites?{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => router.push("/")}
            >
              go home
            </span>
          </p>
        </div>
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
        <form className="" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="grid w-[70vw] gap-6  grid-cols-1 lg:grid-cols-2 mb-10">
            <TextInput
              register={register}
              error={errors.firstName}
              placeholder={"Enter your first name"}
              name={"firstName"}
              label="First Name"
            />
            <TextInput
              register={register}
              error={errors.lastName}
              placeholder={"Enter your last name"}
              name={"lastName"}
              label="Last Name"
            />
            <TextInput
              register={register}
              error={errors.email}
              placeholder={"Enter your email"}
              name={"email"}
              label="Email"
            />
            <CustomPhoneInput setPhone={setPhone} />
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-fit">
              <ReusableButton btnText={"Complete Registration"} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
