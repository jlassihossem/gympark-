import React from "react";
import "./AboutUs.css";
import about from "../../images/about.jpg";

const AboutUs = () => {
	return (
		<main className="about">
			<div>
				<div className="container-fluid p-5">
					<div className="row gx-5">
						<div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
							<div className="position-relative h-100">
								<img
									className="position-absolute w-100 h-100 rounded"
									src={about}
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="mb-4">
								<h5 className="text-primary text-uppercase">About Us</h5>
								<h1 className="display-3 text-uppercase mb-0">
									Welcome to Gym Parck
								</h1>
							</div>
							<h4 className="text-body mb-4">
								Our dedicated Gym Parck areas and fitness experts can help you
								discover new training techniques and exercises that offer a
								dynamic and efficient full-body workout.
							</h4>
							<p className="mb-4">
								Our fitness experts can help you discover new training
								techniques. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
				{/* About End */}
				{/* Programe Start */}
				<div
					className="container-fluid programe position-relative px-5 mt-5"
					style={{ marginBottom: 180 }}
				>
					<div className="row g-5 gb-5">
						<div className="col-lg-4 col-md-6">
							<div className="bg-light rounded text-center p-5">
								<i className="flaticon-six-pack display-1 text-primary" />
								<h3 className="text-uppercase my-4">Body Building</h3>
								<p>
									Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr
									dolor amet kasd elitr duo vero amet amet stet
								</p>
								<a className="text-uppercase" href="">
									Read More <i className="bi bi-arrow-right" />
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="bg-light rounded text-center p-5">
								<i className="flaticon-barbell display-1 text-primary" />
								<h3 className="text-uppercase my-4">Weight Lefting</h3>
								<p>
									Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr
									dolor amet kasd elitr duo vero amet amet stet
								</p>
								<a className="text-uppercase" href="">
									Read More <i className="bi bi-arrow-right" />
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="bg-light rounded text-center p-5">
								<i className="flaticon-bodybuilding display-1 text-primary" />
								<h3 className="text-uppercase my-4">Muscle Building</h3>
								<p>
									Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr
									dolor amet kasd elitr duo vero amet amet stet
								</p>
								<a className="text-uppercase" href="">
									Read More <i className="bi bi-arrow-right" />
								</a>
							</div>
						</div>
						<div className="col-lg-12 col-md-6 text-center">
							<h1 className="text-uppercase text-light mb-4">
								30% Discount For This Summer
							</h1>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default AboutUs;
