import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="lite">
      <Container>
        <Navbar.Brand>
          <Link className="nav_bar_logo" to="/">
            Food<span>Testy.</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav_bar_link" to="/">
              Home
            </Link>
            <Link className="nav_bar_link" to="/menu">
              Menu
            </Link>
            <Link className="nav_bar_link" to="/aboutus">
              About Us
            </Link>
            <Link className="nav_bar_link" to="/reviews">
              Reviews
            </Link>
            <Link className="nav_bar_link" to="/contact">
              Contact
            </Link>
            <Link className="nav_bar_link button_login" to="/signin">
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
