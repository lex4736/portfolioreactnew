import "./App.css";
import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter,Switch, Route} from "react-router-dom";
import Aboutme from "./Pages/aboutme";
import Contact from "./Pages/contact";
import Collab from "./Pages/collab";
import Projects from "./Pages/projects";





function App() {

	return (
		<div className="App">
				
				<HashRouter><Switch>
						<Route path="/contact" component={Contact} />
						<Route path="/projects" component={Projects} />
						<Route path="/collab" component={Collab} />
						<Route path="/" component={Aboutme} />	
					</Switch>	
				</HashRouter>
		
		</div>
	);
}

export default App;
