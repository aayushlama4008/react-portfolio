import React from "react";

import "./Home.scss";

import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        whileInView={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5, type: "keyframes" }}
        className="home__container container"
      >
        <p className="home__subtitle text-cs">
          Hello, <span>My Name Is </span>
        </p>
        <h1 className="home__title text-cs">
          <span>AAYUSH </span>LAMA
        </h1>
        <p className="home__job">
          <span className="text-cs">I Am</span> <b>WEB DEVELOPER</b>
        </p>
        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={""} alt="" className="home__profile" />
          </div>
          <motion.p 
          whileInView={{ x: [-70, 0], opacity: [0.7, 1] }}
          transition={{ duration: 1 }}
          className="home__data home__data-one">
            <span className="text-lg">
              1 <b>+ </b>
            </span>
            <span className="text-sm">
              Years of <span>Experience</span>
            </span>
          </motion.p>
          <motion.p 
           whileInView={{ x: [70, 0], opacity: [0.7, 1] }}
           transition={{ duration: 1 }}
          className="home__data home__data-two">
            <span className="text-lg">3 </span>
            <span className="text-sm">
              Projects <span>Completed</span>
            </span>
          </motion.p>
          <img src={shapeOne} alt="" className="shape shape__1" />
          <img src={shapeTwo} alt="" className="shape shape__2" />
          <img src={shapeTwo} alt="" className="shape shape__3" />
        </div>
        <p className="home__text">
          From <span>Nepal</span>. Currently I am based in{" "}
          <span>Milano ,Italy.</span> And I have rich experience in{" "}
          <span>Web Development</span> and <span>Web Design</span>. I also love
          to talk about our unique Cultures and traditions.
        </p>
        <div className="home__socials">
          <a
            href="https://www.linkedin.com/in/aayush-lama-9ab02b284/"
            className="home__social-link"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aayushlama4008"
            className="home__social-link"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/oohayushh/?igsh=YnVlNHVlN2drM3Fx&utm_source=qr"
            className="home__social-link"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="home__btns">
          <a href="" className="btn text-cs">
            Download CV
          </a>

          <a href="" className="hero__link text-cs">
            My Skills
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
