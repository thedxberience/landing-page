import React from "react";
import Image from "next/image";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-8 justify-center items-center bg-primary">
      <BrandLogo />
      <div className="footer-items w-full flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-xl w-full lg:text-4xl text-center text-white">
            Find Your Adventure
          </h1>
        </div>
      </div>
      <div className="contact-details flex justify-evenly border-white border-y py-8 items-center w-full">
        <div className="flex flex-col w-6/12 gap-5 justify-center items-center">
          <h1 className="font-medium text-text_primary_light">CALL US</h1>
          <p className="text-text_primary_light text-lg  lg:text-4xl font-medium">
            <a href="tel:+971 4 123 4567" target="_blank">
              +971 4 123 4567
            </a>
          </p>
        </div>
        <div className="h-[152.01px] w-0 border border-white lg:rotate-0"></div>
        <div className="flex flex-col w-6/12 gap-5 justify-center items-center">
          <h1 className="font-medium text-text_primary_light">EMAIL US</h1>
          <p className="text-text_primary_light text-lg lg:text-4xl font-medium">
            <a href="mailto:dxberience@email.com" target="_blank">
              dxberience@email.com
            </a>
          </p>
        </div>
      </div>
      <div className="social-media flex justify-center items-center gap-4">
        <Image
          src="/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/youtube.svg"
          alt="twitter"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/twitter.svg"
          alt="twitter"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/linkedin.svg"
          alt="twitter"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
      <div className="footer-bottom w-full flex justify-center items-center gap-8 pb-8">
        <p className="text-text_primary_light font-poppins text-base font-normal">
          © 2024 DXberience. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
