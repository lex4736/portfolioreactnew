import React from "react";
import Enav from "../Component/nav";
import Heading from "../Component/heading";
import Footer from "../Component/footer";
import Card from 'react-bootstrap/Card';


function Contact() {
	return (
		<div>
			<Heading />
			<Enav />


<Card  className="idcard">
  <Card.Body>
    <Card.Title>My Contact Information</Card.Title>
    <Card.Text>
<li><b>EMAIL: </b> lex4736@gmail.com || <button type="submit" class="btn btn-secondary"><a href="mailto:lex4736@gmail.com?subject=Mail from Portfolio">Click here to email me</a></button></li>
<li><b>PHONE NUMBER:</b> 415-489-8339</li>
<li><b>LOCATION:</b> San Francisco Bay Area</li>
    </Card.Text>
  </Card.Body>
</Card>


<div className="footsp"><Footer /></div>

    </div>



		
	);
}

export default Contact;