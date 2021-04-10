import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';


function Enav() {
	return (

<header>
	
								
 <Navbar collapseOnSelect expand="lg" fixed="top" id="nav">
  <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
	<Button variant="secondary"><Link className="navstyle" to="/aboutme"> ABOUT ME</Link></Button>
	<Button variant="secondary"><Link className="navstyle" to="/projects">PERSONAL PROJECTS</Link></Button>
	<Button variant="secondary"><Link className="navstyle" to="/collab">COLLABORATIVE PROJECTS</Link></Button>
	<Button variant="secondary"><Link className="navstyle" to="/contact">CONTACT ME</Link></Button>
	<Button variant="secondary"><a className="navstyle" href="https://www.dropbox.com/s/kf5hyxam2lbuhya/Alexis%20Arando%20Resume%202021%20-%20Update%2003.pdf?dl=0" target="_blank" rel="noopener noreferrer">RESUME</a></Button>
	<Button variant="secondary"><a className="navstyle" href="https://github.com/lex4736" target="_blank" rel="noopener noreferrer">GITHUB</a></Button>
	<Button variant="secondary"><a className="navstyle" href="https://www.linkedin.com/in/alexisarando/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></Button>


    </Nav>
  </Navbar.Collapse>
</Navbar>


		</header>
	);
}

export default Enav;