import React, { useContext } from "react";
import { Project } from "./Project";
import { AppContext } from "../App";

export const Projects = () => {
  const { showProjects, setShowProjects } = useContext(AppContext);

  const handleClick = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div
      className={`d-flex flex-col w-[70%] mt-[25px] 2xl:mt-[100px] items-center h-[70%] p-[40px] mb-[200px] absolute left-0 -translate-x-full transition-all duration-500 ease-in-out ${
        showProjects ? "translate-x-0" : ""
      }`}
    >
      <div className="text-[40px] 2xl:text-[60px] font-bold mt-[20px]">My Projects</div>
      <div className="w-full grid grid-cols-1 2xl:grid-cols-2 gap-[40px] items-center justify-center mt-[40px]">
        <Project
          name="ShelfShare"
          description="Book exchange platform created with React, Flask, PostgreSQL, and Bootstrap"
          repoURL="https://github.com/Jpazda/Jpazda-ShelfShare"
        />
        <Project
          name="6 Letter Wordle"
          description="Recreated Wordle for words with 6 letters"
          repoURL="https://github.com/Jpazda/Wordle-remake"
        />
        <Project
          name="LLMS Landing Page"
          description="Book exchange platform created with React, Flask, PostgreSQL, and Bootstrap"
          repoURL="https://github.com/Jpazda/llms-landing-page"
        />
        <Project
          name="Messaging App"
          description="Book exchange platform created with React, Flask, PostgreSQL, and Bootstrap"
          repoURL="https://github.com/Jpazda/Jpazda-messaging-app"
        />
      </div>
      <button
        className="border border-black h-[75px] w-[200px] 
                            rounded-md text-white text-lg 
                            font-semibold bg-black hover:scale-95 mt-[50px] mb-[20px]"
        onClick={handleClick}
      >
        Return to home
      </button>
    </div>
  );
};
