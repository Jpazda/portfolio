import React from "react";
import flask from "../assets/flask-logo.png";
import bootstrap from "../assets/bootstrap logo.png";
import postgreSQL from "../assets/postreSQL.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind logo.png";

export const Footer = () => {
  return (
    <div className="h-[100px] d-flex flex-row items-center justify-between w-screen p-[50px] fixed bottom-0">
      <img
        src={react}
        alt=""
        className="h-[50px] rounded-md shadow-md shadow-black"
      />
      <img
        src={flask}
        alt=""
        className="h-[50px] rounded-md shadow-md shadow-black"
      />
      <img
        src={postgreSQL}
        alt=""
        className="h-[50px] rounded-md shadow-md shadow-black"
      />
      <img
        src={bootstrap}
        alt=""
        className="h-[50px] rounded-md shadow-md shadow-black"
      />
      <img
        src={tailwind}
        alt=""
        className="h-[50px] rounded-md shadow-md shadow-black"
      />
    </div>
  );
};
