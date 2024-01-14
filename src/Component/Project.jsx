import React from "react";

export const Project = ({ name, description, repoURL }) => {
  const handleClick = () => {
    window.open(repoURL, "_blank");
  };
  return (
    <div
      className="d-flex justify-self-center flex-col items-center justify-center w-[400px] h-[100px] xl:w-[300] xl:h-[150] bg-[#d1d0d9] p-[10px] border border-black rounded-md hover:scale-95"
      onClick={handleClick}
    >
      <p className="text-2xl font-bold mb-[8px]">{name}</p>
      <p className="d-flex text-center justify-center">{description}</p>
    </div>
  );
};
