import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";


const Register = () => {

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [file, setFile] = useState(null)
	const [loading, setLoading] = useState(false)

	const register = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const user = userCredential.user
			console.log(user);
		} catch (error) {

		}
	}


	return (
		<Helmet title="Register">
			<section className="sect-login">
				<Container>
					<Row>
						<Col lg="6" className="mx-auto text-center">
							<h3 className='fw-bold fs-4'>Register</h3>
							<Form className='form-login' onSubmit={register}>

								<Form.Group className="form-group mb-3">
									<Form.Control type="email" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
								</Form.Group>

								<Form.Group className="form-group mb-3">
									<Form.Control type="email" placeholder="Masukan Email Anda" value={email} onChange={e => setEmail(e.target.value)} />
								</Form.Group>

								<Form.Group className="form-group mb-3">
									<Form.Control type="password" placeholder="Masukan Password Anda" value={password} onChange={e => setPassword(e.target.value)} />
								</Form.Group>

								<Form.Group className="form-group mb-3">
									<Form.Control type="file" value={password} onChange={e => setFile(e.target.files[0])} />
								</Form.Group>

								<button type='submit' className='btn'>Buat Akun</button>
								<p>Sudah punya akun? <Link to="/login"> Login</Link></p>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}

export default Register

