import React from "react";
import resume from "../images/LeahResume.pdf";
import "../styles/Resume.css";

function Resume() {
  return (
    <>
        <iframe className="resume" src={resume} alt="My Resume With Download Option" height="100%" width="100%" frameborder="0" allowFullScreen></iframe>
    </>
  );
}

export default Resume;
