import { IconButton, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SecondaryHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const ITEM_HEIGHT = 48;

const SecondaryHeader = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [headerText, setHeaderText] = useState(null);

	const open = Boolean(anchorEl);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/aboutUs") {
			setHeaderText("ABOUT US");
		} else if (location.pathname === "/ourClasses") {
			setHeaderText("OUR CLASSES");
		} else if (location.pathname === "/Trainer") {
			setHeaderText("Trainer");
		} else if (location.pathname === "/blog") {
			setHeaderText("BLOG");
		} else if (location.pathname === "/pricing") {
			setHeaderText("PRICING PLANS");
		} else if (location.pathname === "/contactUs") {
			setHeaderText("CONTACT US");
		} else if (location.pathname === "/physioTraining") {
			setHeaderText("PHYSIO TRAINING");
		} else if (location.pathname === "/selfDefense") {
			setHeaderText("SELF DEFENSE");
		} else if (location.pathname === "/advanceGym") {
			setHeaderText("ADVANCE GYM");
		} else if (location.pathname === "/cardioTraining") {
			setHeaderText("CARDIO TRAINING");
		} else if (location.pathname === "/strengthTraining") {
			setHeaderText("STRENGTH TRAINING");
		} else if (location.pathname === "/physioTraining2") {
			setHeaderText("PHYSIO TRAINING");
		} else if (location.pathname === "/pricing/:planDetails") {
			setHeaderText("YOUR GYM MEMBERSHIP");
		}
	}, [location.pathname]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<main className="secondaryHeader">
			<nav className="navBar">
				<h2>
					<span style={{ color: "#fff" }}>Gym </span>{" "}
					<span style={{ color: "#fb5b21" }}>Parck</span>{" "}
				</h2>
				<section className="navOption">
					<p>
						<Link to="/">Home</Link>
					</p>
					<p>
						<Link
							to="/aboutUs"
							style={{ color: location.pathname === "/aboutUs" && "#fb5b21" }}
						>
							About Us
						</Link>
					</p>

					<p>
						<Link
							to="/ourClasses"
							style={{
								color: location.pathname === "/ourClasses" && "#fb5b21",
							}}
						>
							Our Classes
						</Link>
					</p>
					<p>
						<Link
							to="/Trainer"
							style={{
								color: location.pathname === "/Trainer" && "#fb5b21",
							}}
						>
							Trainers
						</Link>
					</p>
					<p>
						<Link
							to="/blog"
							style={{ color: location.pathname === "/blog" && "#fb5b21" }}
						>
							Blog
						</Link>
					</p>
					<p>
						<Link
							to="/pricing"
							style={{ color: location.pathname === "/pricing" && "#fb5b21" }}
						>
							Pricing
						</Link>
					</p>
					<p>
						<Link
							to="/contactUs"
							style={{
								color: location.pathname === "/contactUs" && "#fb5b21",
							}}
						>
							Contact us
						</Link>
					</p>
				</section>
				<section>
					<IconButton
						aria-label="more"
						aria-controls="long-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						<FontAwesomeIcon icon={faEllipsisV} style={{ color: "white" }} />
					</IconButton>
					<Menu
						id="long-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: "20ch",
							},
						}}
					>
						<Link style={{ textDecoration: "none", color: "black" }} to="/">
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Home
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "#fff" }}
							to="/aboutUs"
						>
							<MenuItem
								style={{
									backgroundColor:
										location.pathname === "/aboutUs" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								About Us
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/ourClasses"
						>
							<MenuItem
								style={{
									backgroundColor:
										location.pathname === "/ourClasses" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								Our Classes
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/trainer"
						>
							<MenuItem
								style={{
									backgroundColor:
										location.pathname === "/trainer" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								Trainers
							</MenuItem>
						</Link>
						<Link style={{ textDecoration: "none", color: "black" }} to="/blog">
							<MenuItem
								style={{
									backgroundColor: location.pathname === "/blog" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								Blog
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/pricing"
						>
							<MenuItem
								style={{
									backgroundColor:
										location.pathname === "/pricing" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								Pricing
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "#fff" }}
							to="/contactUs"
						>
							<MenuItem
								style={{
									backgroundColor:
										location.pathname === "/contactUs" && "#fb5b21",
									fontWeight: "600",
								}}
								onClick={handleClose}
							>
								Contact us
							</MenuItem>
						</Link>
					</Menu>
				</section>
			</nav>
			<section>
				<h1 style={{ color: "#fff" }}>{headerText}</h1>
			</section>
		</main>
	);
};

export default SecondaryHeader;
