import Image from "next/image";
import React from "react";

const MemoryContainer = ({ star = 4 }) => {
  return (
    <div className="w-[28.264vw] flex flex-col items-start justify-start gap-4 z-10">
      <div className="overlay-container w-[25.264vw] h-[508px] relative">
        <Image src="/memories.png" alt="memory" fill />
        <div className="overlay absolute w-[6.944vw] h-[11.468vh] bottom-12 right-8 justify-center items-center">
          <Image
            src="/memory-view.png"
            alt="play"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="memory-details w-full">
        <h1 className="text-2xl">La casa de papel</h1>
        <div className="star-ratings flex gap-[9px] justify-start items-center">
          {Array(5)
            .fill()
            .map((_, i) =>
              i < star ? (
                <Image
                  src="/star-filled.svg"
                  alt="star"
                  width={24}
                  height={24}
                  key={i}
                />
              ) : (
                <Image
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  key={i}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default MemoryContainer;
