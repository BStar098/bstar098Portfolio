import { React, useState } from "react";
import "../styles/Navbar/Navbar.css";
import "../styles/main.css";

function Navbar() {
  const [className, setClassName] = useState(" closeNavbar");
  function classHandler() {
    document.getElementsByTagName("body")[0].classList.toggle("hideOverflowY");
    if (className === " openNavbar") setClassName(" closeNavbar");
    else setClassName(" openNavbar");
  }

  return (
    <header>
      <a href="/home" className="homeContainer">
        <p className="home">Home</p>
      </a>
      <nav className={`NavbarDesktop`}>
        <a href="/me">About me</a>
        <a href="/projects">My work</a>
        <a href="/contact">Contact me</a>
      </nav>
      <nav className={`Navbar${className}`}>
        <a href="/me">About me</a>
        <a href="/projects">My work</a>
        <a href="/contact">Contact me</a>
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
