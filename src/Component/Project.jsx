import React from "react";

export const Project = ({ name, description, repoURL }) => {
  const handleClick = () => {
    window.open(repoURL, "_blank");
  };
  return (
    <div
      className="d-flex justify-self-center flex-col items-center justify-center w-[275px] h-[80px] md:w-[425px] md:h-[100px] xl:w-[300] xl:h-[150] text-white bg-[#144f5d] p-[20px] border-2 rounded-[30px] md:rounded-[40px] border-white hover:scale-95 cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-[15px] md:text-2xl font-bold mb-[8px]">{name}</p>
      <p className="text-[10px] d-flex text-center justify-center">{description}</p>
    </div>
  );
};
