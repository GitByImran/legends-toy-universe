import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddToy = () => {
  return (
    <div>
      <Container className="my-3">
        <Form className="p-3" style={{ background: "#ceedf7" }}>
          <Row style={{ borderBottom: "2px solid #fff" }} className="mb-3 p-0">
            <h2 className="fs-3 fw-bold mb-3 text-muted text-center">
              Add your toy
            </h2>
          </Row>
          {/*  */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridToyImage">
              <Form.Label className="fw-bold">Toy image url</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter toy image url"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridToyName">
              <Form.Label className="fw-bold">Toy name</Form.Label>
              <Form.Control type="text" placeholder="Toy name" required />
            </Form.Group>
          </Row>
          {/*  */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSellerName">
              <Form.Label className="fw-bold">Seller name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter seller name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSellerEmail">
              <Form.Label className="fw-bold">Seller email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter seller email"
                required
              />
            </Form.Group>
          </Row>
          {/*  */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSubcategory">
              <Form.Label className="fw-bold">Sub-category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter sub-category"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter toy Price"
                required
              />
            </Form.Group>
          </Row>
          {/*  */}
          <Row>
            <Form.Group as={Col} controlId="formGridAvailableQuantity">
              <Form.Label className="fw-bold">Available quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter available quantity"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDetailDescription">
              <Form.Label className="fw-bold">Detail description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter detail description"
                required
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-3 px-4">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddToy;
