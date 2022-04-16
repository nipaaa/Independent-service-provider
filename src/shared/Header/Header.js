import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img height={120} src="images/4 copy.png" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto fw-bolder">
    <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;