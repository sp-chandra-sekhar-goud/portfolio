import React from "react";
import "./About.css";
import "../containers.css";
import { Images } from "../../constants/index";

const About = () => {
  return (
    <div id="About">
      <img src={Images.dots} alt="patter"/>
      <div className="imgPart">
        <img src={Images.profile} alt="about" />
      </div>
      <div className="content">
        <h4>Hi Everyone, I'm Chandra Sekhar from Vizag, India.</h4>
        <ul>
          <li>
            I am currently studying computer science engineering at Andhra
            university in Vizag.
          </li>

          <li>
            I am very interested in solving real-world problems & contributing
            to open-source projects.
          </li>

          <li>
            I have an Instagram page where I post tech-related content.
            <br/>
            Follow <a href="https://www.instagram.com/programming.doubts" target="_blank">@programming.doubts</a> for more.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
