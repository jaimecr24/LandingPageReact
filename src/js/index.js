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
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";

const opcMenu = ["Home", "About", "Services", "Contact"];
const opcFirst = "Start Bootstrap";
const textRnd =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const textRndCard =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//render your react application
ReactDOM.render(
	<div>
		<Navbar firstItem={opcFirst} otherItems={opcMenu} />
		<div className="container-fluid">
			<Jumbotron
				title="A Warm Welcome!"
				text={textRnd}
				textBtn="Call to action!"
			/>
			<div className="row m-5">
				<Card
					title="Card title"
					text={textRndCard}
					textBtn="Find Out More!"
				/>
				<Card
					title="Card title"
					text={textRndCard}
					textBtn="Find Out More!"
				/>
				<Card
					title="Card title"
					text={textRndCard}
					textBtn="Find Out More!"
				/>
				<Card
					title="Card title"
					text={textRndCard}
					textBtn="Find Out More!"
				/>
			</div>
		</div>
	</div>,
	document.querySelector("#app")
);
