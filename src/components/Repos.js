/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
	const [repos, setRepos] = useState([]);

	const fetchRepos = async () => {
		console.log("fetchRepos called", repos_url);
		const { data } = await Axios.get(repos_url);
		setRepos(data);
		console.log("fetchRepos data", data);
	};

	useEffect(() => {
		fetchRepos();
	}, [repos_url]);

	return (
		<ListGroup>
			{repos.map((repo) => (
				<ListGroupItem key={repo.id}>
					<div className="text-primary">{repo.name}</div>
					<div className="text-scondary">{repo.language}</div>
					<div className="text-info">{repo.description}</div>

					{repo.homepage !== null && repo.homepage !== "" ? (
						<div className="">
							Live link:&nbsp;
							<a className="text-info" href={repo.homepage}>
								{repo.homepage}
							</a>
						</div>
					) : null}
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default Repos;
