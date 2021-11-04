import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return (
		<div className="jumbotron bg-light p-4 w-100">
			<h1 className="display-4">{props.title}</h1>
			<p>{props.text}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.textBtn}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	textBtn: PropTypes.string
};

export default Jumbotron;
