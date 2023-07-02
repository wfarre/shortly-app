import React from "react";
import "./assets/Card.scss";

const Card = ({ title, content, logo }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img className="logo" src={logo} alt="" />
        {/* <Logo className="logo" /> */}
      </div>
      <div className="card__header">
        <h3 className="card__header__title">{title}</h3>
      </div>
      <div className="card__content">
        <p className="card__content__text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
