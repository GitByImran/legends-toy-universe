import React from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="py-5">
        <Form className="w-50 mx-auto p-5 border shadow">
          <Form.Text className="text-muted fs-3 fw-bold">Login</Form.Text>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3">
            Submit
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
