import React, { useState } from "react";
import "./Portfolio.scss";
import List from "./List.jsx";
import Items from "./Items.jsx";
import { projects } from "../../Data/Data.jsx";
import { AnimatePresence } from "framer-motion";

const allNavLsit = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];


const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavLsit);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Projects</span>
      </p>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems}></Items>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
