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
      <Card className="p-3 my-3 my-toy-card">
        <div className="my-toy-image">
          <Card.Img variant="top" src={picture} />
        </div>

        <Card.Body className="">
          <Card.Title className="m-0 fs-4 fw-bold text-capitalize">
            {toyName}
          </Card.Title>
          <Card.Text className="m-0 mb-4 text-capitalize text-muted">
            {subcategory}
          </Card.Text>
        </Card.Body>

        <Card.Body className="">
          <Card.Text className="m-0 fw-bold">
            $<span className="m-1">{price}</span>
          </Card.Text>
          <Card.Text className="m-0"> {rating}</Card.Text>
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
