import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles

const ReviewDetails = ({ item }) => {
  const { image, name, rating, feedback } = item;
  return (
    <div className="h-[530px] lg:w-[400px] bg-white shadow-2xl mt-[20px]">
      <div>
        <img className="h-[200px] lg:w-[400px] w-full" src={image}></img>
        <h1 className="text-center text-[30px] font-semibold">{name}</h1>
        <h1 className="w-[300px] font-semibold text-[18px] m-auto">
          Feedback:
          <span className="font-normal">{feedback}</span>
        </h1>
        <h1 className="font-semibold mt-[20px] ml-[50px] text-[20px]">
          Rating:<span className="font-normal ml-[10px]">{rating}</span>
        </h1>
      </div>
    </div>
  );
};

export default ReviewDetails;
