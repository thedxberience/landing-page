import React from "react";
import ReusableButton from "./ReusableButton";

const ServiceCard = ({ background }) => {
  return (
    <div
      className="service-container w-[28.264vw] h-[58.257svh] flex justify-center items-center mb-24"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="flex flex-col h-[306px] justify-between items-center">
        <h2 className="text-text_primary_light text-3xl">Service Package</h2>
        <p className="service-caption transition-transform text-text_primary_light text-center max-w-full p-3">
          A concierge is traditionally associated with assisting guests in
          hotels, but luxury concierge services expand beyond that scope.
        </p>
        <ReusableButton
          background="bg-white"
          filled={false}
          btnText={"View More"}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
