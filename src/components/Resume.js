import React from "react";
import resume from "../images/LeahResume.pdf";
import "../styles/Resume.css";

function Resume() {
  return (
    <>
      <section className="resume-section">
        <h1>My Resume</h1>
        <iframe className="resume" src={resume} alt="My Resume With Download Option" frameBorder="10"></iframe>
      </section>
    </>
  );
}

export default Resume;
