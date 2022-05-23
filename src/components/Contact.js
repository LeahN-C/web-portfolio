import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  // Checking required fields for input
  const [validated, setValidated] = useState(false);

  // // The Modal
  // const [showModal, setShowModal] = useState(false);

  // // Handling the closing of the modal
  // const handleCloseModal = () => setShowModal(false);

  // Function to handle the submit of the form
  const handleSubmit = async (event) => {
    // Assigned to the submit event
    const form = event.currentTarget;

    // If required fields don't have input
    if (form.checkValidity() === false) {
      event.preventDefault();
      // Don't submit
      event.stopPropagation();
    }

    // Run the argument "true" for the parameter "validated"
    setValidated(true);

    // // If all fields entered correctly
    // if (form.checkValidity() === true) {
    //   event.preventDefault();
    //   // Reload the page
    //   reload();
    // }
  };

  // Reload page after submitting form
  const reload = async () => window.location.reload();

  // // Handling the modal popping up
  // const handleShowModal = () => setShowModal(true);

  return (
    <>
      <section className="contact">
        <h1>Contact Me</h1>
        <div className="form-container">
          <Form
            className="form"
            action="https://formsubmit.co/cf624acdf293ab96185f44edc0bec8c7"
            method="POST"
            // target="_blank"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://www.leahnc.com//thank-you"></input>
            <input type="hidden" name="_template" value="box"></input>
            {/* Required fields text */}
            <p>Required fields are marked with an asterisk (*)</p>
            {/* Name */}
            <Form.Group controlId="formBasicName" className="label-and-text">
              <Form.Label For="name">Name *</Form.Label>
              <Form.Control
                className="box"
                type="text"
                name="name"
                placeholder="Enter name"
                required
              />
              <Form.Text></Form.Text>
              <Form.Control.Feedback type="invalid" style={{ color: "orange" }}>
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formBasicEmail" className="label-and-text">
              <Form.Label For="email">Email address *</Form.Label>
              <Form.Control
                className="box"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid" style={{ color: "orange" }}>
                Please enter your email address.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Reason for Contact */}
            <Form.Group controlId="formBasicSubject" className="label-and-text">
              <Form.Label For="subject">Reason for Contact *</Form.Label>
              <Form.Control
                className="box"
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
              />
              <Form.Text></Form.Text>
              <Form.Control.Feedback type="invalid" style={{ color: "orange" }}>
                Please enter your reason for contact.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Message */}
            <Form.Group controlId="formBasicMessage" className="label-and-text">
              <Form.Label For="message">Message *</Form.Label>
              <Form.Control
                className="box"
                as="textarea"
                rows={5}
                type="message"
                name="message"
                placeholder="Type your message here"
                required
              />
              <Form.Control.Feedback type="invalid" style={{ color: "orange" }}>
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="outline"
              className="button form-button"
              type="submit"
              style={{
                border: "2px rgb(121, 80, 4)",
                borderStyle: "outset",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Send
            </Button>
          </Form>
            <Button
            onClick={reload}
              variant="outline"
              className="button form-button"
              type="submit"
              style={{
                border: "2px rgb(121, 80, 4)",
                borderStyle: "outset",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Clear Form
            </Button>
          {/* <Modal show={showModal}>
            <Modal.Body className="modalBody">
              Thank you for your message!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary">Close</Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </section>
    </>
  );
}

// render(<ContactForm />);
export default Contact;
