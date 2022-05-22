import React from "react";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import portrait from "../images/portrait.png";
import "../styles/Header.css";

function Header() {
  // To change messages at end of sentence
  const [messages, setMessages] = useState(["Make A Difference"]);

  // "Who Strives To ..."
  let messagesArray = [
    "Inspire Authenticity",
    "Eat Good Food",
    "Make A Difference",
  ];

  // Counting the changes
  const [count, setCount] = useState(0);

  // Set message to something new
  function messageSetter() {
    if (count === messagesArray.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setMessages(messagesArray[count]);
    clearInterval(clear);
  }

  // Timing of change
  let clear = setInterval(messageSetter, 5100);

  return (
    <>
      <section className="header">
        <div>
          <h1 className="hi">
            Hi, I'm <span className="leah">Leah Niemasz-Cavanagh</span>!
          </h1>
          <h3 className="sentence">
            Passionate and Driven{" "}
            <span className="software-dev">Software Developer</span> Who Strives
            To <span className="messages grey">{messages}.</span>
            {/* <div className="messages">
              <span>Make A Difference.</span>
              <span>Change The World.</span>
              <span>Eat Good Food.</span>
            </div> */}
          </h3>
        </div>
        <Image id="portrait" src={portrait} alt="Photo Of Me" />
      </section>
    </>
  );
}

export default Header;
