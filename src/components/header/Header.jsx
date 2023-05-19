import React, { useContext } from "react";
import "./Header.css";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/provider/Provider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

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
              <Link to="/mytoys" className="nav-menu text-decoration-none">
                My Toys
              </Link>
              <Link to="/blog" className="nav-menu text-decoration-none">
                Blogs
              </Link>
            </Nav>
            <Nav className="ms-auto my-4 d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ background: "none", border: "none" }}
                >
                  <div className="profile">
                    <img
                      src={
                        user
                          ? user.photoURL
                          : "https://i.ibb.co/K59MRv9/image.png"
                      }
                      alt=""
                    />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">{user?.displayName}</Dropdown.Item>
                  <Dropdown.Item href="#">{user?.email}</Dropdown.Item>
                  <Dropdown.Item href="#">{user?.uid}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {user ? (
                <div>
                  <Button className="text-capitalize px-4 text-light">
                    <Link
                      onClick={handleLogOut}
                      to="#"
                      className="nav-menu text-decoration-none text-light"
                    >
                      Sign Out
                    </Link>
                  </Button>
                </div>
              ) : (
                <Button className="text-capitalize px-4 text-light">
                  <Link
                    to="/login"
                    className="nav-menu text-decoration-none text-light"
                  >
                    Sign In
                  </Link>
                </Button>
              )}
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
