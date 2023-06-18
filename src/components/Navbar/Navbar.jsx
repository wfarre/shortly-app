import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./assets/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo className="img" />
      </div>
      <div className="navbar__nav">
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
