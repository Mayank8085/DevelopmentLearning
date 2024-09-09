import React from "react";
import Menu from "./menu";

const Base = ({
	title = "My Title",
	description = "My description",
	className = "bg-dark text-white p-4",
	children,
}) => (
	<div>
		<Menu />
		<div className="container-fluid">
			<div className="jumbotron bg-dark text-white text-center">
				<h2 className="display-4 ">{title}</h2>
				<p className="lead">{description}</p>
			</div>
			<div className={className}>{children}</div>
		</div>
		<footer className="footer bg-dark mt-auto py-3">
			<div className="container-fluid bg-success text-white text-center py-3">
				<h4>If any quries,feel free to react out</h4>
				<button className="btn btn-lg btn-warning">Contact Us</button>
			</div>
			<div className="container">
				<span className="text-muted">Amazing place to purchase Tshirt</span>
			</div>
		</footer>
	</div>
);

export default Base;
