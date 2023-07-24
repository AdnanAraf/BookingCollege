import React from "react";
import { Link } from "react-router-dom";

const ShowingCard = ({ item }) => {
  console.log(item);
  const { _id, name, image, admissiondate, events, researchhistory, sports } =
    item;

  return (
    <div>
      <div className="lg:h-[580px] h-[600px] mt-[20px] lg:mt-[0px]  lg:w-[400px] shadow-2xl rounded-xl relative overflow-hidden">
        <div>
          <img className="h-[250px] lg:w-full" src={image}></img>
        </div>
        <div className="pl-[20px]">
          <h1 className="text-[16px]">
            <span className="font-semibold text-[18px]">College Name</span>:{" "}
            {name}
          </h1>
          <p className="text-[16px]">
            <span className="font-semibold text-[18px]">Admission Date</span>:
            {admissiondate}
          </p>
          <p className="text-[16px]">
            <span className="font-semibold text-[20px]">Events</span>: {events}
          </p>
          <p>
            <span className="font-semibold text-[18px]">Research</span>:
            {researchhistory}
          </p>
          <p className="text-[16px]">
            <span className="font-semibold text-[18px]">Sports</span>: {sports}
          </p>
        </div>
      </div>
      <div className="absolute mt-[-50px] ml-[150px]">
        <Link to={`/item/${_id}`}>
          <button className="btn btn-info ">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowingCard;
