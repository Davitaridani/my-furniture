import React, { useState, useEffect } from "react";
import ListProducts from "../components/UI/ListProducts";
import products from "../assets/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/img/hero-img.png";
import Services from "../Services/Services";
import imgCounter from "../assets/img/counter-timer-img.png";
import Clock from "../components/UI/Clock";

import imgChair from "../assets/img/img-card-1.png";
import imgSofa from "../assets/img/img-card-2.png";
import imgSofa2 from "../assets/img/img-card-3.png";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSallerProduct, setBestSallerProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const filteredTrendingProduct = products.filter(item => item.category === "chair");
    const filteredBestSallerProduct = products.filter(item => item.category === "sofa");
    const filteredMobileProduct = products.filter(item => item.category === "mobile");
    const filteredWirelessProduct = products.filter(item => item.category === "wireless");
    const filteredPopularProduct = products.filter(item => item.category === "watch");

    setTrendingProduct(filteredTrendingProduct)
    setBestSallerProduct(filteredBestSallerProduct)
    setMobileProduct(filteredMobileProduct)
    setWirelessProduct(filteredWirelessProduct)
    setPopularProduct(filteredPopularProduct)
  }, [])

  const yearNow = new Date().getFullYear()

  return (
    <Helmet title={"Home"}>
      <section className="sect-hero">
        <Container>
          <Row>
            <Col lg="6" md="6" className="content-banner">
              <div className="hero-content">
                <p className="hero-subTitle">Trending Product In {yearNow}</p>
                <h3>Jadikan Interior Anda Lebih Minimalis & Modern</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatem. Ab et, praesentium in doloribus quidem quas natus nemo tenetur commodi, illo provident omnis nam numquam, maiores laboriosam itaque consectetur?</p>
                <motion.button whileTap={{ scale: 1.2 }} className="btn btn-buy">
                  <Link className="nav-link" to="/shop">Beli Sekarang</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-2-services">
        <Services />
      </section>


      <section className="sect-3">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <div className="wrapper-text">

                <h1>Why are we the best?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et aliquam a eveniet odit, ut cum incidunt animi neque aperiam aspernatur, ipsa reiciendis. Dignissimos, optio delectus.</p>
                <a href="" className="btn-custom">Explore More</a>
              </div>
              <div className="item-card d-flex align-items-center">
                <div className="text">
                  <h3>Brefing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, illum, libero possimus.</p>
                  <a href="" className="btn-custom">Explore More</a>
                </div>
                <img src={imgChair} alt="sofa" className="img-fluid" />
              </div>
            </Col>
            <Col md="3">
              <div className="cards mt-3">
                <img src={imgSofa} alt="chair" className="img-fluid" />
                <div className="text text-center">
                  <h3>Processing</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum.</p>
                  <a href="" className="btn-custom">Explore More</a>
                </div>
              </div>
            </Col>
            <Col md="3">
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-3-trending-product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3 className="text-title mb-5">Treding Products</h3>
            </Col>
            <ListProducts data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="sect-4-best-saller">
        <Container>
          <Row>
            <h3 className="text-title text-center">Best Seller</h3>
            <ListProducts data={bestSallerProduct} />
          </Row>
        </Container>
      </section>

      <section className="sect-5-timer-count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="items-clock">
              <div className="clock-top-content">
                <h3 className="text-white fs-6 mb-2">Penawaran Terbatas</h3>
                <h2 className="text-white fs-4 mb-3">Quality</h2>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className="btn-buy">
                <Link to="/shop" className="nav-link">Kunjungi Sekarang</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end items-img-clock">
              <img src={imgCounter} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section></section>

    </Helmet >
  )
};

export default Home;
