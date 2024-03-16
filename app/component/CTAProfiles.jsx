"use client";
import Image from "next/image";
import React from "react";

const CTAProfiles = ({ title, description, image, briefDescription }) => {
  const [profile, setProfile] = React.useState(false);
  return (
    <div className="flex flex-col gap-3 justify-center items-start w-[256px]">
      <div className="profile-image relative w-[256px] h-52">
        {image && <Image src={image} alt={title} fill />}
      </div>
      <div className="profile-details flex flex-col items-start gap-2">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          {profile ? (
            <Image
              src="/heart_bold.svg"
              alt="heart selected"
              width={24}
              height={24}
              onClick={() => setProfile(!profile)}
            />
          ) : (
            <Image
              src="/heart.svg"
              alt="heart"
              width={24}
              height={24}
              onClick={() => setProfile(!profile)}
            />
          )}
        </div>
        <p className="text-text_secondary text-sm font-poppins">
          {description}
        </p>
        <p className="text-text_secondary text-sm font-poppins uppercase">
          {briefDescription}
        </p>
      </div>
    </div>
  );
};

export default CTAProfiles;
