import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { useEffect } from "react";

const ConfirmAccountScreen = () => {
  const { token } = useParams();
  const { setTitle } = useApp();

  useEffect(() => {
    if (token) {
      setTitle("Merci pour la création de votre compte !");
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api-passion-manga/api/emailConfirm/decodeTokenToConfirmAccount/${token}`
        );
        await response.json();
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="my-4">
      <Row className="justify-content-center p-5">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Button className="mt-5 btn-dark">
            <Link
              to="/"
              className="text-white text-decoration-none fw-semibold"
            >
              Revenir a l&apos;accueil
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmAccountScreen;
