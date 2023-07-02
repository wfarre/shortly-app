import React, { useState } from "react";

const SnsLink = ({ Logo }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li className="links__list__item">
      <a href="#">
        <Logo
          fill={isHovered ? "hsl(180, 66%, 49%)" : "#fff"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </a>
    </li>
  );
};

export default SnsLink;
