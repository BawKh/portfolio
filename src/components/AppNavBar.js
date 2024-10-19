import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../images/Designer-removebg-preview (1).png";
function AppNavBar() {
  return (
    <Navbar
      expand="lg"
      className="position-absolute top-0 left-0 w-100 overflow-y-hidden pt-5"
      style={{ maxHeight: "50px" }}
    >
      <Container>
        <Navbar.Brand href="#heroSection">
          <Image
            className=""
            style={{ width: "100px" }}
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#HeroSection">Home</Nav.Link>
            <Nav.Link href="#AboutMe">AboutMe</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
