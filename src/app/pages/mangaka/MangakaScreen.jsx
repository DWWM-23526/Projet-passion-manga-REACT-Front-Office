/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "../../shared/hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/hirohiko_araki.jpg";

// import SearchBar from "../../shared/components/Searchbar/SearchBar";

const MangakaScreen = () => {
  const { data } = useFetch("/mangaka");


  const mangakaList = data.map((mangaka) => (
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
      {/* <SearchBar onSearch={handleSearch} /> */}
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangakaList}</Row>
      </Container>
    </>
  );
};

export default MangakaScreen;
