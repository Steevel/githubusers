import { useContext, useState } from "react";
import { Container, Row, Col, Input, Button, InputGroup } from "reactstrap";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Axios from "axios";
import { Navigate } from "react-router-dom";

const Home = () => {
	const context = useContext(UserContext);
	const [query, setQuery] = useState("");
	const [user, setUser] = useState(null);

	const fetchDetails = async () => {
		try {
			const { data } = await Axios.get(
				`https://api.github.com/users/${query}`
			);
			setUser(data);
			console.log("data", data);
		} catch (err) {
			console.log(err);
			toast("Not able to locate user ", { type: "error" });
		}
	};

	if (!context.user?.uid) {
		return <Navigate to="/signin" />;
	}

	return (
		<Container>
			<Row className="mt-3">
				<Col md="5">
					<InputGroup>
						<Input
							type="text"
							value={query}
							placeholder="Please provide the username"
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button color="primary" onClick={fetchDetails}>
							Fetch User
						</Button>
					</InputGroup>
					{user ? <UserCard user={user} /> : null}
				</Col>
				<Col md="7">
					{user ? <Repos repos_url={user.repos_url} /> : null}
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
