import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<div className="bg-dark text-white pt-3 pb-1">
			<p className="text-center">{props.text}</p>
		</div>
	);
};

Footer.propTypes = {
	text: PropTypes.string
};

export default Footer;
