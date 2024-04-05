"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="video-section py-[46px] flex flex-col gap-7 justify-center items-center">
      <div className="section-header">
        <h1 className="text-xl lg:text-5xl font-bold text-text_primary">
          Awaken to a different World
        </h1>
      </div>
      <div className="video-container w-[83.012vw] h-[260px] lg:h-[70.252vh] relative">
        <ModalVideo
          channel="custom"
          url={"https://dxberienceapi.up.railway.app/v1/images/dxberience.mp4"}
          autoplay
          ratio="9:16"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <Image
          src="/video_background_image.jpg"
          alt="video thumbnail"
          fill
          className="object-cover"
        />
        <div
          className="video-play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/playButton.svg"
            alt="play button"
            width={176.79}
            height={176.79}
            className="w-16 h-16 lg:w-[176.79px] lg:h-[176.79px]"
          />
        </div>
      </div>
      {/* <ReusableButton btnText={"Book a trip now"} /> */}
    </section>
  );
};

export default VideoSection;
