import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import Col from "react-bootstrap/esm/Col";
import AppCard from "./AppCard";
import "./AnimatedCard.css"; // Import the CSS styles
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Img from "../images/Designer__3_-removebg-preview.png";
function AnimatedCard({ portfolioImages, projects }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [popped, setPopped] = useState(true); // State to track pop-out effect

  const handleClick = () => {
    setPopped(false); // Set popped state on click
    console.log("Clicked");
  };

  return (
    <CSSTransition in={inView} timeout={2000} classNames="fade" appear={true}>
      <>
        <Row
          ref={ref}
          className={`card-container ${
            popped ? "Animated-btn" : ""
          } rounded   justify-content-center w-100 h-100`}
          style={{ rowGap: "20px" }} // Trigger the pop-out effect on click
        >
          {projects &&
            projects.map((project, index) => {
              return (
                <Col xs="12" md="6" lg="4" key={`card_${index}`}>
                  <AppCard
                    title={project.name}
                    repo={project.html_url}
                    img={`${portfolioImages[index % portfolioImages.length]}`}
                  />
                </Col>
              );
            })}
        </Row>
        <Image
          className={`${popped ? "" : "Animated-btn"} mb-5`}
          src={Img}
          style={{
            width: "500px",
            height: "500px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
      </>
    </CSSTransition>
  );
}

export default AnimatedCard;
