import Image from "next/image";
import React from "react";
import ReusableButton from "./ReusableButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-20 w-full font-poppins">
      <div className="logo relative w-[24.467vw] h-10">
        <Image src="/dxberience_logo.svg" alt="logo" fill />
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex justify-center items-center gap-8">
          <li className="text-text_primary font-medium text-base">
            MEMBERSHIP
          </li>
          <li className="text-text_primary font-medium text-base">EVENTS</li>
          <li className="text-text_primary font-medium text-base">BOOKINGS</li>
        </ul>
      </div>
      <ReusableButton btnText={"BOOK A TRIP NOW"} />
    </nav>
  );
};

export default Navbar;
