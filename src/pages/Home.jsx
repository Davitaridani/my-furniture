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
import imgChair2 from "../assets/img/img-card-2.png";
import imgChair3 from "../assets/img/img-card-3.png";
import Customers from "../components/Customers";
import BestFurniture from "../components/BestFurniture";
import Testimoni from "../components/Testimoni";

const Home = () => {
  const [bestSallerProduct, setBestSallerProduct] = useState([]);

  useEffect(() => {
    const filteredBestSallerProduct = products.filter(item => item.groupBy === "best-saller");
    setBestSallerProduct(filteredBestSallerProduct)
  }, [])

  const yearNow = new Date().getFullYear()

  return (
    <Helmet title={"Home"}>
      <section className="sect-herro-banner">
        <Container>
          <Row>
            <Col lg="6" md="6" className="content-banner">
              <div className="hero-content">
                <p className="hero-subTitle">Trending Product In {yearNow}</p>
                <h3>Jadikan Interior Anda Lebih Minimalis & Modern</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatem. Ab et, praesentium in doloribus quidem quas natus nemo tenetur commodi, illo provident omnis nam numquam, maiores laboriosam itaque consectetur?</p>
                <motion.button whileTap={{ scale: 1.2 }} className="btn btn-buy">
                  <Link className="nav-link" to="/shop">Buy Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className="pl-0 h-100">
              <div className="hero-img">
                <img src={heroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-2-home">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <div className="wrapper-text">
                <h1>Why are we the best?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et aliquam a eveniet odit, ut cum incidunt animi neque aperiam aspernatur, ipsa reiciendis. Dignissimos, optio delectus.</p>
                <Link href="" className="btn-custom">Explore More</Link>
              </div>
              <div className="item-card d-flex align-items-center">
                <div className="text">
                  <h3>Brefing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, illum, libero possimus.</p>
                  <Link href="" className="btn-custom">Explore More</Link>
                </div>
                <img src={imgChair} alt="sofa" className="img-fluid" />
              </div>
            </Col>
            <Col md="3" className="wrapper-card">
              <div className="cards">
                <div className="img-card d-flex justify-content-center">
                  <img src={imgChair2} alt="chair" className="img-fluid  " />
                </div>
                <div className="text text-center">
                  <h3>Processing</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum.</p>
                  <a href="" className="btn-custom">Explore More</a>
                </div>
              </div>
            </Col>
            <Col md="3" className="wrapper-card">
              <div className="cards mt-5">
                <div className="img-card d-flex justify-content-center">
                  <img src={imgChair3} alt="chair" className="img-fluid  " />
                </div>
                <div className="text text-center">
                  <h3>Finishing</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero et unde.</p>
                  <a href="" className="btn-custom">Explore More</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-3-home">
        <Services />
      </section>

      <section className="sect-4-home">
        <Customers />
      </section>

      <section className="sect-5-home pt-0">
        <BestFurniture />
      </section>

      <section className="sect-6-home">
        <Container>
          <Row>
            <Col lg="6" md="6" className="items-clock">
              <div className="clock-top-content">
                <h1 className="text-white">Limited Offer</h1>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className="btn-buy">
                <Link to="/shop" className="nav-link border-0">Visit Now</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end items-img-clock">
              <img src={imgCounter} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-7-home">
        <Container>
          <h1 className="text-title text-center">Best Saller</h1>
          <Row className="justify-content-evenly">
            <ListProducts data={bestSallerProduct} />
          </Row>
        </Container>
      </section>

      <section className="sect-8-home pt-0">
        <Container>
          <div className="text-center title w-50 mx-auto text-title">
            <h3>What Customers Say</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, eius
              dignissimos. Explicabo laudantium iste facilis! Saepe.
            </p>
          </div>
          <Testimoni />
        </Container>
      </section>

    </Helmet >
  )
};

export default Home;
