import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { cartActions } from '../redux/slices/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {

	const cartItems = useSelector(state => state.cart.cartItems)
	const totalAmount = useSelector(state => state.cart.totalAmount)
	return (
		<Helmet title="Cart Produk">
			<CommonSection title="Shopping Cart" />
			<section className='sect-1-cart'>
				<Container>
					<Row>
						<Col lg='9' className='mb-4'>
							{cartItems.length === 0 ? <h4 className='text-center fs-4 text-danger'> Your Cart is Empty!!</h4> :
								<table className='table bordered'>
									<thead>
										<tr>
											<th className='text-center'>Image</th>
											<th >Name</th>
											<th className='text-end'>Price</th>
											<th className='text-center'>Qty</th>
											<th className='text-center'>Delete</th>
										</tr>
									</thead>
									<tbody>
										{
											cartItems.map((item, index) => (
												<Tr item={item} key={index} />
											))
										}
									</tbody>
								</table>}
						</Col>
						<Col lg='3' className='info-sub-total '>
							<div className='d-flex align-items-center justify-content-between '>
								<h1 className='mb-0'>Sub Total</h1>
								<span>Rp. {totalAmount}</span>
							</div>
							<p className='mt-2 text-capitalize'>Pick-up and delivery <br /> will be calculated at checkout</p>
							<div className='items-btn d-flex justify-content-around'>
								<button className='btn-buy  border-0'>
									<Link className='nav-link' to="/products">Next Shopping</Link>
								</button>
								<button className='btn-buy border-0'>
									<Link className='nav-link' to="/checkout">Checkout</Link>
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}

const Tr = ({ item }) => {
	const dispatch = useDispatch()
	const deleteProduct = () => {
		dispatch(cartActions.deleteItem(item.id))
	}

	return <tr>
		<td className='text-center'>
			<img src={item.imgUrl} className="img img-fluid " alt="" />
		</td>
		<td >{item.productName}</td>
		<td className='text-end'>Rp. {item.price}</td>
		<td className='text-center'>{item.quantity} Unit</td>
		<td className='text-center'>
			<motion.span whileTap={{ scale: 1.2 }} onClick={deleteProduct} className='btn-delete'>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z" /></svg>
			</motion.span>
		</td>
	</tr>
}

export default Products
