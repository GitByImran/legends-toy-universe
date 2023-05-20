import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark py-4 mt-5">
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <div className="d-flex align-items-center">
              <span className="logo mr-2">
                <img
                  src="https://i.ibb.co/Jx7WPhs/logo.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </span>
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
            </div>
          </Col>
          <Col md={4} className="mt-4 mt-md-0">
            <h4>Contact Information</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={2} className="mt-4 mt-md-0">
            <h4>Follow Us</h4>
            <ul className="list-unstyled social-media-icons">
              <li>
                <Link to="#">
                  <FaFacebook size={24} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram size={24} className="text-danger" />
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2} className="mt-4 mt-md-0">
            <h4>Address</h4>
            <p>123 Street, NY, USA</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-4">
              &copy; {new Date().getFullYear()} Legend Toy Universe. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
