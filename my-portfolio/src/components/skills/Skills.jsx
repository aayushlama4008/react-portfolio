import React from "react";
import "./Skills.scss";
import { skills } from "../../Data/Data.jsx";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Professional SKills</h2>
      <p className="section__subtitle">
        My <span>Talent</span>
      </p>

      <motion.div
        whileInView={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, type: "keyframes" }}
        className="skills__container container grid"
      >
        {skills.map(({ name, img, description, imgDes }, index) => {
          return (
            <div className="skills__item" key={index}>
              <div className="skills__titles">
                <h2 className="skills__name">{name}</h2>
                <Zoom>
                  <img src={img} alt={imgDes} width={50} />
                </Zoom>
              </div>
              <p className="skills__description">{description}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
