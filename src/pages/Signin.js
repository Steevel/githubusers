import React, { useContext, useState } from "react";
import {
	Container,
	Form,
	Button,
	FormGroup,
	Label,
	Col,
	Input,
	Row,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "reactstrap";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import auth from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
	const context = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				console.log("Response: ", res);
				context.setUser({
					email: res.user.email,
					uid: res.user.uid,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				toast.error(errorMessage, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleSignup();
	};

	if (context.user?.uid) {
		return <Navigate to="/" />;
	}

	return (
		<Container className="text-center">
			<Row>
				<Col lg={6} className="offset-lg-3 mt-5">
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className="">SignIn Here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for="email" sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type="email"
											name="email"
											id="email"
											placeholder="provide your email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="password" sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type="password"
											name="password"
											id="password"
											placeholder="your password here"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type="submit" block color="primary">
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Signin;
