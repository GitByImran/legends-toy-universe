import React, { useState } from "react";
import "./MyToys.css";
import { Card, Button, Modal } from "react-bootstrap";
import UpdateToy from "./contents/UpdateToy";
import { Link } from "react-router-dom";

const MyToysCard = ({ toys, index, handleDelete, setUpdateTrigger }) => {
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
  console.log(toys);

  const [showModal, setShowModal] = useState(false);

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateSuccess = () => {
    setUpdateTrigger((prevTrigger) => !prevTrigger);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{seller}</td>
        <td>{toyName}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td className="text-center fw-bold">
          <Link className="text-decoration-none">Details</Link>
        </td>
        <td className="text-center fw-bold">
          <Link className="text-decoration-none" onClick={handleUpdate}>
            Update
          </Link>
        </td>
        <td className="text-center fw-bold">
          <Link
            className="text-decoration-none"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Link>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateToy
            toyId={_id}
            handleClose={handleCloseModal}
            handleUpdateSuccess={handleUpdateSuccess} // Pass the handleUpdateSuccess function as a prop
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyToysCard;
