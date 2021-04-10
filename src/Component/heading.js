import React from "react";
import Banner from "../Img/bgheader.png";






function heading() {
	return (
<div className="headerimg">

<div className="card mb-3" id="container">
      <div className="row no-gutters">
        <div className="col-md-2">
		<img fluid className="img" src={Banner} alt ="banner" />
        </div>
        <div className="col-md-10">
          <div className="card-body" id="headingtxt">
            <h1> Alexis Arando </h1>
            <span class="toph">FULLSTACK DEVELOPER </span>
            <p className="card-text">Welcome to my portfolio! I am a fullstack developer that wear many hats. I am a firm believer that a polished presentation is just as important as functionality and that is what I strive to deliver with every project</p>

            </div>
        </div>
      </div>
    </div>

</div>
	);
}
export default heading;