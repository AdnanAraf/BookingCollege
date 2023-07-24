import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:flex lg:justify-between   bg-black lg:h-[100px] h-[200px]">
      <div className="mt-[10px]">
        <h1 className="text-white text-[30px] mx-[100px]">ElearningCollege</h1>
      </div>
      <div className="mt-[20px] lg:mt-[0px]">
        <Link
          className="lg:p-[30px] p-[50px]   text-white text-[18px] hover:text-red-600"
          to="/"
        >
          Home
        </Link>
        <Link
          className="lg:p-[30px] text-white text-[18px] hover:text-red-600"
          to="college"
        >
          Colleges
        </Link>
        <Link
          className="lg:p-[30px] text-white text-[18px] hover:text-red-600 lg:ml-[0px] ml-[20px]"
          to="admission"
        >
          Admission
        </Link>
        <Link
          className="lg:p-[10px] text-white text-[18px] hover:text-red-600 lg:ml-[0px] ml-[20px]"
          to="mycollege"
        >
          My College
        </Link>
        {user?.email ? (
          <>
            {/* <Link className="lg:p-[20px]" to="/My Toys">
              My Toys
            </Link> */}
            <div
              className="tooltip mt-[30px] lg:ml-[0px] ml-[20px]"
              data-tip={user?.email}
            >
              {/* <button className="btn">Hover me</button> */}
              <Link to="user">
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Link>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-success mx-[30px]"
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="lg:p-[20px] lg:ml-[0px] ml-[20px]" to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
