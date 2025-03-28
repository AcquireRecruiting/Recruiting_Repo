import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import CSS file for styles

const LavaLampMenu = () => {
  return (
    <div className="menu-container">
      <h1>Lavalamp CSS Menu</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <div className="animation start-home"></div>
      </nav>

      <p>
        By <span>Patak</span>
      </p>
    </div>
  );
};

export default LavaLampMenu;
