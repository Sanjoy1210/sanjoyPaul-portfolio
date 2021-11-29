import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/about/myImg.jpg';
import './About.css';

const About = () => {

  const [skillSet, setSkillSet] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch('/skillset.json')
      .then(res => res.json())
      .then(data => setSkillSet(data));
  }, [])

  useEffect(() => {
    fetch('/work.json')
      .then(res => res.json())
      .then(data => setWorks(data));
  }, [])

  return (
    <div id="about" className="about-area">
      <div className="about-area-wrapper">
        <Container>
          <Row>
            <div className="section-title">
              <h4>About Me</h4>
            </div>
            <Col md={6}>
              <div className="about-area-img">
                <img src={aboutImg} alt="" />
              </div>
              <div className="about-me-details">
                <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript.Handle difficulties and errors in a smart way. I'm a tech lover. Try to keep myself updated with new technologies and learn that. I am seeking to work in a company where I can work as a team member and put my knowledge into practice. I enjoy every step of the developing process from discussion and collaboration.</p>
              </div>
            </Col>
            <Col md={5} className="offset-md-1">
              <div className="skills-area">
                <div className="skills-title">
                  <h4>My Skills Set</h4>
                </div>
                <div className="my-skills-set">
                  {
                    skillSet.map((skill, index) => <span key={index}>{skill}</span>)
                  }
                </div>
              </div>
              <div className="work-with">
                <div className="work-title">
                  <h4>I want to work with</h4>
                </div>
                <div className="work-set">
                  {
                    works.map((work, index) => <span key={index}>{work}</span>)
                  }
                </div>
              </div>
              <div className="projects-experience">
                <div className="projects-experience-title">
                  <h4>Projects Experience</h4>
                </div>
                <div className="projects-experience-details">
                  <h5>More than 10 projects experience</h5>
                  <p>Experience in building full-stack projects for the assignment purpose where scored full marks.</p>
                  <p>In my projects I experimented with express.js, mongodb, mongoose, react.js, bootstrap, next.js , stripe, tailwind css, metarial ui, firebase and some popular npm packages json web token, bcrypt, validator etc.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;