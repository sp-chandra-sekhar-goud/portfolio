import React from "react";
import "./Footer.css";
import "../containers.css";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div id="Footer">
      <h4>Designed & Developed by Chandra Sekhar</h4>
      <h4>Copyright © </h4>
      <div className="social">
        <a href="">
          <BsGithub />
        </a>
        <a href="">
          <BsLinkedin />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
