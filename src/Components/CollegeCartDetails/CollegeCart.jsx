import React, { useEffect, useState } from "react";
import ShowCart from "./ShowCart";

const CollegeCart = () => {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    fetch("https://book-college-server-beta.vercel.app/CollegeCard")
      .then((res) => res.json())
      .then((data) => setcart(data));
  }, []);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-[20px] lg:ml-[100px] mt-[50px]">
        {cart.map((item) => (
          <ShowCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollegeCart;
