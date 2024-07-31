import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./cards.scss";

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
Cards.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Cards;
