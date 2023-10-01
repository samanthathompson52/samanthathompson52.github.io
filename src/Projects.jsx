import link from './images/link-icon.png';
import github from './images/github-icon.png';
import projects from './projects.json';

const Projects = () => {
  const projectList = projects.map((project) => {
    return (
      <div  key={project.id} className = "project-card">
        <div className = "sm:flex justify-between items-baseline">
          <h2 className = "text-main md:text-3xl text-2xl bold">{project.name}</h2>
          <div className = "flex md:pr-5 mt-3 ">
            {project.url !== "" &&
              <a href={project.url} target="_blank"><img src={link} className = "icon-link sm:ml-5 mr-5"></img></a>
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
          <div id="projects" className = "content">  
              <h1 className = "md:text-5xl text-4xl bold mb-10">Projects</h1>
              {projectList}
          </div>
      </div> 
  );
}

export default Projects;
