import React from "react";

function ScrollingSeparator({ backgroundColor, title, className }) {
  return (
    <div className="scrollingDivContainer">
      <div
        style={{ background: backgroundColor }}
        className={className ? className : "scrollingDiv"}
      >
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
