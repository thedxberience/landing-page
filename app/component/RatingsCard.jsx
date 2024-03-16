import React from "react";
import StarRatings from "./StarRatings";

const RatingsCard = ({ star, ratingAuthor, ratingDescription }) => {
  return (
    <div className="bg-[#F1F1F1] p-5 max-w-full w-[398px]">
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
