import { Col, Container, Row } from "react-bootstrap";
import { cardData } from "../../../../data/cardData";

import Cards from "../../shared/components/Card/Card";
import Header from "../../core/layout/header/Header";
const TagsMangaScreen = () => {
  let mangas = cardData;

  const mangaList = mangas.map((manga) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="d-flex justify-content-evenly size-col"
      key={manga.id}
    >
      <Cards
        title={manga.title}
        imageUrl={manga.imgSrc}
        url={"/manga/" + manga.id}
      />
    </Col>
  ));

  return (
    <>
      <Header title="MANGA" />
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default TagsMangaScreen;
