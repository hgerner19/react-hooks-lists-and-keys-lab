import React from "react";
import ProjectList from "./ProjectList";
function ProjectItem({ name, about, technologies }) {
  const technoElements = technologies.map((tech,index) => {
    return <span key ={index}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technoElements}
      </div>
    </div>
  );
}

export default ProjectItem;
