import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import HamburgerMenu from 'HamburgerMenu';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      variant="dark">
      <Container>
        <Navbar.Brand href="/">My Website</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleExpanded}>
          <HamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
