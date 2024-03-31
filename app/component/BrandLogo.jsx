import React from "react";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <div className="logo relative w-[24.467vw] h-10 mt-5 ">
      <Image src="/dxberience_logo.svg" alt="logo" fill />
    </div>
  );
};

export default BrandLogo;
