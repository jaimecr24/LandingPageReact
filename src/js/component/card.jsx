import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	//	let styleCss = {
	//		color: "red"
	//	};
	return (
		<div className="card p-0 col mx-2" /*style={styleCss}*/>
			<img src="https://fakeimg.pl/500x325/" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.textBtn}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	textBtn: PropTypes.string
};

export default Card;
