import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedToyCard from "./FeaturedToyCard";

const FeaturedToysSection = () => {
  const featuredToys = [
    {
      id: 1,
      image: "toy1.jpg",
      name: "Iron Man Action Figure",
      price: "$19.99",
    },
    {
      id: 2,
      image: "toy2.jpg",
      name: "Batman Batmobile",
      price: "$29.99",
    },
    {
      id: 3,
      image: "toy3.jpg",
      name: "Optimus Prime Transformer",
      price: "$39.99",
    },
  ];

  return (
    <section className="featured-toys-section py-5">
      <Container>
        <h2 className="text-center mb-4">Featured Toys</h2>
        <Row>
          {featuredToys.map((toy) => (
            <Col key={toy.id} xs={12} md={4}>
              <FeaturedToyCard toy={toy} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedToysSection;
