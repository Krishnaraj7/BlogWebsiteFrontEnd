import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className="h-[70px] shadow-md  w-full md:px-40  fixed-top"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-3xl font-semibold">
            Blog
          </Navbar.Brand>
          <Nav className="me-10 text-lg text-black font-semibold ms-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Link to={'/profile'}>
              <i className="fa-solid fa-circle-user fa-2x"></i>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
