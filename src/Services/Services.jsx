import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import serviceData from "../assets/data/serviceData";

const Services = () => {
	return (
		<Container className="sect-services">
			<div className="title text-center">
				<h3>Our Service</h3>
			</div>
			<Row>
				{
					serviceData.map((item, index) => (
						<Col lg="3" md="6" className="card-service" key={index}>
							<motion.div whileHover={{ scale: 1.1 }} className="services-items h-100" style={{ background: `${item.bg}` }}>
								<div className="icon-card">
									<iconify-icon icon={item.icon} ></iconify-icon>
								</div>
								<div className="items-text mt-4">
									<h3>{item.title}</h3>
									<p>{item.subtitle}</p>
								</div>
							</motion.div>
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default Services
