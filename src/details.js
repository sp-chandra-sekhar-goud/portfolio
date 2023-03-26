import Images from "./constants/images";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default {
  logo: {
    name: "SPCSG.",
  },
  homeSectionImg: Images.coding,
  navLinks: ["Home", "About", "Skills", "Projects"],
  info: {
    name: "Chandra Sekhar",
    role: "MERN Stack Developer",
    city: "Vizag",
    country: "India",
    image: Images.profile,
    resumeLink: "https://drive.google.com/file/d/1G5JJDGf4oExw5erfsGGmMpDBtnHxcelu/view?usp=sharing",
  },
  about: [
    "I am currently studying computer science engineering at Andhra university in Vizag.",
    "I am very interested in solving real-world problems & contributing to open-source projects.",
    "I have an Instagram page where I post tech-related content. Follow @programming.doubts for more.",
  ],
  skills: [
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Javascript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Firebase",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    },
    {
      name: "React Js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Node Js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express Js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Mongo DB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Java",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    },
    {
      name: "Python",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
    {
      name: "MySQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
  ],

  Projects: [
    {
      name: "OYOLA",
      description:
        "It's an exlusive travel & stay application designed and developed for hotel booking. It was developed using HTML, CSS, Javascript and Firebase.",
      link: "https://oyola.in",
      img: Images.oyola,
    },
  ],
  socialMedia: [
    {
      link: "https://github.com/sp-chandra-sekhar",
      icon: <BsGithub />,
    },
    {
      link: "https://www.linkedin.com/in/developer-spcsg",
      icon: <BsLinkedin />,
    },
    {
      link: "https://www.instagram.com/sp_chandra_sekhar",
      icon: <AiFillInstagram />,
    },
    {
      link: "mailto: developer.spcsg@gmail.com",
      icon: <MdEmail />,
    },
  ],
};
