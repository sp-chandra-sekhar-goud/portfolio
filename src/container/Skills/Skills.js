import React from "react";
import "./Skills.css";
import details from "../../details";

const Skills = () => {

  const skills = details.skills.map((skill)=>{
    return <img src={skill.link} alt={skill.name}/>
  })

  return (
    <div id="Skills">
      <h1>Tech Stack</h1>
      <div className="imgs">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
