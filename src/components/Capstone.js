import React from "react";
import presentation from "../images/capstone-presentation.mp4";
import "../styles/Capstone.css";

function Capstone() {
  return (
    <>
      <section className="capstone-section">
        <h1>My Capstone Project Presentation</h1>
        <video className="presentation" controls ><source src={presentation} alt="Capstone Project Presentation" /></video>
      </section>
    </>
  );
}

export default Capstone;
