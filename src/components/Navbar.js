import { React, useState } from "react";
import "../styles/Navbar/Navbar.css";
import "../styles/main.css";
import { Youtube } from "react-bootstrap-icons";

function Navbar() {
  const [className, setClassName] = useState(" closeNavbar");
  function classHandler() {
    document.getElementsByTagName("body")[0].classList.toggle("hideOverflowY");
    if (className === " openNavbar") setClassName(" closeNavbar");
    else setClassName(" openNavbar");
  }
  const home = document.getElementById("home");
  const aboutMe = document.getElementById("me");
  const projects = document.getElementById("projects");

  return (
    <header>
      <a
        href="https://www.youtube.com/@programandoando5565?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="homeContainer home"
      >
        <p>Subscribe</p>
        <Youtube className="youtubeIcon" size={60} />
      </a>
      <nav className={`NavbarDesktop`}>
        <a
          onClick={() => {
            aboutMe.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About me
        </a>
        <a
          onClick={() => {
            projects.scrollIntoView({ behavior: "smooth" });
          }}
        >
          My work
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=santinahuel098@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </nav>
      <nav onClick={classHandler} className={`Navbar${className}`}>
        <a
          onClick={() => {
            aboutMe.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About me
        </a>
        <a
          onClick={() => {
            projects.scrollIntoView({ behavior: "smooth" });
          }}
        >
          My work
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=santinahuel098@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </nav>
      <div className={`burguer`} onClick={classHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Navbar;
