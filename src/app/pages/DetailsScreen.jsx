import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../shared/hooks/useFetch";
import { useApp } from "../core/hooks/useApp";
import { Button, Col, Container, Row } from "react-bootstrap";

import ImgMangaka from "./../../assets/img/hirohiko_araki.jpg";
import ImgManga from "./../../assets/img/naruto1.jpg";
import DetailsImg from "../shared/components/DetailsImg/DetailsImg";
import DetailsBody from "../shared/components/DetailsBody/DetailsBody";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const DetailsScreen = () => {
  const { id, type } = useParams();
  const { data } = useFetch(`/${type}/${id}`);
  const { setTitle } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setTitle(
        type === "manga"
          ? data.manga_name
          : `${data.first_name} ${data.last_name}`
      );
    }
  }, [data, type, setTitle]);

  const image = type === "manga" ? ImgManga : ImgMangaka;

  return (
    <Container className="my-4">
      <Button
        variant="link"
        onClick={() => navigate(-1)}
        className=" text-decoration-none"
      >
        <FaArrowLeft size={30} />
      </Button>
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <DetailsImg image={image} />
        </Col>
        <Col xs={12} md={6}>
          <DetailsBody data={data} type={type} />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsScreen;
