import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	let itemsLi = props.otherItems.map((elem, index) => {
		return (
			<li key={index} className="nav-item">
				<a className="nav-link" href="#">
					{elem}
				</a>
			</li>
		);
	});
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid mx-5">
				<a className="navbar-brand" href="#">
					{props.firstItem}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">{itemsLi}</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	firstItem: PropTypes.string,
	otherItems: PropTypes.array
};

export default Navbar;
