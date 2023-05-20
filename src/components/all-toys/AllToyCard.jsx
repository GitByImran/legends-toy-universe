import React from "react";
import { Button, Card } from "react-bootstrap";
import "./AllToys.css";
import { Link } from "react-router-dom";

const AllToyCard = ({ item, index }) => {
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
    <tr>
      <td>{index + 1}</td>
      <td>{seller}</td>
      <td>{toyName}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="text-center fw-bold">
        <Link className="text-decoration-none">View Details</Link>
      </td>
    </tr>
  );
};

export default AllToyCard;

