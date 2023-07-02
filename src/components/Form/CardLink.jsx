import React from "react";
import "./assets/CardLink.scss";

const CardLink = ({ orginalLink, shortenLink }) => {
  const handleCopy = (e) => {
    const cardLink = e.target.closest(".card-link");
    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach((card) => {
      card.classList.remove("copied");
      card.querySelector(".btn").innerHTML = "Copy";
    });
    cardLink.classList.add("copied");
    cardLink.querySelector(".btn").innerHTML = "Copied!";
    navigator.clipboard.writeText(
      e.target.closest(".card-link").querySelector(".shorten-link").innerHTML
    );
  };

  return (
    <div className="card-link">
      <p className="original">{orginalLink}</p>
      <p className="shorten-link">{shortenLink}</p>
      <button id="copy" className="btn btn--copy" onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
};

export default CardLink;
