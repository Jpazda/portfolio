import React, { useState, createContext } from "react";
import { Header } from "./Component/header";
import { AboutMe } from "./Component/AboutMe";
import { Projects } from "./Component/Projects";

export const AppContext = createContext();

function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="d-flex flex-col h-screen w-screen">
      <AppContext.Provider value={{ showProjects, setShowProjects }}>
        <Header />
         { !showProjects ? <AboutMe /> : ""}
         <Projects />
      </AppContext.Provider>
    </div>
  );
}

export default App;
