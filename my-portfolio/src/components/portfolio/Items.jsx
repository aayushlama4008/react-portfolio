import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link, githubLink } =
          projectItem;
        return (
          <motion.div layout
          animate={{opacity:1,scale:1}}
          initial={{opacity:0.8,scale:0.6}} 
          exit={{opacity:0.8,scale:0.6}}
          transition={{duration:0.5}} 
          className="portfolio__item card card-two" key={id}>
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>
            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <div className="portfolio__links">
              <a href={link} target="_blank" className="link">
                View <FaEye className="link__icon" />
              </a>
              <a href={githubLink} target="_blank" className="link">
                Github <FaGithub className="link__icon" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
