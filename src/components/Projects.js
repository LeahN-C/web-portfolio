import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Accordion } from "react-bootstrap";
import ZakPortfolio from "../images/zak-portfolio.png";
import Yelpington from "../images/yelpington-project.png";
import NumberGame from "../images/guess-the-number.png";
import PixelArtGame from "../images/pixel-art.png";
// import ReactPortfolio from "../images/react-portfolio.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <section className="projects">
        <h1>My Projects</h1>
        <div className="cards-container">
          <Container className="cards" style={{ padding: "0" }}>
            <Card
              className="project-card"
              style={{ backgroundColor: "#282c34" }}
            >
              <Card.Title className="card-title" style={{ fontSize: "100%" }}>
                Capstone Project
              </Card.Title>
              <Card.Img
                className="card-image"
                variant="top"
                src={ZakPortfolio}
                alt="Capstone Project"
              />
              <Card.Body className="card-body">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    style={{ backgroundColor: "#282c34" }}
                  >
                    <Accordion.Header
                      style={{
                        backgroundColor: "#282c34",
                        border: "5px rgb(121, 80, 4)",
                        borderStyle: "outset",
                        borderRadius: "0.5rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Learn About My Capstone
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Text className="card-description">
                        This was the final project that I built during my
                        Software Development Bootcamp at Upright Education. I
                        worked in a group to build an interactive portfolio
                        website for our client. I focused on building the
                        contact page and on making the site mobile responsive. I
                        also deployed the website, using Heroku.
                      </Card.Text>
                      <Card.Text className="card-description">
                        <strong>Tech Stack:</strong>JavaScript, HTML, CSS,
                        React, React Bootstrap, Express, MongoDB, NodeJS,
                        Nodemailer, Heroku.
                      </Card.Text>
                      <Card.Link
                        style={{ justifyContent: "center" }}
                        className="button"
                        href="https://github.com/Interactive-Portfolio-for-Zak/capstone-project"
                        target="_blank"
                      >
                        View Capstone Project On GitHub
                      </Card.Link>
                      <Card.Link
                        className="button"
                        href="https://zak-portfolio-capstone.herokuapp.com/"
                        target="_blank"
                      >
                        View Capstone Project On The Web
                      </Card.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>

            <Card
              className="project-card"
              style={{ backgroundColor: "#282c34" }}
            >
              <Card.Title className="card-title" style={{ fontSize: "100%" }}>
                Yelpington Map Project
              </Card.Title>
              <Card.Img
                className="card-image"
                variant="top"
                src={Yelpington}
                alt="Yelpington Map Project"
              ></Card.Img>
              <Card.Body className="card-body">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    style={{ backgroundColor: "#282c34" }}
                  >
                    <Accordion.Header
                      style={{
                        backgroundColor: "#282c34",
                        border: "5px rgb(121, 80, 4)",
                        borderStyle: "outset",
                        borderRadius: "0.5rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Learn About Yelpington
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Text className="card-description">
                        In this project, I created an online directory of real
                        restaurants that are near where I live. I used Leaflet
                        to create a map with markers on it, and Express and Cors
                        to dynamically render restaurant data from a json file.
                      </Card.Text>
                      <Card.Text className="card-description">
                        <strong>Tech Stack:</strong>JavaScript, HTML, CSS,
                        React, Leaflet, Express, Cors.
                      </Card.Text>
                      <Card.Link
                        className="button"
                        href="https://github.com/LeahN-C/yelpington-map"
                        target="_blank"
                      >
                        View Yelpington On GitHub
                      </Card.Link>
                      <Card.Link
                        className="button"
                        href="https://yelpington-app.herokuapp.com/"
                        target="_blank"
                      >
                        View Yelpington On The Web
                      </Card.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>

            <Card
              className="project-card"
              style={{ backgroundColor: "#282c34" }}
            >
              <Card.Title className="card-title" style={{ fontSize: "100%" }}>
                Guess The Number Game
              </Card.Title>
              <Card.Img
                className="card-image"
                variant="top"
                src={NumberGame}
                alt="Guess The Number Game"
              />
              <Card.Body className="card-body">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    style={{ backgroundColor: "#282c34" }}
                  >
                    <Accordion.Header
                      style={{
                        backgroundColor: "#282c34",
                        border: "5px rgb(121, 80, 4)",
                        borderStyle: "outset",
                        borderRadius: "0.5rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Learn About Guess The Number
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Text className="card-description">
                        This is a text-only game that can be played in the
                        terminal. I created this game using vanilla JavaScript.
                        In the game, the user interacts with the computer to
                        play a number-guessing game where either the computer
                        guesses the user's secret number, or the user guesses
                        the computer's secret number. The user has the option to
                        choose which of the two versions they want to play.
                      </Card.Text>
                      <Card.Text className="card-description">
                        <strong>Tech Stack:</strong>Vanilla JavaScript.
                      </Card.Text>
                      <Card.Link
                        className="button"
                        href="https://github.com/LeahN-C/guess-the-number-game"
                        target="_blank"
                      >
                        View Guess The Number On GitHub
                      </Card.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>

            <Card
              className="project-card"
              style={{ backgroundColor: "#282c34" }}
            >
              <Card.Title className="card-title" style={{ fontSize: "100%" }}>
                Pixel Art Game
              </Card.Title>
              <Card.Img
                className="card-image"
                variant="top"
                src={PixelArtGame}
                alt="Yelpington Map Project"
              ></Card.Img>
              <Card.Body className="card-body">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    style={{ backgroundColor: "#282c34" }}
                  >
                    <Accordion.Header
                      style={{
                        backgroundColor: "#282c34",
                        border: "5px rgb(121, 80, 4)",
                        borderStyle: "outset",
                        borderRadius: "0.5rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Learn About Pixel Art
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Text className="card-description">
                        This is a digital art game that I created using vanilla
                        JavaScript, HTML and CSS. I created this during my
                        part-time JavaScript course at Burlington Code Academy.
                        <strong>Instructions To Play:</strong>Play by clicking
                        the "START" button, and then select the color that you
                        want and start clicking the board to paint the cells
                        with that color. You can change colors by clicking on
                        the colored squares at the bottom. You can clear the
                        color on individual cells by clicking on the "Clear
                        Cell" button and then selecting the squares to clear.
                        Finally, you can clear the whole board by clicking on
                        the "Clear Board" button.
                      </Card.Text>
                      <Card.Text className="card-description">
                        <strong>Tech Stack:</strong>JavaScript, HTML, CSS.
                      </Card.Text>
                      <Card.Link
                        className="button"
                        href="https://github.com/LeahN-C/pixel-art-game"
                        target="_blank"
                      >
                        View Pixel Art Game On GitHub
                      </Card.Link>
                      <Card.Link
                        className="button"
                        href="https://pixel-art-game-leah.vercel.app/"
                        target="_blank"
                      >
                        View Pixel Art Game On The Web
                      </Card.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Projects;
