import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYou.css";

function ThankYou() {
  return (
    <>
    <section className="thank-you">
      <h1 className="thank-you-header">Thank You!</h1>
      <h3 className="thank-you-message">Your Message Has Been Sent</h3>
      <Link className="button thank-you-button" to="/">Click Here To Return To The Main Page</Link>
      </section>
    </>
  );
}

export default ThankYou;