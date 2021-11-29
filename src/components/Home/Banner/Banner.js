import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import myImg from '../../../images/banner/my-img.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-area">
      <div className="banner-area-wrapper">
        <Container>
          <Row xs={1} lg={2}>
            <Col className="order-sm-2 order-lg-1">
              <div className="banner-content">
                <div className="banner-content-title">
                  <h5 className="sub-title">Hello there, I am</h5>
                  <h2 className="title">Sanjoy Paul</h2>
                </div>
                <div className="designation">
                  <ul>
                    <li>Web Developer</li>
                    <li>Programmer</li>
                  </ul>
                </div>
                <div className="banner-details">
                  <p>Handle difficulties and errors in a smart way. I'm a tech lover. Try to keep myself updated with new technologies and learn that. I'm very passionate and dedicated about my work.I am seeking to work in a company where I can work as a team member and put my knowledge into practice. I enjoy every step of the developing process from discussion and collaboration.</p>
                </div>
                <div className="resume">
                  <Button className="download-resume">Download Resume</Button>
                </div>
              </div>
            </Col>
            <Col className="order-sm-1">
              <div className="banner-img">
                <img src={myImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;