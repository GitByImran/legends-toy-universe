import React from "react";
import { Modal, Button } from "react-bootstrap";

const ToyModal = ({ show, handleClose, toy }) => {
  if (!toy) {
    return null; // If toy is null, return null or render an alternative component/message
  }

  const { picture, toyName, seller, price, rating, quantity, description } =
    toy;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{toyName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={picture}
          alt={toyName}
          style={{ height: "30vh", maxWidth: "auto" }}
        />
        <p>Seller: {seller}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Available Quantity: {quantity}</p>
        <p>Description: {description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ToyModal;
