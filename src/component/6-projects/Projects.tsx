import { myProjects } from "./myProjects";
import "./Projects.css"
import { Link } from "react-router";
const Projects = () => {
  return (
    <div className="projects">
      {myProjects.map((item, i) => {
        {
          return (
            <div className="project" key={i}>
              <img src={item.imgPath} alt={item.projectTitle} />
              <div className="pragraph">
                <h1>{item.projectTitle}</h1>

                <p>{item.desc}</p>
              </div>
              <div className="links">
                <Link target="_blank" to={item.link}>
                  Live Dome
                </Link>
                <Link target="_blank" to={item.href}>
                  GitHub
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
