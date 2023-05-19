import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { signIn, auth, googleRegister } = useContext(AuthContext);
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const getGoogleAcc = result.user;
        navigate(from, { replace: true });
        console.log(getGoogleAcc);
      })
      .catch((error) => {});
  };

  return (
    <>
      <Container className="py-5">
        <Form className="w-50 mx-auto p-5 border shadow" onSubmit={handleLogin}>
          <Form.Text className="text-muted fs-3 fw-bold">Login</Form.Text>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <p className="my-3 text-danger">{error.slice(10)}</p>

          <Button variant="primary" type="submit" className="mb-2 w-100">
            Submit
          </Button>

          <Form.Text className="d-block fs-5 text-center">or,</Form.Text>

          <Button onClick={handleGoogle} className="w-100 mt-3 mb-2">
            <FaGoogle className="me-2" /> sign up with google
          </Button>

          <Form.Text className="text-muted fw-bold d-block fs-6">
            New here,{" "}
            <Link to="/register" className="mx-1 fw-bold">
              Create an account
            </Link>
            now
          </Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
