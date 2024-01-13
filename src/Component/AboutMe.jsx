import React from "react";


export const AboutMe = () => {
  return (
    <div className="d-flex flex-col w-[50%] items-center justify-around mt-[200px] h-[40%] p-[40px]">
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
      >
        View my work
      </button>
    </div>
  );
};
