import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Review = () => {
  const [card, setcard] = useState([]);
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/CollegeCard")
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-semibold text-center mt-[20px]">
          Review
        </h1>

        <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 lg:ml-[100px] gap-[100px]">
          {card.map((item) => (
            <ReviewDetails key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
