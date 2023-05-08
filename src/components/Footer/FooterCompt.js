import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCompt = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="text-white">
          <Col lg="4" className="desc-about-shop">
            <div className="item-brand d-flex align-items-center">
              <div className="navbar-title text-white ">
                <h3 className="title-footer">My Shop</h3>
              </div>
            </div>
            <p className="text-footer text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              harum suscipit impedit facere ex fugiat.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer-links">
              <h3 className="title-footer">Top Categories</h3>
              <ListGroup className="foot-menu">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="nav-link">
                    Mobile Phone
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="nav-link">
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="nav-link">
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="nav-link">
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <h3 className="title-footer">Usefull Links</h3>
            <ListGroup className="foot-link">
              <ListGroupItem className="ps-0 border-0">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#" className="nav-link">
                  privacy policy
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3">
            <h3 className="title-footer">Contact</h3>
            <ListGroup className="footer-contact">
              <ListGroupItem className="ps-0 border-0">
                <Link className="nav-link items-link  d-flex align-items-center gap-2">
                  <span className="icon-location">
                    <iconify-icon icon="material-symbols:location-on-outline-rounded"></iconify-icon>
                  </span>
                  <p>
                    Desa Balung Kulon Kec. Balung Kab. Jember Jawa Timur,
                    Indonesia
                  </p>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link className="nav-link items-link  d-flex align-items-center gap-2">
                  <span className="link-whatsapp ">
                    <iconify-icon icon="ic:twotone-whatsapp"></iconify-icon>
                  </span>
                  <p>+62 821-3994-8735</p>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link className="nav-link items-link  d-flex align-items-center gap-2">
                  <span className="icon-location ">
                    <iconify-icon icon="material-symbols:mail-outline-rounded"></iconify-icon>
                  </span>
                  <p>davitaridani@gmail.com</p>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="item-copyright">
            <hr />
            <p className="text-copyright text-center">
              &copy; {yearNow} developer by Ahmat Davit. All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterCompt;
