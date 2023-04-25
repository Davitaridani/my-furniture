import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from "framer-motion";
import ListProducts from "../components/UI/ListProducts";
import { useDispatch } from "react-redux";
import { cartActions } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
	const [tab, setTab] = useState("desc");
	const [rating, setRating] = useState(null)
	const reviewUser = useRef("")
	const reviewMsg = useRef("")
	const dispatch = useDispatch()

	const { id } = useParams()
	const product = products.find(item => item.id === id)
	const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product

	const relatedProducts = products.filter(item => item.category === category)

	const handleSubmit = (e) => {
		e.preventDefault()

		const reviewUserName = reviewUser.current.value;
		const reviewUserMsg = reviewMsg.current.value;

		const resultReview = {
			author: reviewUserName,
			textMsg: reviewUserMsg,
			rating
		}
		console.log(resultReview);
		toast.success("Anda Berhasil Mereview Produk")
	}

	const addToCart = () => {
		dispatch(cartActions.addItem({
			id: id,
			image: imgUrl,
			productName,
			price
		}))
		toast.success("Produk Berhasil di Tambahkan")
	}

	// Btn scroll top ketika produk di pilih
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [product])

	return (
		<Helmet title={productName}>
			<CommonSection title={productName} />
			<section className="detail-product">
				<Container>
					<Row>
						<Col lg="6">
							<div className="img-product">
								<img src={imgUrl} alt="" />
							</div>
						</Col>
						<Col lg="6">
							<div className="info-product">
								<h3>{productName}</h3>
								<div className="rating-product d-flex align-items-center mb-4">
									<span >
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
									</span>
									<span >
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
									</span>
									<span >
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
									</span>
									<span >
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
									</span>
									<span >
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.125v7.8l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4ZM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
									</span>
									<div className="text-rating ps-3">
										<p>(<span>{avgRating}</span> Ratings)</p>
									</div>
								</div>
								<div className="product-price d-flex align-items-center gap-4">
									<span className='text-price'>Rp. {price}</span>
									<span className='text-category text-capitalize'> Category : {category}</span>
								</div>
								<div className="desc-sort">
									<p className="mt-3">{shortDesc}</p>
								</div>
								<motion.button whileTap={{ scale: 1.1 }} className="btn-buy" onClick={addToCart}>Add to Cart</motion.button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="tab-view">
				<Container>
					<Row>
						<Col lg="12">
							<div className="tab-wrapper d-flex align-items-center gap-5">
								<h3 className={`${tab === 'desc' ? "active-tab" : ""}`} onClick={() => setTab("desc")}>Deskripsi</h3>
								<h3 className={`${tab === 'review' ? "active-tab" : ""}`} onClick={() => setTab("review")}>Review ({reviews.length})</h3>
							</div>
							{tab === "desc" ? <div className="tab-content mt-3">
								<p>{description}</p>
							</div> : (
								<div className="product-review mt-3">
									<div className="review-wrapper">
										<ul>
											{reviews?.map((item, index) => (
												<li key={index} className="mb-4">
													<h5>Davit</h5>
													<span>{item.rating} (Rating)</span>
													<p>{item.text}</p>
												</li>
											))}
										</ul>

										<div className="form-review">
											<h3>Tinggalkan Pesan</h3>
											<form action="" onSubmit={handleSubmit}>
												<div className="form-group">
													<input type="text" placeholder="Name" ref={reviewUser} required />
												</div>
												<div className="form-group d-flex align-items-center gap-3">
													<motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
														</svg>
													</motion.span>
													<motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
														</svg>
													</motion.span>
													<motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
														</svg>
													</motion.span>
													<motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
														</svg>
													</motion.span>
													<motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
														</svg>
													</motion.span>
												</div>
												<div className="form-group">
													<textarea ref={reviewMsg} row={8} type="text" placeholder="Review Message" required />
												</div>
												<motion.button whileTap={{ scale: 1.2 }} type="submit" className="btn-review">Kirim</motion.button>
											</form>
										</div>
									</div>
								</div>)}

						</Col>
						<Col lg="12" className="item-product-kategory" >
							<h3 className="related-title text-center text-capitalize">
								Produk yang mungkin ada suka
							</h3>
						</Col>
						<ListProducts data={relatedProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}

export default ProductDetail
