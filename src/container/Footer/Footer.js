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
      {/* <h4>Copyright © </h4> */}
      <div className="social">
        <a href="https://github.com/sp-chandra-sekhar">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/developer-spcsg">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/sp_chandra_sekhar">
          <AiFillInstagram />
        </a>
        <a href="mailto: developer.spcsg@gmail.com">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
