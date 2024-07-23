import { Col, Container, Row } from "react-bootstrap";
import Cards from "../shared/components/Card/Card";
import { cardData } from "../../../data/cardData";

const FavoriteScreen = () => {
  let mangas = cardData;

  const mangaList = mangas.map((manga) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-evenly" key={manga.id}>
      <Cards title={manga.title} imageUrl={manga.imgSrc} id={manga.id} />
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

export default FavoriteScreen;
