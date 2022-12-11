import React from "react";
import "../styles/Landing/Landing.css";
import "../styles/main.css";
import { motion } from "framer-motion";

import { useState } from "react";

function Landing() {
  const [developer, setDeveloper] = useState("I'm Santiago Lucero,");

  return (
    <div className="landingContainer">
      <motion.div
        initial={{ fontSize: "0%" }}
        animate={{ fontSize: "100%" }}
        transition={{ type: "tween", duration: 3 }}
        className="nameContainer"
        onHoverStart={() => {
        document
            .getElementsByTagName("body")[0]
            .classList.add("hideOverflowX"); 
          setDeveloper("I create things");
        }}
        onHoverEnd={() => {
          setDeveloper("I'm Santiago Lucero");
          document
            .getElementsByTagName("body")[0]
            .classList.remove("hideOverflowX");
        }}
      >
        <h2>Hello,</h2>
        <h1>{developer}</h1>
        <h2 className="webDeveloper">Web Developer</h2>
      </motion.div>
    </div>
  );
}

export default Landing;
