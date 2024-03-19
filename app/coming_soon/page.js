import React from "react";
import TextInput from "../component/TextInput";
import ReusableButton from "../component/ReusableButton";
import Navbar from "../component/Navbar";
import Countdown from "../component/Countdown";

const ComingSoon = () => {
  return (
    <main className="coming_soon flex min-h-screen max-w-full flex-col items-center justify-between">
      <div className="w-[90vw] flex flex-col justify-between items-center h-[80svh] lg:h-[70svh]">
        <Navbar />
        <h2 className="text-3xl lg:text-5xl w-[80vw] text-center">
          This page is under construction. Please check back in:
          <Countdown />
        </h2>
        <div className="flex flex-col justify-between items-center gap-5 w-[50vw]">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 w-full">
            <TextInput placeholder="Enter your name" label={"Name"} />
            <TextInput placeholder="Enter your number" label={"Phone Number"} />
          </div>
          <TextInput placeholder="Enter your email" label={"Email"} />
          <ReusableButton btnText={"Notify Me"} />
        </div>
      </div>
    </main>
  );
};

// +971585023479

export default ComingSoon;
