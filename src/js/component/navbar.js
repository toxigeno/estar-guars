import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-dark">
				<div className="d-flex">
					<div>
						<a className="navbar-brand" href="#">
							<img
								src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
								width="50%"
							/>
						</a>
					</div>
				</div>
				<div className="dropdown">
					<a
						className="btn btn-secondary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</a>
					<ul className="dropdown-menu">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
