import React, { useEffect, useState } from "react";
import MyCollegeDetails from "./MyCollegeDetails";

const MyCollege = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/CollegeCard")
      .then((res) => res.json())
      .then((data) => setmydata(data));
  }, []);
  return (
    <div>
      <div>
        {mydata.map((item) => (
          <MyCollegeDetails key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
