import logo from "./logo.svg";
// import "./App.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import "./assets/sass/main.scss";
import Navbar from "./components/Navbar/Navbar";

import { ReactComponent as HeroLogo } from "./assets/images/illustration-working.svg";
import Hero from "./components/Hero/Hero";
import { ReactComponent as CardLogo } from "./assets/images/icon-brand-recognition.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section className="section">
        <header className="section__header"></header>
        <div className="section__content">
          <form className="shorting-form">
            <input
              className="input"
              id="url"
              name="url"
              type="text"
              placeholder="Shorten a link here..."
            />
            <button className="btn btn--submit">Shorten it!</button>
          </form>
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

      <section className="section">
        <header className="section__header">
          <h2 className="title"></h2>
        </header>
        <div className="section__content">
          <button className="btn">Get Started</button>
        </div>

        <footer className="section__footer"></footer>
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
