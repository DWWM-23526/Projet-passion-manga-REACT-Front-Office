/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/hirohiko_araki.jpg";
import Header from "../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { useFetchData } from "../../shared/hooks/useFetchData";

const MangakaScreen = () => {
  const {data} = useFetchData("/mangaka");
  const [filteredMangakas, setFilteredMangakas] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredMangakas(data);
    }
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((mangaka) =>
      (
        mangaka.first_name.toLowerCase() + mangaka.last_name.toLowerCase()
      ).includes(searchTerm.toLowerCase())
    );
    setFilteredMangakas(filtered);
  };

  const mangakaList = filteredMangakas.map((mangaka) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="d-flex justify-content-evenly size-col"
      key={mangaka.Id_mangaka}
    >
      <Cards
        title={mangaka.first_name + " " + mangaka.last_name}
        imageUrl={defaultImg}
        url={`/mangaka/${mangaka.Id_mangaka}`}
      />
    </Col>
  ));

  return (
    <>
      <Header title="MANGAKA" />
      <SearchBar onSearch={handleSearch} />
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangakaList}</Row>
      </Container>
    </>
  );
};

export default MangakaScreen;
