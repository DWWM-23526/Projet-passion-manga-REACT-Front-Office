import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import "./detailsImg.scss";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const DetailsImg = ({ image }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="image-container">
      {loading && (
        <div className="loader-container">
          <GridLoader
            color="#c5c5c5"
            margin={20}
            size={25}
            speedMultiplier={1}
          />
        </div>
      )}
      <Card className="border-0 shadow-sm">
        <Card.Img
          variant="top"
          src={image}
          alt="Image de couverture"
          className="rounded details-image"
          style={{ display: loading ? "none" : "block" }}
        />
      </Card>
    </div>
  );
};
DetailsImg.propTypes = {
  image: PropTypes.string.isRequired,
};

export default DetailsImg;
