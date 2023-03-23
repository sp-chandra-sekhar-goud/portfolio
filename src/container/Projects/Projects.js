import React from "react";
import "./Projects.css";
import "../containers.css";
import { Images } from "../../constants/index";

const Projects = () => {
  const Card = () => {
    return (
      <div className="card">
        <img src={Images.oyola} alt="oyola" />
        <div className="info">
          <h1>OYOLA</h1>
          <p>
            It's an exlusive travel & stay application designed and developed
            for hotel booking
          </p>
          <p>
            It was developed using HTML, CSS, Javascript and Firebase.
          </p>
          <div id="btn"><a href="https://oyola.in" target="_blank">visit</a></div>
        </div>
      </div>
    );
  };
  return (
    <div id="Projects">
      <h1>Projects</h1>
      <Card />
    </div>
  );
};

export default Projects;
