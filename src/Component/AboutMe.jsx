import React, { useContext } from "react";
import { AppContext } from "../App";

export const AboutMe = () => {
  const { showProjects, setShowProjects } = useContext(AppContext);

  const handleClick = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="d-flex flex-col w-[50%] items-center justify-around mt-[100px] 2xl:mt-[200px] h-[40%] p-[40px] gap-[40px] ease-in duration-500">
      <div className="text-[60px] font-bold mt-[20px]"> About me</div>
      <p className="text-xl">
        I'm a full stack developer with experience in HTML, CSS, React,
        Javascript, Python Flask, PostgreSQL, Tailwind CSS, Bootstrap,
        Agile/Scrum, Git, Tableau and Jira. I studied Finance in college, and
        haved worked in Accounting/Finance for the first 5 years of my career.
        Though I have enjoyed the people and companies I've worked for, I
        realized that creating Excel spreadsheets and Profit and Loss reports
        are not my passion. I have decided to make the switch to something I am
        much more passionate about, software developing.
      </p>
      <button
        className="border border-black h-[75px] w-[200px] 
                            rounded-md text-white text-lg 
                            font-semibold bg-black hover:scale-95"
        onClick={handleClick}
      >
        View my work
      </button>
    </div>
  );
};
