import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import modernFurniture from "../assets/img/modern-furniture.png";
import bestFurniture from "../assets/img/best-furniture.png";
import { Link } from "react-router-dom";

const BestFurniture = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="5">
          <img src={modernFurniture} alt="" />
        </Col>
        <Col md="5" className="d-flex align-items-center mb-5 mb-md-0">
          <div class="wrapper-text">
            <h1>
              We Make Modern Furnitures <br /> For You
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt, enim. Nesciunt, inventore ipsum fuga deserunt molestiae
              fugiat possimus reprehenderit molestias, consectetur dolorem
              voluptatem fugit impedit iure temporibus. Dignissimos.
            </p>
            <Link href="" className="btn-custom">
              Explore More
            </Link>
          </div>
        </Col>

        <Col md="5" className="d-flex align-items-center mb-5 mb-md-0">
          <div class="wrapper-text">
            <h1>
              Best Furniture Choice For <br /> Your Home
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt, enim. Nesciunt, inventore ipsum fuga deserunt molestiae
              fugiat possimus reprehenderit molestias, consectetur dolorem
              voluptatem fugit impedit iure temporibus. Dignissimos.
            </p>
            <Link href="" className="btn-custom">
              Explore More
            </Link>
          </div>
        </Col>

        <Col md="5">
          <img src={bestFurniture} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default BestFurniture;
