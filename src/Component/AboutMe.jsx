import React, { useContext } from "react";
import { AppContext } from "../App";

export const AboutMe = () => {
  const { showProjects, setShowProjects } = useContext(AppContext);

  const handleClick = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="d-flex flex-col w-[100%] md:w-[50%] items-center justify-around mt-[150px] 2xl:mt-[200px] h-[40%] p-[40px] gap-[20px] md:gap-[20px] ease-in duration-500">
      <div className="text-[30px] md:text-[60px] font-bold mt-[20px]">About me</div>
      <p className="text-[15px] md:text-lg">
        I'm a full stack developer with experience in HTML, CSS, React,
        Javascript, Python Flask, PostgreSQL, Tailwind CSS, Bootstrap,
        Agile/Scrum, Git, Tableau and Jira. I originally studied Finance in college, and
        have worked in Accounting/Finance for the first 5 years of my career.
        Though I have enjoyed the people and companies I've worked for, I
        realized that creating Excel spreadsheets and Profit and Loss reports
        are not my passion. I have decided to make the switch to something I am
        much more passionate about, software developing. I love the constant learning and
        challenges that come along with software development, as well as the creativity 
        and design aspects. I'd love to discuss any of my projects with you, please click the button
        below for links to their repositories.
      </p>
      <button
        className="border border-black h-[75px] w-[200px] 
                            rounded-md text-white text-lg 
                            font-semibold bg-black hover:scale-95 mt-[20px] md:mt-[0px]"
        onClick={handleClick}
      >
        View my work
      </button>
    </div>
  );
};
