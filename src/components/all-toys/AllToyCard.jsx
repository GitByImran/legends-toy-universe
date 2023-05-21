import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToyModal from "../toy-modal/ToyModal";

const AllToyCard = ({ item, index }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
    description,
  } = item;

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
          <Link className="text-decoration-none" onClick={openModal}>
            View Details
          </Link>
        </td>
      </tr>

      <ToyModal
        show={showModal}
        handleClose={closeModal}
        toy={{
          picture,
          toyName,
          seller,
          price,
          rating,
          quantity,
          description,
        }}
      />
    </>
  );
};

export default AllToyCard;
