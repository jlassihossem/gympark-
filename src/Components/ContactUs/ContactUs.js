import React from "react";

const ContactUs = () => {
	return (
		<main className="contactUs">
			<div>
				<>
					<div className="container-fluid p-5">
						<div className="mb-5 text-center">
							<h5 className="text-primary text-uppercase">Contact Us</h5>
							<h1 className="display-3 text-uppercase mb-0">Get In Touch</h1>
						</div>
						<div className="row g-5 mb-5">
							<div className="col-lg-4">
								<div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
									<div
										className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
										style={{ width: 60, height: 60 }}
									>
										<i className="fa fa-map-marker-alt fs-4 text-white" />
									</div>
									<h5 className="text-uppercase text-primary">Visit Us</h5>
									<p className="text-secondary mb-0">Location, City, Country</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
									<div
										className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
										style={{ width: 60, height: 60 }}
									>
										<i className="fa fa-envelope fs-4 text-white" />
									</div>
									<h5 className="text-uppercase text-primary">Email Us</h5>
									<p className="text-secondary mb-0">info@example.com</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
									<div
										className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
										style={{ width: 60, height: 60 }}
									>
										<i className="fa fa-phone fs-4 text-white" />
									</div>
									<h5 className="text-uppercase text-primary">Call Us</h5>
									<p className="text-secondary mb-0">+012 345 6789</p>
								</div>
							</div>
						</div>
						<div className="row g-0">
							<div className="col-lg-6">
								<div className="bg-dark p-5">
									<form>
										<div className="row g-3">
											<div className="col-6">
												<input
													type="text"
													className="form-control bg-light border-0 px-4"
													placeholder="Your Name"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-6">
												<input
													type="email"
													className="form-control bg-light border-0 px-4"
													placeholder="Your Email"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-12">
												<input
													type="text"
													className="form-control bg-light border-0 px-4"
													placeholder="Subject"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-12">
												<textarea
													className="form-control bg-light border-0 px-4 py-3"
													rows={4}
													placeholder="Message"
													defaultValue={""}
												/>
											</div>
											<div className="col-12">
												<button
													className="btn btn-primary w-100 py-3"
													type="submit"
												>
													Send Message
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6">
								<iframe
									className="w-100"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
									frameBorder={0}
									style={{ height: 457, border: 0 }}
									allowFullScreen=""
									aria-hidden="false"
									tabIndex={0}
								/>
							</div>
						</div>
					</div>

					<a href="#" className="btn btn-dark py-3 fs-4 back-to-top">
						<i className="bi bi-arrow-up" />
					</a>
				</>

				<script src="js/main.js"></script>
			</div>
		</main>
	);
};
export default ContactUs;
