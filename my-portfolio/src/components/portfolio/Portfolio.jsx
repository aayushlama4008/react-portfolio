import React, { useState } from "react";
import "./Portfolio.scss";
import List from "./List.jsx";
import Items from "./Items.jsx";
import { projects } from "../../Data/Data.jsx";

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Projects</span>
      </p>
      <List />
      <div className="portfolio__container container grid">
        <Items projectItems={projectItems}></Items>
      </div>
    </section>
  );
};

export default Portfolio;
