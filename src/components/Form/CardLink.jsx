import React from "react";

const CardLink = ({ orginalLink, shortenLink }) => {
  const handleCopy = (e) => {
    console.log(
      e.target.closest(".card-link").querySelector(".shorten-link").innerHTML
    );
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
