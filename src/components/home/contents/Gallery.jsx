import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "../Home.css";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://dummyimage.com/400x300/000/fff",
    "https://dummyimage.com/400x300/333/fff",
    "https://dummyimage.com/400x300/666/fff",
    "https://dummyimage.com/400x300/999/fff",
    "https://dummyimage.com/400x300/aaa/fff",
    "https://dummyimage.com/400x300/ccc/fff",
    "https://dummyimage.com/400x300/eee/fff",
    "https://dummyimage.com/400x300/111/fff",
    "https://dummyimage.com/400x300/222/fff",
    "https://dummyimage.com/400x300/444/fff",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <div className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`Image ${index + 1}`} />
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
