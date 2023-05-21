import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddToy = () => {
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const picture = form.picture.value;
    const toyName = form.toyName.value;
    const seller = form.seller.value;
    const email = form.sellerEmail.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const serial = "20";
    const category = "Action Figure";
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const addToDb = {
      picture,
      toyName,
      seller,
      email,
      rating,
      quantity,
      price,
      subcategory,
      category,
      serial,
      description,
    };

    fetch("https://legends-toy-universe-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToDb),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

  return (
    <div>
      <Container className="my-3">
        <Form
          className="p-3"
          style={{ background: "#ceedf7" }}
          onSubmit={handleAddToy}
        >
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
                name="picture"
                type="text"
                placeholder="Enter toy image url"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridToyName">
              <Form.Label className="fw-bold">Toy name</Form.Label>
              <Form.Control
                name="toyName"
                type="text"
                placeholder="Toy name"
                required
              />
            </Form.Group>
          </Row>
          {/*  */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSellerName">
              <Form.Label className="fw-bold">Seller name</Form.Label>
              <Form.Control
                name="seller"
                type="text"
                placeholder="Enter seller name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSellerEmail">
              <Form.Label className="fw-bold">Seller email</Form.Label>
              <Form.Control
                name="sellerEmail"
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
                name="subcategory"
                type="text"
                placeholder="Enter sub-category"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter toy Price"
                required
              />
            </Form.Group>
          </Row>
          {/*  */}
          <Row>
            <Form.Group as={Col} controlId="formGridRating">
              <Form.Label className="fw-bold">Rating</Form.Label>
              <Form.Control
                name="rating"
                type="number"
                placeholder="Enter rating"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAvailableQuantity">
              <Form.Label className="fw-bold">Available quantity</Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Enter available quantity"
                required
              />
            </Form.Group>
          </Row>
          {/*  */}
          <Row>
            <Form.Group as={Col} controlId="formGridDetailDescription">
              <Form.Label className="fw-bold">Detail description</Form.Label>
              <Form.Control
                name="description"
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
