import React from "react";
import StarRatings from "./StarRatings";

const RatingsCard = ({ star, ratingAuthor, ratingDescription }) => {
  return (
    <div className="bg-[#FFE3C2] rating-card p-5 max-w-full lg:w-[398px]">
      <div className="flex flex-col justify-center items-center gap-5 border-gray-300 border p-4">
        <StarRatings star={star} />
        <div className="rating-info flex flex-col justify-center gap-5 items-center">
          <p className="text-center">{ratingDescription}</p>
          <p className="rating-name font-sacramento">{ratingAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsCard;
