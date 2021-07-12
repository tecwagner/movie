import React from "react";
import "./style.css";

export default function Movies({ title, release_date, image }) {
  return (
    <div className="Card">
      <div className="Header">
        <span className="Title">{title}</span>
      </div>

      <div className="Content">
        <img src={image} alt="Poster"></img>
        <p>{release_date}</p>
      </div>
    </div>
  );
}
