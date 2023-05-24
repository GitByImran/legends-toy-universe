import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "The toys I bought from this store are amazing! My kids love them.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Great customer service and high-quality toys. Highly recommended!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      testimonial:
        "I'm impressed with the wide range of action figures available here.",
    },
  ];

  return (
    <section className="testimonial-section py-5">
      <Container>
        <h2 className="text-muted text-capitalize text-center fw-bold mb-5">
          Testimonials
        </h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={12} md={4}>
              <Card className="testimonial-card p-4">
                <Card.Text className="testimonial-text">
                  {testimonial.testimonial}
                </Card.Text>
                <Card.Text className="testimonial-name">
                  {testimonial.name}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
