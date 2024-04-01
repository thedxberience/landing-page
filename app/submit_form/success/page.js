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
    <div className="bg-secondary h-screen flex justify-center items-center flex-col gap-5">
      <Navbar logoColor="black" />

      <div className="flex justify-center items-center">
        <h1 className="text-xl lg:text-5xl">Thank you!</h1>

        <p>
          We have received your contact and our sales rep will reach out to you
          in less than 48hrs.
        </p>

        <ReusableButton btnText={"Go Home"} onClick={handleBackClick} />
      </div>
    </div>
  );
};

export default page;
