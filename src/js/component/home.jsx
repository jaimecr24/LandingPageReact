import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const opcMenu = ["Home", "About", "Services", "Contact"];
const opcFirst = "Start Bootstrap";
const textRnd =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const textRndCard =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Home = () => {
	return (
		<div
			className="container-fluid p-0 ms-auto"
			style={{ height: "100vh", overflowY: "hidden" }}>
			<div style={{ maxHeight: "5%" }}>
				<Navbar firstItem={opcFirst} otherItems={opcMenu} />
			</div>
			<div
				style={{
					maxHeight: "88%",
					minHeight: "88.6%",
					overflowY: "auto"
				}}>
				<Jumbotron
					title="A Warm Welcome!"
					text={textRnd}
					textBtn="Call to action!"
				/>
				<div
					className="row px-3 py-5 mx-auto"
					style={{ maxWidth: "99vw" }}>
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
			<div style={{ maxHeight: "5%" }}>
				<Footer text="Copyright &copy; Your Website 2021" />
			</div>
		</div>
	);
};

export default Home;
