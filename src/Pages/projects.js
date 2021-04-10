import React from "react";
import Enav from "../Component/nav";
import Heading from "../Component/heading";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Read from "../Img/readmegen.PNG";
import Burger from "../Img/ScreenshotBM.PNG";
import Notepad from "../Img/dignotep.PNG";
import Workout from "../Img/wokrout.PNG";
import Footer from "../Component/footer";


function Projects() {
	return (
		<div>
			<Heading />
			<Enav />
<h2> Personal Projects </h2> 
Here are samples of applications I have developed throughout my journey in mastering fullstack development<br></br><br></br>
<Container fluid><Row>


<Col sm>
    <Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/marketingweb-coderefactor/raw/master/assets/images/Screenshot%202020-10-03%2016.48.12.png" id="thumbnail2" />
    <Card.Body className="cardtxt">
    <Card.Title>CODE REFACTORING</Card.Title>
    <Card.Text className="cardtxt">
	  <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a className="img" href="https://lex4736.github.io/marketingweb-coderefactor/"> Click Here</a></Button></li>
    <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/marketingweb-coderefactor.git"> Click Here</a></Button></li>
    <li><b>PROJECT DESCRIPTION:</b> Refactored a marketing webpage to meet current accesibility standards and optimized codes for search engines</li>
	 </ul></Card.Text></Card.Body></Card>
</Col>

<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/Simple-Password-Generator/raw/master/Assets/passwordgenscreenshot.png" id="thumbnail2" />
    <Card.Body className="cardtxt">
      <Card.Title>SIMPLE PASSWORD GENERATOR</Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://lex4736.github.io/Simple-Password-Generator/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Simple-Password-Generator.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> A simple javascript driven webpage to assist you with creating a unique secure password </li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/purrformancereview/raw/master/assets/Screenshot1.jpg" id="thumbnail2" />
    <Card.Body>
      <Card.Title>PURRFORMANCE REVIEW</Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://lex4736.github.io/purrformancereview/" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/purrformancereview.git" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> A Javascript driven multiple choice questionaire/quiz that implements a countdown timer and tracks the number of questions</li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/Weatherboard/raw/master/assets/ScreenshotHW06.png" id="thumbnail2" />
    <Card.Body>
      <Card.Title>WEATHERBOARD</Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://lex4736.github.io/Weatherboard/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Weatherboard.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> A weather search application powered by the openweather API with a responsive layout. This application allows user to input their desired city and will fetch data from openweather to display current conditions and a future 5 day forecast.The search history will be tracked and displayed under current search to allow user to go back and forth between their searches</li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/fallworkdayplanner/raw/master/ScreenshotHW05.PNG" id="thumbnail2" />
    <Card.Body>
      <Card.Title>FALL WORK DAY PLANNER </Card.Title>
      <Card.Text>
	 <ul>
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://lex4736.github.io/fallworkdayplanner/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/fallworkdayplanner.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> A fall themed work day planner that shows current time and gives the ability for user to input custom notes for each time block. Also displays color coding time blocks for past, present and future. This planner not only gives you the ability to save your schedule in your local storage but also allows your to clear it to start a new day</li>
	</ul></Card.Text></Card.Body></Card>
</Col>



</Row> <Row>

<Col sm>
    <Card className="cardport">
    <Card.Img variant="top" src={Read} id="thumbnail2" />
    <Card.Body className="cardtxt">
    <Card.Title>SNAZZY README GENERATOR</Card.Title>
    <Card.Text className="cardtxt">
	  <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a className="img" href="https://user-images.githubusercontent.com/71117049/107750354-c3dd7500-6cd0-11eb-8710-b5c47e959578.gif"> Click Here</a></Button></li>
    <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/snazzyreadme.git"> Click Here</a></Button></li>
    <li><b>PROJECT DESCRIPTION:</b> An npm inquirer powered application that will autopopulate a snazzy readme file based on user input </li>
	 </ul></Card.Text></Card.Body></Card>
</Col>

<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src="https://github.com/lex4736/Teamroster/raw/master/assets/Screenshot.png" id="thumbnail2" />
    <Card.Body className="cardtxt">
      <Card.Title>TEAM ROSTER </Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://youtu.be/M-nl0pjT3oQ"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Teamroster.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b>  An npm inquirer powered application that will populate an employee team list based on data entered by the user for each selected predefined classes ( Manager, Engineer and Intern classes). Utilizes Jest for running test </li>
	</ul></Card.Text></Card.Body></Card>
</Col>

<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src={Burger} id="thumbnail2" />
    <Card.Body>
      <Card.Title>EAT-DA-BURGER MACHINE 2000 </Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://burgermachine2000.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/BurgerMachine2000.git" target="_blank" rel="noopener noreferrer"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> An application utilizing Mysql,Node, Express, Handbars and ORM that will allow user to input a burger name they want to order which will add custom burger to the ordered burger list. The user then has the option to devour(remove from the list) the custom burgers created and once devoured, those burgers gets stored in the receipt/ order history at the bottom</li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src={Notepad} id="thumbnail2" />
    <Card.Body>
      <Card.Title>DIGITAL NOTEPAD</Card.Title>
      <Card.Text>
	 <ul className="cardtxt">
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://digitalnotepad.herokuapp.com/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="https://github.com/lex4736/Digital-Notepad.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> An express JS application that allows user to write custom notes featuring a diary theme. This application allows the users to save notes for later use and retrieve that data from a Json file</li>
	</ul></Card.Text></Card.Body></Card>
</Col>


<Col sm>
<Card className="cardport">
    <Card.Img variant="top" src={Workout} id="thumbnail2" />
    <Card.Body>
      <Card.Title> WORKOUT DIARY</Card.Title>
      <Card.Text>
	 <ul>
	  <li><b>PROJECT WEBPAGE:</b><Button variant="secondary" size="lg" block><a href="https://workoutdiary123.herokuapp.com/"> Click Here</a></Button></li>
      <li><b>GITHUB REPOSITORY:</b><Button variant="secondary" size="lg" block><a href="git@github.com:lex4736/Workout-Diary.git"> Click Here</a></Button></li>
      <li><b>PROJECT DESCRIPTION:</b> An express powered application that allows users to create, view and track daily workouts. Utilizes Mongo for the database and Mongoose for the schema</li>
	</ul></Card.Text></Card.Body></Card>
</Col>







</Row></Container>



<Footer />


		</div>
	);
}

export default Projects;