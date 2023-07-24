import React, { useEffect, useState } from "react";
import ShowingCard from "./ShowingCard";

const CollegeCard = () => {
  const [card, setcard] = useState([]);
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/BookingCard")
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-[40px] mt-[20px] font-semibold">
        Our College
      </h1>

      <div className="lg:grid lg:grid-cols-3  lg:mt-[30px] lg:ml-[100px]">
        {card.map((item) => (
          <ShowingCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
