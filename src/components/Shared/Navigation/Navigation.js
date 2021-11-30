import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark">
      <Container>
        <Navbar.Brand as={HashLink} to="/home#home">SanjoyPaul</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
            <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;