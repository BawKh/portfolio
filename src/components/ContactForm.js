import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [emailExists, setEmailExists] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const verifyEmail = async (email) => {
    try {
      const response = await fetch(
        `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=f04c0beffab7545ad076eb7c2c599b99dab0b471`
      );
      const data = await response.json();
      return data.data.status === "valid";
    } catch (error) {
      console.error("Email verification failed", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValid = await verifyEmail(formData.email);
    setEmailExists(emailValid);

    if (!emailValid) {
      setError(true);
      return;
    }

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
          setFormData({
            name: "",
            email: "",
            telephone: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setError(true);
        }
      );
  };

  return (
    <Form
      className="rounded-1 text-secondary p-3 w-100 pt-3"
      onSubmit={handleSubmit} // Attach submit handler
    >
      <InputGroup className="mb-3 shadow-sm" style={{ height: "70px" }}>
        <InputGroup.Text
          id="basic-name"
          className="border-secondary text-light bg-secondary"
          style={{ backgroundColor: "transparent" }}
        >
          Name
        </InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Name..."
          aria-label="Username"
          aria-describedby="basic-name"
          className="border-secondary text-secondary shadow-none"
          name="name" // Name should match the field in formData
          value={formData.name} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          pattern="^[a-zA-Z\s]+$" // Regex for name validation (letters and spaces only)
          style={{
            backgroundColor: "transparent",
            borderBottom: "2px solid #17a2b8",
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3" style={{ height: "70px" }}>
        <InputGroup.Text
          id="basic-email"
          className="border-secondary text-light bg-secondary"
          style={{ backgroundColor: "transparent" }}
        >
          Email
        </InputGroup.Text>
        <Form.Control
          placeholder="Your Email"
          aria-label="UserEmail"
          aria-describedby="basic-email"
          className="border-secondary text-secondary shadow-none"
          name="email" // Name should match the field in formData
          value={formData.email} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          type="email" // Ensure valid email input
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Regex for email validation
          style={{
            backgroundColor: "transparent",
            borderBottom: "2px solid #17a2b8",
          }}
        />
      </InputGroup>

      {emailExists === false && (
        <p className="text-danger">Email address does not exist.</p>
      )}

      <InputGroup className="mb-3" style={{ height: "70px" }}>
        <InputGroup.Text
          id="basic-telephone"
          className="border-secondary  text-light bg-secondary"
          style={{ backgroundColor: "transparent" }}
        >
          Telephone
        </InputGroup.Text>
        <Form.Control
          placeholder="Your Telephone"
          aria-label="UserTelephone"
          aria-describedby="basic-telephone"
          className="border-secondary text-secondary shadow-none"
          name="telephone" // Name should match the field in formData
          value={formData.telephone} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          type="tel" // Ensure valid telephone input
          pattern="^\d{11}$" // Regex for telephone validation (exactly 11 digits)
          maxLength="11" // Maximum length of 11 characters
          minLength="11" // Minimum length of 11 characters
          style={{
            backgroundColor: "transparent",
            borderBottom: "2px solid #17a2b8",
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3" style={{ height: "70px" }}>
        <InputGroup.Text
          id="basic-subject"
          className="border-secondary text-light bg-secondary"
          style={{ backgroundColor: "transparent" }}
        >
          Subject
        </InputGroup.Text>
        <Form.Control
          placeholder="Subject"
          aria-label="UserSubject"
          aria-describedby="basic-subject"
          className="border-secondary text-secondary shadow-none"
          name="subject" // Name should match the field in formData
          value={formData.subject} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          pattern="^[a-zA-Z0-9\s]+$" // Regex for subject validation (letters, numbers, and spaces only)
          style={{
            backgroundColor: "transparent",
            borderBottom: "2px solid #17a2b8",
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text
          className="border-secondary  text-light bg-secondary"
          style={{ backgroundColor: "transparent" }}
        >
          Message
        </InputGroup.Text>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Enter Your Message..."
          aria-label="With textarea"
          className="border-secondary text-secondary shadow-none"
          style={{
            resize: "none",
            backgroundColor: "transparent",
            borderBottom: "2px solid #17a2b8",
          }}
          name="message" // Name should match the field in formData
          value={formData.message} // Bind value to state
          onChange={handleInputChange} // Handle input change
          required
          pattern="^[a-zA-Z0-9\s.,!?'-]+$" // Regex for message validation (letters, numbers, spaces, and common punctuation)
        />
      </InputGroup>

      <Button variant="secondary" className="p-2 fw-bold w-100" type="submit">
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
