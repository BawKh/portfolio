import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Resume from "../folders/Resume.pdf";
import MyImg from "../images/basel-formal-1.png";
function HeroSections() {
  const Job = "FrontEnd Developer.";
  const handleDownload = () => {
    // Replace 'your-resume.pdf' with the path to your resume file
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="HeroInfo pt-5" id="#HeroSection">
      <Container>
        <Row>
          <Col
            xs="12"
            sm="6"
            className="align-self-center  mt-5 ps-3"
            style={{}}
          >
            <div className="p-3 h-75">
              <div className=" text-info fw-bold">
                Hi , I’m <h1 style={{ color: "darkblue" }}>Basel W.Khial</h1>
              </div>
              <div className="  ">
                <div style={{ width: "155px" }}>
                  <div
                    className=" fw-bold text-dark d-inline-block"
                    style={{
                      animation: `typing 4s steps(${Job.length}, end) infinite`,
                      textWrap: "nowrap",
                      overflow: "hidden",
                      textTransform: "capitalize",
                      borderRight: "3px solid black",
                    }}
                  >
                    {Job}
                  </div>
                </div>

                <p className="mb-0">
                  Explore my work and discover how I bring creativity and
                  innovation to every project.
                </p>
                <p>Let’s create something amazing together!</p>
              </div>
            </div>
            <Row
              className="justify-content-start ps-3 ms-1"
              style={{ gap: "10px" }}
            >
              <Button
                className="col-5"
                onClick={handleDownload}
                variant="outline-dark"
              >
                Download CV
              </Button>
              <a href={"#Contact"} className="btn btn-outline-dark col-5">
                Contact Me
              </a>
            </Row>
          </Col>
          <Col sm="6" className="align-self-center d-none d-sm-block">
            <Row className="logoCapture mx-auto overflow-hidden">
              <Image src={MyImg} alt="MyImg" className="w-100 h-100 " />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSections;
