import React, { useContext, useEffect, useState } from "react";
import "../Home.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ToyModal from "../../toy-modal/ToyModal";
import { AuthContext } from "../../../authentication/provider/Provider";

const Shop = ({ toyData }) => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("Marvel");
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const { user } = useContext(AuthContext);

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
    if (user) {
      setSelectedToy(toy);
      setShowModal(true);
    } else {
      alert("login first");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-5 mb-3">
      <Container>
        <div className="p-4" style={{ background: "" }}>
          <Row>
            <h2 className="text-muted text-capitalize text-center fw-bold mt-3 mb-5">
              see our product by categories
            </h2>
          </Row>
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
          <Row className="w-100 m-0 p-0 tab-button">
            <Col className="m-0 p-0">
              <Button
                name="Marvel"
                onClick={showData}
                className={`w-100 py-2 tab-button-less ${
                  activeButton === "Marvel" ? "tab-button-add" : ""
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
                className={`w-100 py-2 tab-button-less ${
                  activeButton === "Star Wars" ? "tab-button-add" : ""
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
                className={`w-100 py-2 tab-button-less ${
                  activeButton === "DC" ? "tab-button-add" : ""
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
                className={`w-100 py-2 tab-button-less ${
                  activeButton === "Transformers" ? "tab-button-add" : ""
                }`}
                style={{ borderRadius: "0px" }}
              >
                Transformers
              </Button>
            </Col>
          </Row>
          <Row className="w-100 shop-category-toys">
            {data.slice(0, 2).map((item) => (
              <div key={item._id} className="m-0 p-0">
                <div>
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
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
