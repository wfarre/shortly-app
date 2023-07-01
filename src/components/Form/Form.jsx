import React, { useEffect, useState } from "react";
import CardLink from "./CardLink";

const Form = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    e.target.closest(".shorting-form").classList.remove("error");

    if (!input) {
      console.log("hello");
      e.target.closest(".shorting-form").classList.add("error");
      setLoading(false);
      setError("Please add a link");
      return;
    }
    fetch("https://api.shrtco.de/v2/shorten?url=" + input)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setShortUrl([
          ...shortUrl,
          { orginalLink: input, shortenLink: data.result.short_link },
        ]);
        setInput("");
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return (
    <div>
      <form className="shorting-form" method="GET" onSubmit={handleSubmit}>
        <input
          className="input"
          id="url"
          name="url"
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={handleChange}
        />
        <span className="error-message">{error}</span>
        <button className="btn btn--submit">Shorten it!</button>
      </form>

      {shortUrl.map((item, key = 0) => {
        key++;
        return (
          <CardLink
            key={item.orginalLink + key}
            shortenLink={item.shortenLink}
            orginalLink={item.orginalLink}
          />
        );
      })}
    </div>
  );
};

export default Form;
