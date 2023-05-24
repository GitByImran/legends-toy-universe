import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "../Home.css";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://i.ibb.co/GsnMP9S/Screenshot-20230522-143108-Chrome.jpg",

    "https://i.ibb.co/qRKvmf0/Screenshot-20230522-142705-Chrome.jpg",

    "https://i.ibb.co/PchMX4Y/Screenshot-20230522-141356-Chrome.jpg",

    "https://i.ibb.co/FbCn7X1/Screenshot-20230522-141855-Chrome.jpg",

    "https://i.ibb.co/wWLRBDr/Screenshot-20230522-141911-Chrome.jpg",

    "https://i.ibb.co/SdzjQjs/Screenshot-20230522-141925-Chrome.jpg",

    "https://i.ibb.co/dfLd52D/Screenshot-20230522-141937-Chrome.jpg",

    "https://i.ibb.co/0hm9L4q/Screenshot-20230522-141948-Chrome.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container className="">
      <div className="gallery-section">
        <h2 className="text-center text-muted fw-bold my-4 py-2">
          Explore Our Spectacular Toy Gallery!
        </h2>
        <div className="gallery-grid mt-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item border"
              onClick={() => handleImageClick(image)}
            >
              <img className="p-2" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="image-modal" onClick={handleModalClose}>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <img src={selectedImage} alt="Zoomed Image" />
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default GallerySection;
