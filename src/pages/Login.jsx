import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Login = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<Helmet title="Login">
			<section className="sect-register">
				<Container>
					<Row>
						<Col lg="6" className="mx-auto text-center">
							<h3 className='fw-bold fs-4'>Login</h3>
							<Form className='form-login'>


								<Form.Group className="form-group mb-3">
									<Form.Control type="email" placeholder="Masukan Email Anda" value={email} onChange={e => setEmail(e.target.value)} />
								</Form.Group>

								<Form.Group className="form-group mb-3">
									<Form.Control type="password" placeholder="Masukan Password Anda" value={password} onChange={e => setPassword(e.target.value)} />
								</Form.Group>



								<button type='submit' className='btn'>Login</button>
								<p>Belum punya akun?
									<Link to="/register"> Buat Akun</Link>
								</p>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}

export default Login
