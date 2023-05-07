import React from "react";
import { Row, Col } from "react-bootstrap";
import profileTestimoni from "../assets/img/testimoni.png";
import { testimoni } from "../assets/data/serviceData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimoni = () => {
  return (
    <Row className="justify-content-center">
      <Col md="6" className="d-flex align-items-center mb-5">
        <Swiper
          spaceBetween={30}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimoni.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="wrapper-testimoni ">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div class="icon">
                  {item.icon.map((item, index) => (
                    <span key={index}>
                      <iconify-icon icon={item}>{item}</iconify-icon>
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-3">
                  <div className="text-person">
                    <h3>{item.name}</h3>
                    <p>{item.jobdesk}</p>
                  </div>
                  <img
                    src={item.imgUrl}
                    alt="Customer"
                    className="d-flex align-items-center"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col md="4">
        <div class="img-testimnoi">
          <img src={profileTestimoni} alt="testimoni" className="img-fluid" />
        </div>
      </Col>
    </Row>
  );
};

export default Testimoni;
