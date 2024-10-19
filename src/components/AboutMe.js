import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImg from "../images/basel-formal.png";
function AboutMe() {
  return (
    <Container className="py-5 my-5" style={{ height: "70vh" }} id="AboutMe">
      <Row className="px-5 mx-5 w-100 h-100">
        <Col xs="6" className="h-100">
          <h3 className="agdasima-bold fs-1">about me</h3>
          <p className="text-secondary agdasima-bold fs-5">
            I am FrontEnd Developer From Damietta, Egypt
          </p>
          <p className="agdasima-regular fs-4">
            “Hello! I’m a driven recent graduate with a solid background in web
            development, eager to dive into the tech world. I’ve built
            everything from learning websites to interactive dashboards using
            React, Redux Toolkit, and Bootstrap. My projects showcase my passion
            for technology and my knack for teamwork and leadership. I’m excited
            to bring my skills and enthusiasm to a dynamic team!”
          </p>
        </Col>
        <Col xs="6" className="h-100 align-self-start ">
          <Row className="position-relative">
            <Image
              src={MyImg}
              className="w-100 mb-5 position-absolute"
              style={{ height: "80vh", top: "-100px" }}
              alt="AboutMe Image."
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutMe;
