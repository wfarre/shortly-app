import React from "react";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__logo"></div>
      <div className="hero__content">
        <div className="hero__content__header">
          <h1 className="hero__content__header__title">
            More than just shorter links
          </h1>
        </div>
        <div className="hero__content__content">
          <p className="hero__content__content__text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <div className="hero__content__footer">
          <button className="btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
