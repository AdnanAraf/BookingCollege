import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const [identify, setidentify] = useState({});
  const { _id } = useParams();
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/BookingCard")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const founddata = data.find((job) => job._id == _id);
        // console.log(founddata);
        setidentify(founddata);
      });
  }, []);
  return (
    <div>
      <div>
        <img className="m-auto mt-[20px] w-[800px]" src={identify.image}></img>
        <h1 className="text-[20px] font-semibold text-center mt-[20px]">
          College Name:
          <span className="text-[18px] font-normal">{identify.name}</span>
        </h1>
        <h1 className="w-[800px] m-auto mt-[20px] font-semibold text-[18px]">
          Admission Process:
          <p className="m-auto font-normal ">{identify.admissionprocess}</p>
        </h1>
        <h1 className="w-[800px] m-auto mt-[20px] font-semibold text-[18px]">
          Event Details:
          <p className="font-normal ">{identify.eventsdetails}</p>
        </h1>
        <h1 className="w-[800px] m-auto mt-[20px] font-semibold text-[18px]">
          Research Works:
          <p className="font-normal ">{identify.researchwork}</p>
        </h1>
      </div>
    </div>
  );
};

export default CardDetails;
