import React from "react";
import { Header } from "./Component/header";
import { AboutMe } from "./Component/AboutMe";
import { Footer } from "./Component/Footer";
import { Projects } from "./Component/Projects";

function App() {
  return (
    <div className="d-flex flex-col h-screen w-screen">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
