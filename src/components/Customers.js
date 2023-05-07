import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dataCustomer } from "../assets/data/serviceData";
import imgSofa from "../assets/img/sofa.png";
import CountUp from "react-countup";

const Customers = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="5">
          <div class="wrapper-text">
            <h1>
              We Provide You The <br /> Best Experience
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              accusantium molestiae molestias, repellat laudantium dolores
              impedit laborum rerum! Odio facere totam suscipit autem possimus
              sequi rerum sed praesentium, animi quod amet tempora assumenda
              dicta quis dolor quas vitae eius, obcaecati fugiat. Asperiores
              similique provident magnam?
            </p>
          </div>
        </Col>

        {dataCustomer.map((item, index) => (
          <Col md="2" key={index} className="counter-up">
            <h3>{item.title}</h3>
            <h1>
              <CountUp
                start={0}
                end={item.value}
                duration={5.75}
                enableScrollSpy
              />{" "}
              +
            </h1>
          </Col>
        ))}
      </Row>
      <img src={imgSofa} alt="sofa" className="d-flex justify-content-center" />
    </Container>
  );
};

export default Customers;
