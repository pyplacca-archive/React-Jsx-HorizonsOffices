import React from "react";
import "./App.css";
import logo from "./images/logo.png";

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}


function App() {
	
	const flags = importAll(
		require.context("./images/flags", false, /\.(png|jpe?g|svg)$/)
	);
	const carousel = importAll(
		require.context("./images/carousel", false, /\.(png|jpe?g|svg)$/)
	);
	const thumbs = importAll(
		require.context("./images/thumb", false, /\.(png|jpe?g|svg)$/)
	);

	return (
		<div className="container">
			<nav>
				<a href="#">
					<img src={logo} alt="Horizon Offices"></img>
				</a>
				<div className="flags">
					{["gh", "ng", "ke"].map((c) => (
						<a href="">
							<img src={flags[`${c}.svg`]} alt={c}></img>
						</a>
					))}
				</div>
				<a href="#">About Us</a>
			</nav>
			<main>
				<div className="carousel">
					<div id="left-arrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25.787"
							height="43.089"
							viewBox="0 0 25.787 43.089"
						>
							<path
								id="chevron-left"
								className="cls-1"
								d="M1369.6-193.042l-19.423,19.423L1369.6-154.2"
								transform="translate(-1345.939 195.163)"
							/>
						</svg>
					</div>
					<div id="right-arrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25.787"
							height="43.089"
							viewBox="0 0 25.787 43.089"
						>
							<path
								id="chevron-right"
								className="cls-1"
								d="M1350.182-193.042l19.423,19.423L1350.182-154.2"
								transform="translate(-1348.061 195.163)"
							/>
						</svg>
					</div>
					<div className="indicators">
						<button id="1" className="active"></button>
						{[2, 3, 4].map((n) => (
							<button id={n}></button>
						))}
					</div>
					<div className="images">
						<img
							src={carousel["img6.jpg"]}
							alt="image1"
							className="active"
						></img>
						{[2, 3, 5].reduce((img_elems, n, i) => {
							img_elems.push(
								<img
									src={carousel[`img${n}.jpg`]}
									alt={"image" + (i + 2)}
								></img>
							);
							return img_elems;
						}, [])}
					</div>
				</div>
				<sub>
					<h2>plans</h2>
					<div className="thumbnails">
						{[
							[
								"Virtual Offices",
								"Our virtual offices allow your business to get our location address phone services, and also make you become a member of our community with benefits such as access to our meeting rooms",
							],
							[
								"Customized Offices",
								"Our customized offices offer you the liberty to customize the entire office to suit your taste and preference",
							],
							[
								"Serviced Offices",
								"Our serviced offices offer a great location for your business, internet connectivity, utilities, among others",
							],
							[
								"Meeting Rooms",
								"Our meeting rooms offer a great location for your meeting with your clients or business partners. We provide presentation equipment and coffee. You also get to become a member of our community with benefits including access to our meeting rooms.",
							],
						].reduce((thumb_divs, item, i) => {
							thumb_divs.push(
								<div className="thumb">
									<img
										src={thumbs[`thumb${i + 1}.jpg`]}
										alt={item[0].toLowerCase()}
									></img>
									<section>
										<h3>{item[0]}</h3>
										<p>{item[1]}</p>
									</section>
								</div>
							);
							return thumb_divs;
						}, [])}
					</div>
				</sub>
			</main>
			<footer>
				<div className="option">
					<h3>Visit us in Kenya</h3>
					<h4>Nairobi, Kenya</h4>
					<p>
						Belgravia Centre, 14 Riverside Drive,<br></br>4th Floor, Off
						Riverside Drive<br></br>Hanover Centre, 14 Riverside Drive<br></br>
						6th Floor, Off Riverside Drive
					</p>
				</div>
				<div className="option">
					<h3>Visit us in Ghana</h3>
					<h4>Accra, Ghana</h4>
					<p>8th Floor, One Airport Square, Airport City</p>
				</div>
				<div className="option">
					<h3>Visit us in Nigeria</h3>
					<h4>Lagos, Nigeria</h4>
					<p>Sterling Bank Building</p>
				</div>
			</footer>

		</div>
	);
}

export default App;
