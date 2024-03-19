"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../component/TextInput";
import ReusableButton from "../component/ReusableButton";
import Navbar from "../component/Navbar";
import Countdown from "../component/Countdown";
import { useForm } from "react-hook-form";

const ComingSoon = () => {
  const [apiSuccess, setApiSuccess] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    setApiLoading(true);
    const url = "https://dxberienceapi.up.railway.app/v1/subscribe";
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(data);
    try {
      const request = await fetch(url, headers, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await request.json();
      setApiSuccess(true);
      setApiLoading(false);
    } catch (error) {
      setApiSuccess(false);
      console.log(error);
      setApiLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setApiSuccess(false);
    }, 5000);
  }, [apiSuccess]);

  return (
    <main className="coming_soon flex min-h-screen max-w-full flex-col items-center justify-between">
      <div className="w-[90vw] flex flex-col justify-between items-center h-[90svh] lg:h-[70svh]">
        <Navbar />
        <h2 className="text-3xl lg:text-5xl w-[80vw] text-center">
          This site is under construction. Please check back in:
          <Countdown />
        </h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <h3 className="text-2xl lg:text-3xl w-full mb-5 text-center">
            Notify me when the site is live
          </h3>
          {apiSuccess && (
            <div className="w-full p-3 rounded-md">
              <p className="text-text_primary text-center">
                Thank you for subscribing. We will notify you when the site is
                live.
              </p>
            </div>
          )}
          <div className="flex flex-col justify-between items-center gap-5 w-full lg:w-[50vw]">
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 w-full">
              <TextInput
                register={register}
                error={errors?.name}
                name={"name"}
                placeholder="Enter your name"
                label={"Name"}
              />
              <TextInput
                register={register}
                error={errors?.phoneNumber}
                name={"phoneNumber"}
                placeholder="Enter your number"
                label={"Phone Number"}
              />
            </div>
            <TextInput
              register={register}
              error={errors.email}
              required={true}
              name={"email"}
              placeholder="Enter your email"
              label={"Email"}
            />
            <ReusableButton btnText={"Notify Me"} loading={apiLoading} />
          </div>
        </form>
      </div>
    </main>
  );
};

// +971585023479

export default ComingSoon;
