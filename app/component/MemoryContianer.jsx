import Image from "next/image";
import React from "react";

const MemoryContainer = ({ star = 4 }) => {
  return (
    <div
      style={{
        backgroundImage: `url(/memoryBG.jpeg)`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
      }}
      className="w-[175px] lg:w-[407px] h-[218px] lg:h-[508px] p-2 lg:p-5 flex flex-col items-start justify-start gap-4 z-10 relative"
    >
      <div className="overlay-container flex flex-col justify-end border-white border w-full h-full relative p-1 lg:p-3">
        {/* <Image src="/memories.png" alt="memory" fill /> */}
        <div className="overlay absolute w-8 h-8 lg:w-[74px] lg:h-[74px] bottom-6 right-3 justify-center items-center">
          <Image
            src="/memory_view.svg"
            alt="play"
            fill
            className="object-contain"
          />
        </div>
        <div className="memory-details w-full">
          <h1 className="text-sm lg:text-2xl">La casa de papel</h1>
          <div className="date font-poppins text-xs lg:text-sm">
            <p className="">14th - 15th, MAY</p>
            <p className="location">Los Angeles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryContainer;
