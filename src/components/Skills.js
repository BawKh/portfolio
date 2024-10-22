import { useEffect, useMemo, useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  const progressBarRefs = useRef([]);
  const [isMd, setIsMd] = useState(true);
  let skills = useMemo(
    () => [
      { skill: "HTML", progress: 90, color: "primary" }, // Blue
      { skill: "CSS", progress: 85, color: "success" }, // Green
      { skill: "JavaScript", progress: 80, color: "warning" }, // Yellow
      { skill: "React", progress: 75, color: "info" }, // Light Blue
      { skill: "Redux Toolkit", progress: 70, color: "secondary" }, // Grey
      { skill: "Bootstrap", progress: 80, color: "primary" }, // Blue
      { skill: "Git", progress: 75, color: "danger" }, // Red
      { skill: "GitHub", progress: 75, color: "dark" }, // Dark Grey
      { skill: "Teamwork", progress: 85, color: "success" }, // Green
      { skill: "Leadership", progress: 80, color: "warning" }, // Yellow
      { skill: "English", progress: 75, color: "info" }, // Light Blue
      { skill: "Arabic", progress: 100, color: "primary" }, // Blue
    ],
    []
  );

  const [Progress, setProgress] = useState(skills.map(() => 0));
  useEffect(() => {
    const anime = async () => {
      //   console.log(
      //     progressBarRefs.current[0].children[0].getAttribute("aria-valuenow")
      //   );

      document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".animated-element");
        if (elements[0].classList.contains("visible")) {
          const arr = skills.map((el, index) => el.progress);
          setProgress(arr);
        }
        const scrollPosition = window.scrollY;
        elements.forEach((el) => {
          if (scrollPosition > 800) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
            setProgress(skills.map(() => 0));
          }
        });
      });
    };

    anime();
  }, [skills]);

  useEffect(() => {
    const checkPageSize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsMd(false);
      } else {
        setIsMd(true);
      }
    };

    checkPageSize();
    window.addEventListener("resize", checkPageSize);

    return () => window.removeEventListener("resize", checkPageSize);
  }, []);

  return (
    <Container
      id="Skills"
      className="py-5 my-5"
      style={{ height: "auto", overflow: "hidden" }}
    >
      <h2 className="text-center mb-2 fs-1">Skills</h2>
      <div className="text-center text-secondary mb-2 .agdasima-regular">
        That What I’m Good At.
      </div>
      <Row
        className="justify-content-center mt-3"
        style={{ columnGap: "20px", rowGap: `${isMd === false && "20px"}` }}
      >
        {skills.map((el, index) => {
          return (
            <Col
              key={index}
              md="5"
              className={`animated-element ${
                index % 2 === 0 ? "animated-element-l" : "animated-element-r"
              }`}
              style={{
                height: "50px",
                borderRadius: "5px",
                direction: `${index % 2 === 0 && "rtl"}`,
                marginBottom: `${isMd ? index % 2 === 0 && "50px" : "0"}`,
                marginTop: `${isMd ? index % 2 === 1 && "50px" : "0"}`,
              }}
            >
              <Row className="align-items-center position-relative h-100 w-100">
                <div className="text-center fw-bold  text-light col-2">
                  {el.skill}
                </div>
                <ProgressBar
                  ref={(el) => (progressBarRefs.current[index] = el)}
                  now={Progress[index]}
                  variant={el.color}
                  label={`${Progress[index]}%`}
                  className={`position-absolute progressBar  left-0 top-0 h-100 ${
                    isMd ? "w-100" : "w-75"
                  } p-0`}
                  style={{
                    zIndex: "-1",
                    backgroundColor: "var(--bs-gray-400)",
                    // width: "600px",
                    textWrap: "nowrap",
                  }}
                />
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Skills;
