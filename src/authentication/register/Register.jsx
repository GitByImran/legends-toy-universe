import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { AuthContext } from "../provider/Provider";

const Register = () => {
  const { createUser, updateUserProfile, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    createUser(email, password, name, photoURL)
      .then((result) => {
        const newUser = result.user;
        updateUserProfile(name, photoURL);
        setError("");
        alert("Register succesfull, user created");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Container className="py-3">
        <Form
          className="w-50 mx-auto p-3 border shadow"
          onSubmit={handleRegister}
        >
          <Form.Text className="text-muted fs-3 fw-bold">
            Create Account
          </Form.Text>

          <Form.Group className="mb-3 mt-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          <Form.Group className="mb-3" controlId="formPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photoURL"
              type="text"
              placeholder="Enter Photo URL"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
            <Form.Check
              name="accept"
              type="checkbox"
              label="I accept all the terms and condition"
            />
          </Form.Group>

          <p className="my-3 text-danger">{error.slice(10)}</p>

          <Button variant="primary" type="submit" className="mb-3">
            Register
          </Button>
          <Form.Text className="text-muted fw-bold d-block fs-6">
            Already have an account,{" "}
            <Link to="/login" className="mx-1 fw-bold">
              {" "}
              Login{" "}
            </Link>
            now
          </Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Register;
