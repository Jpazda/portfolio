import React from "react";
import flask from "../assets/flask-logo.png";
import bootstrap from "../assets/bootstrap logo.png";
import postgreSQL from "../assets/postreSQL.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind logo.png";

export const Header = () => {
  return (
    <div className="md:h-[40px] 2xl:h-[70px] d-flex flex-row items-center justify-around w-screen p-[10px] md:p-[40px] 2xl:p-[75px]">
      <div className="d-flex flex-col md:flex-row items-center md:gap-[25px]">
        <div className="text-[20px] md:text-[40px] 2xl:text-[65px] d-flex font-extrabold">John Pazda</div>
        <p className="text-[10px] md:text-[25px] font-semibold">-Software Developer</p>
      </div>
        <img
          src={react}
          alt=""
          className="h-[24px] md:h-[50px] rounded-md shadow-md shadow-black"
        />
        <img
          src={flask}
          alt=""
          className="h-[24px] md:h-[50px] rounded-md shadow-md shadow-black"
        />
        <img
          src={postgreSQL}
          alt=""
          className="h-[24px] md:h-[50px] rounded-md shadow-md shadow-black"
        />
        <img
          src={bootstrap}
          alt=""
          className="h-[24px] md:h-[50px] rounded-md shadow-md shadow-black"
        />
        <img
          src={tailwind}
          alt=""
          className="h-[24px] md:h-[50px] rounded-md shadow-md shadow-black"
        />
    </div>
  );
};
