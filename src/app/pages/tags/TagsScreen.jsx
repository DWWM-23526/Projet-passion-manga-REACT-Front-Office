import { useFetch } from "../../shared/hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/genre-image.webp";
// import SearchBar from "../../shared/components/Searchbar/SearchBar";



const TagsScreen = () => {
 
  const { data } = useFetch("/tags");

  const tagList = data.map((tag) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="d-flex justify-content-evenly size-col"
      key={tag.tag_name}
    >
      <Cards
        title={tag.tag_name}
        imageUrl={defaultImg}
        url={`/tags/${tag.Id_tag}`}
      />
    </Col>
  ));

  return (
    <>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{tagList}</Row>
      </Container>
    </>
  );
};

export default TagsScreen;
