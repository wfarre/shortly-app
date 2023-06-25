import logo from "./logo.svg";
// import "./App.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import "./assets/sass/main.scss";
import Navbar from "./components/Navbar/Navbar";

import { ReactComponent as HeroLogo } from "./assets/images/illustration-working.svg";
import Hero from "./components/Hero/Hero";
import { ReactComponent as CardLogo } from "./assets/images/icon-brand-recognition.svg";

import { ReactComponent as Fb } from "./assets/images/icon-facebook.svg";
import { ReactComponent as Ig } from "./assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./assets/images/icon-pinterest.svg";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section className="section section--form">
        <header className="section__header"></header>
        <div className="section__content">
          <Form />
        </div>

        <footer className="section__footer"></footer>
      </section>

      <section className="section section--stat">
        <header className="section__header">
          <h2 className="title">Advanced Statistics</h2>
          <p className="subtext">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </header>
        <div className="section__content">
          <div className="container">
            <div className="card">
              <div className="card__image">
                <CardLogo className="logo" />
              </div>
              <div className="card__header">
                <h3 className="card__header__title">Brand Recognition</h3>
              </div>
              <div className="card__content">
                <p className="card__content__text">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__image">
                <CardLogo className="logo" />
              </div>
              <div className="card__header">
                <h3 className="card__header__title">Brand Recognition</h3>
              </div>
              <div className="card__content">
                <p className="card__content__text">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__image">
                <CardLogo className="logo" />
              </div>
              <div className="card__header">
                <h3 className="card__header__title">Brand Recognition</h3>
              </div>
              <div className="card__content">
                <p className="card__content__text">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="section__footer"></footer>
      </section>

      <section className="section section--boost">
        <header className="section__header">
          <h2 className="title">Boost your link today!</h2>
        </header>
        <div className="section__content">
          <button className="btn">Get Started</button>
        </div>

        <footer className="section__footer"></footer>
      </section>

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
                <Pinterest />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
