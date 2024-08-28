import { useParams } from "react-router-dom";
import { useFetch } from "../shared/hooks/useFetch";
import { useApp } from "../core/hooks/useApp";
import { Col, Container, Row } from "react-bootstrap";

import ImgMangaka from "./../../assets/img/hirohiko_araki.jpg";
import ImgManga from "./../../assets/img/naruto1.jpg";
import DetailsImg from "../shared/components/DetailsImg/DetailsImg";
import DetailsBody from "../shared/components/DetailsBody/DetailsBody";
import { useEffect } from "react";

const DetailsScreen = () => {
  const { id, type } = useParams();
  const { data } = useFetch(`/${type}/${id}`);
  const { setTitle } = useApp();
  
  useEffect(() => {
    if (data) {
      setTitle(type === "manga" ? data.manga_name : `${data.first_name} ${data.last_name}`);
    }
  }, [data, type, setTitle]);
  console.log(data);
  

  const image = type === "manga" ? ImgManga : ImgMangaka;

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
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
