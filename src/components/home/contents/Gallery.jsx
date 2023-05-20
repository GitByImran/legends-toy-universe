import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { Container } from "react-bootstrap";
import "../Home.css";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const controls = useAnimation();

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

  const handleScroll = () => {
    controls.start({ opacity: 1 });
  };

  return (
    <Container>
      <div className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <Link
              key={index}
              to={`image${index + 1}`}
              smooth={true}
              duration={500}
              onSetActive={handleScroll}
            >
              <motion.div
                className="gallery-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </motion.div>
            </Link>
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

        <Element name="image1" className="image-placeholder" />
        <Element name="image2" className="image-placeholder" />
        <Element name="image3" className="image-placeholder" />
        {/* Add more Elements for each image */}

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          Scroll to Explore
        </motion.div>
      </div>
    </Container>
  );
};

export default GallerySection;
