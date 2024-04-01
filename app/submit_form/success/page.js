"use client";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import ReusableButton from "@/app/component/ReusableButton";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-secondary h-screen flex justify-between items-center flex-col gap-5">
      <Navbar logoColor="black" />

      <div className="flex justify-center gap-12 items-center flex-col h-full">
        <h1 className="text-2xl lg:text-5xl">Thank you!</h1>

        <p className="text-lg text-center p-2">
          We have received your contact and our sales rep will reach out to you
          in less than 48hrs.
        </p>

        <ReusableButton btnText={"Go Home"} onClick={handleBackClick} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
