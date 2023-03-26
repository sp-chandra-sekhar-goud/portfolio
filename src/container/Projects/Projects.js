import React from "react";
import "./Projects.css";
import "../containers.css";
import { Images } from "../../constants/index";
import details from "../../details";

const Projects = () => {

  const Card = ({name, description, link, image}) => {

    return (
      <div className="card">
        <img src={image} alt="oyola" />
        <div className="info">
          <h1>{name}</h1>
          <p>{description}</p>
          <div id="btn">
            <a href={link}>visit</a>
          </div>
        </div>
      </div>
    );
  };

  const projects = details.Projects.map((project) => {
    return <Card name={project.name} description={project.description} link={project.link} image = {project.img}/>;
  });

  return (
    <div id="Projects">
      <h1>Projects</h1>
        {projects}
    </div>
  );
};

export default Projects;
