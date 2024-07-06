import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProductList = ({ items }) => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="row-cols-1 row-cols-md-5 g-4">
          {items.map((item) => (
            <Col key={item.id}>
              <Card className="card h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <Card.Body className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="discount-badge">Ücretsiz Kargo</p>
                  </div>
                  <Card.Title className="card-title product-title">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="card-text product-price">
                    {item.price} TL
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
