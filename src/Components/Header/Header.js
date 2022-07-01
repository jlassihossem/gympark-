import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const ITEM_HEIGHT = 48;

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<header className="header">
			<nav className="navBar">
				<h2>
					<span style={{ color: "#fff" }}>Gym </span>{" "}
					<span style={{ color: "#fb5b21" }}>Parck</span>{" "}
				</h2>
				<section className="navOption">
					<p>
						<Link to="/" style={{ color: "#fb5b21" }}>
							Home
						</Link>
					</p>
					<p>
						<Link to="/aboutUs">About us</Link>
					</p>

					<p>
						<Link to="/ourClasses">Our Classes</Link>
					</p>
					<p>
						<Link to="/Trainer">Trainers</Link>
					</p>
					<p>
						<Link to="/blog">Blog</Link>
					</p>
					<p>
						<Link to="/pricing">Pricing</Link>
					</p>
					<p>
						<Link to="/contactUs">Contact us</Link>
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
							<MenuItem
								style={{ backgroundColor: "#fb5b21", fontWeight: "600" }}
								onClick={handleClose}
							>
								Home
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/aboutUs"
						>
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								About us
							</MenuItem>
						</Link>

						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/ourClasses"
						>
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Our Classes
							</MenuItem>
						</Link>

						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/Trainer"
						>
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Trainers
							</MenuItem>
						</Link>
						<Link style={{ textDecoration: "none", color: "black" }} to="/blog">
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Blog
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/pricing"
						>
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Pricing
							</MenuItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/contactUs"
						>
							<MenuItem style={{ fontWeight: "600" }} onClick={handleClose}>
								Contact us
							</MenuItem>
						</Link>
					</Menu>
				</section>
			</nav>
			<section className="headerBody">
				<section>
					<h1 style={{ color: "#fff " }}>
						THE BEST FITNESS <br /> STUDIO IN TOWN
						<br />
						<br />
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						excepturi ratione harum placeat sint, adipisci eaque tenetur fuga
						asperiores ea esse dicta, non sed ex quae quisquam laborum
						voluptatum, veritatis accusamus. Illo omnis harum corrupti?
					</p>
					<Link style={{ textDecoration: "none" }} to="/pricing">
						<Button>JOIN US</Button>
					</Link>
				</section>
				<section>
					<FontAwesomeIcon icon={faYoutube} />
				</section>
			</section>
		</header>
	);
};

export default Header;
