
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/genre-image.webp";
import Header from "../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";
import { useFetchData } from "../../shared/hooks/useFetchData";

const TagsScreen = () => {
  const { data
   } = useFetchData();
  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredTags(data);
    }
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((tag) =>
      tag.tag_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTags(filtered);
  };

  const tagList = filteredTags.map((tag) => (
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
      <Header title="GENRE" />
      <SearchBar onSearch={handleSearch} />
      <Container className="d-flex text-center">
        <Row className="g-3 mt-3">{tagList}</Row>
      </Container>
    </>
  );
};

export default TagsScreen;
