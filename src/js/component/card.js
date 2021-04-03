import React from "react";

const Card = () => {
	return (
		<div className="row">
			<div className="col-4">
				<div className="card">
					<img src=" https://via.placeholder.com/400/200?text=Frijol" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<div className="d-flex">
							<a href="#" className="btn btn-primary">
								Learn MORE
							</a>
							<button className="ml-auto btn btn-warning">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
