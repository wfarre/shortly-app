import "./assets/sass/main.scss";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data/advancedStatistics.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
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
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </header>
          <div className="section__content">
            <div className="container">
              {data.map((item) => {
                return (
                  <Card
                    title={item.title}
                    content={item.content}
                    logo={item.logo}
                  />
                );
              })}
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
