import { Card } from "react-bootstrap";

import "./cards.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({ title, imageUrl, id }) => {
  return (
    <>
      <Card className="cardStyle text-decoration-none mb-4" as={Link} to={`/manga/${id}`}>
        <Card.Img variant="top" src={imageUrl} className="card-img-top" />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
