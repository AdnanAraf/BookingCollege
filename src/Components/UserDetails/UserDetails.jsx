import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserDetailsUpdate from "./UserDetailsUpdate";

const UserDetails = () => {
  const [booking, setbooking] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const { user } = useContext(AuthContext);
  const url = `https://book-college-server-beta.vercel.app/Booking/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbooking(data));
  }, [user]);
  return (
    <div>
      <div>
        {booking.map((item) => (
          <UserDetailsUpdate key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
