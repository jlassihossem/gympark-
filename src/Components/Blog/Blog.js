import React from "react";
import blog from "../../images/blog.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import user from "../../images/user.jpg";

const Blog = () => {
	return (
		<main className="blog">
			<div>
				<>
					<div className="container-fluid p-5">
						<div className="row g-5">
							<div className="col-lg-8">
								<div className="mb-5">
									<img
										className="img-fluid w-100 rounded mb-5"
										src={blog}
										alt=""
										style={{ objectFit: "cover" }}
									/>
									<h1 className="text-uppercase mb-4">
										Diam dolor est labore duo ipsum clita sed et lorem tempor
										duo
									</h1>
									<p>
										Sadipscing labore amet rebum est et justo gubergren. Et
										eirmod ipsum sit diam ut magna lorem. Nonumy vero labore
										lorem sanctus rebum et lorem magna kasd, stet amet magna
										accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing
										et at at sanctus et. Ipsum sit gubergren dolores et,
										consetetur justo invidunt at et aliquyam ut et vero clita.
										Diam sea sea no sed dolores diam nonumy, gubergren sit stet
										no diam kasd vero.
									</p>
									<p>
										Voluptua est takimata stet invidunt sed rebum nonumy stet,
										clita aliquyam dolores vero stet consetetur elitr takimata
										rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
										dolores, sanctus lorem kasd duo dolor dolor vero sit et.
										Labore ipsum duo sanctus amet eos et. Consetetur no sed et
										aliquyam ipsum justo et, clita lorem sit vero amet amet est
										dolor elitr, stet et no diam sit. Dolor erat justo dolore
										sit invidunt.
									</p>
									<p>
										Diam dolor est labore duo invidunt ipsum clita et, sed et
										lorem voluptua tempor invidunt at est sanctus sanctus. Clita
										dolores sit kasd diam takimata justo diam lorem sed. Magna
										amet sed rebum eos. Clita no magna no dolor erat diam tempor
										rebum consetetur, sanctus labore sed nonumy diam lorem amet
										eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
										sadipscing gubergren erat. Gubergren at lorem invidunt
										sadipscing rebum sit amet ut ut, voluptua diam dolores at
										sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
										eos.
									</p>
								</div>

								<div className="mb-5">
									<h3 className="text-uppercase mb-4">3 Comments</h3>
									<div className="d-flex mb-4">
										<img
											src={user}
											style={{ objectFit: "cover" }}
											className="img-fluid rounded"
											style={{ width: 45, height: 45 }}
										/>
										<div className="ps-3">
											<h6>
												<a href="">John Doe</a>{" "}
												<small>
													<i>01 Jan 2045</i>
												</small>
											</h6>
											<p>
												Diam amet duo labore stet elitr invidunt ea clita ipsum
												voluptua, tempor labore accusam ipsum et no at. Kasd
												diam tempor rebum magna dolores sed eirmod
											</p>
											<button className="btn btn-sm btn-secondary">
												Reply
											</button>
										</div>
									</div>
									<div className="d-flex mb-4">
										<img
											src={user}
											style={{ objectFit: "cover" }}
											className="img-fluid rounded"
											style={{ width: 45, height: 45 }}
										/>
										<div className="ps-3">
											<h6>
												<a href="">John Doe</a>{" "}
												<small>
													<i>01 Jan 2045</i>
												</small>
											</h6>
											<p>
												Diam amet duo labore stet elitr invidunt ea clita ipsum
												voluptua, tempor labore accusam ipsum et no at. Kasd
												diam tempor rebum magna dolores sed eirmod
											</p>
											<button className="btn btn-sm btn-secondary">
												Reply
											</button>
										</div>
									</div>
									<div className="d-flex ms-5 mb-4">
										<img
											src={user}
											style={{ objectFit: "cover" }}
											className="img-fluid rounded"
											style={{ width: 45, height: 45 }}
										/>
										<div className="ps-3">
											<h6>
												<a href="">John Doe</a>{" "}
												<small>
													<i>01 Jan 2045</i>
												</small>
											</h6>
											<p>
												Diam amet duo labore stet elitr invidunt ea clita ipsum
												voluptua, tempor labore accusam ipsum et no at. Kasd
												diam tempor rebum magna dolores sed eirmod
											</p>
											<button className="btn btn-sm btn-secondary">
												Reply
											</button>
										</div>
									</div>
								</div>

								<div className="bg-dark rounded p-5">
									<h3 className="text-light text-uppercase mb-4">
										Leave a comment
									</h3>
									<form>
										<div className="row g-3">
											<div className="col-12 col-sm-6">
												<input
													type="text"
													className="form-control bg-white border-0"
													placeholder="Your Name"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-12 col-sm-6">
												<input
													type="email"
													className="form-control bg-white border-0"
													placeholder="Your Email"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-12">
												<input
													type="text"
													className="form-control bg-white border-0"
													placeholder="Website"
													style={{ height: 55 }}
												/>
											</div>
											<div className="col-12">
												<textarea
													className="form-control bg-white border-0"
													rows={5}
													placeholder="Comment"
													defaultValue={""}
												/>
											</div>
											<div className="col-12">
												<button
													className="btn btn-primary w-100 py-3"
													type="submit"
												>
													Leave Your Comment
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="col-lg-4">
								{/* Search Form Start */}
								<div className="mb-5">
									<div className="input-group">
										<input
											type="text"
											className="form-control p-3"
											placeholder="Keyword"
										/>
										<button className="btn btn-primary px-4">
											<i className="bi bi-search" />
										</button>
									</div>
								</div>

								<div className="mb-5">
									<h3 className="text-uppercase mb-4">Categories</h3>
									<div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
										<a
											className="fs-5 fw-bold text-light text-uppercase mb-2"
											href="#"
										>
											<i className="bi bi-arrow-right text-primary me-2" />
											Body Building
										</a>
										<a
											className="fs-5 fw-bold text-light text-uppercase mb-2"
											href="#"
										>
											<i className="bi bi-arrow-right text-primary me-2" />
											Gym Trianer
										</a>
										<a
											className="fs-5 fw-bold text-light text-uppercase mb-2"
											href="#"
										>
											<i className="bi bi-arrow-right text-primary me-2" />
											Foot Healthy
										</a>
										<a
											className="fs-5 fw-bold text-light text-uppercase mb-2"
											href="#"
										>
											<i className="bi bi-arrow-right text-primary me-2" />
											Free Cycling
										</a>
										<a
											className="fs-5 fw-bold text-light text-uppercase"
											href="#"
										>
											<i className="bi bi-arrow-right text-primary me-2" />
											Cardio Class
										</a>
									</div>
								</div>

								<div className="mb-5">
									<h3 className="text-uppercase mb-4">Recent Post</h3>
									<div className="bg-dark rounded p-4">
										<div className="d-flex overflow-hidden mb-3">
											<img
												className="img-fluid flex-shrink-0 rounded-start"
												src={blog}
												style={{ objectFit: "cover" }}
												style={{ width: 75 }}
												alt=""
											/>
											<a
												href=""
												className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
											>
												The Greatist Team's Favorite Leggings With Pockets
											</a>
										</div>
										<div className="d-flex overflow-hidden mb-3">
											<img
												className="img-fluid flex-shrink-0 rounded-start"
												src={blog2}
												style={{ objectFit: "cover" }}
												style={{ width: 75 }}
												alt=""
											/>
											<a
												href=""
												className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
											>
												Everything You Need to Know Before Your First Indoor
												Cycling Class
											</a>
										</div>
										<div className="d-flex overflow-hidden mb-3">
											<img
												className="img-fluid flex-shrink-0 rounded-start"
												src={blog3}
												style={{ objectFit: "cover" }}
												style={{ width: 75 }}
												alt=""
											/>
											<a
												href=""
												className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
											>
												13 Ways to Make Lifting Weights More Effective
											</a>
										</div>
										<div className="d-flex overflow-hidden mb-3">
											<img
												className="img-fluid flex-shrink-0 rounded-start"
												src={blog}
												style={{ width: 75 }}
												alt=""
											/>
											<a
												href=""
												className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
											>
												Run Your Best Race Ever with These 5 Tips for the
												Perfect Taper
											</a>
										</div>
										<div className="d-flex overflow-hidden">
											<img
												className="img-fluid flex-shrink-0 rounded-start"
												src={blog2}
												style={{ objectFit: "cover" }}
												style={{ width: 75 }}
												alt=""
											/>
											<a
												href=""
												className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
											>
												Sed amet tempor amet sit kasd sea lorem
											</a>
										</div>
									</div>
								</div>

								<div className="mb-5">
									<h3 className="text-uppercase mb-4">Tag Cloud</h3>
									<div className="d-flex flex-wrap m-n1">
										<a href="" className="btn btn-dark m-1">
											CYCLING
										</a>
										<a href="" className="btn btn-dark m-1">
											BUILDING
										</a>
										<a href="" className="btn btn-dark m-1">
											TRIANER
										</a>
										<a href="" className="btn btn-dark m-1">
											MEDICINE
										</a>
										<a href="" className="btn btn-dark m-1">
											PRODUCTS
										</a>
										<a href="" className="btn btn-dark m-1">
											MEDICATION
										</a>
										<a href="" className="btn btn-dark m-1">
											TREATMENT
										</a>
										<a href="" className="btn btn-dark m-1">
											EVENT
										</a>
									</div>
								</div>

								<div>
									<h3 className="text-uppercase mb-4">Plain Text</h3>
									<div
										className="bg-dark rounded text-center text-light"
										style={{ padding: 30 }}
									>
										<p>
											Vero sea et accusam justo dolor accusam lorem consetetur,
											dolores sit amet sit dolor clita kasd justo, diam accusam
											no sea ut tempor magna takimata, amet sit et diam dolor
											ipsum amet diam
										</p>
										<a href="" className="btn btn-primary py-2 px-4">
											Read More
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>
		</main>
	);
};
export default Blog;
