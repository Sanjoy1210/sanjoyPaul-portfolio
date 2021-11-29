import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-area-wrapper">
        <Container>
          <Row xs={1} md={2} lg={3}>
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
                    <span className="linkedin"><i className="fab fa-linkedin"></i></span>
                    <span className="github"><i className="fab fa-github"></i></span>
                    <span className="facebook"><i className="fab fa-facebook-f"></i></span>
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
                      <Link to="">Home</Link>
                      <Link to="">About</Link>
                      <Link to="">Projects</Link>
                    </Col>
                    <Col>
                      <Link to="">Contact me</Link>
                      <Link to="">Resume</Link>
                      <Link to="">Blogs</Link>
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
                    <Button variant="outline-secondary" id="button-addon2">
                      Subscribe
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;