import React from "react";
import CTAProfiles from "./CTAProfiles";
import TextInput from "./TextInput";
import ReusableButton from "./ReusableButton";

const CTAForm = () => {
  const formDetails = [
    {
      title: "Vacation",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_1.jpg",
    },
    {
      title: "Business Travel",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_2.jpg",
    },
    {
      title: "Celebrity Events",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_3.jpg",
    },
    {
      title: "High End Fashion Shows",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_4.jpg",
    },
    {
      title: "VIP Events",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_5.jpg",
    },
    {
      title: "Private Luxury Experience",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_6.jpg",
    },
    {
      title: "Luxury Health Travels",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_7.jpg",
    },
    {
      title: "Luxury Adventure",
      description: "Enjoy the best vacation destinations with your loved ones.",
      briefDescription: "Brief Description",
      image: "/profile_8.jpg",
    },
  ];

  return (
    <div className="px-20 w-full flex justify-center items-center mb-[89px]">
      <div className="CTAProfile-container flex flex-col justify-center items-center mt-16 w-full bg-secondary py-6">
        <div className="CTAProfile-header">
          <h1 className="text-3xl">What profile best suits you?</h1>
        </div>
        <div className="CTAProfiles mt-10">
          {formDetails.map((form, index) => (
            <CTAProfiles key={index} {...form} />
          ))}
        </div>
        <div className="form mt-10 px-10">
          <form>
            <div className="grid grid-cols-2 lg:flex border-gray-200 border bg-white justify-center items-center gap-4 py-5 px-8 rounded-[50px]">
              <TextInput
                label={"Departure Date"}
                name={"departureDate"}
                placeholder={"Pick Date"}
                type="date"
              />
              <TextInput
                label={"Return Date"}
                name={"returnDate"}
                placeholder={"Pick Date"}
                type="date"
              />
              <TextInput
                label={"Number of Travellers"}
                name={"numberOfTravellers"}
                placeholder={"Enter"}
              />
              <TextInput
                label={"Arriving From?"}
                name={"arrivingFrom"}
                placeholder={"Enter"}
              />
              <TextInput
                label={"Minimum Budget"}
                name={"minimumBudget"}
                placeholder={"Select Amount"}
              />
              <TextInput
                label={"Maximum Budget"}
                name={"maximumBudget"}
                placeholder={"Select Amount"}
              />
              <ReusableButton btnText={"GO"} filled={true} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTAForm;
