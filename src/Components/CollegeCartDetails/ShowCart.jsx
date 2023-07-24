import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowCart = ({ item }) => {
  const { _id, image, name, rating, admissiondate, numberofresearch } = item;
  return (
    <div>
      <div className="h-[380px] lg:w-[400px] shadow-lg rounded-xl">
        <img className="w-full h-[200px]" src={image}></img>

        <div className="pl-[20px]">
          <h1 className="text-[16px]">
            <span className="font-semibold text-[18px]">College Name</span>:{" "}
            {name}
          </h1>
          <p className="text-[16px]">
            <span className="font-semibold text-[18px]">Admission Date</span>:
            {admissiondate}
          </p>
          <p className=" flex">
            <span className="font-semibold text-[20px]">Rating</span>:
            <p className="text-[20px] ml-[10px] font-semibold">{rating}</p>
            <FaStar className="text-[20px] ml-[10px] mt-[5px] text-yellow-600"></FaStar>
            <FaStar className="text-[20px] ml-[10px] mt-[5px] text-yellow-600"></FaStar>
            <FaStar className="text-[20px] ml-[10px] mt-[5px] text-yellow-600"></FaStar>
            <FaStar className="text-[20px] ml-[10px] mt-[5px] text-yellow-600"></FaStar>
            <FaStar className="text-[20px] ml-[10px] mt-[5px] text-yellow-600"></FaStar>
          </p>
          <p>
            <span className="font-semibold text-[18px]">Research</span>:
            {numberofresearch}
          </p>
        </div>
        <div className="absolute  ml-[150px]">
          <Link to={`/items/${_id}`}>
            <button className="btn btn-info ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
