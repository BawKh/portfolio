import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImg from "../images/basel-formal.png";
function AboutMe() {
  return (
    <Container className="py-5 mt-5" style={{ height: "auto" }} id="AboutMe">
      <Row className=" w-100 h-100">
        <Col xs="12" md="8" lg="6" className="align-self-center">
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
        <Col
          md="4"
          lg="6"
          className="h-100 align-self-start d-none d-md-block "
        >
          <div
            className=" position-relative aboutImg"
            style={{ width: "250px", height: "500px" }}
          >
            <Image
              src={MyImg}
              className=" mb-5 d-block position-absolute"
              style={{ top: "-13vh", left: "-50%", width: "200%" }}
              alt="AboutMe Image."
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutMe;
