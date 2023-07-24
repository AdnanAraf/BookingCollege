import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="text-5xl text-center items-center justify-center mt-48 text-Red-400 font-bold">
      <img
        className="w-[600px] h-[600px] m-auto"
        src="https://i.ibb.co/H43wVcC/pizza-empty-state-error-404-flat-illustration-288067-137.jpg"
      ></img>
      <p className="">Sorry Bro!</p>
      <p>You clicked wrong one</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
