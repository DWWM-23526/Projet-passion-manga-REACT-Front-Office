import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/naruto1.jpg";
import Header from "../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { useEffect, useState } from "react";
import { useFetchData } from "../../shared/hooks/useFetchData";

const MangaScreen = () => {
  const {data} = useFetchData("/manga");
  

  const [filteredMangas, setFilteredMangas] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredMangas(data);
    }
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((manga) =>
      manga.manga_name.toLowerCase().includes(searchTerm.toLowerCase())
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
      className="d-flex justify-content-evenly size-col"
      key={manga.Id_manga}
    >
      <Cards
        title={manga.manga_name}
        imageUrl={defaultImg}
        url={`/manga/${manga.Id_manga}`}
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
