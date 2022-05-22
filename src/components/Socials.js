import React from "react";
import Image from "react-bootstrap/Image";
import LinkedIn from "../images/linkedin-white.png";
import GitHub from "../images/github-white.png";
// import LinkedIn from "../images/linkedin-logo.png";
// import GitHub from "../images/github-logo.png";
import MyLogo from "../images/My-Logo.png";
import "../styles/Socials.css";

function Socials() {
  return (
    <>
    <section className="socials">
      <Image className="myLogo" src={MyLogo} alt="LN-C Logo"></Image>
      <div>
        <a
          href="https://www.linkedin.com/in/leah-niemasz-cavanagh/"
          target="_blank"
        >
          <img className="icon" src={LinkedIn} alt="LinkedIn Logo Link" />
        </a>
        <a href="https://github.com/LeahN-C" target="_blank">
          <img className="icon" src={GitHub} alt="GitHub Logo Link" />
        </a>
      </div>
      </section>
    </>
  );
}

export default Socials;
