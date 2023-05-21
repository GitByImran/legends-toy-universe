import React, { useState } from "react";
import "./MyToys.css";
import { Card, Button, Modal } from "react-bootstrap";
import UpdateToy from "./contents/UpdateToy";

const MyToysCard = ({ toys, handleDelete }) => {
  const {
    _id,
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
  } = toys;

  const [showModal, setShowModal] = useState(false);

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card className="d-flex flex-row p-3 my-3">
        <div className="my-toy-image">
          <Card.Img variant="top" src={picture} />
        </div>
        <Card.Body className="">
          <Card.Title>{toyName}</Card.Title>
          <Card.Text>{subcategory}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{rating}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="primary" className="d-block">
            View details
          </Button>
          <Button onClick={handleUpdate} variant="primary" className="d-block">
            Update
          </Button>
          <Button
            onClick={() => handleDelete(_id)}
            variant="primary"
            className="d-block"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateToy toyId={_id} handleClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyToysCard;
