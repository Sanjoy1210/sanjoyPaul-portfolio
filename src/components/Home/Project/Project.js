import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Project.css';

const Project = ({ project }) => {
  const { title, description, technologies, github, liveSite, img } = project;
  return (
    <Row className="single-project">
      <Col md={7} className="content">
        <div className="project-img">
          <img src={img} alt="" />
        </div>
      </Col>
      <Col md={5}>
        <div className="project-details">
          <div className="project-title">
            <h4>{title}</h4>
          </div>
          <div className="project-description">
            <p>{description}</p>
          </div>
          <div className="technology-used">
            <h4>Technology used</h4>
            <div className="technology-list">
              {
                technologies.map((technology, index) => <span key={index}>{technology}</span>)
              }
            </div>
          </div>
          <div className="projects-links">
            <ul className="preview">
              <li><a href={liveSite} target="_blank"><i className="fas fa-external-link-alt"></i></a></li>
              <li><a href={github[0]} target="_blank"><i className="fab fa-github"></i></a></li>
              {
                github[1] && <li><a href={github[1]} target="_blank"><i className="fab fa-github"></i></a></li>
              }
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Project;