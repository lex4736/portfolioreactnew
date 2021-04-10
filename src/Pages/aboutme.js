import React from "react";
import Enav from "../Component/nav";
import Heading from "../Component/heading";
import Footer from "../Component/footer";
import Image from 'react-bootstrap/Image';
import Roo from "../Img/Roo2015.png";



function Aboutme() {
	return (
		<div>
			<Heading />
      
			<Enav />
		




<div className="card mb-3" id="container">
      <div className="row no-gutters">
        <div className="col-md-2">
		<Image fluid className="img" src={Roo} />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h2 className="card-title"> My Story </h2>
            <p className="card-text">

                I am trained as a full stack developer, but my passion is developing beautiful designs and a functional user interface. It is my personal belief that a polished presentation is just as important as functionality and I always strive to incorporate that into my work. A lot of my initial training was self-taught using online tutorials and lots of practice. 
                Growing up, I have always been interested in art (painting, drawing, etc.) As I got older, I started to dabbled into graphic design but ultimately felt a bit limited. I wanted to expand my skillset, so I started teaching myself web design and my interest took off from there. 
                My sister who has been a huge support and mentor encourage me to get formal training so that i could expand my knowledge.I took her advice and enrolled at UC Berkeley fo a full stack development training.
                During my training, it opened some new posibilites and I gained incredible knowledge where I am no longer limited to just developing the front-end user interface. I can develop the backend, the middleware as well as the frontend. As a bonus, I can do graphic design, so I
                 guess I am a developer that wear many hats. 
                <br></br>
                Aside from managing a full-time job and continuous goal to enhance my coding skills, I get to do my other two favorite tasks which is be proud pug mom to my dog Rupert (featured on the left) and I am also an honorary cool aunty to two little boys. I would like to one day
                be able to transfer my knowledge over to them so that was part of the reason I pursued a full stack development training instead of just focusing on a front end 
                
                 <br></br><br></br>

                 <h2> Skills</h2>

                 <ul>
                 <h3>Front-end languages and framework/libraries i have worked with</h3>
				 <br></br>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>JAVASCRIPT</li>
                 <li>JQUERY</li>
                 <li>REACT</li>
                 <li>AJAX</li>
                 <li>WEBPACK</li>
                 <li>BOOTSTRAP and ZURB FOUNDATION</li>
                 <li>RESPONSIVE/ SEO DESIGNS </li>
                 <br></br>
                 <h3>Back-end languages and framework/libraries i have worked with</h3>
                 <li>NODE JS</li>
                 <li>OBJECT ORIENTED PROGRAMING</li>
                 <li>EXPRESS</li>
                 <li>MYSQL</li>
                 <li>MONGODB</li>
                 <li>MVC </li>
                 <li>MERN </li>
                 <li>PROGRESIVE WEB APPS </li>
                 <li>STATE MANAGEMENT</li>
                 <br></br>
                 <h3>Other tools and applications I have worked with</h3>
                 <br></br>
                <li>PHOTOSHOP </li>
                <li>HEROKU </li>
                <li>ROBO 3T </li>
                <li>MYSQL WORKBENCH </li>
                <li>POSTMAN </li>
                <li>GITBASH </li>
                <li>VISUAL STUDIO CODE</li>
                <li>GITHUB </li>
                </ul>
                 Check out my personal projects and collaborative projects page to see live examples of my work
                 <br></br> </p>
				 </div>
        </div>
      </div>
    </div>

<Footer />
		</div>
	);
}

export default Aboutme;