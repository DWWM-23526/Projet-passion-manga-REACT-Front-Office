import { Card, Col } from "react-bootstrap";

import "./cards.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({ title, imageUrl }) => {
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3} xl={3}
      className="d-flex justify-content-evenly">
        <Card
          style={{ width: "14rem" }}
          className="cardStyle text-decoration-none mb-4"
          as={Link}
        >
          <Card.Img variant="top" src={imageUrl} className="card-img-top" />
          <Card.Body>
            <Card.Title className="text-center">{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Cards;
