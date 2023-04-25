import React from "react";
import { Container } from "react-bootstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common-section">
      <Container className="text-center">
        <div className="title">
          <h2>{title}</h2>
        </div>
      </Container>
    </section>
  );
};

export default CommonSection;
