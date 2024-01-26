import React, { useContext } from "react";
import { Project } from "./Project";
import { AppContext } from "../App";
import { Cursor, Typewriter } from "react-simple-typewriter";

export const Projects = () => {
  const { showProjects, setShowProjects } = useContext(AppContext);

  const handleClick = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div
      className={`d-flex flex-col w-[100%] md:w-[70%] mt-[25px] 2xl:mt-[100px] items-center h-[70%] p-[40px] mb-[200px] absolute left-0 -translate-x-full transition-all duration-500 ease-in-out ${
        showProjects ? "translate-x-0" : ""
      }`}
    >
      <div>
        <div className="text-[40px] 2xl:text-[60px] font-bold mt-[20px]">
          My Projects -
        </div>
        <div className="text-[40px] 2xl:text-[60px] font-bold mt-[20px] ml-[10px]"><Typewriter words={['React', 'Python', 'Tailwind CSS', 'PostreSQL', 'Bootstrap', 'React Router', 'Context API', 'Git']} cursor cursorStyle='_' loop={false} /> </div>
      </div>
      <div className="w-full grid grid-cols-1 2xl:grid-cols-2 gap-[20px] md:gap-[20px] xl:gap-[40px] items-center justify-center mt-[40px]">
        <Project
          name="ShelfShare"
          description="Book exchange platform created with React, Flask, PostgreSQL, and Bootstrap."
          repoURL="https://github.com/Jpazda/Jpazda-ShelfShare"
        />
        <Project
          name="6 Letter Wordle"
          description="Wordle for 6 letter words created using React."
          repoURL="https://github.com/Jpazda/Wordle-remake"
        />
        <Project
          name="Messaging App"
          description="Messaging App created using React, React Router, Context API and Google's Firebase Database."
          repoURL="https://github.com/Jpazda/Jpazda-messaging-app"
        />
        <Project
          name="LLMS Landing Page"
          description="Mock landing page created for Lifelong Merchant services using React and Tailwind."
          repoURL="https://github.com/Jpazda/llms-landing-page"
        />
      </div>
      <button
        className="border border-black h-[75px] w-[200px] 
                            rounded-md text-white text-lg 
                            font-semibold bg-black hover:scale-95 mt-[20px] mb-[20px]"
        onClick={handleClick}
      >
        Return to home
      </button>
    </div>
  );
};
