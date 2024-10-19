import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

// Wrapping the component in forwardRef
const AppCard = ({ title, repo, img }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  return (
    <CSSTransition
      in={inView} // Trigger the transition when in view
      timeout={2000}
      classNames="fade"
      appear={true}
    >
      <Card ref={ref} style={{ height: "300px" }} className="shadow-sm">
        <Card.Img
          variant="top"
          className="img-fluid"
          style={{ minHeight: "200px", maxHeight: "200px", objectFit: "cover" }}
          src={img}
          alt={`Preview of ${title}`}
        />
        <Card.Body>
          <Card.Title className="text-center fs-6 fs-lg-4 mb-3 text-capitalize">
            {title}
          </Card.Title>
          <Row style={{ height: "40px" }} className="justify-content-around">
            <Link
              className="btn-outline-primary btn col-5 h-100"
              to={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </Link>
            <Link
              className="btn-outline-danger btn col-5 h-100"
              to={`https://bawkh.github.io/${title}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </CSSTransition>
  );
};

export default AppCard;
