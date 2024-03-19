import Image from "next/image";
import React from "react";

const ReusableButton = ({
  btnText,
  background = "bg-transparent",
  filled = true,
}) => {
  return (
    <div>
      <button
        className={`flex justify-center w-full items-center gap-3 font-medium text-base rounded-3xl font-poppins p-3 pl-6 uppercase ${
          filled
            ? "bg-primary text-text_primary_light"
            : ` ${background} text-text_primary border border-primary`
        }`}
      >
        {btnText}
        <span>
          <Image
            src={`${filled ? "/buttonIcon.svg" : "/buttonIconDark.svg"}`}
            className={`${
              filled ? "text-text_primary_light" : "text-text_primary"
            } w-6 h-6`}
            alt="arrow"
            width={24}
            height={24}
          />
        </span>
      </button>
    </div>
  );
};

export default ReusableButton;
