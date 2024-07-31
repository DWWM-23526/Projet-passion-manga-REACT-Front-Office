import { Card } from "react-bootstrap";

import "./detailsImg.scss"

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

export default DetailsImg;