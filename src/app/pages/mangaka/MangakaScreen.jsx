import { Col, Container, Row } from "react-bootstrap";
import { mangakasData } from "../../../../data/mangakas";

import Header from "../../core/layout/header/Header";
import Cards from "../../shared/components/Card/Card";
import SearchBar from "../../shared/components/Searchbar/SearchBar";

const MangakaScreen = () => {
  let mangakas = mangakasData;

  const mangaList = mangakas.map((mangaka) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="d-flex justify-content-evenly"
      key={mangaka.id}
    >
      <Cards
        title={mangaka.title}
        imageUrl={mangaka.imgSrc}
        url={`/mangaka/${mangaka.id}`}
      />
    </Col>
  ));

  return (
    <>
      <Header title="MANGAKA" />
      <SearchBar />
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default MangakaScreen;
