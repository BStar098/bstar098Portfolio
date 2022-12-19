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
        title="Click below to share me!"
      />
      <div
        onClick={() => {
          navigator.clipboard.writeText(
            "https://bstar098-portfolio.vercel.app/"
          );
          alert("Portfolio url copied to clipboard!");
        }}
        className="footerContainer"
      >
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
