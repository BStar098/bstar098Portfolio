import React from "react";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import "../styles/SocialMedia/SocialMedia.css";

function SocialMedia() {
  return (
    <div className="socialMediaContainer">
      <div className="socialMedia">
        <a
          className="socialMediaIcon"
          href="https://www.linkedin.com/in/santiago-del-sagrado-corazon-pintos-lucero-525b5323b/"
        >
          <FaLinkedin size={70} />
        </a>

        <a className="socialMediaIcon" href="https://github.com/BStar098">
          <FaGithubSquare size={70} />
        </a>

        <a className="socialMediaIcon" href="">
          <FaEnvelope size={70} />
        </a>
        <a href="">
          <h1 className="cv">CV</h1>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
