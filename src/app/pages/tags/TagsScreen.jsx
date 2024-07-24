import { Col, Container, Row } from "react-bootstrap";
import { tagsData } from "../../../../data/TagsData";
import Header from "../../core/layout/header/Header";
import Cards from "../../shared/components/Card/Card";
import SearchBar from "../../shared/components/Searchbar/SearchBar";

const TagsScreen = () => {
  let tags = tagsData;

  const mangaList = tags.map((tag) => (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} className="d-flex justify-content-evenly" key={tag.id}>
      <Cards title={tag.title} imageUrl={tag.imgSrc} url={'/tags/' + tag.id} />
    </Col>
  ));

  return (
    <>
      <Header title="MANGA" />
      <SearchBar/>
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{mangaList}</Row>
      </Container>
    </>
  );
};

export default TagsScreen;
