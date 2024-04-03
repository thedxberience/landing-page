"use client";
import React, { useCallback, useState } from "react";
import ReusableButton from "./ReusableButton";
import Image from "next/image";
import { useStore } from "../store/store";
import { motion } from "framer-motion";
import CustomModal from "./CustomModal";
import ReactPlayer from "react-player/lazy";
import { Skeleton } from "@chakra-ui/react";

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

  const [imageLoaded, setImageLoaded] = useState(false);

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
      // console.log("Adding activity", selectedActivity);
      addInterestedActivity(serviceTitle, selectedActivity);
    } else {
      // console.log("Removing activity");
      removeInterestedActivity(serviceTitle);
    }
  };

  const handleServiceTitle = () => {
    let word_split = serviceTitle.split(" ");

    let title = "";
    word_split.forEach((word) => {
      title += `${word.charAt(0).toUpperCase() + word.slice(1)} `;
    });

    return title;
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
      <Skeleton isLoaded={imageLoaded}>
        <div
          onClick={handleSelectActivity}
          className="service-container relative w-[200px] h-[250px] md:w-[240px] lg:w-[240px] xl:w-[16.667vw] md:h-[300px] lg:h-[34.833svh] flex justify-center items-center p-[11.79px] transition-all ease-in-out duration-300 cursor-pointer"
          style={{
            // backgroundImage: `linear-gradient(180deg, rgba(200, 200, 200, 0.1), rgba(0, 0, 0, 0.9)), url(${background})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <Image
            src={background && background}
            alt={serviceTitle}
            width={200}
            height={250}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="w-[200px] h-[250px] object-cover md:w-[240px] lg:w-[240px] xl:w-[16.667vw] md:h-[300px] lg:h-[34.833svh] absolute top-0 left-0"
          />
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(200, 200, 200, 0.1), rgba(0, 0, 0, 0.9))`,
            }}
            className="w-[200px] h-[250px] object-cover md:w-[240px] lg:w-[240px] xl:w-[16.667vw] md:h-[300px] lg:h-[34.833svh] absolute top-0 left-0 z-10"
          ></div>
          <div
            className={`flex flex-col w-full h-full lg:h-[32.603svh] ${
              video ? "justify-between" : "justify-start gap-7"
            } items-center border-[0.59px] z-50 pb-6 border-white`}
          >
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
      </Skeleton>

      <CustomModal
        modalHeader={handleServiceTitle()}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="service-video">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={video}
            controls={true}
            muted={true}
            playing={true}
          />
        </div>
      </CustomModal>
    </motion.div>
  );
};

export default ServiceCard;
