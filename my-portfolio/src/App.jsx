import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Servies from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";


function App() {
  return <main className="main">
    <Home/>
    <Servies/>
    <Skills/>
    <Portfolio/>
    <Resume/>
  </main>;
}

export default App;
