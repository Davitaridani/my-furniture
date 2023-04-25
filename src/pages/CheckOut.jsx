import React from "react";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

const CheckOut = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title="CheckOut">
      <CommonSection title="CheckOut" />

      <section className="sect-info-pembayaran">
        <Container>
          <Row>
            <Col lg="8">
              <h5 className="mb-4 fw-bold">Info Pembayaran</h5>
              <Form className="form-pembayaran">
                <Form.Group className="form-group mb-3">
                  <Form.Control type="text" placeholder="Masukan Nama Anda" />
                </Form.Group>
                <Form.Group className="form-group mb-3">
                  <Form.Control type="email" placeholder="Masukan Email Anda" />
                </Form.Group>
                <Form.Group className="form-group mb-3">
                  <Form.Control type="number" placeholder="Number Phone" />
                </Form.Group>
                <Form.Group className="form-group mb-3">
                  <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="form-group mb-3">
                  <Form.Control type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="form-group mb-3">
                  <Form.Control type="text" placeholder="Kode Pos" />
                </Form.Group>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout-card">
                <h5>Total Qty: <span>{totalQty} items</span></h5>
                <h5>Sub Total: <span>Rp. {totalAmount}</span></h5>
                <h5>
                  <span> Pengiriman: <br />Gratis Ongkir</span>
                  <span>Rp. 0</span>
                </h5>

                <h3>Total Pembayaran: <span>Rp. {totalAmount}</span></h3>
                <button className="btn-buy auth-btn w-100">Order Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
