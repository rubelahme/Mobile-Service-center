import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Nabver = () => {
  return (
    <header className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/" className="fonts text-success">
          Mobile Service center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto fonts">
            <Nav.Link as={Link} className=" text-success" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className=" text-success" to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} className=" text-success" to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} className=" text-success" to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/Sing">
              <button className=" border btn-success"> Sing in</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Nabver;
