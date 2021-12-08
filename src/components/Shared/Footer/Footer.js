import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button, Nav } from 'react-bootstrap';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-area-wrapper">
        <Container>
          <Row xs={1} md={2} lg={3} className="mb-5">
            <Col>
              <div className="personal-content">
                <div className="personal-content-logo">
                  <h2>SanjoyPaul</h2>
                </div>
                <div className="personal-content-details">
                  <p>I am curious, passionate, die heart fan of JavaScript.</p>
                </div>
                <div className="personal-links">
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/sanjoypaul12/" target="_blank" rel="noreferrer"><span className="linkedin"><i className="fab fa-linkedin"></i></span></a>
                    <a href="https://github.com/Sanjoy1210" target="_blank" rel="noreferrer"><span className="github"><i className="fab fa-github"></i></span></a>
                    <a href="https://web.facebook.com/12sanjoypaul/" target="_blank" rel="noreferrer"><span className="facebook"><i className="fab fa-facebook-f"></i></span></a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="useful-links">
                <div className="useful-links-title">
                  <h5>Useful Links</h5>
                </div>
                <div className="links">
                  <Row xs={2}>
                    <Col>
                      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
                    </Col>
                    <Col>
                      <Nav.Link as={HashLink} to="/home#contact">Contact me</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#resume">Resume</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#blog">Blogs</Nav.Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col>
              <div className="newsletter">
                <div className="newsletter-title">
                  <h5>Subscriber Newsletter</h5>
                </div>
                <div className="subscriber-input">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Enter Email Address"
                      aria-label="Enter Email Address"
                      aria-describedby="basic-addon2"
                    />
                    <Button className="subscribe-btn" id="button-addon2">
                      Subscribe
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>

          <hr />
          <p className="copyright">&copy; 2019 All Rights Reserved By SanjoyPaul</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;