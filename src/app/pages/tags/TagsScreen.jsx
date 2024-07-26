// import { Col, Container, Row } from "react-bootstrap";
// import { tagsData } from "../../../../data/TagsData";
// import Header from "../../core/layout/header/Header";
// import Cards from "../../shared/components/Card/Card";
// import SearchBar from "../../shared/components/Searchbar/SearchBar";

import { useEffect, useState } from "react";
import {useTag} from "../../shared/hooks/useTag";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/genre-image.webp";
import Header from "../../core/layout/header/Header";
import SearchBar from "../../shared/components/Searchbar/SearchBar";

const TagsScreen = () => {
  const { data
    // , loading, error
   } = useTag();
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

  // if (loading) return <p>Loading</p>;
  // if (error) return <p>Error: {error.message}</p>;

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
