"use client";
import React, { useCallback, useState } from "react";
import ReusableButton from "./ReusableButton";
import Image from "next/image";
import { useStore } from "../store/store";
import { motion } from "framer-motion";
import CustomModal from "./CustomModal";
import ReactPlayer from "react-player/lazy";

const ServiceCard = ({
  index,
  background,
  description,
  video,
  serviceTitle,
}) => {
  const {
    interestedActivities,
    addInterestedActivity,
    removeInterestedActivity,
  } = useStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckSelected = useCallback(() => {
    return interestedActivities.includes(serviceTitle);
  }, [interestedActivities]);

  const handleSelectActivity = () => {
    const selectedActivity = {
      name: serviceTitle,
      description: description,
      image: background,
    };
    if (!handleCheckSelected()) {
      console.log("Adding activity", selectedActivity);
      addInterestedActivity(serviceTitle, selectedActivity);
    } else {
      console.log("Removing activity");
      removeInterestedActivity(serviceTitle);
    }
    // setSelected(handleCheckSelected());
    console.log(
      interestedActivities,
      interestedActivities.includes(serviceTitle)
    );
  };

  const handleServiceTitle = () => {
    let word_split = serviceTitle.split(" ");
    let first_word = word_split[0];
    let second_word = word_split[1];

    first_word = first_word.charAt(0).toUpperCase() + first_word.slice(1);

    if (second_word) {
      second_word = second_word.charAt(0).toUpperCase() + second_word.slice(1);
      return `${first_word} ${second_word}`;
    }

    return first_word;
  };

  return (
    <motion.div
      className="overflow-hidden"
      initial={{
        opacity: 0,
        y: -5 * index,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
      }}
    >
      <div
        onClick={handleSelectActivity}
        className="service-container w-[200px] h-[250px] md:w-[240px] lg:w-[240px] xl:w-[16.667vw] md:h-[300px] lg:h-[34.833svh] flex justify-center items-center p-[11.79px] transition-all ease-in-out duration-300 cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(200, 200, 200, 0.1), rgba(0, 0, 0, 0.9)), url(${background})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="flex flex-col w-full h-full lg:h-[32.603svh] justify-between items-center border-[0.59px] pb-6 border-white">
          <div className="checkbox w-full flex justify-end items-center p-1">
            {handleCheckSelected() ? (
              <Image
                src="/checkbox_select.svg"
                alt="checkbox"
                width={19}
                height={19}
              />
            ) : (
              <Image
                src="/checkbox_empty.svg"
                alt="checkbox"
                width={19}
                height={19}
              />
            )}
          </div>
          <h2 className="text-text_primary_light text-center text-xl">
            {handleServiceTitle()}
          </h2>
          <p className="service-caption transition-transform text-text_primary_light text-center max-w-full p-3">
            {description}
          </p>
          {video && (
            <button onClick={() => setIsModalOpen(true)}>
              <Image
                src="/watch_button.svg"
                alt="arrow"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </button>
          )}
        </div>
      </div>
      <CustomModal
        modalHeader={handleServiceTitle()}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={video}
          controls={true}
          muted={true}
          playing={true}
        />
      </CustomModal>
    </motion.div>
  );
};

export default ServiceCard;
