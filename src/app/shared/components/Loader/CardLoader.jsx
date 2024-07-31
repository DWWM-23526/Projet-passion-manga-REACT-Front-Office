import { Card } from "react-bootstrap";
import { BarLoader, GridLoader } from "react-spinners";
import "./cardLoader.scss";

const CardLoader = () => {
  return (
    <Card className="cardLoader-style text-center">
      <Card.Body>
        <GridLoader
          color="#c5c5c5"
          margin={20}
          size={25}
          speedMultiplier={1}
          width={5}
          className="mt-4"
        />
        <Card.Title className="d-flex justify-content-center">
          <BarLoader
            color="#c5c5c5"
            height={10}
            speedMultiplier={0.8}
            width={150}
            className="mt-5"
          />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default CardLoader;
