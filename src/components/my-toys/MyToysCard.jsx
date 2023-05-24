import React, { useState } from "react";
import "./MyToys.css";
import { Card, Button, Modal } from "react-bootstrap";
import UpdateToy from "./contents/UpdateToy";
import { Link } from "react-router-dom";
import ToyModal from "../toy-modal/ToyModal";

const MyToysCard = ({ toys, index, handleDelete, setUpdateTrigger }) => {
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleUpdate = () => {
    setshowUpdateModal(true);
  };

  const handleCloseModal = () => {
    setshowUpdateModal(false);
    alert("Updated successfully");
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
          <Link className="text-decoration-none" onClick={handleShowModal}>
            Details
          </Link>
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

      <ToyModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        toy={toys}
      />

      <Modal show={showUpdateModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateToy
            toyId={_id}
            handleClose={handleCloseModal}
            handleUpdateSuccess={handleUpdateSuccess}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyToysCard;
