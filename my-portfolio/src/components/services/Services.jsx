import React from "react";
import { motion } from "framer-motion";

import "./Services.scss";
import { services } from "../../Data/Data.jsx";

import shapeTwo from '../../assets/shape-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const Services = () => {
  return (
    <motion.section
      whileInView={{ y: [30, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7, type: "keyframes" }}
      className="services section"
    >
      <h2 className="section__title">What I do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>
      <Swiper
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        540: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
       className="services__container container mySwiper">
        {services.map(({ name, title, description ,img}, index) => {
          return (
            <SwiperSlide className="services__item card-one card" key={index} 
            
            >
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">
                {title}
              </h3>
              <p className="services__description">
                {description}
              </p>
              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Services;
