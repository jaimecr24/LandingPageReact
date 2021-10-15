//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx";

const opcMenu = ["Home", "About", "Services", "Contact"];
const opcFirst = "Start Bootstrap";

//render your react application
ReactDOM.render(
	<div>
		<Navbar firstItem={opcFirst} otherItems={opcMenu} />
	</div>,
	document.querySelector("#app")
);
