import React from "react";
import { Card, Button } from "react-bootstrap";

const FeaturedToyCard = ({ toy }) => {
  const { id, image, name, price } = toy;

  return (
    <Card className="featured-toy-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="price">{price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default FeaturedToyCard;
