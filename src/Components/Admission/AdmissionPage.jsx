import React from "react";
import { Link } from "react-router-dom";

const AdmissionPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[30px]">Some College Name</h1>
      </div>
      <div className="mt-[30px]">
        <Link to="college">
          <h1 className="text-center mt-[15px]">1.Oxford College</h1>

          <h1 className="text-center mt-[15px]">2.College of Toronto</h1>
          <h1 className="text-center mt-[15px]">3.College of Melbourne</h1>
          <h1 className="text-center mt-[15px]">4.College of Tokyo </h1>
          <h1 className="text-center mt-[15px]">5.College of California</h1>
          <h1 className="text-center mt-[15px]">6.College of Cambridge</h1>
        </Link>
      </div>
    </div>
  );
};

export default AdmissionPage;
