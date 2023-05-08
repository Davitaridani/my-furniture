import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import imgAbout from "../assets/img/about.jpg";
import iconVisi from "../assets/img/og-visi.png";
import iconMisi from "../assets/img/og-misi.png";

const About = () => {
	return (
		<Helmet title="About">
			<section className="herro-banner-about">
				<Container className="text-center">
					<div className="title">
						<h1>About Me</h1>
					</div>
				</Container>
			</section>

			<section className="sect-2-about">
				<Container>
					<Row className="justify-content-center wrapper-text">
						<Col md="4">
							<div className="quote d-flex align-items-center">
								<span>
									<iconify-icon icon="ic:round-format-quote" flip="horizontal"></iconify-icon>
								</span>
								<h1 className="text-center">Indonesia Family Furniture</h1>
								<span>
									<iconify-icon icon="ic:round-format-quote" rotate="180deg" flip="horizontal"></iconify-icon>
								</span>
							</div>
							<figure className="figure-about">
								<img src={imgAbout} alt="About" />
							</figure>
						</Col>
						<Col md="7">
							<div className="text-about">
								<h1>My Furniture</h1>
								<div className="desc">
									<p>MyFurniture is a national scale household knockdown furniture brand that is the choice of "Indonesian Family Furniture". MyFurniture provides inspirational solutions for your dream home starting from the living room, family room, bedroom and kitchen. Household furniture with Engineered Wood raw materials such as Particle Board, MDF and Plywood</p>
									<p>The company was founded in 2023 in the city of Jember and expanded in 2015 to the Lumajang district with the current number of employees reaching more than 1,000 people. For MyFurniture, home is the most comfortable place for each family member to spend most of their time. A place to share love, a place to unwind, and a place that is always missed, so these factors are our concern and priority.</p>
									<p>we are also committed and have a vision, namely to always provide the best products with minimalist and modern designs with various patterns, so that they can accompany and warm Indonesian family homes with a touch of stunning furnishings and affordable prices.</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row className="visi-misi mt-5 justify-content-center gap-3">
						<Col md="5">
							<img src={iconVisi} alt="Visi" />
							<h3>Our Visi</h3>
							<ul>
								<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut non quaerat, possimus optio tempore in quam.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic corrupti vitae? Quis alias praesentium nesciunt dolore nisi ratione eius!</li>
								<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut non quaerat, possimus .</li>
							</ul>
						</Col>
						<Col md="5">
							<img src={iconMisi} alt="Misi" />
							<h3>Our Misi</h3>
							<ul>
								<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut non quaerat, possimus optio tempore in quam.</li>
								<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut non quaerat, possimus optio tempore in quam.</li>
								<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut non quaerat, possimus optio tempore in quam.</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default About;
