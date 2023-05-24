import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ChangeTitle from "../../ChangeTitle";

const Blog = () => {
  return (
    <div className=" mt-5">
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </Card.Title>
                <Card.Text>
                  Access tokens and refresh tokens are used for authentication
                  and authorization in client-server applications. An access
                  token is typically short-lived and is used to access protected
                  resources, while a refresh token is used to obtain a new
                  access token when the current one expires. Access tokens are
                  usually stored in the client-side application's memory or
                  local storage, while refresh tokens should be securely stored,
                  such as in an HTTP-only cookie.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Compare SQL and NoSQL databases?</Card.Title>
                <Card.Text>
                  SQL databases, also known as relational databases, store data
                  in tables with predefined schemas and support structured
                  querying using SQL. They are suitable for complex
                  relationships between data and provide Atomicity, Consistency,
                  Isolation, Durability. NoSQL databases, on the other hand,
                  store data in flexible formats such as JSON and do not require
                  predefined schemas. They are suitable for handling large
                  amounts of unstructured or semi-structured data and provide
                  high scalability and performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>What is Express.js? What is Nest.js?</Card.Title>
                <Card.Text>
                  Express.js is a popular web application framework for Node.js
                  that simplifies the development of server-side applications.
                  It provides a minimalist approach and allows developers to
                  create robust APIs and web applications. Nest.js, on the other
                  hand, is a progressive Node.js framework for building
                  efficient, scalable, and modular server-side applications. It
                  is built with TypeScript and incorporates concepts from
                  Angular to enhance developer productivity and maintainability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>How to make a responsive web page?</Card.Title>
                <Card.Text>
                  To make a web page responsive, we can use CSS media queries to
                  apply different styles based on the screen size or viewport
                  width. we can define breakpoints and adjust the layout, font
                  sizes, and other elements accordingly. Additionally, using
                  responsive frameworks like React Bootstrap can provide
                  pre-built responsive components and grids that adapt to
                  different screen sizes. By combining these techniques and
                  testing on various devices and screen sizes, we can create a
                  responsive web page that provides a consistent user experience
                  across devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ChangeTitle />
    </div>
  );
};

export default Blog;
