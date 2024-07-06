"use client";

import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

const MainCarousel = ({ items }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Carousel>
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default MainCarousel;
