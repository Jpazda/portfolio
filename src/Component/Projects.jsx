import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="d-flex flex-col w-[70%] items-center mt-[-50px] h-[70%] p-[40px]">
      <div className="text-[60px] font-bold mt-[20px]">My Projects</div>
      <div className="w-full grid grid-cols-2 gap-[40px] items-center justify-center mt-[40px]">
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
    </div>
  );
};
