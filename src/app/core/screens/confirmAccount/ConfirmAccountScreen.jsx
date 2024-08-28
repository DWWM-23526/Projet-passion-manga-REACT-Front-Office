import { useParams } from "react-router-dom";
import { useFetch } from "../../../shared/hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";

const ConfirmAccountScreen = () => {
  const { token } = useParams();
  const { data } = useFetch(`/emailConfirm/decodeTokenToConfirmAccount/${token}`);
  console.log(data);
  return (
    <Container className="my-4">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
    </Container>
  );
};

export default ConfirmAccountScreen;
