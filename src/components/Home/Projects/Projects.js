import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div id="projects" className="projects-area">
      <div className="projects-area-wrapper">
        <Container>
          <div className="section-title">
            <h4>Some of my work</h4>
          </div>
          <div className="sample-projects">
            {
              projects.map(project => <Project key={project.id} project={project} />)
            }
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;