import { Col, Container, Row } from "react-bootstrap";
import { cardData } from "./../../../../data/cardData";

import Cards from "./../../shared/components/Card/Card";
import Header from "./../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { useState } from "react";

const MangaScreen = () => {
  const [filteredMangas, setFilteredMangas] = useState(cardData);

  const handleSearch = (searchTerm) => {
    const filtered = cardData.filter((manga) =>
      manga.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMangas(filtered);
  };

  const mangaList = filteredMangas.map((manga) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="d-flex justify-content-evenly"
      key={manga.id}
    >
      <Cards
        title={manga.title}
        imageUrl={manga.imgSrc}
        id={manga.id}
        url={`/manga/${manga.id}`}
      />
    </Col>
  ));

  return (
    <>
      <Header title="MANGA" />
      <SearchBar onSearch={handleSearch} />
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default MangaScreen;
