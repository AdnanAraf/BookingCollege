import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartDetails = () => {
  const [identify1, setidentify1] = useState({});
  const { _id } = useParams();
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/CollegeCard")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const founddata = data.find((job) => job._id == _id);
        // console.log(founddata);
        setidentify1(founddata);
      });
  }, []);
  return (
    <div>
      <div>
        <img className="m-auto mt-[20px] w-[800px]" src={identify1.image}></img>
      </div>
      <div>
        <h1 className="w-[800px] m-auto mt-[20px] font-semibold text-[18px]">
          Event Facilities:
          <p className="m-auto font-normal ">{identify1.admissionprocess}</p>
        </h1>
        <h1 className="w-[800px] m-auto mt-[20px] font-semibold text-[18px]">
          Sports Facilities:
          <p className="m-auto font-normal ">{identify1.sportsfacilities}</p>
        </h1>
      </div>
    </div>
  );
};

export default CartDetails;
