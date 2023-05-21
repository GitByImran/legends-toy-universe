import React, { useEffect, useState } from "react";
import "../Home.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ToyModal from "../../toy-modal/ToyModal";

const Shop = ({ toyData }) => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("Marvel");
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  useEffect(() => {
    const toyItem = toyData?.filter((dt) => dt.subcategory === activeButton);
    setData(toyItem);
  }, []);

  const showData = (e) => {
    const toyItem = toyData?.filter((dt) => dt.subcategory === e.target.name);
    setData(toyItem);
    setActiveButton(e.target.name);
  };

  const openModal = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container>
        <div className="p-4 border" style={{ background: "#afe3f3" }}>
          <Row className="m-0 p-0">
            <Col className="m-0 p-0">
              <Button
                name="Marvel"
                onClick={showData}
                className="w-100 py-2"
                style={{ borderRadius: "0px", background: "#0A58CA" }}
              >
                Action figure toys
              </Button>
            </Col>
          </Row>
          <Row className="w-100 m-0 p-0">
            <Col className="m-0 p-0">
              <Button
                name="Marvel"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Marvel" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Marvel
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="Star Wars"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Star Wars" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Star Wars
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="DC"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "DC" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                DC
              </Button>
            </Col>
            <Col className="m-0 p-0">
              <Button
                name="Transformers"
                onClick={showData}
                className={`w-100 py-2 ${
                  activeButton === "Transformers" ? "active" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Transformers
              </Button>
            </Col>
          </Row>
          <Row className="w-100 shop-category-toys">
            {data.slice(0, 2).map((item) => (
              <>
                <div key={item._id} className="m-0 p-0">
                  <Card
                    style={{ width: "100%" }}
                    className="d-flex flex-row align-items-center gap-3 md: d-block"
                  >
                    <Card.Img
                      variant="top"
                      src={item.picture}
                      style={{
                        width: "auto",
                        height: "200px",
                        objectFit: "contain",
                        padding: "20px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{item.toyName}</Card.Title>
                      <Card.Text className="m-0 py-1">
                        Price : {item.price}
                      </Card.Text>
                      <Card.Text className="m-0 py-1">
                        Ratings : {item.rating}
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="mt-2 fw-semibold text-capitalize"
                        style={{
                          background: "#afe3f3",
                          color: "#000",
                          border: "none",
                        }}
                        onClick={() => openModal(item)}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                  <ToyModal
                    show={showModal}
                    handleClose={closeModal}
                    toy={selectedToy}
                  />
                </div>
              </>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
