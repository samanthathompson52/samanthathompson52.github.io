import React, { useState } from 'react';
import link from './images/link-icon.png';
import github from './images/github-icon.png';
import projects from './projects.json';

const Home = () => {
  const projectList = projects.map((project) => {
    return (
      <div  key={project.id} className = "project-card">
        <div className = "flex justify-between">
          <h2 className = "text-main text-3xl bold">{project.name}</h2>
          <div className = "flex pr-5">
            {project.url !== "" &&
              <a href={project.url} target="_blank"><img src={link} className = "icon-link"></img></a>
            }
            {project.repo !== "" &&
              <a href={project.repo}><img src={github} className = "icon-link"></img></a>
            }   
          </div>
        </div>
        <p className = "pt-5 pb-5">{project.description}</p>
        <div className ="flex">
          {project.techUsed.map(tech => (
              <div className="tech"><p>{tech}</p></div>
          ))}
        </div>
      </div>
    );
  });

  return (
      <div>
          <div className = "content">  
              <h1 className = "text-5xl bold mb-10">Projects</h1>
              {projectList}
          </div>
          <span id= 'about'></span>
      </div> 
  );
}

export default Home;
