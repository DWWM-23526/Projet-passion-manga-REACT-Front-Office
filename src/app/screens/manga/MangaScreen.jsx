import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";

import { cardData } from "./../../shared/components/Card/cardData";
import Header from "../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { useState } from "react";

const MangaScreen = () => {
  const [filteredMangas, setFilteredManags] = useState(cardData);

  function handleSearch(searchTerm) {
    const filtered = cardData.filter((manga) => 
    manga.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredManags(filtered);
  }

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
      <Cards title={manga.title} imageUrl={manga.imgSrc} id={manga.id}/>
    </Col>
  ));

  return (
    <>
      <Header title="MANGA"/>
        <SearchBar onSearch={handleSearch}/>
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default MangaScreen;
