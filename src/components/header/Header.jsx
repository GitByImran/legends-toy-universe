import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-2"
          >
            <img
              className="nav-logo"
              src="https://i.ibb.co/Jx7WPhs/logo.png"
              alt=""
            />
            <div
              className="fs-4 fw-bold text-uppercase"
              style={{ lineHeight: "20px" }}
            >
              <span className="fw-bold m-0" style={{ color: "#006699" }}>
                legends toy
              </span>{" "}
              <br />{" "}
              <span
                className="fs-6 m-0"
                style={{ letterSpacing: "11px", color: "#0099ff" }}
              >
                universe
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-4">
              <Link to="/" className="nav-menu text-decoration-none">
                Home
              </Link>
              <Link to="/alltoys" className="nav-menu text-decoration-none">
                All Toys
              </Link>
              <Link to="" className="nav-menu text-decoration-none">
                My Toys
              </Link>
              <Link to="" className="nav-menu text-decoration-none">
                Blogs
              </Link>
            </Nav>
            <Nav className="ms-auto my-4 d-block">
              <Button className="text-capitalize px-4">Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// Website name, Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture
/**
 * <Link href="" className="nav-menu text-decoration-none">
    Home
  </Link>
  <Link href="" className="nav-menu text-decoration-none">
    All Toys
  </Link>
  *
 */
