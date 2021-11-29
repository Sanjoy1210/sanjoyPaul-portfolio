import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Project.css';

const Project = ({ project }) => {
  const { title, description, technologies, github, liveSite, img } = project;
  return (
    <Row>
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
            {
              technologies.map((technology, index) => <span key={index}>{technology}</span>)
            }
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Project;