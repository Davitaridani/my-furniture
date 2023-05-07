import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import serviceData from "../assets/data/serviceData";

const Services = () => {
	return (
		<Container className="sect-services">
			<Row className="justify-content-center">
				<Col md="4" className='d-flex align-items-center'>
					<div className="text-service">
						<h3>Our Services</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eligendi neque! Ipsum dolorem dolor minima veritatis in iusto, nostrum natus, cupiditate nihil eveniet laborum ipsa fugiat.</p>
						<a href="" className='btn-custom'>Explore More</a>
					</div>
				</Col>
				<Col md="7">
					<Row className='gap-4 justify-content-center'>
						{serviceData.map((item, index) => (
							<Col lg="5" md="5" className="card-service" key={index}>
								<motion.div whileHover={{ scale: 1.1 }} className="services-items h-100 d-flex align-items-center">
									<div className="items-text">
										<h3>{item.title}</h3>
										<p>{item.subtitle}</p>
									</div>
									<div className="icon-card">
										<iconify-icon icon={item.icon} ></iconify-icon>
									</div>
								</motion.div>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Services
