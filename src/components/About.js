import React from "react";
import { useState } from "react";
import AboutToggle from "./AboutToggle"
import "../styles/About.css";

function About() {
  const [clicked, setClicked] = useState(false);

  let buttonClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <section className="about-section">
        <h1>Learn More About Me</h1>
        <label className="switch">
          {" "}
          <input type="checkbox" onClick={buttonClick} />{" "}
          <span className="slider"></span>{" "}
        </label>
      </section>
      {clicked ? ( <AboutToggle /> ) : null}
    </>
  );
}

export default About;
