import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Container className="py-3">
        <Form className="w-50 mx-auto p-3 border shadow">
          <Form.Text className="text-muted fs-3 fw-bold">
            Create Account
          </Form.Text>

          <Form.Group className="mb-3 mt-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="email" placeholder="Enter Photo URL" />
          </Form.Group>

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
