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
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={70} />
        </a>

        <a
          className="socialMediaIcon"
          href="https://github.com/BStar098"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={70} />
        </a>

        <a
          className="socialMediaIcon"
          href="mailto:santinahuel098@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={70} />
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1t6eh9hvYaoaxPQ3Bb7joRQz4SFh_HkM-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="cv">CV</h1>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
