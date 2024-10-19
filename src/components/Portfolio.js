// import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AnimatedCard from "./AnimatedCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepo } from "../rtk/slices/Repo-slicer";

import img1 from "../images/portfolio1.jpg";
import img2 from "../images/portfolio2.jpg";
import img3 from "../images/portfolio3.jpg";
import img4 from "../images/portfolio4.jpg";
function Portfolio() {
  const projects = useSelector((state) => state.repo);
  const dispatch = useDispatch();
  const portfolioImages = [img1, img2, img3, img4];
  useEffect(() => {
    dispatch(fetchRepo());
  }, [dispatch]);
  if (projects.length !== 0) {
    console.log({ projects: projects[projects.length - 2].contents_url });
  }

  return (
    <Container
      id="Projects"
      className="p-5 m-5"
      style={{ height: "auto", overflow: "hidden" }}
    >
      <div className="head">
        <h2 className="text-center mb-2 fs-1">Portfolio</h2>
        <div className="text-center text-secondary mb-2 .agdasima-regular">
          Take a look to my Projects.
        </div>
      </div>
      <Row
        className="justify-content-center position-relative align-items-center w-100"
        style={{}}
      >
        <AnimatedCard projects={projects} portfolioImages={portfolioImages} />
      </Row>
    </Container>
  );
}

export default Portfolio;
