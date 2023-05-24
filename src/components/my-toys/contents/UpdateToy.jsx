import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";

const UpdateToy = ({ toyId, handleClose, handleUpdateSuccess }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    const updateToDb = {
      quantity,
      price,
      description,
    };

    fetch(`https://legends-toy-universe-server.vercel.app/toys/${toyId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToDb),
    })
      .then((res) => res.json())
      .then((data) => {
        handleUpdateSuccess();
        handleClose();
      });

    form.reset();
  };
  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Toy
        </Button>
      </Form>
    </div>
  );
};

export default UpdateToy;
