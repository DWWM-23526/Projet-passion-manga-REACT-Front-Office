import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./searchbar.scss";
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form.Control
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search..."
          className="form-control my-5 text-center searchBar"
        />
      </Container>
    </>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
