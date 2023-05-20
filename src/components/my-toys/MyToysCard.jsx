import React from "react";
import "./MyToys.css";
import { Card, Button } from "react-bootstrap";

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
  } = toys;

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
          <Button variant="primary" className="d-block">
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
    </div>
  );
};

export default MyToysCard;
