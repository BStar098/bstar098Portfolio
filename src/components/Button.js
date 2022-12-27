import React from "react";

function Button({ size, background, color, text, className, href }) {
  return href ? (
    <a
      style={{ textDecoration: "none" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1
        className={className}
        style={{
          fontSize: size,
          width: "fit-content",
          whiteSpace: "nowrap",
          padding: "0.2% 1% 0.2% 1%",
          cursor: "pointer",
          border: "0.2vw solid black",
          borderRadius: "5px",
          boxShadow: "0.4vw 0.4vw black",
          color: color,
          background: background,
          WebkitTextStroke: "0.2vw black",
          textShadow: "0.2vw 0.2vw black",
        }}
      >
        {text}
      </h1>
    </a>
  ) : (
    <h1
      className={className}
      style={{
        fontSize: size,
        width: "fit-content",
        whiteSpace: "nowrap",
        padding: "0.2% 1% 0.2% 1%",
        cursor: "pointer",
        border: "3px solid black",
        borderRadius: "5px",
        boxShadow: "5px 5px black",
        color: color,
        background: background,
        WebkitTextStroke: "2px black",
        textShadow: "4px 4px black",
      }}
    >
      {text}
    </h1>
  );
}

export default Button;
