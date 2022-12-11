import React from "react";
import "../styles/AboutMe/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMeContainer">
      <div className="scrollingDivContainer">
        <div className="scrollingDiv">
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
          <h1 className="scrollingTitle">ABOUT ME</h1>
        </div>
      </div>
      <div className="aboutMeCardContainer">
        <h1 className="aboutMeCardTitle">This is me</h1>
        <div className="profileContainer">
          <img
            alt="myPicture"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/WHBRWU6WHJEA5K6CLGVOC64VRU.jpg"
            height="300px"
            width="300px"
          ></img>
          <div className="journeyContainer">
            <h1 className="journeyTitle">My journey</h1>
            <p className="journeyBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
