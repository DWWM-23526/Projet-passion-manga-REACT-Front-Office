import { Col, Container, Row } from "react-bootstrap";
import { useFetch } from "../../shared/hooks/useFetch";
import { useParams } from "react-router-dom";

import Cards from "../../shared/components/Card/Card";

import defaultImg from "../../../assets/img/naruto1.jpg";


const TagsMangaScreen = () => {
  const { idTag } = useParams();
  const { data } = useFetch(`/tags/manga/${idTag}`);


  const mangaList = data.map((manga) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-evenly size-col" key={manga.Id_manga}>
      <Cards title={manga.manga_name} imageUrl={defaultImg} url={`/manga/${manga.Id_manga}`} />
    </Col>
  ));

  return (
    <>
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default TagsMangaScreen;
