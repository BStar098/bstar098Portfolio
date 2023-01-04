import React from "react";
import "../styles/AboutMe/AboutMe.css";
import { FaCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <>
      <div id="me" className="aboutMeContainer">
        <div className="aboutMeCardContainer">
          <h1 className="aboutMeCardTitle">A bit of me</h1>
          <div className="profileContainer">
            <div className="journeyContainer">
              <div className="titleContainer">
                <FaCircle className="circle" size={60} />
                <h1 className="journeyTitle"> My journey</h1>
              </div>

              <p className="journeyBody">
                It all began when I was nine, when my mother bought me my first
                desktop computer. It was very very slow, but I loved it. As a
                result, I developed(haha, pun intended) a deep interest in
                everything related to the tech world, including software
                development. Nevertheless, my journey into the lands of web
                development and mobile development began this year, on June,
                when I started to study very hard in order to become proficient
                at web development. I studied at least 8 hours a day, from
                monday to friday for almost 6 months and I can tell you it was
                completely worth it. Not only I'm extremely happy with the
                technical skills I have acquired, but I'm also very happy
                because I think I've found what I'm good at and what I like
                doing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
