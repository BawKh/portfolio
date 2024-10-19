import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import Img from "../images/welcomeBg.webp";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(
        "service_s8jt53b", // Replace with your EmailJS service ID
        "template_66s286m", // Replace with your EmailJS template ID
        formData,
        "-XnFAs_siigQkF2i0" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setError(true);
        }
      );
  };

  return (
    <Form
      className="rounded-1 text-light p-3 w-100"
      style={{ backgroundImage: `url(${Img})` }}
      onSubmit={handleSubmit} // Attach submit handler
    >
      <InputGroup className="mb-3 shadow-sm" style={{ height: "50px" }}>
        <InputGroup.Text
          id="basic-name"
          className="border-secondary text-light"
          style={{ backgroundColor: "transparent" }}
        >
          Name
        </InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Name..."
          aria-label="Username"
          aria-describedby="basic-name"
          className="border-secondary text-light shadow-none"
          name="name" // Name should match the field in formData
          value={formData.name} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          style={{ backgroundColor: "transparent" }}
        />
      </InputGroup>

      <InputGroup className="mb-3" style={{ height: "50px" }}>
        <InputGroup.Text
          id="basic-email"
          className="border-secondary text-light"
          style={{ backgroundColor: "transparent" }}
        >
          Email
        </InputGroup.Text>
        <Form.Control
          placeholder="Your Email"
          aria-label="UserEmail"
          aria-describedby="basic-email"
          className="border-secondary text-light shadow-none"
          name="email" // Name should match the field in formData
          value={formData.email} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          type="email" // Ensure valid email input
          style={{ backgroundColor: "transparent" }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text
          className="border-secondary text-light"
          style={{ backgroundColor: "transparent" }}
        >
          Message
        </InputGroup.Text>
        <Form.Control
          as="textarea"
          rows={5}
          aria-label="With textarea"
          className="border-secondary text-light shadow-none"
          style={{ resize: "none", backgroundColor: "transparent" }}
          name="message" // Name should match the field in formData
          value={formData.message} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
        />
      </InputGroup>

      <Button
        variant="outline-light"
        className="p-2 fw-bold"
        style={{ width: "80px" }}
        type="submit"
      >
        Send
      </Button>

      {isSubmitted && (
        <p className="mt-3 text-success">Your message was sent successfully!</p>
      )}

      {error && (
        <p className="mt-3 text-danger">
          Failed to send the message. Try again later.
        </p>
      )}
    </Form>
  );
};

export default ContactForm;
