import React from "react";
import "./About.css";
import "../containers.css";
import { Images } from "../../constants/index";
import details from "../../details";

const About = () => {

  const name = details.info.name
  const city = details.info.city
  const country = details.info.country
  const profileImage = details.info.image

  const about = details.about.map((line) => {
    return <li>{line}</li>
  })

  return (
    <div id="About">
      <img src={Images.dots} alt="patter"/>
      <div className="imgPart">
        <img src={profileImage} alt="about" />
      </div>
      <div className="content">
        <h4>Hi Everyone, I'm {name} from {city}, {country}.</h4>
        <ul>
          {about}
        </ul>
      </div>
    </div>
  );
};

export default About;
