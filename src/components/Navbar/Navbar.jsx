import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./assets/Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo className="img" />
      </div>

      <div
        className={isOpen ? "open-btn open" : "open-btn"}
        onClick={handleOpen}
      >
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </div>
      <div className={isOpen ? "navbar__nav open" : "navbar__nav"}>
        <ul className="navbar__nav__menu">
          <li className="navbar__nav__menu__item">Features</li>
          <li className="navbar__nav__menu__item">Pricing</li>
          <li className="navbar__nav__menu__item">Resources</li>
        </ul>

        <ul className="navbar__nav__login">
          <li className="navbar__nav__login__item">
            <button className="btn btn--login">Login</button>
          </li>
          <li className="navbar__nav__login__item">
            <button className="btn btn--sign">Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
