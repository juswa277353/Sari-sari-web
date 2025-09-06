import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Logo left */}
        <Navbar.Brand href="#page-top">
          <img
            src="/img/nav head.png"
            alt="Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </Navbar.Brand>

        {/* Mobile burger toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links right */}
          <Nav className="ms-auto fs-4 fw-bold gap-4">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Products</Nav.Link>
            <Nav.Link href="#portfolio">Promotions</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
