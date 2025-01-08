import React from "react";
import "./card.css";

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <a href={link} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
