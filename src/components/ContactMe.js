import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImg from "../images/basel-formal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import img from "../images/Designer__7_-removebg-preview.png";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <Container className="py-5 my-5" style={{ height: "120vh" }} id="Contact">
      <Row className="px-5 mx-5 w-100 h-100">
        <Col xs="6" className="h-100 position-relative">
          <h3 className="agdasima-bold " style={{ fontSize: "74px" }}>
            Contact me
          </h3>
          <p className="text-secondary agdasima-bold fs-5 mb-5">
            Get in touch with me via social media or form Email.
          </p>
          <Row className=" w-100" style={{}}>
            <Col xs="8" xl="7" className="" style={{ alignSelf: "centre" }}>
              <Image
                src={MyImg}
                className=" "
                style={{
                  marginLeft: "-40%",
                  marginTop: "-40%",
                  width: "200%",
                  height: "100%",
                }}
                alt="AboutMe Image."
              />
            </Col>
            <Col xs="5" sm="4" xl="2">
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
                  className="m-2  rounded-circle p-2"
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
        <Col xs="6" className="row align-self-start justify-content-center">
          <Image
            src={img}
            style={{ width: "500px", height: "250px", paddingTop: "40px" }}
            alt="Contact Us Please."
          />
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
export default ContactMe;
