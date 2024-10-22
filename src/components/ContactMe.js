import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImg from "../images/basel-formal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";

import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <Container className="my-5" style={{ minHeight: "auto" }} id="Contact">
      <Row className="h-100 w-100 rounded p-0">
        <Col lg="6" className="h-100">
          <h3 className="agdasima-bold" style={{ fontSize: "74px" }}>
            Contact me
          </h3>
          <p className="text-secondary agdasima-bold fs-5 mb-5">
            Get in touch with me via social media or form Email.
          </p>
          <Row className="w-100">
            <Col xs="8" xl="7" style={{ alignSelf: "center" }}>
              <Image
                src={MyImg}
                style={{
                  marginLeft: "-40%",
                  marginTop: "-40%",
                  width: "200%",
                  height: "100%",
                }}
                alt="AboutMe Image."
              />
            </Col>
            <Col xs="12" sm="4" xl="2">
              <div
                className="d-flex h-75 flex-sm-column w-100 justify-content-center align-items-center"
                style={{ backgroundColor: "transparent" }}
              >
                <Button
                  variant="outline-primary"
                  href="https://www.facebook.com/profile.php?id=100010819478523"
                  target="_blank"
                  className="m-2 rounded-circle p-2"
                  style={{ height: "50px", width: "50px" }}
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </Button>
                <Button
                  variant="outline-info"
                  href="https://www.linkedin.com/in/basel-khial-7a944a317"
                  target="_blank"
                  className="m-2 rounded-circle p-2"
                  style={{ height: "50px", width: "50px" }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </Button>
                <Button
                  variant="outline-primary"
                  href="https://www.twitter.com"
                  target="_blank"
                  className="m-2 rounded-circle p-2"
                  style={{ height: "50px", width: "50px" }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg="6"
          className="rounded border-4 border mt-5 agdasima-bold d-block"
          style={{
            height: "100%",
          }}
        >
          <h3 className="fw-bold fs-2 text-center p-2 text-dark agdasima-bold pt-5">
            Send Me A Message.
          </h3>
          <p className="text-center text-dark">
            Feel free to reach out to me with any questions or comments you may
            have. I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <ContactForm className="w-100 p-3" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
