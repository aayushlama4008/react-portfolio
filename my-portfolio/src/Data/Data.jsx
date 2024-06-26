import Project1 from "../assets/project1.jpeg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpeg";
import Project4 from "../assets/project4.jpeg";
import Project5 from "../assets/project5.jpg";
import Project6 from "../assets/project6.jpg";
import css from "../assets/css.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import nodeJs from "../assets/nodeJs.png";

import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial2.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Testimonial4 from "../assets/testimonial4.jpg";
import Testimonial5 from "../assets/testimonial5.jpg";

import newProject1 from "../assets/Capture.JPG";  

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Works",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonial",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Web Design & Logo",
    img: Project1,
    description:
      "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
  },
  {
    id: 2,
    name: " Apps Development ",
    title: " iOS & Android ",
    img: Project2,
    description:
      "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
  },
  {
    id: 3,
    name: " Game Development ",
    title: " Unity & Unreal Engine ",
    img: Project3,
    description:
      " Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
  },
  {
    id: 4,
    name: " Advertising ",
    title: " Google Ads ",
    img: Project4,
    description:
      " Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ",
  },
  {
    id: 5,
    name: " Music Writing ",
    title: " Sound Track ",
    img: Project5,
    description:
      "Music copying, writing, creating, transcription and composition services.",
  },
];

export const skills = [
  {
    id: 1,
    name: "Html",
    
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: html,
    imgDes: "html",
  },

  {
    id: 2,
    name: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: javascript,
    imgDes: "javascript",
  },

  {
    id: 3,
    name: "Css",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: css,
    imgDes: "css",
  },

  {
    id: 4,
    name: "React Js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: react,
    imgDes: "react",
  },

  {
    id: 5,
    name: "Github",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: github,
    imgDes: "github",
  },

  {
    id: 6,
    name: "Node Js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: nodeJs,
      imgDes: "nodeJs",
  },
];

export const projects = [
  {
    id: 1,
    img: newProject1,
    category: "E-commerce",
    title: "Organic Store",
    description:
      "The Organic Store E-commerce Platform is a secure, user-friendly web app for selling organic products, built with React, Node.js, JavaScript, and PostgreSQL. It features JWT-based user authentication, detailed product listings, an easy-to-use shopping cart, secure checkout, and order management. The responsive design ensures a seamless shopping experience across all devices.",
      link:"https://aayushlama-organic-food-store.netlify.app",
      githubLink: "https://github.com/aayushlama4008/organic-food-store.git"
  },
  {
    id: 2,
    img: Project2,
    category: "UI UX Design",
    title: "Gooir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: Project3,
    category: "Development",
    title: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: Project4,
    category: "Photography",
    title: "Mozar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    img: Project5,
    category: "Development",
    title: "Stay Fit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 6,
    img: Project6,
    category: "Branding",
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export const cv = [
  {
    id: 1,
    title: "CoderHouse Courses",
    subtitle: "Backend Programming",
    date: "2014 - 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 2,
    title: "Lviv National Academy of Arts",
    subtitle: "Faculty of Design",
    date: "2012 - 2014",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 3,
    title: "IT Future",
    subtitle: "High School",
    date: "2010 - 2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 4,
    title: "UI Head & Manager",
    subtitle: "Soft Tech Inc.",
    date: "2020 - PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 5,
    title: "UI / UX Specialist",
    subtitle: "Kana Design Studio",
    date: "2018 - 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 6,
    title: "Plugins Developer",
    subtitle: "Fiverr.com",
    date: "2016 - 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
