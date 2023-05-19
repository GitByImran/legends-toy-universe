import React from "react";
import { Button, Card } from "react-bootstrap";
import "./AllToys.css";

const AllToyCard = ({ item }) => {
  console.log(item);
  const {
    _id,
    category,
    picture,
    price,
    quantity,
    rating,
    seller,
    serial,
    subcategory,
    toyName,
  } = item;
  return (
    <div>
      <Card style={{ width: "100%", background: "#fff" }}>
        <Card.Img
          variant="top"
          src={picture}
          className="all-toys-picture p-3"
        />
        <Card.Body>
          <Card.Title className="m-0 fs-3">{toyName}</Card.Title>
          <p className="m-0">
            Sub-catagory :{" "}
            <span className="text-danger fw-bold">{subcategory}</span>
          </p>
          <Card.Text className="m-0 py-3">
            <p className="m-0 fw-bold">
              Seller : {seller ? seller : "Anonymous"}
            </p>
            <p className="m-0">Price : {price}</p>
            <p className="m-0">Available Quantity : {quantity}</p>
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllToyCard;

/**
 * Seller: (if available) show the name of the person who posted the toy
Toy Name
Sub-category
Price
Available Quantity
View Details button
*/
