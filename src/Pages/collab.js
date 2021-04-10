import React from "react";
import Enav from "../Component/nav";
import Heading from "../Component/heading";
import Footer from "../Component/footer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project02 from "../Img/mixtpgen.PNG";
import Project03 from "../Img/Huddle.PNG";




function Collab() {
	return (
		<div>
			<Heading />
			<Enav />
			
			<h2> Collaborative Projects </h2> 
			I had the opportunity to work with a couple of talented developers on joint projects and here some samples of what we developed <br></br><br></br>

<Container fluid><Row>

<Col md>
    <Card className="cardport2">
    <Card.Img variant="top" src="https://github.com/lex4736/Mood_Brew/raw/main/assets/Images/ScreenshotProject01.png" id="bg" />
    <Card.Body className="cardtxt">
    <Card.Title>MOOD BREW - PROJECT 01 </Card.Title>
    <Card.Text className="cardtxt">
	  <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a className="img" href="https://lex4736.github.io/Mood_Brew/"> Click Here</a></Button></li>
    <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Mood_Brew.git"> Click Here</a></Button></li>
    <li><b>PROJECT DESCRIPTION:</b> A drink and food generator based on your mood. There are 3 mood options on the top of our interface. When a user selects a mood category, they will then receive 2 alcohol options catered to that specific mood. A coin flip API will randomly select their type of alcohol. Once alcohol is selected a randomly generated drink and food option appears</li>
	 </ul></Card.Text></Card.Body></Card>
</Col>

<Col md>
<Card className="cardport2">
    <Card.Img variant="top" src={Project02} />
    <Card.Body className="cardtxt">
      <Card.Title>MIX TAPE GENERATION - PROJECT 02 </Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://mixtapegeneration.herokuapp.com/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/MixTapeGeneration.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> An app that allows you to search songs by track and build personalized playlists from your search results. It calls on the Napster API and uses GET and POST routes to retreive and add new data. CRUD functionality is implemented to create and manipulate the playlists. The app is backed by a MySQL database with a Sequelize ORM. The server for the app runs on Node and Express </li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col md>
<Card className="cardport2">
    <Card.Img variant="top" src={Project03}  />
    <Card.Body>
      <Card.Title>HUDDLE ROOM - PROJECT 03</Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="http://huddleroom.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Huddle-Room.git" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> A react based employee managmement system with an authentication feature allowing signup and login function for each employee. Features a scheduling calendar, employee profiles and annoucement page. Uses Mongo DB and Mongoose database </li>
	</ul></Card.Text></Card.Body></Card>
</Col>

</Row></Container>     


<Footer />

		</div>

	);
}

export default Collab;
