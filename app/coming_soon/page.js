"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../component/TextInput";
import ReusableButton from "../component/ReusableButton";
import Navbar from "../component/Navbar";
import Countdown from "../component/Countdown";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ComingSoon = () => {
  const [apiSuccess, setApiSuccess] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [phone, setPhone] = useState("");
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
      data.phoneNumber = phone;
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
              <div className="phone flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="phone" className="text-xs text-accent-purple">
                  Phone*
                </label>
                <div className="input  w-full saol-display-regular bg-white flex justify-start items-center">
                  <PhoneInput
                    enableSearch={true}
                    inputStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "black",
                    }}
                    dropdownStyle={{ border: "none", color: "black" }}
                    buttonStyle={{
                      backgroundColor: "white",
                      border: "none",
                    }}
                    buttonClass="hover:bg-transparent"
                    country={"ae"}
                    inputProps={{
                      name: "phoneNumber",
                      required: "Enter a number we can reach you on",
                      className:
                        "form-control w-full lg:w-[24.405vw] outline-none bg-transparent border-b px-0 text-black py-4 border-zinc-100",
                    }}
                    onChange={(phone) => {
                      setPhone(phone);
                    }}
                    // {...register("contact.phone", { required: "Enter a number we can reach you on" })}
                    placeholder="+___-___-____"
                  />
                </div>
              </div>
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
