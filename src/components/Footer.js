import React from "react";
import "../styles/Footer/Footer.css";
import Button from "./Button";
import ScrollingSeparator from "./ScrollingSeparator";

function Footer() {
  return (
    <>
      <ScrollingSeparator
        className="footerScrollingSeparator"
        backgroundColor="#AA96DA"
        title="Thanks for watching!"
      />
      <div className="footerContainer">
        <Button
          size={"2vw"}
          background={"#AA96DA"}
          color={"#fbfba5"}
          text="© 2022 - 2022 https://bstar098-portfolio.vercel.app/ - All Rights
          Reserved."
          className="footerBody"
        />
      </div>
    </>
  );
}

export default Footer;
