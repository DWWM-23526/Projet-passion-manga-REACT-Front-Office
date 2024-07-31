import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import "./detailsImg.scss";

const DetailsImg = ({ image }) => (
  <Card className="border-0 shadow-sm">
    <Card.Img
      variant="top"
      src={image}
      alt="Image de couverture"
      className="rounded details-image"
    />
  </Card>
);
DetailsImg.propTypes = {
  image: PropTypes.object.isRequired,
};

export default DetailsImg;
