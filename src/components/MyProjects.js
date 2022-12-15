import React from "react";
import ScrollingSeparator from "./ScrollingSeparator";
import '../styles/myProjects/myProjects.css'

function MyProjects() {
  return (
    <div id='projects' className="myProjectsContainer">
      <ScrollingSeparator backgroundColor='lime' title='MY PROJECTS'/>
    </div>
  );
}

export default MyProjects;