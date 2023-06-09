import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "../Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} className="text-col">
            <div className="text-container">
              <h1 className="fw-bold">Welcome to Legends Toy Universe</h1>
              <h3 className="fs-5 my-4">
                Here Joy and Adventure Come to Life!
              </h3>
              <p>
                Discover a world of joy and imagination at our online toy shop.
                Explore a wide selection of toys for all ages, featuring popular
                franchises like Avengers, DC Comics, Star Wars, and Marvels.
                Shop now and bring smiles to your little ones with the perfect
                toys for endless fun
              </p>
            </div>
          </Col>
          <Col md={6} className="slider-col">
            <Swiper
              effect="coverflow"
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000 }}
              loop
            >
              <SwiperSlide className="slider-image">
                <img
                  src="https://i.ibb.co/kc8fzjG/marvel-34260.png"
                  alt="Slider Image 1"
                />
              </SwiperSlide>
              <SwiperSlide className="slider-image">
                <img
                  src="https://i.ibb.co/W3839Dw/DC-Justice-League-PNG-File.png"
                  alt="Slider Image 2"
                />
              </SwiperSlide>
              <SwiperSlide className="slider-image">
                <img
                  src="https://i.ibb.co/SnjXBdm/pngfind-com-transformers-png-797391.png"
                  alt="Slider Image 3"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
