import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./AppFooter.css";
import { Link } from "react-router-dom";
const AppFooter = () => {
  return (
    <footer className="footer bg-secondary  text-light py-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Me</h5>
            <p>
              I am a dedicated front-end developer with a passion for creating
              clean, responsive designs and building meaningful web solutions.
              Let's connect to explore how we can work together on impactful
              projects.
            </p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Skills" className="text-light">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <Button
                variant="outline-primary"
                href="https://www.facebook.com/profile.php?id=100010819478523"
                target="_blank"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </Button>
              <Button
                variant="outline-info"
                href="https://www.twitter.com"
                target="_blank"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Button>
              <Button
                variant="outline-primary"
                href="https://www.linkedin.com/in/basel-khial-7a944a317"
                target="_blank"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>
              {" "}
              &copy; {new Date().getFullYear()} Copyright:
              <a className="text-light" href="/#">
                Basel Wael Khial
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
