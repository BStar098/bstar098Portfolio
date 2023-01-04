import { React, useEffect, useState } from "react";
import "../styles/Navbar/Navbar.css";
import "../styles/main.css";
import { Youtube } from "react-bootstrap-icons";

function Navbar() {
  const [className, setClassName] = useState(" closeNavbar");
  const [aboutMe, setAboutMe] = useState(" closeNavbar");
  const [projects, setProjects] = useState(" closeNavbar");
  function classHandler() {
    document.getElementsByTagName("body")[0].classList.toggle("hideOverflowY");
    if (className === " openNavbar") setClassName(" closeNavbar");
    else setClassName(" openNavbar");
  }

  useEffect(() => {
    setAboutMe(document.getElementById("me"))
    setProjects(document.getElementById("projects"))
    console.log('a')
  }, []);

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
        <p
          href=""
          onClick={() => {
            aboutMe.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarLink"
        >
          About me
        </p>
        <p
          onClick={() => {
            projects.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarLink"
        >
          My work
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=santinahuel098@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbarLink"
        >
          Contact me
        </a>
      </nav>
      <nav onClick={classHandler} className={`Navbar${className}`}>
        <p
          onClick={() => {
            aboutMe.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarLink"
        >
          About me
        </p>
        <p
          onClick={() => {
            projects.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarLink"
        >
          My work
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=santinahuel098@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbarLink"
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
