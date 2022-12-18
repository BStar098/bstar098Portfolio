import React from "react";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import "../styles/SocialMedia/SocialMedia.css";
import { FileEarmarkPersonFill } from "react-bootstrap-icons";

function SocialMedia() {
  return (
    <div className="socialMedia">
      <a
        href="https://www.linkedin.com/in/santiago-del-sagrado-corazon-pintos-lucero-525b5323b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="socialMediaIcon" />
      </a>

      <a
        href="https://github.com/BStar098"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="socialMediaIcon" />
      </a>

      <a
        href="mailto:santinahuel098@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="socialMediaIcon" />
      </a>
      <a
        href="https://drive.google.com/uc?export=download&id=1t6eh9hvYaoaxPQ3Bb7joRQz4SFh_HkM-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileEarmarkPersonFill className="socialMediaIcon" />
      </a>
    </div>
  );
}

export default SocialMedia;
