import React, { useState } from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import ListProducts from "../components/UI/ListProducts";
import products from "../assets/data/products";

const Shop = () => {
	const [productsData, setProductsData] = useState(products)


	const handleFilter = e => {
		const filterValue = e.target.value

		if (filterValue === "chair") {
			const filteredProducts = products.filter(item => item.category === "chair")
			setProductsData(filteredProducts)
		} else if (filterValue === "mattress") {
			const filteredProducts = products.filter(item => item.category === "mattress")
			setProductsData(filteredProducts)
		} else if (filterValue === "sofa") {
			const filteredProducts = products.filter(item => item.category === "sofa")
			setProductsData(filteredProducts)
		} else if (filterValue === "table") {
			const filteredProducts = products.filter(item => item.category === "table")
			setProductsData(filteredProducts)
		} else if (filterValue === "wardrobe") {
			const filteredProducts = products.filter(item => item.category === "wardrobe")
			setProductsData(filteredProducts)
		}
	}
	const handleSearch = e => {
		const searchValue = e.target.value
		const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchValue.toLowerCase()))
		setProductsData(searchProducts)
	}

	return (
		<Helmet title="Product">
			<CommonSection title="Products" />
			<div className="shop-products">
				<Container>
					<Row>
						<Col lg="3" md="6" className="filter-widget me-4" >
							<select onChange={handleFilter}>
								<option>Filter By Category</option>
								<option value="chair">Chair</option>
								<option value="mattress">Mattress</option>
								<option value="sofa">Sofa</option>
								<option value="table">Table</option>
								<option value="wardrobe">Wardrobe</option>
							</select>
						</Col>
						<Col lg="3" md="6" className="filter-widget" >
							{/* <select>
								<option>Sort By</option>
								<option value="ascending">Ascending</option>
								<option value="descending">Descending</option>
							</select> */}
						</Col>
						<Col lg="5" md="6"  >
							<div className="btn-search-box">
								<input type="text" placeholder="Search....." onChange={handleSearch} />
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" /></svg>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="list-product pt-0">
				<Container>
					<Row>
						{products.length === 0 ? <h3 className="text-center fs-4 text-danger">Produk yang anda cari tidak ada!!!</h3> : <ListProducts data={productsData} />}
					</Row>
				</Container>
			</div>
		</Helmet >
	)
}

export default Shop
