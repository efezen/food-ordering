import React from "react";
import AboutImage from "../assets/dosa.jpg";
import "../styles/About.css"
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          veniam expedita vitae iste voluptates unde beatae perferendis facere
          molestias nihil.
        </p>
      </div>
    </div>
  );
}

export default About;
