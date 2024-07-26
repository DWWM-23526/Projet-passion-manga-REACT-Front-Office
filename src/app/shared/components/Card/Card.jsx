import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cards.scss";

// eslint-disable-next-line react/prop-types
const Cards = ({ title, imageUrl, url }) => {
  return (
    <Card className="card-style text-decoration-none mb-4">
      <Link to={url} className="text-decoration-none">
        <Card.Img variant="top" src={imageUrl} className="card-img-top" />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Cards;