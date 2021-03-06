import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainBody from "./Components/MainBody/MainBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecondaryHeader from "./Components/SecondaryHeader/SecondaryHeader";
import OurClasses from "./Components/OurClasses/OurClasses";
import Trainer from "./Components/Trainer/Trainer";
import ClassDetails from "./Components/ClassDetails/ClassDetails";
import Pricing from "./Components/Pricing/Pricing";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/Blog/Blog";
 
function App() {
	return (
		<div className="powerX">
			<Router>
				<Switch>
					<Route exact path="/">
						<Header></Header>
						<MainBody></MainBody>
						<Footer></Footer>
					</Route>
					<Route path="/aboutUs">
						<SecondaryHeader></SecondaryHeader>
						<AboutUs />
						<Footer></Footer>
					</Route>
					<Route path="/ourClasses">
						<SecondaryHeader></SecondaryHeader>
						<OurClasses></OurClasses>
						<Footer></Footer>
					</Route>

					<Route path="/Trainer">
						<SecondaryHeader></SecondaryHeader>
						<Trainer> </Trainer>
						<Footer></Footer>
					</Route>
					<Route path="/blog">
						<SecondaryHeader></SecondaryHeader>
						<Blog />
						<Footer></Footer>
					</Route>
					<Route path="/pricing">
						<SecondaryHeader></SecondaryHeader>
						<Pricing></Pricing>
						<Footer></Footer>
					</Route>
					<Route path="/contactUs">
						<SecondaryHeader></SecondaryHeader>
						<ContactUs />
						<Footer></Footer>
					</Route>
					<Route path="/physioTraining">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/selfDefense">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/advanceGym">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/cardioTraining">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/strengthTraining">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/physioTraining2">
						<SecondaryHeader></SecondaryHeader>
						<ClassDetails></ClassDetails>
						<Footer></Footer>
					</Route>
					<Route path="/pricing/:path">
						<SecondaryHeader></SecondaryHeader>
						<Pricing></Pricing>
						<Footer></Footer>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
