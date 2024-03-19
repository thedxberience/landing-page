import Image from "next/image";
import React from "react";
import ReusableButton from "./ReusableButton";
const Navbar = () => {
  const filled = true;
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-2 lg:px-20 w-full font-poppins">
        <div className="logo relative w-[120px] lg:w-[24.467vw] h-10">
          <Image src="/dxberience_logo.svg" alt="logo" fill />
        </div>
        {/* <div className="flex items-center space-x-4">
          <ul className="flex justify-center items-center gap-8">
            <li className="text-text_primary font-medium text-base">
              MEMBERSHIP
            </li>
            <li className="text-text_primary font-medium text-base">EVENTS</li>
            <li className="text-text_primary font-medium text-base">
              BOOKINGS
            </li>
          </ul>
        </div> */}
        {/* <ReusableButton btnText={"Contact Us"} /> */}
        <a
          href="https://api.whatsapp.com/send/?phone=%2B971585023479&text=Hello+there%2C+I+am+interested+in+a+luxury+concierge+service+in+Dubai&type=phone_number&app_absent=0"
          target="_blank"
        >
          <button
            className={`flex justify-center w-full items-center lg:gap-3 font-medium text-sm p-2 px-3 text-center lg:text-base rounded-3xl font-poppins lg:p-3 lg:pl-6 uppercase ${
              filled
                ? "bg-primary text-text_primary_light"
                : ` ${background} text-text_primary border border-primary`
            }`}
          >
            Contact Us
            <span>
              <Image
                src={`${"/buttonIcon.svg"}`}
                className={`${"text-text_primary"} hidden lg:flex w-6 h-6`}
                alt="arrow"
                width={24}
                height={24}
              />
            </span>
          </button>
        </a>
      </nav>
      {/* <nav className="flex lg:hidden flex-col justify-between items-center py-6 px-20 w-full font-poppins">
        <div className="flex w-full justify-between items-center">
          <div className="logo relative w-[176.17px] h-5">
            <Image src="/dxberience_logo.svg" alt="logo" fill />
          </div>
          <div className="hamburger-menu w-7 h-7 relative">
            <Image src="/menu.svg" alt="hamburger" fill />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-8 font-poppins">
            <li className="text-text_primary font-medium text-sm">
              MEMBERSHIP
            </li>
            <li className="text-text_primary font-medium text-sm">EVENTS</li>
            <li className="text-text_primary font-medium text-sm">BOOKINGS</li>
          </ul>
          <ReusableButton
            btnText={"BOOK A TRIP"}
            filled={false}
            background={"bg-white"}
          />
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
