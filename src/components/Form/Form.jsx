import React, { useEffect, useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //   useEffect(() => {
  //     fetch("https://api.shrtco.de/v2/shorten?url=google.com")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.result.short_link);
  //         setShortUrl([
  //           ...shortUrl,
  //           { orginalLink: input, shortenLink: data.result.short_link },
  //         ]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(input);
    // useEffect(() => {
    fetch("https://api.shrtco.de/v2/shorten?url=google.com")
      .then((res) => res.json())
      .then((data) => {
        console.log(shortUrl);
        setLoading(false);
        setShortUrl([
          ...shortUrl,
          { orginalLink: input, shortenLink: data.result.short_link },
        ]);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(err);
      });

    // const response = await fetch("https://api.shrtco.de/v2/" + input);

    // const result = response.json();
    // console.log(result);
    // })

    console.log("submit");
  };

  useEffect(() => {
    console.log("nya");
    console.log(shortUrl);
  }, [shortUrl]);

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
        <button className="btn btn--submit">Shorten it!</button>
      </form>

      {shortUrl.map((item) => {
        return (
          <div className="card-link">
            <p className="original">{item.orginalLink}</p>
            <p className="shorten-link">{item.shortenLink}</p>
            <button className="btn btn--copy">Copy</button>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
