import React from "react";

function ScrollingSeparator({ backgroundColor, title }) {
  return (
    <div className="scrollingDivContainer">
      <div style={{ background: backgroundColor }} className="scrollingDiv">
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
        <h1 className="scrollingTitle">{title}</h1>
      </div>
    </div>
  );
}

export default ScrollingSeparator;
