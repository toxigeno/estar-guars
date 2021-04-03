import React from "react";
import "../../styles/home.scss";
import Characters from "../views/characters";
import Planets from "../views/planets";

export const Home = () => (
	<div>
		<div className="container">
			<div className="mt-1">
				<Characters />
			</div>
			<div className="mt-1">
				<Planets />
			</div>
		</div>
	</div>
);
