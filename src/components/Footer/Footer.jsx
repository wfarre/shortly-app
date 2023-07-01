import React, { useState } from "react";

import { ReactComponent as Fb } from "./assets/images/icon-facebook.svg";
import { ReactComponent as Ig } from "./assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./assets/images/icon-pinterest.svg";
import { ReactComponent as Logo } from "./assets/images/logo.svg";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__header">
        <Logo className="logo" fill="white" />
      </div>
      <div className="footer__main">
        <div className="container container--footer">
          <div className="links">
            <h3 className="links__title">Features</h3>
            <ul className="links__list">
              <li className="links__list__item">
                <a href="#"> Link Shortening</a>
              </li>
              <li className="links__list__item">
                <a href="#">Branded Links</a>
              </li>
              <li className="links__list__item">
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="links__title">Resources</h3>
            <ul className="links__list">
              <li className="links__list__item">
                <a href="#">Blog</a>
              </li>
              <li className="links__list__item">
                <a href="#">Developers</a>
              </li>
              <li className="links__list__item">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="links__title">Company</h3>
            <ul className="links__list">
              <li className="links__list__item">
                <a href="#">About</a>
              </li>
              <li className="links__list__item">
                <a href="#">Our Team</a>
              </li>
              <li className="links__list__item">
                <a href="#">Careers</a>
              </li>
              <li className="links__list__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__footer">
        <ul className="sns">
          <li className="links__list__item">
            <a href="#">
              <Fb />
            </a>
          </li>
          <li className="links__list__item">
            <a href="#">
              <Ig />
            </a>
          </li>
          <li className="links__list__item">
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li className="links__list__item">
            <a href="#">
              <Pinterest
                fill={isHovered ? "hsl(180, 66%, 49%)" : "#fff"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
